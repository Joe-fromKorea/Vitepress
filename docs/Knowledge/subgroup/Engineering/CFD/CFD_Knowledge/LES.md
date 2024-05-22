# LES

## What is LES?

Turbulent flows contain eddies with a range of sizes and energies.
<br> In LES we will going to resolve eddies with a mesh.
<br>This is called Large Eddies Simulation, LES.

## How do we do LES?

<details>  <!---problem-->
 <summary><strong> Problem </strong></summary>

 Of course we can resolve eddies bigger than a mesh using velocity vectors.
 <br>But how about eddies smaller than a mesh?
 <br>The below picture shows the concept of the problem.
 ![alt text](./LES_image/LES_sub_grid_model.png) [^1]
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
![turbulent_energy_cascade](./LES_image/turbulent_energy_cascade.png)
<br>
<br>
The area under the curve is the turbulent kinetic energy, TKE.
![TKE_curve](./LES_image/TKE_curve.png)
<br>
<br>
![TKE_resolved](./LES_image/TKE_resolved.png)
As we can't shrink the size of the mash to infinitesimal size, there's a certain point that we cannot resolve eddies using cells.
<br>If the blue area is smaller than 20%, we call it Good LES.
<br>IDK know why, but this is kind of convention.
<br>
<br>
![bad&good_LES](./LES_image/bad&good_LES.png)

</details>

<details>
<summary><strong> Integral length scale </strong></summary>
The eddy size and energy will obviously vary throughout the domain.
It means, each domain has different TKE, because they all have different kinetic energy density.

![](./LES_image/integral_length_scale_domain.png)
<br>
<br>
So we will have something called 'integral length scale which is representative of all the eddies at a location.
<br>Because it is easier to look at a single value than the spectrum.
![integral_length_scale](./LES_image/integral_length_scale.png)
<br>
<br>
integral length scale is simply size of the averaged energy density eddy.
<br>The area devided by integral length scale is the same.
<br>We can calculate it by mathematical expression.
![integral_length_scale_definition](./LES_image/integral_length_scale_definition.png)
<br>
<br>
But the above mathematical expression is a bit absurd,as we don't know the function of energy density.
<br>So how can we calculate it?
<br>We can calculate $l_0$ from a precursor RANS calculation using either $k-w$ or $k-\epsilon$ model.
:::danger Question
So in order to do LES, do we have to do RANS first? what if RANS is not accurate?
:::
![calculate_l0](./LES_image/calculate_l0.png)
![setting_LES_mesh](./LES_image/setting_LES_mesh.png)
<br>
<br>
We said the good LES should resolve more than 80% of energy density.
<br>In order to to this, the size of a cell should be smaller than one fifth of the integral length scale.
<br>So that we can resolve more than 80% of the turbulent kinetic energy.
![integral_length_scale_cellsize](./LES_image/integral_length_scale_cellsize.png)
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
![alt text](./LES_image/image.png)
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
![alt text](./LES_image/image-1.png)

</details>

<details>
<summary><strong> 4. Total Turbulent Kinetic Energy </strong></summary>
We now have the resolved inetic energy which is only a portion of total TKE.
<br>We still don't have sub-grid scale TKE,  $k_{sgs}$ 

![alt text](./LES_image/image-2.png)

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
![alt text](./LES_image/image-3.png)
<br>What about other methods?
<br>One way is to calculate $k_{sgs}$ from sub-grid legnth scale $l_{sgs}$
<br>$l_{sgs}$ has the same concept as integral length scale $l_0$
<br>$l_{sgs} represents the size of eddies within the cell.
![alt text](./LES_image/image-4.png)

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
![alt text](./LES_image/image-5.png)

<br>If we want to check the quality of our CFD, we can calculate the ratio $\frac{k_{res}}{(k_{res}+k_{sgs})}$ and we want >0.8 in the entire domain.
</details>

<details>
<summary><strong> 8. Mesh Refinement </strong></summary>

If we don't have good quality, we can refine the mesh and increase $k_{res}$ so that we can resolve tubulent kinetic energy.
</details>


## LES Sub-Grid Model

<details>
<summary><strong> What is Sub-Grid Model? </strong></summary>
 In LES, we looked at resolved TKE and sub-grid TKE.
 <br>There are several sub-grid models, and we have to select one of those models.
</details>

<details>
<summary><strong> Why do we need Sub-Grid Model? </strong></summary>
 The below picture shows the reason why we need sub-grid model.
 <br>In CFD Solver, the size of eddy cannot be smaller than the size of the cell, and eddies will persist and will not break down.
 <br>But we have to break it down, because that's how mother nature works.
 <br>Eddies get smaller and dissipate into heat.

 ![cannot_resolve_eddies_anymore](./LES_image/cannot_resolve_eddies_anymore.png)

 <br>What can we do to remove eddies from the mesh?
 <br><br>We can do this by increasing the turbulence dissipation rate.


</details>

<details>
<summary><strong> What is Turbulence Dissipation Rate? </strong></summary>

 Turbulence Dissipation rate, **$\epsilon$ is the rate that turbulence is converted to thermal energy.**
 <br>It has units of turbulent kinetic energy per unit time.
 <br>We have large $\epsilon$, eddies will quickly be dissipated into heat.
 <br>It's quite straightforward.
 <br><br>Then what's the mathmatical expression?
 <br>In real turbulence, 
 $$
 \epsilon=\nu \frac{\partial U_i}{\partial x_j}\frac{\partial U_i}{\partial x_j}
 $$
 But this is just mathamteical deifintion.
 <br>How do we calculate it?
 <br>In RANS, we solve transport equation for $\epsilon$, and this was shown in [$k-\epsilon$ model](./RANS.md)
 <br>But this is different in LES.
 <br><br>
 If we look at below picture, we can see that velocity gradient gets larger as eddies get smaller.
 <br>This means, at first, as velocity grdient is not large, turbulenece dissipation rate is also not large and it takes a while for the eddies to be dissipated.
 <br>However, as time goes by, eddies get smaller and velocity gradient also gets smaller and turbulence dissipation rate will accelerate.

 ![turbulence_dissipation_rate_velocity_gradient](./LES_image/turbulence_dissipation_rate_velocity_gradient.png)

 <br>We know that eddies just bigger than the cell size are not being dissipated, and it means velocity gradient is not decreasing anymore, leading to constant turbulence dissipation rate.
 <br>But our goal is to dissipate eddies. 
 <br>So, we can increase molecular viscosity $/nu$, and it will lead to larger turbulence dissipation rate.
 <br>If the turbulence dissipate rate is high enough, eddies will be dissipated.
 <br>So the mathmatical expression of turbulence dissipation rate will be
 $$
 \epsilon=(\nu+\nu_{sgs}) \frac{\partial U_i}{\partial x_j}\frac{\partial U_i}{\partial x_j}
 $$

 <!--picture-->

 If we select adequte $\nu_{sgs}$ to dissipate eddies just larger than the cell size, our goal is achieved.
 <br>But we should remind that we're not solving turbulence dissipation rate in LES.
 <br>How can we reflect this concept to the real CFD?

 ::: warning Reminder 
 we're not solving $\epsilon$ in LES. 
 <br>solving $\epsilon$ is for RANS equation.
 <br>And above mathematical expression is for real-world fluid.
 <br>We also have to 'model' this in LES.
 :::
 
</details>

<details>
<summary><strong> Turbulence Dissipation in real LES CFD </strong></summary>

 <br>We looked at the concept of how to dissipate eddies in LES.
 <br>But it was only a concept.
 <br>How do we increase molecular viscoity in LES simulation?
 <br>We do this by modyfing N-S equation

$$
\frac{\partial (\rho U_i) }{\partial t} + \frac{\partial (\rho U_i U_j)}{\partial x_j} = -\frac{\partial P}{\partial x_i} + \frac{\partial}{\partial x_j} (\tau_{ij}+\tau_{sgs})
$$ 

 <br>We can see that extra stress term $\tau_{sgs}$ is added to the N-S equation.
 <br>viscosity stress term $\tau_{ij} + \tau_{sgs}$ does the same role as molecular viscosity.
 <br>As we increased $\tau_{ij}$ to $\tau_{ij} + \tau_{sgs}$, turbulence dissipation will also be increased, and it will dissipate eddies.
 <br>This can be derived by filtering the N-S equation, but we'll going to skip this.

 <br>It's important to know the meaning of sub-grid stress, which is $\tau_{sgs}$ here. 

</details>

<details>
<summary><strong> Sub-Grid Stress </strong></summary>

<br>Molecular viscosity $\nu_sgs$ can be represented as Sub-Grid Stress in N-S equation.
<br>We're going to look at the meaning of Sub-Grid Stress $\tau_{sgs}$ here.
<br>If we think of eddies smaller than the size of cells, they can be considered as stresses.
<br>Because eddies exert stresses to fluid particles and wall.
<br>So we're substituing the concept of eddies into stresses instead of considering the real velocity of the eddies.

![sub_grid_stress](./LES_image/sub_grid_stress.png)

<br>Sub-Grid Stress can be modeled as 

$$
\tau_{sgs} = 2 \rho \nu_{sgs} S^*_{ij} - \frac{2}{3}\rho k_{sgs} \delta_{ij} 
$$

$$
S^*_{ij} = \frac{1}{2}(\frac{\partial \tilde U_i}{\partial x_j} + \frac{\partial \tilde U_j}{\partial x_i} - \frac{1}{3} \frac{\partial \tilde U_k}{\partial x_k} \delta_{ij})
$$

And this is from eddy viscosity model.
<br>You can find this on [RANS](./RANS.md) page
<br>If we see the equation, as the eddies get smaller, velocity gradient increases and it makes Stress tensor $S^*_{ij}$ bigger.
<br>But $S^*_{ij}$ term depends on the size of the eddy, which means we don't have control for it.
<br>Instead, we can control $\nu_{sgs}$.
<br>By controlling $\nu_{sgs}$ we can dissipate the eddy just bigger than the cell size.
<br>This also means if we have larger cell size, $\nu_{sgs}$ also have to be bigger.
![nu_sgs_cellsize](./LES_image/nu_sgs_cellsize.png)

::: tip extra info
$\nu_{sgs}$ is scalar value if we assume that eddies are isotropic, which means shape of the eddies are all same.
:::

::: warning Question
Isn't the eddy viscosity model from the RANS equation?
<br>so we use eddy viscosity model from the RANS?
<br>Isn't the RANS inaccuarate?
:::

Because of the cell size - $\nu_{sgs}$ dependence, meshing and LES is incorporated.
<br>In RANS, we can change the mesh and use the same turbulence model.
<br>But in LES, as we change the mesh, molecular viscosity $\nu_{sgs}$ also changes.
<br>This is the characteristic of the LES.

</details>

## Smagorinsky Model

As we looked at sub-grid model, we now know that sub-grid stress $tau_{sgs}$ is modelled using an eddy viscosity approach.
<br>And sub-grid viscosity $\nu_{sgs}$ is the **CONTROL** of dissipation of eddy depending on the cell size.
<br>So how is sub-grid kinematic viscosity $\nu_{sgs}$ calculated?
<br>There are several methods, but here, we're considering Smagorinsky model.

<details>
<summary><strong> Expressing Sub-Grid Kinematic Viscosity Model </strong></summary>

We can express sub-gird kinematic viscosity model as velocity multiplied by length according to the units of kinematic viscosity.
$$
\frac{[m^2]}{[s]} = \frac{[m]}{[s]} \times [m]
$$

This simple approach was proposed by Smagorinky.
So, 
$$
\nu_{sgs} \sim U_0 \ast l_0
$$

As eddies are isotropic, we only need a length $l_0$ to categorise their shape.

<br>So our goal is to determine $U_0$ and $l_0$ to get $\nu_{sgs}$

</details>

<details>
<summary><strong> Velocity Scale </strong></summary>

We are going to take velocity difference $\Delta U$ as a velocity scale here.
![Veolcity_Scale](./LES_image/Veolcity_Scale.png)
<br>Velocity difference will be,
$$
U_0 \sim \Delta U = l_0 \ast \frac{\partial U}{\partial z}
$$

<br>But what if we draw a horizontal line across the eddy?

![Veolcity_Scale_horizontal](./LES_image/Veolcity_Scale_horizontal.png)

<br>Velocity difference will be
$$
U_0 \sim \Delta U = l_0 \ast \frac{\partial V}{\partial y}
$$

We can express this term in strain rate tensor $S_{ij}$

$$
S_{ij} = \frac{1}{2}(\frac{\partial U_i}{\partial x_j} + \frac{\partial U_j}{\partial x_i})
$$

<br>But, the problem is, we need a scalar value for the velocity scale.
<br>What if we just take magnitude of $S_{ij}$?
<br>If we look at the simple case(Couette Flow), we can know that 
$$
|S_{ij}|=\sqrt{S_{ij}S_{ij}}=\frac{1}{2} \frac{\partial U}{\partial y}
$$

So we have to multiply $\sqrt{2}$ to the velocity gradient.

</details>

<details>
<summary><strong> Problem of Simple Smagorinsky Model </strong></summary>

Smagorinsky Model doesn't take wall effect into consideration.
<br>Wall makes eddy small

</details>

<details>
<summary><strong> How can we modify sub-grid kinematic viscosity to take wall effect into account? </strong></summary>

There are several ways.
<br>But we're only going to cover modifying $(C_s \Delta)^2$ 
$$
\nu_{sgs} = (C_s \Delta)^2 \sqrt{2 S_{ij} S_{ij}}
$$

<br> we can change $\nu_{sgs}$, $(C_s \Delta)^2$, or $\sqrt{2 S_{ij} S_{ij}}$
<br> Simplest way is to modify $(C_s \Delta)^2$.
<br> We can do this by using RANS equation - eddy viscosity model

::: warning Question
Still can't get it.
<br>RANS in LES.... 
<br>Why is LES accurate then?
:::

from $U^+$ and $y^+$ relation, and especially in logarithmic region, we can get velocity gradient.
<br> And in log region, reynolds stress is constant which is wall shear stress.
<br>From these relations, we can quantify the size of the eddy with the varient $y$
<br>The result will be shown in next section.
::: warning Question
why is reynolds stress constant in log region?
:::
</details>

<details>
<summary><strong> Quantifying the size of eddy </strong></summary>

In logarithmic region, the mean velocity profile is modelled by 
$$
U^+=\frac{1}{\kappa}log(y^+)+C
$$
![alt text](./LES_image/U+&y+graph.png)
The dots are given from DNS simulation. 
<br>Also, in logarithmic region, Reynolds shear stress is relatively constant, hence,
$$
-\rho \overline{u'v'} = \tau_w = \rho {u_\tau}^2
$$
::: tip
$\tau_w$ is wall shear stress
<br>$u_\tau$ is friction velocity which is $\sqrt{\tau_w / \rho}$
<br>But IDK the physical meaning of these terms.
:::

So, if we plug those equations to Eddy Viscosity Equation $-\rho \overline{u'v'} = \rho \nu_T \frac{\partial U}{\partial y}$, we get
$$
\nu_T = u_\tau \kappa y
$$

The Turbulent Viscosity $\nu_T$ can be written as the product of a length scale and a velocity scale, so, 
$$
\nu_T \sim l \ast U
$$
Turbulent Viscosity $\nu_T$ has the dimension of product of length and velocity.
<br> So what will be the adequate choice for $l$ and $U$ to represent eddies?
<br> $l$ will be the mixing length $l_m$ and $u$ will be the reynolds stress $\overline{u'v'}$
::: warning Question
I'm not sure about how $l$ and $U$ relates to mixing length and reynolds stress
:::
<br>Anyways, if we massage the equation, we get
$$
l_m = \kappa y
$$

So what does it mean?
<br>As we get close to the wall, $y$ will decrease, and it will make $l_m$ smaller. 
<br>So this is the behavior that we wanted.
<br>Taking wall effect into account.
<br>Now we will return to where we start from, modeling sub-grid scale molecular viscosity $\nu_{sgs}$ which is the control of the dssipation of the eddy.

</details>

<details>
<summary><strong> Revisiting Sub-Grid Scale  </strong></summary>

Now we have more accurate model for the sub-grid scale eddies.
<br>So when modeling sub-grid length scale $l_0$, instead of just using Smagorinsky Coefficient $C_s \Delta$, we can use $min$ function. So,
$$
l_0 = min(l_m,C_s \Delta) = min(\kappa y,C_s \Delta)
$$

But our $l_m$ was just for logarithmic region.
<br>How can we consider other region?
<br>We can do this by using Van Driest Solution.
<br>We can get general equation that rerpresent relation between $y^+$ and $U^+$
![Van_Driest](./LES_image/Van_Driest.png)

So the final Sub-Grid Length Scale will be 
$$
l_0 = min \Big[\kappa y \ast \Big(1-exp\Big(\frac{y^+}{A^+}\Big)\Big), C_s \Delta]
$$
</details>

## Summary of LES

In LES, we have to solve to parts.

1. Resolving larger-than-grid-size-eddies turbulent kinetic energy $k_{res} = \frac{1}{2} \overline{u'u'}+\overline{v'v'}+\overline{v'v'}$
<br>    These values can be solved with 100% accuracy. And it is better to resolve TKE as much as possible.
2. Modelling Sub-grid-sclae Turbulent Kinetic Energy.
<br>    This is the trickies part of LES.

We used turbulence dissipation rate $\epsilon$ to dissipate eddies that are smaller than the cell size.
<br> By physical definition of $\epsilon$, we can choose adequate molecular viscosity $\nu$ to control the dissipation of eddies. 
$$
\epsilon=\nu \frac{\partial U_i}{\partial x_j}\frac{\partial U_i}{\partial x_j}
$$
<br>But in real CFD, we can't use this. 
<br>In order to solve in real CFD, we will use N-S equation to reflect the same phenomenon. 
<br>We can do this by modifying viscost stress term $\tau_{sgs}$
$$
\frac{\partial (\rho U_i) }{\partial t} + \frac{\partial (\rho U_i U_j)}{\partial x_j} = -\frac{\partial P}{\partial x_i} + \frac{\partial}{\partial x_j} (\tau_{ij}+\tau_{sgs})
$$
<br>And $\tau_{sgs}$ can be modeled as
$$
\tau_{sgs} = 2 \rho \nu_{sgs} S^*_{ij} - \frac{2}{3}\rho k_{sgs} \delta_{ij} 
$$

<br>If we control $\nu_{sgs}$, it will effect $\tau_{sgs}$ and this will effect N-S equation and finally reflect the turbulent dissipation rate.

<br>So how is $\nu_{sgs}$ can be modelled?
<br>We can do this by using Smagorinsky model, which models $\nu_{sgs}$ as product of $U_0 \ast l_0$.
<br>$U_0$ is velocity scale and $l_0$ is sub-grid length scale.

<br>$U_0$ is $l_0 \sqrt{2 S_{ij} S_{ij}}$

<br>Next step is to model length scale
<br>The simplest approach is to add some Coffecient to  the cell size because sub-grid eddies is smaller than the size of the Cell.
<br>So, $l_0 = C_s \Delta$
<br>And C_s is Sagorinksy Coefficient.
<br>But the problem is, it cannot take wall effect into account.
<br>Eddies will get smaller as they approach the wall.
<br>So, we use reynolds stress to model this.
::: warning Question
This is the huge missing link of LES.
<br>Why do we use RANS eddy viscosity model to LES?
<br>Why does this work?
:::

Anyways, if we do some simple math with RANS eddy viscosity model, we get mxing length as the resprentative of size of the eddies.
$$
l_m = \kappa y \ast \Big(1-exp\Big(\frac{y^+}{A^+}\Big)\Big)  
$$
<br>So as a result we get sub-grid length which represents the size of sub-grid eddies as,
$$
l_0 = min \Big[\kappa y \ast \Big(1-exp\Big(\frac{y^+}{A^+}\Big)\Big), C_s \Delta]
$$
And this takes wall effect into account.

<br>I will resummary the above summary.
sub-grid length scale $l_0$ represents the size of the eddy and this will effect molecular viscosity $\nu_{sgs}$ and this will effect viscous stress term $\tau_{sgs}$ and finally effecting N-S equation.

$$
l_0 = min \Big[\kappa y \ast \Big(1-exp\Big(\frac{y^+}{A^+}\Big)\Big), C_s \Delta]
$$
$$
\nu_{sgs} = {l_0}^2 \sqrt{2S_{ij}S_{ij}}
$$
$$
\tau_{sgs} = 2 \rho \nu_{sgs} S^*_{ij} - \frac{2}{3}\rho k_{sgs} \delta_{ij} 
$$
$$
\frac{\partial (\rho U_i) }{\partial t} + \frac{\partial (\rho U_i U_j)}{\partial x_j} = -\frac{\partial P}{\partial x_i} + \frac{\partial}{\partial x_j} (\tau_{ij}+\tau_{sgs})
$$

## testing pdf

<iframe src="./Charge_to_Mass_Ratio_of_the_Electron.pdf" style="width: 100%; height: 700px;" type="application/pdf"></iframe>
