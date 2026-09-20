import { createWorker } from "tesseract.js";

import fs from "node:fs/promises";
import path from "node:path";

import {
    definePDFJSModule,
    createIsomorphicCanvasFactory,
    extractText,
    getDocumentProxy,
    renderPageAsImage,
} from "unpdf";

await definePDFJSModule(
    () => import("pdfjs-dist/legacy/build/pdf.mjs")
);


/* ============================================================
 * PDF
 * ============================================================
 */

async function loadPdf(pdfPath) {
    const absolutePath = path.resolve(pdfPath);

    console.log(`[Read] Loading PDF from: ${absolutePath}`);

    const buffer = await fs.readFile(absolutePath);

    const data = new Uint8Array(
        buffer.buffer,
        buffer.byteOffset,
        buffer.byteLength
    );

    const canvasImport = () =>
        import("@napi-rs/canvas");

    const CanvasFactory =
        await createIsomorphicCanvasFactory(
            canvasImport
        );

    const pdf = await getDocumentProxy(data, {
        CanvasFactory,

        disableFontFace: true,
        useSystemFonts: true,
        stopAtErrors: false,
        isEvalSupported: false,
    });

    return pdf;
}


/* ============================================================
 * TEXT EXTRACTION
 * ============================================================
 */

async function extractPdfText(pdf) {
    console.log(
        "[Text] Extracting embedded PDF text..."
    );

    const result = await extractText(pdf, {
        mergePages: false,
    });

    const pages = Array.isArray(result.text)
        ? result.text
        : [result.text];

    return {
        pages,
        totalPages: result.totalPages,
    };
}


/* ============================================================
 * TEXT CLEANING
 * ============================================================
 */

function cleanText(text) {
    return String(text ?? "")
        .replace(/\r\n/g, "\n")
        .replace(/\r/g, "\n")
        .trim();
}


/* ============================================================
 * DETECT WHETHER PAGE HAS REAL TEXT
 * ============================================================
 */

function hasUsefulText(text) {
    if (!text) {
        return false;
    }

    /*
     * Ignore pages containing only whitespace or
     * a tiny amount of extracted garbage.
     */
    const normalized = text
        .replace(/\s+/g, " ")
        .trim();

    return normalized.length >= 50;
}


/* ============================================================
 * RENDER PAGE
 * ============================================================
 */

async function renderPage(
    pdf,
    pageNumber,
    outputPath
) {
    const canvasImport = () =>
        import("@napi-rs/canvas");

    try {
        console.log(
            `  -> Rendering page ${pageNumber}...`
        );

        const image =
            await renderPageAsImage(
                pdf,
                pageNumber,
                {
                    canvasImport,
                    scale: 2,
                    toDataURL: false,
                }
            );

        await fs.writeFile(
            outputPath,
            Buffer.from(image)
        );

        return true;
    } catch (error) {
        console.warn(
            `  -> Rendering failed for page ${pageNumber}`
        );

        console.warn(
            `  -> ${error?.message ?? error}`
        );

        return false;
    }
}


/* ============================================================
 * OCR
 * ============================================================
 */

async function recognizeImage(
    worker,
    imagePath
) {
    try {
        const result =
            await worker.recognize(
                imagePath
            );

        return cleanText(
            result?.data?.text ?? ""
        );
    } catch (error) {
        console.warn(
            `  -> OCR failed: ${
                error?.message ?? error
            }`
        );

        return "";
    }
}


/* ============================================================
 * MARKDOWN
 * ============================================================
 */

function createMarkdownHeader(totalPages) {
    return [
        "# PDF Document",
        "",
        `> Pages: ${totalPages}`,
        "",
        "---",
        "",
    ].join("\n");
}


/* ============================================================
 * MAIN
 * ============================================================
 */

export async function transformPdfToMarkdown(
    pdfPath,
    outputMarkdownPath = "./output/document.md"
) {
    console.log(
        `[1/4] Loading PDF: ${pdfPath}`
    );

    const pdf =
        await loadPdf(pdfPath);

    console.log(
        `PDF loaded successfully: ${pdf.numPages} pages`
    );


    /* ---------------------------------------------------------
     * Extract text
     * ---------------------------------------------------------
     */

    console.log(
        "[2/4] Extracting embedded text..."
    );

    const {
        pages: embeddedTextPages,
        totalPages,
    } = await extractPdfText(pdf);


    /* ---------------------------------------------------------
     * Output directories
     * ---------------------------------------------------------
     */

    const absoluteMarkdownPath =
        path.resolve(outputMarkdownPath);

    const outputDir =
        path.dirname(
            absoluteMarkdownPath
        );

    const imagesDir =
        path.join(
            outputDir,
            "images"
        );

    await fs.mkdir(
        imagesDir,
        {
            recursive: true,
        }
    );


    /* ---------------------------------------------------------
     * Markdown
     * ---------------------------------------------------------
     */

    const markdown = [];

    markdown.push(
        createMarkdownHeader(
            totalPages
        )
    );


    /* ---------------------------------------------------------
     * Tesseract
     *
     * Don't initialize it until we actually need OCR.
     * ---------------------------------------------------------
     */

    let worker = null;

    try {
        for (
            let pageNumber = 1;
            pageNumber <= totalPages;
            pageNumber++
        ) {
            console.log(
                `\nProcessing page ${pageNumber}/${totalPages}...`
            );


            /* -------------------------------------------------
             * Embedded text
             * -------------------------------------------------
             */

            const embeddedText =
                cleanText(
                    embeddedTextPages[
                        pageNumber - 1
                    ] ?? ""
                );


            /* -------------------------------------------------
             * Determine whether OCR is needed
             * -------------------------------------------------
             */

            let pageText =
                embeddedText;

            let imageCreated = false;

            if (
                hasUsefulText(
                    embeddedText
                )
            ) {
                console.log(
                    "  -> Embedded text detected"
                );

                console.log(
                    "  -> Skipping rendering/OCR"
                );
            } else {
                console.log(
                    "  -> Little or no embedded text"
                );

                console.log(
                    "  -> Rendering page for OCR..."
                );


                /* ---------------------------------------------
                 * Render
                 * ---------------------------------------------
                 */

                const imageFilename =
                    `page-${pageNumber}.png`;

                const imagePath =
                    path.join(
                        imagesDir,
                        imageFilename
                    );

                imageCreated =
                    await renderPage(
                        pdf,
                        pageNumber,
                        imagePath
                    );


                /* ---------------------------------------------
                 * OCR
                 * ---------------------------------------------
                 */

                if (imageCreated) {
                    console.log(
                        "  -> Running Tesseract OCR..."
                    );

                    if (!worker) {
                        console.log(
                            "  -> Initializing Tesseract..."
                        );

                        worker =
                            await createWorker(
                                "eng"
                            );
                    }

                    const ocrText =
                        await recognizeImage(
                            worker,
                            imagePath
                        );

                    if (ocrText) {
                        pageText =
                            ocrText;
                    }
                }
            }


            /* -------------------------------------------------
             * Markdown page
             * -------------------------------------------------
             */

            markdown.push(
                `## Page ${pageNumber}`
            );

            markdown.push("");


            /*
             * Only add the image if one actually exists.
             */
            if (imageCreated) {
                markdown.push(
                    `![Page ${pageNumber}](./images/page-${pageNumber}.png)`
                );

                markdown.push("");
            }


            markdown.push(
                "### Extracted Content"
            );

            markdown.push("");

            markdown.push(
                pageText ||
                "_No text detected._"
            );

            markdown.push("");

            markdown.push("---");

            markdown.push("");
        }
    } finally {
        if (worker) {
            console.log(
                "\nStopping Tesseract..."
            );

            await worker.terminate();
        }
    }


    /* ---------------------------------------------------------
     * Write Markdown
     * ---------------------------------------------------------
     */

    console.log(
        "[4/4] Writing Markdown..."
    );

    const finalMarkdown =
        markdown.join("\n");

    await fs.writeFile(
        absoluteMarkdownPath,
        finalMarkdown,
        "utf8"
    );


    console.log(
        `\nDone!\nOutput: ${absoluteMarkdownPath}`
    );

    return absoluteMarkdownPath;
}


/* ============================================================
 * CLI
 * ============================================================
 */

const pdfPath =
    process.argv[2] ??
    "./paper.pdf";

const outputPath =
    process.argv[3] ??
    "./output/document.md";


transformPdfToMarkdown(
    pdfPath,
    outputPath
).catch((error) => {
    console.error(
        "\nPDF processing failed:\n"
    );

    console.error(error);

    process.exitCode = 1;
});