# Comparación matemática de los beneficios de una compra hecha al contado y a meses sin intereses

<p style = "text-align:center">
M. en C. PmXa
</p>

[TOC]

## Introducción

En general, se tiene la opción de realizar compras de dos formas:

1. En una sola exhibición, o *al contado*, y
2. Difiriendo el total de la compra en varios periodos, por lo general meses, y sin intereses adicionales.

La decisión entre una modalidad u otra suele darse, o bien por un cálculo rápido e instintivo, o bien por una elección súbita motivada por factores como educación financiera, percepción de la situación económica personal actual o habilidad del vendedor por promocionar más un modalidad que otra.

En este documento se pretende analizar, de forma cuantitativa, la conveniencia personal entre una modalidad u otra a partir del beneficio que se obtiene al hacer una compra, de forma que pueda maximizarse el beneficio de forma informada y respaldada matemáticamente.

## Desarrollo

### Compra al contado

El objetivo del desarrollo es encontrar el punto de equilibrio ($e$) donde los beneficios por hacer una compra al contado ($b_c$) y a meses sin intereses ($b_m$) se igualen; es decir:

$$
\begin{equation}
e \iff b_c = b_m
\end{equation}
$$

El caso más sencillo es el de una **compra al contado**. En ella, los beneficios suelen venir en forma de un programa de puntos o *cash back*. Una compra $c$ generará $p$ puntos (redondeados hacia el entero más próximo menor) de acuerdo con la *tasa de recompensa* $t_p$ de cada institución bancaria. Expresado matemáticamente, esto corresponde a la Ecuación (2):

$$
\begin{equation}
p = \mathrm{floor} (t_p \cdot c)
\end{equation}
$$

A su vez, y expresado en efectivo, el beneficio de la compra está dado por:

$$
\begin{equation}
b_c = p \cdot v_p
\end{equation}
$$

donde $v_p$ es el *valor de los puntos* asignados por la institución bancaria, y suele rondar entre \$0.07 - $0.10 MXN por punto. Combinando las Ecuaciones (2) y (3), se llega a la Ecuación (4), que es la descripción del beneficio de una compra al contado:

$$
\begin{equation}
b_c = v_p \cdot \mathrm{floor} (t_p \cdot c)
\end{equation}
$$

### Compra a meses sin intereses

Por otro lado, en una **compra a meses sin intereses** se difiere el monto $c$ de la compra en $n$ número de periodos (meses). En este caso, el beneficio no se obtiene en forma de un programa de puntos, sino a partir de la inversión (preferiblemente en una cuenta de bajo riesgo y de alta liquidez) del *remanente* del monto total de la compra menos el pago mensual que debe hacerse para liquidar la deuda. El siguiente desarrollo hace las siguientes consideraciones:

1. Se cuenta con el monto de la compra desde el primer momento; es decir, *podría hacerse la compra al contado*.
2. Se hace la inversión con una tasa de rendimiento constante (i. e. renta fija) y con plazo de un mes.
3. Se asume que se hace el primer pago de forma inmediata.

La tercera consideración implica que se desprecia el rendimiento que se obtendría al invertir el monto total $c$ de la compra, en vez del total menos el primer pago $\left( c - \frac{c}{n} \right)$, y esto se debe a que tendría que considerarse (a) la fecha en que se procesa el pago por parte de la institución bancaria, (b) la fecha de pago límite, (c) la fecha de pago efectiva, (d) la tasa de rendimiento diaria y (e) las penalizaciones por terminar de forma prematura la inversión al retirar el dinero para el primer pago antes de que termine el plazo de inversión acordado (si es que las hay). Considerar que se hace el primer pago de forma inmediata permite simplificar en gran manera el desarrollo.

El primer mes, se hace el primer pago de $\frac{c}{n}$ y se invierte el *remanente* $c \left( 1 - \frac{1}{n} \right)$. La ganancia $g_1$ generada el primer mes está dada por la Ecuación (5):

$$
\begin{equation}
g_1 = \left( \frac{t_i}{12} \right) 
       \left( 1 - \frac{1}{n} \right)
       \cdot c
\end{equation}
$$

donde $t_i$ es la tasa de interés anualizada.

El segundo mes, se realiza otro pago y nuevamente se invierte el *remanente* $c \left( 1 - \frac{2}{n} \right)$ más la ganancia $g_1$ del mes pasado, de forma que la ganancia $g_2$ es:

$$
\begin{equation}
g_2 = \left( \frac{t_i}{12} \right) 
       \left[
	       \left( 1 - \frac{2}{n} \right) \cdot c
	       + g_1
       \right]
\end{equation}
$$

El tercer mes, se realiza nuevamente el pago y se invierte el remanente junto con los beneficios obtenidos en los periodos 1 y 2 para obtener una ganancia $g_3$, misma que puede obtenerse de la siguiente forma:

$$
\begin{equation}
g_3 = \left( \frac{t_i}{12} \right) 
       \left[
	       \left( 1 - \frac{3}{n} \right) \cdot c
	       + g_1 + g_2
       \right]
\end{equation}
$$

Como se habrá notado a partir de las Ecuaciones (5), (6) y (7), existe un patrón en la obtención de la ganancia $g_n$ de un periodo dado, el cual puede expresarse mediante la Ecuación (8):

$$
\begin{equation}
	g_n =
	
    \left(
        \frac{t_i}{12}	
    \right)

    \left[
        \left( 1 - \frac{j}{n} \right) \cdot c
        +
        \sum_{k=1}^{n-1} g_k
    \right]

\end{equation}
$$

donde se puede apreciar que, para obtener $g_n$, debe hacerse un cálculo recursivo y obtener $g_{n-1}, \, g_{n-2} \ldots g_{n=1}$ previamente.

Finalmente, el *beneficio* $b_m$ de hacer la compra a meses sin intereses, no es otro que la *ganancia total*, cuya obtención queda descrita por la Ecuación (9):

$$
\begin{equation}
	b_m =

    \left(
        \frac{t_i}{12}	
    \right)

	\sum_{j=1}^n

    \left[
        \left( 1 - \frac{j}{n} \right) \cdot c
        +
        \sum_{k=1}^{n-1} g_k
    \right]

\end{equation}
$$

### Obtención del punto de equilibrio

Una vez obtenidas las expresiones para los beneficios de ambos tipos de compra, puede buscarse la condición del punto de equilibrio descrito en la Ecuación (1) al igualar las Ecuaciones (4) y (9):

$$
\begin{equation}

    v_p \cdot \mathrm{floor} (t_p \cdot c)
    
	=
	
	\left(
        \frac{t_i}{12}	
    \right)

	\sum_{j=1}^n

    \left[
        \left( 1 - \frac{j}{n} \right) \cdot c
        +
        \sum_{k=1}^{n-1} g_k
    \right]
\end{equation}
$$

y encontrando el monto $c$ de una compra que represente el mismo beneficio para $n$ meses sin intereses a partir de las raíces (dadas por $f(c) = 0$) de la Ecuación (11). La gráfica de esta Ecuación también se presenta en la Figura 1.
$$
\begin{equation}

	f(c)
	
	=
	
	\left(
        \frac{t_i}{12}	
    \right)

	\sum_{j=1}^n

    \left[
        \left( 1 - \frac{j}{n} \right) \cdot c
        +
        \sum_{k=1}^{n-1} g_k
    \right]

	- v_p \cdot \mathrm{floor} (t_p \cdot c)
	  
\end{equation}
$$

<img src="./img/1 - f(c).png" style="width:85%">

<p style = "color: SteelBlue; text-align: center">
    Figura 1: Gráfica de la Ecuación (11) para una (a) al contado con un programa de puntos equivalente al 1% de la compra devuelto en efectivo y (b) a 6 meses sin intereses con una tasa de rendimiento del 11%.
</p>


Sin embargo, y como se habrá podido notar en la Figura 1, la Ecuación (11) presenta más de una raíz (i.e. $f(c) = 0$) debido a la naturaleza discreta de la Ecuación (4). Por consiguiente, también existe más de un *punto de equilibrio* y se desistió de hallarlo a partir de un método numérico. En cambio, se trazaron las Figuras 2 y 3, que sirven para (1) ejemplificar algunos de los escenarios comunes de compra y (2) hacer una comparación rápida entre los beneficios que se obtienen en las distintas modalidades de compra.

<img src="./img/2 - ti_11.png" style="width:85%">

<p style = "color: SteelBlue; text-align: center">
    Figura 2: Comparación de beneficios en función del monto de compra con una tasa de interés de 11% y un equivalente de 1% devuelto en cash back.
</p>
<img src="./img/3 - ti_08.png" style="width:85%">

<p style = "color: SteelBlue; text-align: center">
    Figura 3: Comparación de beneficios en función del monto de compra con una tasa de interés de 8% y un equivalente de 1% devuelto en cash back.
</p>

De estas figuras, se observa que una compra de cualquier monto a 3 meses sin intereses otorga un beneficio menor o igual al de la compra al contado en ambos casos, donde se considera un equivalente de 1% devuelto en cash back y con las tasas de interés de 11% (cercana al valor de 2023, si bien se estima que comience a descender en algún punto de 2024) y de 8% (valor que se tenía en 2019). En cambio, cualquier monto diferido a más de 6 meses sin intereses resulta más conveniente que al contado, al menos con una tasa de interés superior al 8% y una devolución igual o menor al 1% de la compra.

## Conclusiones

- La naturaleza discreta del beneficio del programa de puntos resulta en más de un monto tal que este beneficio se iguale con el recibido en la modalidad de meses sin intereses.
- En la mayoría de casos, conviene realizar una compra de cualquier monto a partir de 6 meses sin intereses.
- Dependiendo de la tasa de interés y de devolución de puntos, generalmente conviene hacer una compra al contado en vez de a 3 meses sin intereses.