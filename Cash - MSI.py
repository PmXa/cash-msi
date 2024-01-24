# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

# -------------
# Librerías uwu
# -------------

import matplotlib.pyplot as plt
import numpy as np

plt.rcParams['text.usetex'] = True

# ---------------
# Datos iniciales
# ---------------

# Tasa y valor de puntos
tp = 0.10
vp = 0.10

# Tasa de rendimiento anualizado
ti = 0.08

# ------------
# Funciones 👀
# ------------

def cash_benefit(c):
    total_yield = np.floor(c*tp) * vp
    return total_yield


def msi_benefit(c, n):
    
    capital = c
    total_yield = 0
    yields = np.zeros(n)
    
    for j in range(n):
        capital -= c/n
        yields[j] = (ti/12) * capital
        capital += yields[j]
        total_yield += yields[j]
    
    return [total_yield, yields]


def f(x, month):
    ''' 
    This is the function whose roots are to be determined
    '''
    return msi_benefit(x, month)[0] - cash_benefit(x)

# ---------------
# Main program ✨
# ---------------

# Data

mth = 3
x_top = 2e2

x = np.linspace(0, x_top, 1000)
y = np.zeros( len(x) )

z3 = np.zeros( len(x) )
z6 = np.zeros( len(x) )
z9 = np.zeros( len(x) )

for i in range(len(y)):
    y[i] = f(x[i], mth)
    
    z3[i] = msi_benefit(x[i], 3)[0]
    z6[i] = msi_benefit(x[i], 6)[0]
    z9[i] = msi_benefit(x[i], 9)[0]

# Plot 1

plt.figure()

plt.plot([0, x_top], [0, 0], "k")
plt.plot(x, y, label="$f(c)$")
    
plt.grid("on")
plt.legend()

plt.xlim([0, x_top])
plt.ylim([-0.10, 0.10])

plt.xlabel("Monto de compra [\$]", fontsize=12)
plt.ylabel("Diferencia en beneficios [\$]", fontsize=12)

plt.savefig('foo1.png', dpi=400, bbox_inches='tight')
plt.show()

# Plot 2

plt.figure()
  
plt.plot(x, cash_benefit(x), label="Compra al contado")
plt.plot(x, z3, '--', label="Compra a 3 MSI")
plt.plot(x, z6, '-.', label="Compra a 6 MSI")
plt.plot(x, z9, ':', label="Compra a 9 MSI")

plt.grid("on")
plt.legend()

plt.xlim([0, 1e2])
plt.ylim([0, 2.5])

plt.xlabel("Monto de compra [\$]", fontsize=12)
plt.ylabel("Beneficio [\$]", fontsize=12)

plt.savefig('foo2.png', dpi=400, bbox_inches='tight')
plt.show()