---
title: 'Dataframes y listas'
description: 'Organizar datos heterogéneos en dataframes, seleccionar y ordenar filas, trabajar con CSV y agrupar objetos en listas.'
course: r
order: 3
---

# Dataframes y listas

Un vector solo admite un tipo de dato y una matriz tampoco permite mezclarlos. Para representar datos reales —por ejemplo, un mes con texto, unas ventas numéricas y un resultado lógico— necesitamos otras estructuras.

Un **dataframe** es una tabla cuyas columnas pueden tener tipos distintos. Una **lista** es un contenedor más general: puede guardar vectores, matrices, dataframes o cualquier otro objeto.

## Crear un dataframe

Partimos de tres vectores del mismo tamaño. Cada uno será una columna:

```r
meses <- c('enero', 'febrero', 'marzo')
ventas <- c(120, 140, 90)
objetivos <- c(TRUE, TRUE, FALSE)

datos <- data.frame(meses, ventas, objetivos)
datos
```

```text
   meses ventas objetivos
1  enero    120      TRUE
2 febrero    140      TRUE
3  marzo     90     FALSE
```

Las tres columnas tienen la misma longitud; `data.frame()` las alinea por posición. Cada columna sigue siendo un vector con su propio tipo.

La función `str()` —de _structure_, estructura— muestra el tipo de cada columna y unos cuantos valores:

```r
str(datos)
```

```text
'data.frame':	3 obs. of  3 variables:
 $ meses    : chr  "enero" "febrero" "marzo"
 $ ventas   : num  120 140 90
 $ objetivos: logi  TRUE TRUE FALSE
```

`summary()` ofrece un resumen distinto según el tipo de columna: para el texto indica su longitud, para los números muestra mínimo, mediana y media, y para los lógicos cuenta cuántos `TRUE` y `FALSE` hay.

```r
summary(datos)
```

`head()` y `tail()` muestran, respectivamente, las seis primeras y las seis últimas filas. Son útiles con tablas grandes. `nrow()`, `ncol()` y `dim()` devuelven el número de filas, de columnas y ambos a la vez.

> **Consejo:** usa `str()` siempre que recibas un dataframe nuevo. Es la forma más rápida de saber con qué tipos de datos estás trabajando.

## Conjuntos de datos incluidos

R trae consigo varios conjuntos de datos de ejemplo. La función `data()` abre la lista de los disponibles. Dos de los más usados son:

- `AirPassengers`: número mensual de pasajeros de una aerolínea entre 1949 y 1960.
- `mtcars`: características de 32 coches, con 11 columnas numéricas.

Para verlos, basta con escribir su nombre en la consola:

```r
head(AirPassengers)
head(mtcars)
str(mtcars)
```

```text
[1] 112 118 132 129 121 135
```

```text
                   mpg cyl disp  hp drat    wt  qsec vs am gear carb
Mazda RX4         21.0   6  160 110 3.90 2.620 16.46  0  1    4    4
Mazda RX4 Wag     21.0   6  160 110 3.90 2.875 17.02  0  1    4    4
Datsun 710        22.8   4  108  93 3.85 2.320 18.61  1  1    4    1
Hornet 4 Drive    21.4   6  258 110 3.08 3.215 19.44  1  0    3    1
Hornet Sportabout 18.7   8  360 175 3.15 3.440 17.02  0  0    3    2
Valiant           18.1   6  225 105 2.76 3.460 20.22  1  0    3    1
```

> **Advertencia:** en `mtcars` los nombres de las columnas están en minúsculas: `mpg`, `cyl`, `disp`, `hp` y `wt`. Escribirlos en mayúsculas no funciona, porque R distingue entre mayúsculas y minúsculas.

## Seleccionar filas y columnas

La sintaxis es la misma que para las matrices: `datos[fila, columna]`. Si dejamos una posición vacía, se seleccionan todas.

```r
datos[1, ]            # primera fila
datos[, 1]            # primera columna
datos[2, 2]           # fila 2, columna 2
datos[2, 'ventas']    # lo mismo, por nombre
datos[, c('meses', 'objetivos')]  # dos columnas
```

Para seleccionar una columna también está el operador `$`:

```r
datos$ventas
```

```text
[1] 120 140  90
```

Hay una diferencia importante: `datos$ventas` devuelve un **vector**, mientras que `datos['ventas']` devuelve un **dataframe** de una sola columna. Usa `$` cuando quieras calcular con los valores.

### Filtrar filas

La función `subset()` devuelve solo las filas que cumplen una condición:

```r
subset(datos, ventas >= 100)
```

```text
   meses ventas objetivos
1  enero    120      TRUE
2 febrero    140      TRUE
```

También puedes filtrar con corchetes y un vector lógico:

```r
datos[datos$ventas >= 100, ]
```

El símbolo `&` significa «y» y permite combinar dos condiciones:

```r
subset(mtcars, cyl == 8 & disp > 400)
```

### Ordenar filas

La función `order()` devuelve las posiciones que ordenan un vector de menor a mayor. Al usar ese resultado entre corchetes, se ordenan las filas:

```r
datos[order(datos$ventas), ]
```

```text
   meses ventas objetivos
3  marzo     90     FALSE
1  enero    120      TRUE
2 febrero    140      TRUE
```

Para ordenar de mayor a menor, basta con anteponer un signo menos al vector dentro de `order()`:

```r
datos[order(-datos$ventas), ]
```

## Importar y exportar CSV

Un archivo **CSV** es un texto con valores separados por comas, ideal para intercambiar tablas. Con `write.csv()` guardamos un dataframe; con `read.csv()` lo leemos de nuevo.

```r
write.csv(datos, 'ventas.csv', row.names = FALSE)
datos_leidos <- read.csv('ventas.csv')
datos_leidos
```

El argumento `row.names = FALSE` evita que se guarde una columna extra con los números de fila. Si olvidas este argumento, al leer el archivo aparecerá una columna llamada `X`. Puedes eliminarla asignándole `NULL`:

```r
datos_leidos$X <- NULL
```

Asignar `NULL` a una columna la elimina del dataframe.

> **Consejo:** después de leer un CSV, ejecuta `str()`. Así confirmas que las columnas numéricas se han leído como números y no como texto.

## Juntar y modificar dataframes

`rbind()` apila dataframes por filas, siempre que tengan las mismas columnas:

```r
fila_nueva <- data.frame(
  meses = 'abril',
  ventas = 105,
  objetivos = TRUE
)
datos_completos <- rbind(datos, fila_nueva)
```

Para crear una columna nueva, asígnale un vector calculado a través de `$`:

```r
datos$doble <- datos$ventas * 2
datos
```

Las funciones `colnames()` y `rownames()` consultan o cambian los nombres de columnas y filas:

```r
colnames(datos)                       # consulta
colnames(datos) <- c('mes', 'total', 'logrado', 'doble')  # renombra todos
colnames(datos)[4] <- 'ventas_dobles'  # renombra solo la cuarta
```

## Valores ausentes

Cuando un dato no está disponible, R usa `NA` —_not available_, no disponible—. No es lo mismo que cero: cero es un valor conocido, `NA` significa que falta.

Para detectar valores ausentes se usa `is.na()`, que devuelve un valor lógico por elemento. `any()` indica si al menos uno de los valores es `TRUE`:

```r
any(is.na(mtcars))
```

```text
[1] FALSE
```

Para sustituir los valores ausentes por otro valor, selecciónalos con el filtro y asígnales el nuevo valor:

```r
datos_limpios <- mtcars
datos_limpios[is.na(datos_limpios)] <- 0
```

> **Advertencia:** las comparaciones con `NA` devuelven `NA`, no `TRUE` ni `FALSE`. Por eso no basta con escribir `datos == NA`; usa siempre `is.na()`.

## Listas

Una **lista** agrupa objetos distintos en una sola variable. A diferencia del vector, sus elementos pueden tener tipos y formas diferentes:

```r
vector_numeros <- c(1, 2, 3)
matriz_datos <- matrix(1:6, nrow = 2)
mi_lista <- list(vector_numeros, matriz_datos, datos)
mi_lista
```

Para acceder a un elemento se usa el doble corchete `[[ ]]`, que devuelve el objeto original:

```r
mi_lista[[1]]        # el vector
class(mi_lista[[2]]) # "matrix"
class(mi_lista[[3]]) # "data.frame"
```

> **Advertencia:** `mi_lista[1]` no devuelve el vector, sino una lista que contiene el vector. Para trabajar con el objeto usa `[[ ]]`.

También puedes dar nombre a los elementos y acceder por ese nombre con `$`:

```r
names(mi_lista) <- c('numeros', 'matriz', 'datos')
mi_lista$numeros
```

La función `str()` es la mejor forma de ver de qué se compone una lista:

```r
str(mi_lista)
```

También puedes extraer un elemento y guardarlo en otra variable. La nueva variable tendrá el mismo tipo que el elemento extraído:

```r
tabla <- mi_lista[[3]]
class(tabla)
```

```text
[1] "data.frame"
```

## Resumen

- `data.frame()` crea tablas con columnas de tipos distintos; `str()` y `summary()` las describen.
- `data()` muestra los conjuntos de datos incluidos, como `AirPassengers` y `mtcars`.
- `[fila, columna]`, `$`, `subset()` y `order()` permiten seleccionar, filtrar y ordenar.
- `write.csv()` y `read.csv()` guardan y leen tablas; `row.names = FALSE` evita una columna extra.
- `rbind()` añade filas; asignar a `$` crea o reemplaza columnas.
- `NA` representa un dato ausente y se detecta con `is.na()`.
- `list()` agrupa objetos distintos; `[[ ]]` y `$` extraen su contenido.

## Ejercicios

### Ejercicio 1. Crear un dataframe (aplicación)

Crea tres vectores para tres personas —nombre, edad y sexo— y únelos en un dataframe con `data.frame()`. Comprueba su estructura con `str()`.

<details>
<summary>Ver la solución del ejercicio 1</summary>

#### Resolución

```r
nombres <- c('Antonio', 'María', 'Juan')
edades <- c(40, 30, 35)
sexo <- c('M', 'F', 'M')

personas <- data.frame(nombres, edades, sexo)
personas
str(personas)
```

```text
  nombres edades sexo
1 Antonio     40    M
2   María     30    F
3    Juan     35    M
```

#### Por qué funciona

Cada vector se convierte en una columna y se alinean por posición: el primer nombre con la primera edad y el primer valor de sexo. R comprueba que los tres vectores tienen la misma longitud.

#### Conceptos utilizados

- Vectores con `c()`.
- Construcción de dataframes.
- Inspección con `str()`.

#### Errores habituales

- Usar vectores de distinta longitud: `data.frame()` avisa y los recicla.
- Olvidar las comillas en los nombres o en el sexo: R los buscaría como objetos.

</details>

### Ejercicio 2. Explorar mtcars (aplicación)

Guarda el conjunto `mtcars` en una variable `coches`. Comprueba que es un dataframe con `is.data.frame()` y muestra sus seis primeras filas con `head()`.

**Criterios de éxito:** `is.data.frame(coches)` devuelve `TRUE`.

<details>
<summary>Ver la solución del ejercicio 2</summary>

#### Resolución

```r
coches <- mtcars
is.data.frame(coches)
head(coches)
```

```text
[1] TRUE
```

#### Por qué funciona

`is.data.frame()` es una función de comprobación que devuelve un valor lógico. `mtcars` ya es un dataframe incluido en R, así que asignarlo a otra variable conserva su tipo.

#### Conceptos utilizados

- Conjuntos de datos incluidos.
- Funciones de comprobación `is.*`.
- Visualización con `head()`.

#### Errores habituales

- Escribir `is.data.frame(coches)` sin paréntesis: R mostraría la función en lugar de ejecutarla.
- Confundir `head()` con `str()`: una muestra filas, la otra muestra tipos.

</details>

### Ejercicio 3. Consultar valores de coches (integración)

Usando `coches`, calcula la media de `mpg` y consulta el valor de `cyl` para el coche `Mazda RX4` de dos formas: con la notación fila-columna y con `$`.

<details>
<summary>Ver la solución del ejercicio 3</summary>

#### Resolución

```r
mean(coches$mpg)

coches['Mazda RX4', 'cyl']
coches$cyl[rownames(coches) == 'Mazda RX4']
```

```text
[1] 20.09062

[1] 6
[1] 6
```

#### Por qué funciona

`coches$mpg` extrae la columna como vector y `mean()` calcula su media. En la primera consulta, el nombre del coche se usa como nombre de fila y `cyl` como nombre de columna. En la segunda, `rownames(coches) == 'Mazda RX4'` crea un vector lógico que filtra la columna `cyl`.

#### Conceptos utilizados

- Extracción de columnas con `$`.
- Nombres de filas con `rownames()`.
- Filtros lógicos.

#### Errores habituales

- Escribir `coches$MPG`: los nombres de columnas de `mtcars` son minúsculos.
- Usar `coches['Mazda RX4', 'cyl']` con un nombre de fila mal escrito: R devuelve `NA`.

</details>

### Ejercicio 4. Filtrar con dos condiciones (integración)

Selecciona los coches con `cyl` igual a 8 y `disp` mayor que 400. Hazlo primero con `subset()` y después con corchetes y `$`.

<details>
<summary>Ver la solución del ejercicio 4</summary>

#### Resolución

```r
subset(coches, cyl == 8 & disp > 400)
coches[coches$cyl == 8 & coches$disp > 400, ]
```

Ambas formas devuelven tres coches: Cadillac Fleetwood, Lincoln Continental y Chrysler Imperial.

#### Por qué funciona

`&` combina dos comparaciones lógicas elemento a elemento: solo se cumple cuando las dos son `TRUE`. El vector resultante se usa para quedarse con las filas correspondientes. En la forma con corchetes hay que repetir `coches$` en cada condición.

#### Conceptos utilizados

- Comparaciones y operador `&`.
- Filtrado con `subset()` y con corchetes.
- Extracción de columnas con `$`.

#### Errores habituales

- Escribir `cyl = 8` dentro de la condición: `=` asigna, `==` compara.
- Usar `&&` en lugar de `&`: la forma doble solo evalúa el primer elemento y no filtra fila por fila.

</details>

### Ejercicio 5. Crear una columna calculada (resolución)

Añade a `coches` una columna llamada `rendimiento` que sea el resultado de dividir `hp` entre `wt`. Muestra las seis primeras filas con la columna nueva.

<details>
<summary>Ver la solución del ejercicio 5</summary>

#### Resolución

```r
coches$rendimiento <- coches$hp / coches$wt
head(coches[, c('mpg', 'hp', 'wt', 'rendimiento')])
```

```text
                     mpg  hp    wt rendimiento
Mazda RX4           21.0 110 2.620    41.98473
Mazda RX4 Wag       21.0 110 2.875    38.26087
Datsun 710          22.8  93 2.320    40.08621
```

#### Por qué funciona

La división se aplica elemento a elemento entre las dos columnas, que tienen la misma longitud. Asignar el resultado a `coches$rendimiento` crea la columna si no existía. La selección final muestra solo algunas columnas para facilitar la lectura.

#### Conceptos utilizados

- Operaciones entre columnas.
- Creación de columnas con `$`.
- Selección de varias columnas con `c()`.

#### Errores habituales

- Dividir entre la columna equivocada: `wt` es el peso y `hp` la potencia.
- Crear un vector suelto sin asignarlo al dataframe: no aparecerá en `coches`.

</details>

### Ejercicio 6. Construir y explorar una lista (desafío)

Crea una lista que contenga un vector numérico del 1 al 5, un vector con tres nombres de frutas y el valor lógico `TRUE`. Ponle nombres a los elementos, muestra su estructura con `str()` y extrae el vector de frutas de dos formas: por posición con `[[ ]]` y por nombre con `$`.

<details>
<summary>Ver la solución del ejercicio 6</summary>

#### Resolución

```r
numeros <- 1:5
frutas <- c('manzana', 'pera', 'plátano')
mi_lista <- list(numeros, frutas, TRUE)
names(mi_lista) <- c('numeros', 'frutas', 'logico')

str(mi_lista)
mi_lista[[2]]
mi_lista$frutas
```

```text
List of 3
 $ numeros: int [1:5] 1 2 3 4 5
 $ frutas : chr [1:3] "manzana" "pera" "plátano"
 $ logico : logi TRUE

[1] "manzana" "pera"     "plátano"
[1] "manzana" "pera"     "plátano"
```

#### Por qué funciona

`list()` guarda los tres objetos sin forzarlos a un tipo común, algo que no conseguiríamos con `c()`. `names()` etiqueta cada posición en orden. Tanto `[[2]]` como `$frutas` devuelven el vector original; la diferencia está en cómo se identifica el elemento.

#### Conceptos utilizados

- Listas con elementos de tipos distintos.
- Nombres de elementos con `names()`.
- Extracción con `[[ ]]` y `$`.
- Inspección con `str()`.

#### Errores habituales

- Usar `c()` en lugar de `list()`: todos los valores se convertirían en texto.
- Usar `[ ]` en vez de `[[ ]]`: el resultado sería una lista, no el vector.

</details>
