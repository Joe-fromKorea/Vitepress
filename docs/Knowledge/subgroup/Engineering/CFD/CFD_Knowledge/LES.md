# LES

## What is LES?

Turbulent flows contain eddies with a range of sizes and energies.
<br> In LES we will going to resolve eddies with a mesh.
<br>This is called Large Eddies Simulation, LES.

## How do we do LES?

<details>
<summary><strong> Problem </strong></summary>

Of course we can resolve eddies bigger than a mesh using velocity vectors.
<br>But how about eddies smaller than a mesh?
<br>The below picture shows the concept of the problem.
![alt text](LES_sub_grid_model.png) [^1]
<br> We will going to use sub-grid model that represent eddies smaller than a single mesh size

</details>

[^1]: [CFD] Large Eddy Simulation (LES): An Introduction / Fluid Mechanics 101 / [link](https://www.youtube.com/watch?v=r5vP45_6fB4&list=PLnJ8lIgfDbkoPrNWatlYdROiPrRU4XeUA)

## Basic Concept of Eddies

<details>
<summary><strong> Wave number </strong></summary>

Wave number indicates the size of the eddy. 
Actually, it is the reciprocal of the size of the eddy.

Wavenumber $k=\frac{2 \pi}{d}$

IDK why the wavenumber is defined like this, but it is how it is.
:::warning
$k$ can also stand for turbulent kinetic energy, so do not be confused.
:::

</details>

<details>
<summary><strong> Turbulent Energy Cascade </strong></summary>
This section will tell you what turbulend energy cascade is.
<br>You 

The below diagram shows the relation between the size of the eddy(wavenumber) and the kinetic energy density.
![turbulent_energy_cascade](turbulent_energy_cascade.png)
<br>
<br>
The area under the curve is the turbulent kinetic energy, TKE.
![TKE_curve](TKE_curve.png)
<br>
<br>
![TKE_resolved](TKE_resolved.png)
As we can't shrink the size of the mash to infinitesimal size, there's a certain point that we cannot resolve eddies using cells.
<br>If the blue area is smaller than 20%, we call it Good LES.
<br>IDK know why, but this is kind of convention.
<br>
<br>
![bad&good_LES](bad&good_LES.png)

</details>

<details>
<summary><strong> Integral length scale </strong></summary>
The eddy size and energy will obviously vary throughout the domain.
It means, each domain has different TKE, because they all have different kinetic energy density.

![](./integral_length_scale_domain.png)
<br>
<br>
So we will have something called 'integral length scale which is representative of all the eddies at a location.
<br>Because it is easier to look at a single value than the spectrum.
![integral_length_scale](integral_length_scale.png)
<br>
<br>
integral length scale is simply size of the averaged energy density eddy.
<br>The area devided by integral length scale is the same.
<br>We can calculate it by mathematical expression.
![integral_length_scale_definition](integral_length_scale_definition.png)
<br>
<br>
But the above mathematical expression is a bit absurd,as we don't know the function of energy density.
<br>So how can we calculate it?
<br>We can calculate $l_0$ from a precursor RANS calculation using either $k-w$ or $k-\epsilon$ model.
:::danger Question
So in order to do LES, do we have to do RANS first? what if RANS is not accurate?
:::
![calculate_l0](calculate_l0.png)
![setting_LES_mesh](setting_LES_mesh.png)
<br>
<br>
We said the good LES should resolve more than 80% of energy density.
<br>In order to to this, the size of a cell should be smaller than one fifth of the integral length scale.
<br>So that we can resolve more than 80% of the turbulent kinetic energy.
![integral_length_scale_cellsize](integral_length_scale_cellsize.png)
<br>
<br>
So if we want to evaluate if the mesh is good or not, we can define a new function f with variable integral length scale $l_0$ and cell volume $\Delta$
$$
f=\frac{l_0}{\Delta}=\frac{k^{2/3}}{\epsilon \ast \Delta}
$$
$\epsilon$ and $k$ is from the relations above.
</details>

## How LES works - Process
<details>
<summary><strong> 0. Approach </strong></summary>

As we discussed above, good LES should resolve more than 80% of the TKE. 
<br>So our goal is to resolve more than 80% of the TKE.

</details>

<details>
<summary><strong> 1. Calculate the Mean Velocity </strong></summary>

First, we will going to calculate the mean velocity of the flow.
<br>As the CFD Code computes the instantaneous velocity $U$, we will going to time average $U$ and get mean velocity $\bar{U}$
![alt text](image.png)
:::warning Question
How do we get U? What if U is inaccurate?
:::
We will average the velocity after the trasient phase.
</details>

<details>
<summary><strong> 2. Fluctuating Velocity </strong></summary>

We will do almost the same process as RANS
$$
U=\bar {U} + u'
$$
:::tip
Difference between RANS and LES is, 
<br>RANS models the fluctuation terms using time averaged velocity terms,
<br>But LES calculates TKE in the fluctuation terms.
:::
<br> As we all know, kinetic energy per mass is $\frac{1}{2}u^2$,
<br>So we can multiply fluctuating velocity components together, and it will lead us to some kinetic energy term.
<br>
<br> We have three veolcity components, $u,v,w$ in each directions, so we will have 9 possible combinations,
<br>$u'u'$, $u'v'$, $u'w'$, $v'u'$, $v'v'$, $v'w'$, $w'u'$, $w'v'$, $w'w'$
<br>There are instaneous Reynolds-Stresses that are resolved by the mesh
<br>But, only normal components are used to calcaulte the resolved TKE.($u'u'$, $v'v'$, $w'w'$)
:::warning Question
IDK why we only use normal components for the TKE.
<br>This is probably because of the definition of energy
:::
And then, we time-average all those Reynolds-Stresses, and get Reynolds Stress tensor per unit density.
:::warning Question
IDK why we time-average reynolds stresses.
:::
Anyways, we get Reynolds STress tensor per unit density.
$$
\frac{R_{ij}}{\rho}= 
\begin{bmatrix}
\overline{u'u'} & \overline{u'v'} & \overline{u'w'} \\[0.3em]
\overline{v'u'} & \overline{v'v'} & \overline{v'w'} \\[0.3em]
\overline{w'u'} & \overline{w'v'} & \overline{w'w'} \\[0.3em]
\end{bmatrix}=
\begin{bmatrix}
\overline{u'u'} & \overline{u'v'} & \overline{u'w'} \\[0.3em]
 & \overline{v'v'} & \overline{v'w'} \\[0.3em]
 &  & \overline{w'w'} \\[0.3em]
\end{bmatrix}
$$

</details>

<details>
<summary><strong> 3. Resolved Turbulent Kinetic Energy </strong></summary>

From the diagonal components, we get resolved TKE,
$$
k_{res}=\frac{1}{2}(\overline{u'u'}+\overline{v'v'}+\overline{w'w'})
$$
just using normal components.

<br>The reason why it is called resolved TKE is, we resolved turbulent kinetic energy only by using out mesh. 
<br>This is the best we can do here.
<br>We can't resolve TKE smaller then a cell right now, but we will do this later.

:::tip
OpenFoam will calcaulte the resolved turbulent kinetic energy directly from the mesh, adding up diagonal components.
<br>However, in ANSYS, they will calculate $\sqrt{\overline{(u')^2}}$which is RMSE(Root Mean Square Error) so you have to square it and then add up the components.
<br>So be aware of which components you are adding up.
:::

The image shows the rewolved TKE
![alt text](image-1.png)

</details>

<details>
<summary><strong> 4. Total Turbulent Kinetic Energy </strong></summary>
We now have the resolved inetic energy which is only a portion of total TKE.
<br>We still don't have sub-grid scale TKE,  $k_{sgs}$ 

![alt text](image-2.png)

<br>So our next goal is to get sub-grid scale TKE.
</details>

<details>
<summary><strong> 5. Sub-Grid Scale Turbulent Kinetic Energy </strong></summary>

$k_{sgs}$ is the TKE of the eddies smaller than the mesh size.
<br>But how do we do this?

$k_{sgs}$ depends on the method you choose to determine it.
<br>There are several methods like smagorinky, WALE, etc.
<br>We will cover this later on.
<br>
<br>But the easiest one is solving kinetic energy transport model.
![alt text](image-3.png)
<br>What about other methods?
<br>One way is to calculate $k_{sgs}$ from sub-grid legnth scale $l_{sgs}$
<br>$l_{sgs}$ has the same concept as integral length scale $l_0$
<br>$l_{sgs} represents the size of eddies within the cell.
![alt text](image-4.png)

:::tip
OpenFOAM calculates $k_{sgs}$ for you.
But in ANSYS, you have to calculate it by yourself in post-processor.
:::

</details>


<details>
<summary><strong> 6. Sub-Grid Length Scale </strong></summary>

$l_{sgs}$is defined as
$$
l_{sgs}=C_s \ast {(Cell Volume)}^{1/3}
$$

If $C_s=0.1$ this is Smagornisky coefficient.

<br>But, if we look at some of CFD mannuals, we can see that formula is slightly modified.
<br>This is because near the walls, eddies are damped, so we modify the function.
<br>If we are so close to the wall, we will have smaller eddies than we calculated from above.
<br>So, modified formula is
$$
l_{sgs}=min(\kappa y, C_s\Delta^{1/3}), \kappa=0.41
$$
<br>This also represents the effect of high aspect ratio.
<br>This will have better approximation.

</details>

<details>
<summary><strong> 7. Turbulent Kineitc Energy </strong></summary>

Now, we have calculated $k_{res}$ and $k_{sgs}$
<br>Below two picture shows $k_{res}$ and $k_{sgs}$
![alt text](image-5.png)

<br>If we want to check the quality of our CFD, we can calculate the ratio $\frac{k_{res}}{(k_{res}+k_{sgs})}$ and we want >0.8 in the entire domain.
</details>

<details>
<summary><strong> 8. Mesh Refinement </strong></summary>

If we don't have good quality, we can refine the mesh and increase $k_{res}$ so that we can resolve tubulent kinetic energy.
</details>