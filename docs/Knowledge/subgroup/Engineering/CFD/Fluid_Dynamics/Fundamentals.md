# Fundamentals of Fluid Dynamics

## Reynolds Number

<details>
<summary><strong> Importance of Reynold Number </strong></summary>

Before we begin, Reynolds number is one of the most important concept in fluid dynamics.
<br>Because, this number is 'dimensionless'
<br>Advantages of dimensionless number is efficiency.
<br>Suppose that we want to find a equation that represent lift with several vairables and find a relationship; linear, log scale, smth like that.
<br>To find this relationship, we have to change magnitute of variables one by one.
<br>If we have 4 variables that represent lift($\rho,V, D, \mu$) and change it's value one at a time and conduct experiments, it would take ages.
<br>If we conduct 10 experiments for one variable, it will be total $10^4$ experiments.
<br>But, if we have relationship between these variables, we can just change one variable per experiment.
<br>This is the power of dimensionless number, and we call it **Nondimensionalizing**
<br>
<br>We have many dimensionless numbers, but most important and famous dimensionless number is Reynolds number.


</details>

<details>
<summary><strong> What is Reynolds Number? </strong></summary>

The physical interpretation of Reynolds Number is ratio of intertial force to friction(viscous) force.

$$
Re = \frac{\rho V d}{\mu} = \frac{Vd}{\nu}  
$$ 
[^1]

where 
* $\rho$ is density, $(kg/m^3)$
* $V$ is flow speed, $(m/s)$
* $d$ is a characteristic length, $(m)$
* $\mu$ is the dynamic viscosity of the fluid, $(Pa·s$ or $N·s/m^2$ or $kg/(m·s))$
* $\nu$ is the kinematic viscosity of the fluid $(m^2/s)$

<br>As we have *relatively* small reynolds number, it means friction force is larger than inertial force and this is laminar flow.
<br>But if we have *relatively* large reynolds number, it means the opposite and this represents turbulent flow which is chaotic.
:::warning
Definition of laminar flow and turbulent flow should be established.
<br>Also, currently I'm not sure that what causes laminar flow to be turned into turbulent flow
:::

</details>


<details>
<summary><strong> Who invented it? </strong></summary>

From *White, F. M. (2008). Fluid mechanics. The McGraw Hill Companies,. pg.314,* it states it was propsed by Reynolds in 1883, but according to [Wikipedia_Reynolds Number](https://en.wikipedia.org/wiki/Reynolds_number), it was introduced by George Stokes in 1851.
<br>Anyways, Reynolds Number was widely used after Reynolds, by explaining transition of laminar flow to turbulent flow in the pipe.
![Reynolds_tube_experiment](./Fundamentals_image/Reynolds_tube.png)
<br>Details should be confirmed from the original text by Stokes_185 *(On the Effect of the Internal Friction of Fluids on the Motion of Pendulums)* and Reynolds_1883 *(An experimental investigation of the circumstances which determine whether the motion of water shall be direct or sinuous, and of the law of resistance in parallel channels)*

</details>

<details>
<summary><strong> How do we derive it? </strong></summary>

There are several ways to derive it.
<br>
<br>From *Schlichting, H., & Gersten, K. (2016). Boundary-layer theory. springer., pg. 6-12*,
<br>It derives by definition of inertial force per unit volume $\rho u \frac{\partial u}{\partial x}$ and definition of friction force per unit volume $\mu \frac{\partial^2 u}{\partial y^2}$. (You know, from taylor series. For details, look at *Pritchard, P. J., & Mitchell, J. W. (2016). Fox and McDonald's introduction to fluid mechanics. John Wiley & Sons., 5.4 Momentum Equation)*
<br>And ratio of two forces will be same for *mechanically smiliar* objects.
<br>So if two different objects have similar size and similar flow, the ratio of forces will be the same eventhough the size is different.
<br>IDK how this works, but it just says so.
<br>From the ratio of inertial force to friction force,
<br>The book states that flow field $u$ is proportional to the free stream velocity $V$, so $u=V$(it can be treated like this) and characteristic length dimension of the body will be a diameter of a sphere $d$ (If we consider sphere in a stream).
<br>
<br>Also, by using Buckingham Pi Theorem, we can make dimensionless numbers.
<br>Details are shown in *Pritchard, P. J., & Mitchell, J. W. (2016). Fox and McDonald's introduction to fluid mechanics. John Wiley & Sons. 7.2 Buckingham Pi Theorem*

:::warning
Characeristic length can be other length dimension, length of the plate, momentum thickness(will discuss later), etc. according to *Pritchard, P. J., & Mitchell, J. W. (2016). Fox and McDonald's introduction to fluid mechanics. John Wiley & Sons., pg. 295*
<br>IDK why $\partial x$ term and $\partial y$ term can be characteristic length $d$ like diameter of the sphere, but it says so.
:::

<details>
<summary><strong> Various Reynolds Number </strong></summary>

* At the pipe

* At the flat plate

* At the airfoil



</details>

</details>

<details>
<summary><strong> Summary </strong></summary>

The most important thing about Reynolds number is dimensionless coefficient(Drag coefficient, Lift Coefficient, etc.) of different variables $(\rho, d, V, \mu)$ are ultimately only dependent on the one variable $Re$
The below image shows the dependence of reynolds number and drag coefficient.
![Dependence of reynolds number and drag coefficient](./Fundamentals_image/Dependence_of_reynolds_number_and_drag_coefficinet.png)

</details>

<details>
<summary><strong> Questions </strong></summary>

* What is *mechanically simiilar* actually? If two objects and flowstream of two'looks'similar, is it mechanically similar?
* I don't get the concept of characteristic length. Can we just choose one characterisic length as we want?
* So the ratio of intertial force and frcition force is not an absolute value and it can change. Then Reynolds Number represents the ratio of certain geometry? So like we can only compare Reynolds Number between *mechanically similar* objects?

</details>

[^1]: Schlichting, H., & Gersten, K. (2016). Boundary-layer theory. springer., pg. 7

## laminar - turbulence transition