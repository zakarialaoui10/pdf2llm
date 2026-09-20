# PDF Document

> Pages: 6

---

## Page 1

### Extracted Content

Intelligent Control and Automation, 2012, 3, 413-418
http://dx.doi.org/10.4236/ica.2012.34045 Published Online November 2012 (http://www.SciRP.org/journal/ica)
A Reward Functional to Solve the Replacement Problem
Eva Selene Hernández Gress, Oscar Montaño Arango, José Ramón Corona Armenta,
Antonio Oswaldo Ortega Reyes
Academic Area of Engineering, Autonomous University of Hidalgo, Pachuca, México
Email: evah@uaeh.edu.mx
Received May 5, 2012; revised August 22, 2012; accepted August 30, 2012
ABSTRACT
The replacement problem can be modeled as a finite, irreducible, homogeneous Markov Chain. In our proposal the pro-
blem was modeled using a Markov decision process and then, the instance was optimized using dynamic programming.
We proposed a new functional that includes a reward functional, that can be more helpful in processing industries be-
cause it considerate instances like incomes, maintenance costs, fixed costs to replace equipment, purchase price and
salvage values; and this functional can be solved with dynamic programming and used to make effective decisions. Two
theorems are proved related with this new functional. A numerical example is presented in order to demonstrate the
utility of this proposal.
Keywords: Markov Chains; Dynamic Programming; Replacement Problem
1. Introduction
The machine replacement problem has been studied by a
lot of researchers and is also an important topic in opera-
tions research, industrial engineering and management
science. Items which are under constant usage, need re-
placement at an appropriate time as the efficiency of the
operating system that uses such items suffer a lot. In this
proposal we include a reward functional, that is more
helpful in processing industries because it considerate
instances like incomes, maintenance costs, fixed costs to
replace equipment, purchase price and salvage values;
and this functional can be solved with dynamic pro-
gramming and used to make effective decisions.
In the real-world the equipment replacement problem
involves the selection of two or more machines of one or
more types from a set of several possible alternative ma-
chines with different capacities, cost of purchase and
operation to produce efficiently. When the problem in-
volves a single machine, it is common to find two well-
defined forms of this; the quantity-based replacement,
and the time-based replacement. In the quantity-based re-
placement model, a machine is replaced when an accu-
mulated product of size q is produced. In this model, one
has to determine the optimal production size q. While in
a time-based replacement model, a machine is replaced
in every period of T with a profit maximizing.
When the problem involves two or more machines this
problem is named the parallel machine replacement pro-
blem, and the time-based replacement model consists of
finding a minimum cost replacement policy for a finite
population of economically interdependent machines.
A replacement policy is a specification of “keep” or
“replace” actions, one for each period. Two simple ex-
amples are the policy of replacing the equipment every
time period and the policy of keeping the first machine
until the end of a period N. An optimal policy is a policy
that achieves the smallest total net cost of ownership over
the entire planning horizon and it has the property that
whatever the initial state and initial decision are, the re-
maining decisions must constitute an optimal policy with
regard the state resulting from the first decision. In prac-
tice, the replacement problem can be easily addressed
using dynamic programming and Markov decision proc-
esses.
The dynamic programming uses the following idea:
The system is observed over a finite or infinite horizon
split up into periods or stages. At each stage the system is
observed and a decision or action concerning the system
has to be made. The decision influences (deterministical-
ly or o stochastically) the state to be observed at the next
stage, and depending on the state and the decision made,
an immediate reward is gained. The expected total re-
wards from the present stage and the one of the following
state is expressed by the functional equation. Optimal
decisions depending on stage and state are determined
backwards step by step as those maximizing the right
hand side of the functional equation [1]. Howard [2]
combines the dynamic programming technique with the
mathematically well established notion of a Markov
chain, creating the new concept called the Markov Deci-
sion processes and developing the solution of infinite
Copyright © 2012 SciRes. ICA

---

## Page 2

### Extracted Content

E. S. H. GRESS ET AL.414
stage problems. The policy iteration method was created
as an alternative to the stepwise backward contraction
methods. The policy iteration was a result of the applica-
tion of the Markov chain environment and it was an im-
portant contribution to the development of optimization
techniques [1].
In this document, a stochastic machine replacement
model is considered. The system consists of a single
machine and this is assumed to operate continuously and
efficiently over N periods. In each period, the quality of
the machine deteriorates due to its use, and therefore, it
can be in any of the N states, denoted 1, 2, ···, N. In our
proposal we modeled the problem using a Markov deci-
sion process and then, the instance is optimized using
dynamic programming. We propose a new functional
that includes a reward function, also helpful information
as incomes, maintenance costs, fixed costs to replace
equipment, purchase price and salvage values. Two
theorems are proved related with this new functional.
In this proposal is assumed that for each new machine
it state can become worse or may stay unchanged, and
that the transition probabilities pij are known, where
next state will be curr
0, if
ijp P j
j i

 
ent state is i
also be assumed that the state of the machine is known at
the start of each period, and we must choose one of the
following two options: a) Let the machine operate one
more period in the state it currently is, b) Replace the
machine by a new one, where every new machines for
replacement are assumed to be identical.
2. Literature Review
There are several theoretical models for determining the
optimal replacement policy. The basic model considers
maintenance cost and resale value, which have their
standard behavior as per the same cost during earlier pe-
riod and also partly having an exponential grown pa-
ttern as per passage of time. Similarly the scrap value for
the item under usage can be considered to have a similar
type of recurrent behavior. In relation to stochastic mod-
els the available literature on discrete time maintenance
models predominantly treats an equipment deterioration
process as a Markov chain.
Sernik and Marcus [3], obtained the optimal policy
and its associated cost for the two-dimensional Markov
replacement problem with partial observations. They
demonstrated that in the infinite horizon, the optimal
discounted cost function is piecewise linear, and also
provide formulas for computing the cost and the policy.
In [4], the authors assume that the deterioration of the
machine is not a discrete process but it can be modeled as
a continuous time Markov process, therefore, the only
way to improve the quality is by replacing the machine
by one new. They derive some stability conditions of the
system under a simple class of real-time scheduling/re-
placement policy.
Some models are approached to evaluate the inspect-
tion intervals for a phased deterioration monitored com-
plex components in a system with severe down time
costs using a Markov model (see [5], for example).
In [6], the problem is approached from the perspective
of the reliability engineering developing replacement
strategies based on predictive maintenance. Moreover in
[7] the authors formulated a stochastic version of the
parallel machine replacement problem. They analyzed
the structure of optimal policies under general classes of
replacement cost functions.
Another important approach that has received the
problem is the geometric programming [8]. In its pro-
posal, the author discusses the application of this tech-
nique to solving replacement problem with an infinite
horizon and under certain circumstances he obtains a
closed-form solution to the optimization problem.
A treatment to the problem when there are budget
constraints can be found in [9]. In their work, the authors
propose a dual heuristic for dealing with large, realisti-
cally sized problems through the initial relaxation of
budget constraints.
Compared with simulation techniques, Dohi et al. [10],
propose a technique based on obtaining the first two
moments of the discounted cost distribution, and then,
they approximate the underlying distribution function by
three theoretical distributions using Monte Carlo simula-
tion.
The most important pioneers in applying dynamic
programming models in replacement problems are:
Bellman [11], White [12], Davidson [13], Walker [14]
and Bertsekas [15]. Recently the Markov decision proc-
ess has been applied successfully to the animal replace-
ment problem as a productive unit (see [16-18], for ex-
ample).
Although the modeling and optimization of the re-
placement problem using Markov decision processes is a
topic widely known [19]. However, there is a significant
amount about the theory of stochastic perturbation ma-
trices (see [20-23], and references therein). Considering
all the references, the problem is presented in the next
section.
3. Problem Formulation
We start by defining a discrete-time Markov decision
process with a finite state space Z states z1, z2, ···, zz
where, in each stage s = 1, 2, ··· the analyst should made
a decision d between ξ possible. Denote by z(n) = z and
d(n) = di the state and the decision made in stage n re-
spectively, then, the system moves at the next stage n + 1
Copyright © 2012 SciRes. ICA

---

## Page 3

### Extracted Content

E. S. H. GRESS ET AL. 415
in to the next state j with a know probability given by
   1k ,zjp P z n j z n   n kz d d   
k
zjr
1
zk k k
(1)
When the transition occurs, it is followed by the reward
and the payoff is given by
z zj zjj p r
 
 , , ,

at the state z after the decision dk is made.
For every policy 1 2 Zk k k
, 1, 2, ,z i Z 
 the corresponding
Markov chain is ergodic, then the steady state probabili-
ties of this chain are given by
 limz n
p P z n


   
and the problem is to find a policy
 for which the
expected payoff is
1
Z k
z z
z
p



  
  1 2Replace
(2)
is maximum. In this system, the time interval between
two transitions is called a stage.
An optimal policy is defined as a policy that maxi-
mizes (or minimizes) some predefined objective function.
The optimization technique (i.e. the method to obtain an
optimal policy) depends on the form of the objective
function and it can result in different alternative objective
function. The choice of criterion depends on whether the
planning horizon is finite or infinite [1].
In our proposal we consider a single machine and
regular times intervals whether it should be kept for an
additional period or it should be replaced by a new. By
the above, the state space is defined by
 Keep ,Z z z
  1
π ,
Z
i i
z
h r
 ,
and having observed the state, action should be taken
concerning the machine about to keep it for at least an
additional stage or to replace it at the end of the stage.
The economic returns from the system will depend on
its evolution and whether the machine is kept or replaced,
in this proposal this is represented by a reward depending
on state and action specified in advance. If the action
replace is taken, we assume that the replacement takes
place at the end of the stage at a known cost, the planning
horizon is unknown and it is regarded infinite, also, all
the stages are of equal length.
The optimal criterion used in this document is the
maximization of the expected average reward per unit of
time given by
 
 
 
πi
(3)
where
 is the limiting state probability under the pol-
icy.
Traditionally dynamic programming is recognized as a
method to solve complex problems based on their de-
composition in simpler models. By the way of operate,
this technique is applied in cases where problems have
optimal substructure.
The basic model contains two main elements: a) a dis-
crete dynamical system that evolves over time, b) a cost
function that is additive over time [15]. The system
evolves under the influence of pro decisions expressed
through state variables and has the form
 1 , , , 1, 2, , 1k k k k kx f x u w k N    (4)
where
k is the discretized time index.
xk is the state of the system and keep the past infor-
mation that is relevant to future optimization.
uk is the decision variable that must be choose in time
k.
wk is the decision random parameter (or noise).
N is the planning horizon.
And fk is a function that describes the system. The cost
function is additive because the cost of time k,
 , ,k kk kg x u w
   
1
0
, , ,
N
N N k k k k
k
g x g x u w


 
is accumulated over the time. The total
cost is
(5)
 ,N Ngwhere x
   
1
0
, ,
N
N N k k k k
k
g x g x u w


is the final cost in the end of the proc-
ess. Although, because the presence of wk, this cost is
generally a random variable and don’t have any sense to
optimize it as a punctual value, in this case, the expected
cost is used
 
  
 
 (6)
the expected value is applied over the join distribution of
the random variables involved in the process. The opti-
mization is over the decision variables u0, u1, ···, uN–1. In
turn, the random variables uk are selected with updated
information on the current state variable xk either exact or
approximate values. This section proposes to use the
methodology of dynamic programming to solve replace-
ment problem using a reward function constructed from
the functions of cost and incomes.
4. A Functional Associated with the Reward
In this section we presented the replacement problem as a
dynamic system that evolves certain laws that are in-
cluded in the transition probability matrices. In this case,
the cost function of the system in the state i is g(i) and
satisfies that
     1 2g g g Z   (7)
this means that the cost is state i is less than the cost in
Copyright © 2012 SciRes. ICA

---

## Page 4

### Extracted Content

E. S. H. GRESS ET AL.416
the state i + 1 and the state 1 corresponds to best equip-
ment condition, Z represents all the states in the system.
Generally, between each operation period the equipment
may worsen or remain unchanged. Then, for the stochas-
tic case the transition probabilities are
 next state will be curr
0, if
ijp P j
j i

 
ent state is i
  K p q s   
d
(8)
It is suppose that in the beginning of the next period,
the state of the equipment is known and the following
two decisions must be chosen: a) maintain the operation
of the equipment for a next period and b) repair the
equipment to take the state 1 at a cost R. Another impor-
tant hypothesis is that after the equipment is repaired, the
state 1 is guaranteed for at least one period, and in the
following periods, the equipment may be worsen ac-
cording to the transition probabilities pij.
Considering the above, the problem is to determine the
deterioration level (state) where the lower cost of repair-
ing the machine is obtained, therefore, the best benefits
in relation to the cost will be obtained in the future.
Although the ease of dynamic programming to repre-
sent the states is an advantage, it is also true that the
computational complexity increases when more possibi-
lities of the system are considerate. Our approach con-
sists of a reward functional that includes the expenses
and the benefits proportioned by the equipment with two
states (keep and replace), although more than two states
could be considerate.
Formally, the reward function is
   1d d
z zr g m s

    (9)
where zg represent the incomes obtained when the
process is the state z and the decision d is taken. Simi-
larly, the expression
      p q s   
1 replace
0 keep



1 m s K

   (10)
represents the outgoings made in the maintenance or the
replacement of the equipment, when the equipment
works s stages before its replacement. Here, m(s) repre-
sents the maintenance cost when the equipment is in the
stage s, K are the fixed costs to replace the equipment, p
is the purchase price of a new equipment and q(s) is the
rescue value when the equipment is in the stage s. The
constant γ is
  (11)
Suppose now that the costs are bounded and ξ is such
that
, fd
z
 or all andr z d
        
 
1
max 1
1 , 1, , ,
d
z d z
Z d
ij j
j
Then, using the Equation (9) the next functional is pro-
posed
s g m s K p q s
p f s z Z


 

     


  

 
f
(12)
to evaluate the expected reward of the process in all the
stages. If can be proved (see [15],) that in this approach
the discount factor β, 0 < β < 1, is used in order to ensure
that the reward obtained in the future will be less than the
reward obtained in the present. So, considerating the

policy
   

1
zf s
 (13) 

Let
   maxz zf s f s



 
*
for all 0z zf f s s

(14)
here, it is said that a policy is β-optimal.
 
        
 
1
max 1
1 , 1, , ,
d
z d z
Z d
ij j
j
Then, a policy is β-optimal is the reward β-discounted
is maximum for every initial value. This proposal could
be formalized in the following theorems
Theorem 4.1: The functional
s g m s K p q s
p f s z Z


 

     


  

 

f
fsatisfies the optimal value of z s

   
1
max 1 , 1, ,
Z
d d
z d z ij j
j
.
Proof: The proof is trivial. This approach is a variant
of the optimality equation proposed and demonstrated by
Ross [24], where the functional is written through the
reward function as
s p f s z Z
  
 
    
 
  . f
Theorem 4.2: Let
 a stationary policy, so if the
process is in the state z, the decision d is chosen in order
to maximize the function
      
 
1
1
1 , 1, , ,
d
z
Z d
ij j
j
g m s K p q s
p f s z Z


 
        


  

 
   zzfSo s f s
  for all s > 0, then f is a function β-
optimal.
Proof: Rewriting the functional of the Equation (11),
again we have a variant of the optimality equation of
Copyright © 2012 SciRes. ICA

---

## Page 5

### Extracted Content

E. S. H. GRESS ET AL. 417
Ross [24], that is demonstrated in this reference. 
5. Numerical Example
Consider a variation of the example reported in [2], the
incomes d
z are in Table 1.g
The Table 2 shows the transition probabilities reported
in [1], which represented a Markovian decision process
with d = {K, R}.
The maintenance costs are variable in every stage in-
creasing at a rate of 1%, the maintenance cost in the
stage s = 1 is m(1) = 10,000. The rescue value also
changes in every stage decreasing at a rate of 10%, for
the first stage is q(1) = 2000. In Table 3 are some main-
tenance costs and rescue values for the first 40 stages.
Table 1. Incomes, d
zg .
State/Action d = 1 (Keep) d = 2 (Replace)
z = 1 (low) 20,000 20,000
z = 2 (average) 22,000 22,000
z = 3 (high) 24,000 24,000
Table 2. Transition probabilities, d
zjp .
Action d = 1 (Keep) d = 2 (Replace)
State j = 1 (L) j = 2 (A) j = 3 (H) j = 1 (L) j = 2 (A) j = 3 (H)
z = 1 (L) 0.6000 0.3000 0.1000 0.3333 0.3333 0.3333
z = 2 (A) 0.2000 0.6000 0.2000 0.3333 0.3333 0.3333
z = 3 (H) 0.1000 0.3000 0.6000 0.3333 0.3333 0.3333
L: Low, A: Average, H: High.
Table 3. Maintenance costs, m(s) and rescue values.
s m(s) q(s)
1 10000.00 2000.00
2 10100.00 1818.18
3 10201.00 1652.89
4 10303.01 1502.63
5 10406.04 1366.03
6 10510.10 1241.84
7 10615.20 1128.95
8 10721.35 1026.32
9 10828.57 933.01
10 10936.85 848.20
12 11156.68 700.98
14 11380.93 579.32
20 12081.08 327.01
26 12824.32 184.59
30 13345.03 126.07
35 14025.76 78.28
40 14741.22 48.60
Equipment is K = 3000, and the purchase price of a
new equipment is p = 10,000. A discounted factor of β =
0.9 and a planning horizon of s = 40 are considered.
In the Table 4 are showed the iterations from the first
s = 40 stages. Note that from s = 1 to s = 25, the result is
replace in the state z = 1 and keep in the states z = 2, 3.
From s = 26 to s = 33, the result is replace in the states z
= 1, 2 and keep in the state z = 3. From s = 34, the deci-
sion is replace in the three states. These results are ob-
tained because the maintenance costs are increasing and
the rescue values are decreasing from one stage to an-
other.
6. Conclusions
For replacement problems with finite planning horizon,
dynamic programming has been the most widely used
technique; this is because using this technique because it
is possible to deduce the optimal solution naturally
through functional forms.
In our approach we explore the replacement problem
solved by dynamic programming and we propose a new
functional that includes a reward function, also helpful
information as incomes, maintenance costs, fixed costs to
replace equipment, purchase price and salvage values.
Two theorems are proved related with this new func-
Table 4. Numerical results.
Low Average High
s Reward Action* Reward Action* Reward Action*
1 10,000 1 12,000 1 14,000 1
2 19,800 1 22,700 1 25,600 1
3 29,082 2 32,229 1 35,534 1
4 37,556 2 40,731 1 44,204 1
5 45,113 2 48,305 1 51,842 1
6 51,820 2 55,027 1 58,587 1
7 57,759 2 62,972 1 64,543 1
8 63,009 2 66,218 1 69,793 1
9 67,639 2 70,833 1 74,409 1
10 75,286 2 78,420 1 78,456 1
12 78,411 2 81,500 1 85,068 1
14 83,488 2 86,465 1 90,021 1
20 91,809 2 94,289 1 97,784 1
26 93,675 2 95,675 2 98,891 1
30 93,226 2 95,226 2 97,840 1
35 91,795 2 93,795 2 95,795 2
40 90,479 2 92,479 2 94,s479 2
*1 Keep, 2 Replace.
Copyright © 2012 SciRes. ICA

---

## Page 6

### Extracted Content

E. S. H. GRESS ET AL.
Copyright © 2012 SciRes. ICA
418
tional. Future work could be to include more decisions
(not only keep and replace), this decisions complicate the
solution but is more similar to real life. Other contribu-
tion could be increase the number of equipments, the
incomes and costs related to the replacement problem.
This model has been developed without considering a
specific kind of industry, but can be used in the process-
ing industry, now we are working to validate the model
in some processing industries in our region.
REFERENCES
[1] A. Kristensen, “Textbook Notes of Herd Management:
Dynamic Programming and Markov Process,” Dina No-
tat, 1996. http://www.husdyr.kvl.dk/ark/pdf/notat49.pdf
[2] R. A. Howard, “Dynamic Programming and Markov
Processes,” The MIT Press, Cambridge, 1960.
[3] E. L. Sernik and S. Marcus, “Optimal Cost and Policy for
Markovian Replacement Problem,” Journal of Optimiza-
tion Theory and Applications, Vol. 71, No. 1, 1991, pp.
105-126. doi:10.1007/BF00940042
[4] S. P. Sethi, G. Sorger and X. Zhou, “Stability of Real-
Time Lot Scheduling and Machine Replacement Policies
with Quality Levels,” IEEE Transactions on Automatic
Control, Vol. 45, No. 11, 2000, pp. 2193-2196.
doi:10.1109/9.887687
[5] J. D. Sherwin and B. Al-Najjar, “Practical Models for
Conditions-Based Monitoring Inspection Intervals,” Jour-
nal of Quality in Maintenance Engineering, Vol. 5, No. 3,
1999, pp. 203-209. doi:10.1108/13552519910282665
[6] E. Lewis, “Introduction to Reliability Theory,” Wiley,
Singapore City, 1987.
[7] S. Childress and P. Durango-Cohen, “On Parallel Ma-
chine Replacement Problems with General Replacement
Cost Functions and Stochastic Deterioration,” Naval Re-
search Logistics, Vol. 52, No. 5, 1999, pp. 402-419.
[8] T. Cheng, “Optimal Replacement of Ageing Equipment
Using Geometric Programming,” International Journal of
Production Research, Vol. 30, No. 9, 1999, pp. 2151-
2158. doi:10.1080/00207549208948142
[9] N. Karabakal, C. Bean and J. Lohman, “Solving Large
Replacement Problems with Budget Constraints,” The
Engineering Economist, Vol. 4, No. 5, 2000, pp. 290-308.
doi:10.1080/00137910008967554
[10] T. Dohi, et al., “A Simulation Study on the Discounted
Cost Distribution under Age Replacement Policy,” In-
dustrial Engineering and Management Sciences, Vol. 3,
No. 2, 2004, pp. 134-139.
[11] R. Bellman, “Equipment Replacement Policy,” Journal of
Society for Industrial and Applied Mathematics, Vol. 3,
No. 3, 1955, pp. 133-136.
[12] D. White, “Dynamic Programming,” Holden Day, San
Francisco, 1969.
[13] D. Davidson, “An Overhaul Policy for Deteriorating
Equipment,” In: A. Jardine, Ed., Operational Research in
Maintenance, Manchester University Press, New York,
1970, pp. 1-24.
[14] J. Walker, “Graphical Analysis for Machine Replace-
ment,” International Journal of Operations and Produc-
tion Management, Vol. 14, No. 10, 1992, pp. 54-63.
doi:10.1108/01443579410067252
[15] D. Bertsekas, “Dynamic Programming and Optimal Con-
trol,” Athena Scientific, Belmont, 2000.
[16] L. Plá, C. Pomar and J. Pomar, “A Markow Sow Model
Representing the Productive Lifespan of Herd Sows,” A-
gricultural Systems, Vol. 76, No. 1, 2004, pp. 253-272.
[17] L. Nielsen and A. Kristensen, “Finding the K Best Poli-
cies in a Finite-Horizon Markov Decision Process,” Euro-
pean Journal of Operation Research, Vol. 175, No. 2,
2006 pp. 1164-1179. doi:10.1016/j.ejor.2005.06.011
[18] L. Nielsen, et al., “Optimal Replacement Policies for
Dairy Cows Based on Daily Yield Measurements,” Jour-
nal of Dairy Science, Vol. 93, No. 1, 2009, pp. 75-92.
doi:10.3168/jds.2009-2209
[19] F. Hillier and G. Lieberman, “Introduction to Operations
Research,” Mc. Graw Hill Companies, Boston, 2002.
[20] P. Schrijner and E. Doorn, “The Deviation Matrix of a
Continuous-Time Markov Chain,” Probability in the En-
gineering and Informational Science, Vol. 16, No. 3,
2009, pp. 351-366.
[21] C. Meyer, “Sensitivity of the Stationary Distribution of a
Markov Chain,” SIAM Journal of Matrix Applications,
Vol. 15, No. 3, 1994, pp. 715-728.
doi:10.1137/S0895479892228900
[22] M. Abbad, J. Filar and T. R. Bielecki, “Algorithms for
Singularly Perturbed Markov Chain,” Proceedings of the
29th IEEE Conference, Honolulu, 5-7 December 1990, pp.
1402-1407.
[23] E. Feinberg, “Constrained Discounted Decision Processes
and Hamiltonian Cycles,” Mathematical Operational Re-
search, Vol. 25, No. 1, 2000, pp. 130-140.
doi:10.1287/moor.25.1.130.15210
[24] S. Ross, “Applied Probability Models with Optimization
Applications,” Holden Day, San Francisco, 1992.

---
