---
title: 'Vectores y matrices'
description: 'Agrupar valores en vectores y en matrices, operar con ellos, filtrarlos y crear categorías con factores.'
course: r
order: 2
---

# Vectores y matrices

Hasta ahora cada variable guardaba un solo valor. Para trabajar con datos necesitamos agrupar muchos valores en un mismo objeto. Veremos dos estructuras: el **vector**, una fila de valores del mismo tipo, y la **matriz**, una tabla de filas y columnas.

Todo lo que vimos sobre `class()` y los tipos numérico, lógico y carácter sigue aplicando aquí.

![Esquema comparativo de un vector como fila de celdas y una matriz como tabla de filas y columnas](/images/vectores-matrices.svg)

## Vectores

Un **vector** es una secuencia ordenada de valores del mismo tipo. Se crea con la función `c()` —de _combine_, combinar—, que junta los valores que le pasamos entre paréntesis separados por comas:

```r
numeros <- c(4, 10, 5, 3)
logicos <- c(TRUE, FALSE, TRUE)
palabras <- c('enero', 'febrero', 'marzo')

numeros
class(numeros)
class(logicos)
class(palabras)
```

```text
[1]  4 10  5  3
[1] "numeric"
[1] "logical"
[1] "character"
```

La función `length()` devuelve cuántos elementos tiene un vector:

```r
length(numeros)
```

```text
[1] 4
```

> **Advertencia:** dentro de un vector todos los elementos deben ser del mismo tipo. R no avisa: los convierte automáticamente.

### Qué ocurre al mezclar tipos

Si mezclas tipos, R elige un tipo común siguiendo este orden de preferencia: **carácter > numérico > lógico**. El vector resultante se convierte por completo a ese tipo.

```r
class(c(1, TRUE))     # el lógico pasa a numérico: TRUE vale 1
class(c('a', 2))      # el número pasa a carácter: "2"
c(1, TRUE)
c('a', 2)
```

```text
[1] "numeric"
[1] "character"
[1] 1 1
[1] "a" "2"
```

> **Consejo:** comprueba siempre `class()` después de mezclar datos. Una fecha leída como texto o un número convertido en cadena es una fuente habitual de errores.

### Dar nombre a los elementos

La función `names()` asigna o consulta etiquetas para los elementos de un vector. Se usa con `<-`, igual que una variable:

```r
ventas <- c(120, 140, 90)
meses <- c('enero', 'febrero', 'marzo')
names(ventas) <- meses
ventas
```

```text
enero febrero  marzo
  120    140     90
```

Los nombres no cambian los valores; solo permiten referirse a ellos por etiqueta.

## Operaciones con vectores

Las operaciones aritméticas se aplican **elemento a elemento**: el primero con el primero, el segundo con el segundo, y así sucesivamente.

```r
ventas <- c(120, 140, 90)
ventas * 2
ventas + c(10, 20, 30)
```

```text
[1] 240 280 180
[1] 130 160 120
```

También hay funciones que resumen todo el vector en un solo número:

| Función    | Qué devuelve                             |
| ---------- | ---------------------------------------- |
| `sum()`    | Suma de todos los elementos              |
| `mean()`   | Media aritmética                         |
| `min()`    | Valor mínimo                             |
| `max()`    | Valor máximo                             |
| `median()` | Mediana —el valor central—               |
| `sd()`     | Desviación estándar —dispersion—         |
| `prod()`   | Producto de todos los elementos          |
| `diff()`   | Diferencias entre elementos consecutivos |

```r
sum(ventas)
mean(ventas)
max(ventas)
diff(ventas)
```

```text
[1] 350
[1] 116.6667
[1] 140
[1] 20 -50
```

> **Advertencia:** al operar vectores de distinta longitud, R repite —**recicla**— el más corto. Si la longitud del largo no es múltiplo del corto, R avisa, pero devuelve un resultado. Conviene comprobar que ambos vectores tienen la longitud esperada.

## Comparaciones y filtros

Los operadores de comparación son `<`, `<=`, `>`, `>=`, `==` —igual— y `!=` —distinto—. Comparar un vector con un número devuelve un vector lógico con un resultado por elemento:

```r
ventas <- c(120, 140, 90)
ventas > 100
ventas == 140
```

```text
[1]  TRUE  TRUE FALSE
[1] FALSE  TRUE FALSE
```

Ten cuidado con la igualdad: `=` asigna, mientras que `==` compara.

Ese vector lógico puede usarse como **filtro** entre corchetes para quedarse solo con los elementos que cumplen la condición:

```r
ventas[ventas > 100]
```

```text
[1] 120 140
```

Al comparar dos vectores, R compara los elementos que ocupan la misma posición.

## Acceder a elementos

Los corchetes `[ ]` seleccionan elementos de un vector. **En R el primer elemento es el 1**, no el 0.

```r
numeros <- c(4, 10, 5, 3, 8, 2)
numeros[1]           # primero
numeros[c(1, 4)]     # primero y cuarto
numeros[2:5]         # del segundo al quinto
```

```text
[1] 4
[1]  4  3
[1] 10  5  3  8
```

Si el vector tiene nombres, también puedes usarlos entre comillas:

```r
names(numeros) <- c('a', 'b', 'c', 'd', 'e', 'f')
numeros['a']
numeros[c('a', 'f')]
```

```text
a
4
a f
4 2
```

Y puedes combinar la selección con una comparación:

```r
numeros[numeros >= 5]
```

```text
 c  e
 5  8
```

## Matrices

Una **matriz** guarda valores en dos dimensiones: filas y columnas. Se crea con `matrix()`, que recibe los datos y el número de filas —`nrow`— o de columnas —`ncol`—.

```r
numeros <- 1:10       # los enteros del 1 al 10
matrix(numeros, nrow = 2)
```

```text
     [,1] [,2] [,3] [,4] [,5]
[1,]    1    3    5    7    9
[2,]    2    4    6    8   10
```

Por defecto R rellena **por columnas**: baja por la primera columna y luego pasa a la siguiente. Para rellenar por filas se usa `byrow = TRUE`:

```r
matrix(numeros, nrow = 2, byrow = TRUE)
```

```text
     [,1] [,2] [,3] [,4] [,5]
[1,]    1    2    3    4    5
[2,]    6    7    8    9   10
```

Con dos vectores del mismo tamaño, `rbind()` crea una matriz juntándolos como filas. Después podemos poner nombres a filas y columnas con `rownames()` y `colnames()`:

```r
empresa_1 <- c(120, 140, 90)
empresa_2 <- c(100, 160, 110)
ventas <- rbind(empresa_1, empresa_2)
colnames(ventas) <- c('enero', 'febrero', 'marzo')
ventas
```

```text
          enero febrero marzo
empresa_1    120     140    90
empresa_2    100     160   110
```

Las funciones `nrow()` y `ncol()` devuelven el número de filas y columnas. `dim()` devuelve ambas a la vez.

## Operar con matrices

Las operaciones aritméticas con matrices también se aplican **elemento a elemento**:

```r
ventas * 2
ventas + ventas
```

```text
          enero febrero marzo
empresa_1    240     280   180
empresa_2    200     320   220

          enero febrero marzo
empresa_1    240     280   180
empresa_2    200     320   220
```

> **Advertencia:** en R, `*` entre matrices **no** es el producto matricial de álgebra lineal, sino la multiplicación elemento a elemento. El producto matricial se escribe `%*%` y no lo usaremos en este curso.

Las comparaciones funcionan igual que con vectores y devuelven una matriz de valores lógicos. Si la usamos como filtro, obtenemos un vector solo con los valores que cumplen la condición:

```r
ventas > 120
ventas[ventas > 120]
```

```text
          enero febrero marzo
empresa_1 FALSE   FALSE FALSE
empresa_2 FALSE    TRUE FALSE

[1] 140 160
```

Para resumir filas o columnas completas están `colSums()`, `rowSums()`, `colMeans()` y `rowMeans()`:

```r
colSums(ventas)
rowSums(ventas)
rowMeans(ventas)
```

```text
   enero febrero  marzo
     220     300    200

empresa_1 empresa_2
      350       370

empresa_1 empresa_2
 116.6667  123.3333
```

Las funciones `rbind()` y `cbind()` permiten añadir filas o columnas. Por ejemplo, una columna con la media de cada empresa:

```r
cbind(ventas, media = rowMeans(ventas))
```

## Seleccionar filas y columnas

La sintaxis es `matriz[fila, columna]`. Si dejamos una de las dos posiciones vacía, se seleccionan todas:

```r
ventas[1, 2]        # fila 1, columna 2
ventas[1, ]         # toda la fila 1
ventas[, 'marzo']   # toda la columna marzo
ventas[, 1:2]       # las dos primeras columnas
```

```text
[1] 140

enero febrero marzo
  120    140    90

empresa_1 empresa_2
       90       110

          enero febrero
empresa_1    120     140
empresa_2    100     160
```

También puedes seleccionar varias filas a la vez con `c()` o con un rango.

## Categorías con factores

Cuando una columna contiene palabras que se repiten —por ejemplo, tipos de animales— conviene tratarlas como **categorías**. Un **factor** es un vector que representa categorías y recuerda cuáles son los posibles valores, llamados **niveles**.

```r
animales <- c('gato', 'perro', 'gato', 'mono', 'perro')
categorias <- factor(animales)
categorias
```

```text
[1] gato  perro gato  mono  perro
Levels: gato mono perro
```

La función `summary()` muestra cuántas veces aparece cada categoría:

```r
summary(categorias)
```

```text
 gato  mono perro
    2     1     2
```

Algunas categorías tienen un orden natural, como la temperatura. El argumento `levels` indica ese orden y `ordered = TRUE` lo conserva:

```r
temperaturas <- c('caliente', 'frio', 'templado', 'frio')
temperaturas_ordenadas <- factor(
  temperaturas,
  levels = c('frio', 'templado', 'caliente'),
  ordered = TRUE
)
temperaturas_ordenadas
```

```text
[1] caliente frio     templado frio
Levels: frio < templado < caliente
```

> **Consejo:** los factores evitan errores al escribir una categoría de dos formas distintas, por ejemplo `gato` y `Gato`.

## Obtener ayuda

R incluye documentación de todas sus funciones. Desde la consola:

- `help(matrix)` o `?matrix` abre la ayuda de esa función.
- `help.search('media')` o `??media` busca páginas relacionadas con una palabra.
- La pestaña **Help** de RStudio permite la misma búsqueda con un buscador.

```r
help(matrix)
?mean
```

## Resumen

- `c()` crea vectores; todos sus elementos se convierten a un mismo tipo.
- Las operaciones y comparaciones se aplican elemento a elemento.
- `[ ]` selecciona elementos por posición, por nombre o con un filtro lógico.
- `matrix()`, `rbind()` y `cbind()` construyen matrices; `colSums()` y `rowMeans()` las resumen.
- `factor()` crea categorías, con niveles opcionalmente ordenados.
- `?funcion` abre la ayuda de R.

## Ejercicios

### Ejercicio 1. Tipos y conversión (comprensión)

Sin ejecutarlo, indica el tipo y el contenido de `c(1, TRUE)` y de `c('a', 2)`.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

```r
c(1, TRUE)
class(c(1, TRUE))

c('a', 2)
class(c('a', 2))
```

```text
[1] 1 1
[1] "numeric"

[1] "a" "2"
[1] "character"
```

#### Por qué funciona

R elige un tipo común para todo el vector. El orden de preferencia es carácter, después numérico y por último lógico. En el primer caso gana el numérico y `TRUE` se convierte en `1`; en el segundo gana el carácter y el número `2` se convierte en `"2"`.

#### Conceptos utilizados

- Vectores de tipo homogéneo.
- Conversión automática de tipos.
- Función `class()`.

#### Errores habituales

- Pensar que el vector conserva tipos mixtos: R lo convierte todo.
- Creer que `TRUE` se transforma en la cadena `"TRUE"` en el primer caso; solo ocurre si ya hay texto en el vector.

</details>

### Ejercicio 2. Ventas con nombres (aplicación)

Crea un vector `ventas` con los valores `120`, `140` y `90`. Asigna como nombres `enero`, `febrero` y `marzo`. Calcula la media de los tres meses.

**Criterios de éxito:** el vector muestra los nombres y `mean()` devuelve `116.6667`.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

```r
ventas <- c(120, 140, 90)
names(ventas) <- c('enero', 'febrero', 'marzo')
ventas
mean(ventas)
```

```text
enero febrero  marzo
  120    140     90

[1] 116.6667
```

#### Por qué funciona

`names()` asigna una etiqueta a cada posición, en el mismo orden en que se escribieron los valores. `mean()` suma los tres números, `350`, y divide entre tres.

#### Conceptos utilizados

- Creación de vectores con `c()`.
- Etiquetas con `names()`.
- Función `mean()`.

#### Errores habituales

- Asignar los nombres en otro orden: las etiquetas quedarían mal emparejadas sin que R avise.
- Escribir `names(ventas) = meses`: usa `<-` para asignar.

</details>

### Ejercicio 3. El mes con más ventas (integración)

Usando el vector `ventas` del ejercicio anterior, crea un vector solo con los meses que superan 100 y muestra el nombre del mes con mayores ventas.

**Pista:** `max()` devuelve el mayor valor; compara el vector con ese valor para obtener un filtro lógico.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

```r
ventas <- c(120, 140, 90)
names(ventas) <- c('enero', 'febrero', 'marzo')

altas <- ventas[ventas > 100]
altas

mes_maximo <- names(ventas)[ventas == max(ventas)]
mes_maximo
```

```text
enero febrero
  120    140

[1] "febrero"
```

#### Por qué funciona

`ventas > 100` produce `TRUE TRUE FALSE`; al usarlo entre corchetes conserva solo las dos primeras posiciones. Para el mes, `ventas == max(ventas)` es `FALSE TRUE FALSE` y se aplica sobre `names(ventas)`, por lo que devuelve la etiqueta de esa posición.

#### Conceptos utilizados

- Comparaciones elemento a elemento.
- Filtros lógicos entre corchetes.
- Nombres de vector y función `max()`.

#### Errores habituales

- Usar `=` en lugar de `==` en la comparación: `=` intenta asignar y no filtra.
- Quedarse con el valor máximo en vez de su nombre: `max(ventas)` devuelve `140`, no `febrero`.

</details>

### Ejercicio 4. Crear una matriz con rbind (aplicación)

Crea una matriz de dos filas y cuatro columnas a partir de estos vectores: `c(4, 10, 5, 3)` y `c(2, 8, 25, 14)`.

<details>
<summary>Ver la solución del ejercicio 4</summary>

#### Resolución

```r
fila_1 <- c(4, 10, 5, 3)
fila_2 <- c(2, 8, 25, 14)
matriz <- rbind(fila_1, fila_2)
matriz
```

```text
      [,1] [,2] [,3] [,4]
fila_1    4   10    5    3
fila_2    2    8   25   14
```

#### Por qué funciona

`rbind()` apila los vectores como filas, en el orden en que se los pasamos. Los nombres de las filas se toman de los nombres de los vectores.

#### Conceptos utilizados

- Vectores con `c()`.
- Construcción de matrices con `rbind()`.

#### Errores habituales

- Usar `cbind()` en lugar de `rbind()`: crearía dos columnas y cuatro filas.
- Pasar vectores de distinta longitud: R los recicla y avisa.

</details>

### Ejercicio 5. Seleccionar en una matriz (integración)

Crea una matriz con los números del 1 al 24 en 6 filas, rellena por filas. Obtén el valor de la fila 3, columna 4 y una submatriz con las tres primeras filas y las dos primeras columnas.

<details>
<summary>Ver la solución del ejercicio 5</summary>

#### Resolución

```r
matriz <- matrix(1:24, nrow = 6, byrow = TRUE)
matriz[3, 4]
matriz[1:3, 1:2]
```

```text
[1] 16

     [,1] [,2]
[1,]    1    2
[2,]    5    6
[3,]    9   10
```

#### Por qué funciona

Con `byrow = TRUE`, la fila 1 contiene del 1 al 4, la 2 del 5 al 8 y la 3 del 9 al 12; la columna 4 de esa tercera fila es el 16. La selección `matriz[1:3, 1:2]` cruza las filas y columnas indicadas y devuelve una matriz nueva.

#### Conceptos utilizados

- Secuencias con `:`.
- `matrix()` con `nrow` y `byrow`.
- Selección con corchetes y rangos.

#### Errores habituales

- Olvidar `byrow = TRUE`: al rellenar por columnas, `matriz[3, 4]` sería 15.
- Escribir `matriz[3, 4, ]`: una matriz tiene dos dimensiones, no tres.

</details>

### Ejercicio 6. Añadir totales por fila (desafío)

Partiendo de la matriz del ejercicio 5, añade una columna nueva con la suma de los valores de cada fila.

**Pista:** la función `rowSums()` devuelve un vector con una suma por fila; `cbind()` añade columnas.

<details>
<summary>Ver la solución del ejercicio 6</summary>

#### Resolución

```r
matriz <- matrix(1:24, nrow = 6, byrow = TRUE)
totales <- rowSums(matriz)
matriz_con_totales <- cbind(matriz, total = totales)
matriz_con_totales
```

```text
     [,1] [,2] [,3] [,4] total
[1,]    1    2    3    4    10
[2,]    5    6    7    8    26
[3,]    9   10   11   12    42
[4,]   13   14   15   16    58
[5,]   17   18   19   20    74
[6,]   21   22   23   24    90
```

#### Por qué funciona

`rowSums()` recorre cada fila y devuelve seis valores, uno por fila. `cbind()` los coloca como una columna adicional porque la longitud coincide con el número de filas de la matriz.

#### Conceptos utilizados

- Resumen de filas con `rowSums()`.
- Incorporación de columnas con `cbind()`.
- Coherencia entre longitudes y dimensiones.

#### Errores habituales

- Usar `colSums()`: añadiría cuatro valores en lugar de seis y R reciclaría el resultado.
- Modificar la matriz original sin guardar el resultado: `cbind()` devuelve una matriz nueva.

</details>
