# Eddy Viscosity Model from RANS and LES

## RANS

<details>
<summary><strong> What is RANS </strong></summary>

* RANS is an abbreviation of Reynolds Averaged Navier-Stokes.
* It uses time-averaged values of Navier-Stokes equation.
* When we draw velocity profile, we draw smooth profile of the flow.
* However, in reality, there are so many fluctuations around that smooth profile.
* It's convenient to look at smooth profile to get the sense of physical meaning of the flow.
* This is exactly what we're doing in RANS.
* Ease out fluctuations and look at bulk properties like lift or drag.
<br><br><br>

</details>


<details>
<summary><strong> How do we derive RANS equation? & Concept of RANS equation</strong></summary>

It all starts from continuity equation & momentum equation.
$$ \nabla\cdot u = 0 $$
$$ u_t + (u\cdot\nabla)_u = -\nabla P + \frac{1}{Re} {\nabla}^{2}u $$ 
This is Newtonian, incompressible fluid.

The concept is, we decompose velocity vector into time averaged velocity and fluctuation velocity. (it's just rest of time averaged velocity)
<br>We plug it into N-S equation.
<br>We time-average the N-S equation.
<br>The purpose of time-averaging is to get rid of tricky fluctuation terms.
<br>A lot of terms will go away, and we get an equation with 'Reynolds Stress' term.
<br>This 'Reynolds Stress' term still has fluctuation term.
<br>So here comes 'Turbulence Closure Models'
<br>It's all about expressing these fluctuation terms into time-averaged terms so that it is easy to compute.

we have a velocity vector  $u(x,t)$  which can be decomposed into time averaged value and extra term which is fluctuation term.

$$ u(x,t) $$

* velocity $u$ & $U$ are all vectors. I just omitted the vector sign for convenience.

$$ u(x,t) = U(x) + u'(x,t) $$
$$ where \space time \space averaged \space \bar u(x,t)=U(x) $$

We plug it in to continuity & N-S equation, and we time average two equations.
We get

$$
\frac{\partial U}{\partial x}+\frac{\partial V}{\partial y}+\frac{\partial W}{\partial z}=0, 
$$

$$
\frac{\partial u'}{\partial x}+\frac{\partial v'}{\partial y}+\frac{\partial w'}{\partial z}=0
$$
from continuity equation.

Next we plug $u(x,t)$ into N-S equation, and time average the whole equation.
Some fluctuation terms will go away, but some will not go away.
The result is,

$$
\bar U \bar U_x + \bar V \bar U_y + \bar W \bar U_z + \frac{\partial \overline{u'u'}}{\partial x} + \frac{\partial \overline{u'v'}}{\partial y} + \frac{\partial \overline{u'w'}}{\partial z} = - \bar P_x + \frac{1}{Re}{\nabla}^2\bar U
$$

And this is the RANS equation. 

But this is not our final equaion cause out objective was to get rid of fluctuation terms.
<br>But they are still there.

::: info
Those $\overline{u'u'}, \overline{u'v'}, \overline{u'w'}$ temrs all called 'Reynolds Stress' because if you take the space gradient of those terms, you get the same dimension as stress which is force per volume.
<br>And they act like stresses.

*But I didn't get the physical meaning of those stresses*
:::

So here comes the 'Turbulence Closure Problem'
<br>Actually, RANS is all about how to express fluctuation terms $u'$ with averaged $U(x)$ terms.
<br>From now on, we will take a look at $k-\epsilon$ model, $k-\omega$ model, etc, which are part of 'Turbulence Closure Problem'

<br>Details can be seen at 
* S. L. Brunton (2021, April 2), Turbulence: Reynolds Averaged Navier-Stokes (Part 1, Mass Continuity Equation), DOI: https://doi.org/10.52843/cassyni.tcxvxy 
* S. L. Brunton (2021, April 16), Turbulence: Reynolds Averaged Navier Stokes (RANS) Equations (Part 2, Momentum Equation), DOI: https://doi.org/10.52843/cassyni.1xkvn0
* Fluid Mechanics 101 (2021, Feb 24), [CFD] Eddy Viscosity Models for RANS and LES, https://www.youtube.com/watch?v=SVYXNICeNWA&list=PLnJ8lIgfDbkrNyps1_36tNRRQ7hLzPFhV

</details>

<details>
<summary><strong> Turbulence Closure Models</strong></summary>

Eventhough the improvement of computational power, simulating fluid is still a heavy computation.
<br>Instead of simulating all the scales in N-S equation, aka DNS, we're gonna make approximation to make simulation more efficient and make turbulence models.
<br>This is Tubulence Closure Models.

:::info
The reason why it is called 'Turbulence Closure Models' is we need additional equation to 'close' RANS equation bc we have more unknowns than equations.
:::

There are several models like  $k-\omega$, Smagorinsky which are part of Eddy Viscosity Model, and cubic $k-\epsilon$, Full sub-grid scale, etc.

First, we are going to look at old, but simple approach which is Eddy Viscosity Model which is proposed by [Boussinesq](https://en.wikipedia.org/wiki/Joseph_Valentin_Boussinesq) in 1877.

</details>

<details>
<summary><strong> Eddy Viscosity Models </strong></summary>

Eddy Viscosity Model is proposed by [Boussinesq](https://en.wikipedia.org/wiki/Joseph_Valentin_Boussinesq) in 1877, in analogy to Newton’s law of friction.
In 3D, Eddy Viscosity Model is

$$
-\overline{u'_iu'_j}=\nu_t(\frac{\partial \bar U_i}{\partial x_j} + \frac{\partial \bar U_j}{\partial x_i}) - \frac{2}{3}k\delta_{ij}
$$

where $\nu_t$ is eddy viscosity,
<br> and $i$ & $j = 1,2,3$ where $x_1=1, x_2=y, x_3=z, U_1=U, U_2=V, U_3=W$
<br>$k$ is a Turbulent Kinetic Energy (TKE)
<br>$\delta_{ij}$ is a delta function.
<br>*$k$ will be used in the famous $k - \epsilon$ model.
<br>Deriving this equation can be seen at [Fluid Mechanics 101, [CFD] Eddy Viscosity Models for RANS and LES](https://www.youtube.com/watch?v=SVYXNICeNWA&list=PLnJ8lIgfDbkrNyps1_36tNRRQ7hLzPFhV)*

What this equation mean is that, normal & shear reynolds stress $-\overline{u'_iu'_j}$ is proportianal to some velocity gradient $\frac{\partial \bar U_i}{\partial x_j} + \frac{\partial \bar U_j}{\partial x_i}$ by a factor of eddy viscosity $\nu_t$.

Actually, this formula is really similar to relationship between viscosity and shear stress.
$$
shear \space stress \space \tau = \mu \frac{du}{dy}
$$
<br>So it means, turbulent scales that generates reynolds stress acts like viscosity.

Also, when you look at velocity gradient, motion of particles transfer the momentum downwards which is the direction of velocity gradient.

<br> Eddy Viscosity Model is all about modeling $\nu_t$.
<br> There is a model proposed 'mixing length hypothesis' proposed by Prandtl, but thanks to the computatoinal power, we do not use this model.

And here comes the famous $k-\epsilon$ model.
<br>I will cover it at next section.

**Reference & Resources**
* S. L. Brunton (2021, April 23), Turbulence Closure Models: Reynolds Averaged Navier Stokes (RANS) & Large Eddy Simulations (LES), https://doi.org/10.52843/cassyni.cjkr7f
* Fluid Mechanics 101 (2021, Feb 24), [CFD] Eddy Viscosity Models for RANS and LES, https://www.youtube.com/watch?v=SVYXNICeNWA&list=PLnJ8lIgfDbkrNyps1_36tNRRQ7hLzPFhV
* Schlichting, H., & Gersten, K. (2017). Boundary-Layer theory. In Springer eBooks. https://doi.org/10.1007/978-3-662-52919-5







</details>

## LES