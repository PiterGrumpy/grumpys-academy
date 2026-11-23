# Ruta formativa: Python desde cero hasta nivel profesional junior

**Versión:** 1.1\
**Idioma:** español\
**Objetivo:** servir como mapa curricular ejecutable por un agente de
IA. El agente debe desarrollar el curso de forma iterativa, una unidad y
una lección cada vez, siguiendo obligatoriamente la skill
`SKILL_DESARROLLO_LECCIONES_PYTHON.md`.

------------------------------------------------------------------------

## 1. Propósito y perfil de salida

El curso lleva a una persona sin experiencia previa hasta un nivel de
**desarrollador/a Python junior** capaz de incorporarse a un equipo,
comprender una base de código pequeña o mediana, implementar
funcionalidades acotadas, probarlas, depurarlas, documentarlas y
colaborar mediante Git.

Al finalizar, el alumno podrá:

-   Escribir programas Python legibles, modulares y mantenibles.
-   Elegir estructuras de datos y algoritmos básicos adecuados al
    problema.
-   Modelar dominios sencillos con funciones, clases y composición.
-   Gestionar errores, archivos, datos estructurados y dependencias.
-   Consumir y construir APIs HTTP básicas.
-   Persistir información en una base de datos relacional usando SQL y
    Python.
-   Escribir pruebas automatizadas y utilizar herramientas de calidad.
-   Trabajar con Git, entornos virtuales, configuración y flujos de
    desarrollo.
-   Desarrollar, empaquetar y desplegar una aplicación pequeña.
-   Leer documentación técnica, investigar errores y explicar
    decisiones.

**No significa** dominar arquitectura distribuida, optimización
avanzada, ciencia de datos, seguridad ofensiva, administración de
sistemas ni diseño de plataformas de producción complejas. Esos temas
pueden ser extensiones posteriores.

## 2. Reglas de ejecución para el agente de IA

1.  Usa este documento como **índice maestro**, no como sustituto del
    material didáctico.
2.  Desarrolla el curso en el orden indicado. No saltes unidades ni des
    por sabido un concepto que aún no se haya enseñado.
3.  Crea una sola lección por iteración, salvo que el usuario solicite
    explícitamente otra cosa.
4.  Antes de redactar una lección, consulta y sigue íntegramente
    `SKILL_DESARROLLO_LECCIONES_PYTHON.md`.
5.  Mantén un registro externo o visible de progreso: unidad, lección,
    estado, prerrequisitos pendientes y proyecto acumulado. No afirmes
    recordar progreso entre sesiones si no está disponible en el
    contexto.
6.  Cada lección debe producir un resultado verificable: explicación,
    código ejecutable, ejercicios y criterios de aceptación.
7.  Introduce conceptos de forma incremental. Reutiliza ejemplos y un
    proyecto longitudinal, aumentando su complejidad.
8.  Prioriza la práctica: el alumno debe escribir, ejecutar, modificar y
    depurar código. Evita lecciones compuestas únicamente por teoría.
9.  Usa Python 3 moderno. Al iniciar el curso, fija una versión concreta
    compatible con el entorno del alumno y explica cómo comprobarla. No
    dependas de características experimentales.
10. Cuando una herramienta, biblioteca o práctica cambie con el tiempo,
    consulta su documentación oficial actual antes de enseñar comandos o
    recomendaciones versionadas.
11. No entregues soluciones completas de todos los ejercicios de
    entrada. Ofrece pistas graduadas y soluciones después de que el
    alumno lo intente o las solicite.
12. No avances automáticamente si hay errores conceptuales importantes.
    Propón una comprobación breve y refuerza los puntos débiles.
13. Distingue siempre entre código didáctico, código adecuado para un
    proyecto junior y código listo para producción.
14. Si el usuario pide cambiar el ritmo, profundidad o especialización,
    adapta el itinerario sin perder los objetivos esenciales.

## 3. Convenciones curriculares

-   **U:** unidad.
-   **L:** lección.
-   Los códigos `U`/`L` son internos de este índice. No se reproducen en títulos, nombres de archivo, rutas, texto de lección ni registro visible. Los nombres públicos siguen la convención del curso de R: título descriptivo y archivo en `kebab-case`. Decisión en ADR 0010.
-   Cada unidad tiene un nombre público y representativo, sin códigos, que se guarda en el campo `unit` de todas sus lecciones; ese nombre aparece como desplegable en la página del curso (ADR 0015). Las unidades ya publicadas se llaman «Antes de empezar» y «Primeros Pasos».
-   **Nivel:** Inicial, Básico, Intermedio o Junior.
-   **Tipo:** concepto, laboratorio, taller, evaluación o proyecto.
-   Las duraciones son orientativas y no deben usarse para acelerar a un
    alumno que necesita más práctica.
-   Cada unidad termina con una evidencia de aprendizaje. Cada bloque
    principal incluye un proyecto integrador.

### Proyecto longitudinal

Construir progresivamente una aplicación de **gestión de tareas
personales** (Task Manager). Evolución prevista:

1.  Programa de consola con variables y condicionales.
2.  Menú interactivo y operaciones sobre listas/diccionarios.
3.  Código modular con funciones y validación.
4.  Persistencia en JSON y manejo de archivos.
5.  Diseño orientado a objetos cuando aporte valor.
6.  Pruebas automatizadas.
7.  Persistencia SQL con SQLite.
8.  API HTTP para consultar y gestionar tareas.
9.  Configuración, logging, empaquetado y ejecución reproducible.
10. Entrega final documentada, probada y desplegable.

El proyecto no debe forzar patrones complejos antes de que sean
necesarios. En cada etapa, explicar qué deuda técnica aparece y cómo se
resuelve.

------------------------------------------------------------------------

# PARTE I --- Fundamentos y autonomía con Python

## U0. Orientación, entorno y método de trabajo

**Nivel:** Inicial \| **Objetivo:** preparar un entorno reproducible y
comprender el ciclo editar--ejecutar--observar.

-   **L0.1 --- Qué es programar y qué es Python**
    -   Programa, algoritmo, lenguaje, intérprete y ejecución.
    -   Usos habituales de Python y límites razonables.
    -   Diferencia entre Python, editor, terminal e IDE.
    -   Cómo se aprende programación: experimentación, errores y
        práctica deliberada.
-   **L0.2 --- Instalación y comprobación del entorno**
    -   Instalar una versión estable de Python 3 desde una fuente
        oficial.
    -   Comprobar `python --version` o el comando equivalente del
        sistema.
    -   Diferencias prácticas entre Windows, macOS y Linux.
    -   Instalar y configurar un editor (por ejemplo, VS Code) sin
        convertir la configuración en el centro del curso.
-   **L0.3 --- Terminal y sistema de archivos**
    -   Directorio actual, rutas absolutas y relativas.
    -   Comandos básicos para listar, cambiar de carpeta y ejecutar un
        archivo.
    -   Crear una carpeta de proyecto y organizar archivos.
-   **L0.4 --- Primer programa y REPL**
    -   Modo interactivo, archivos `.py` y ejecución de scripts.
    -   `print()`, comentarios y errores de sintaxis iniciales.
    -   Guardar, ejecutar, cambiar y volver a ejecutar.
-   **L0.5 --- Editor, depuración inicial y hábitos**
    -   Indentación, resaltado, autocompletado y terminal integrada.
    -   Leer mensajes de error sin pánico.
    -   Guardar versiones simples del trabajo y nombrar archivos
        correctamente.

**Práctica/evidencia:** crear `hola.py`, ejecutarlo desde terminal y
explicar qué hace cada línea.\
**Criterio de salida:** el alumno ejecuta un script propio y localiza su
carpeta y su intérprete.

## U1. Sintaxis, valores y variables

**Nivel:** Inicial \| **Objetivo:** representar información y escribir
expresiones simples.

-   **L1.1 --- Anatomía de un programa**
    -   Sentencias, expresiones, bloques e indentación.
    -   Orden de ejecución y comentarios.
-   **L1.2 --- Variables y asignación**
    -   Nombres válidos, convenciones `snake_case`, asignación y
        reasignación.
    -   Variables como referencias a objetos, introducción intuitiva sin
        tecnicismo excesivo.
    -   Constantes por convención.
-   **L1.3 --- Tipos primitivos**
    -   `int`, `float`, `str`, `bool` y `None`.
    -   `type()`, conversión explícita y errores de conversión.
    -   Diferencia entre dato y representación textual.
-   **L1.4 --- Operadores**
    -   Aritméticos, comparación, lógicos y asignación compuesta.
    -   Precedencia, paréntesis, división `/`, división entera `//` y
        módulo `%`.
-   **L1.5 --- Entrada y salida**
    -   `input()`, `print()`, separadores y finales.
    -   Conversión de entradas y validación elemental.
-   **L1.6 --- Cadenas de texto**
    -   Comillas, escapes, concatenación y repetición.
    -   Índices, longitud, slicing básico e inmutabilidad.
    -   Métodos frecuentes: `lower`, `upper`, `strip`, `replace`,
        `split`, `join`.
    -   f-strings y formato de números.

**Práctica:** calculadora de propinas, conversor de unidades y ficha de
usuario.\
**Criterio de salida:** construir un pequeño programa de
entrada--proceso--salida sin copiar una solución.

## U2. Control de flujo

**Nivel:** Inicial \| **Objetivo:** expresar decisiones y repetición.

-   **L2.1 --- Valores verdaderos y falsos**
    -   Truthiness, comparaciones y condiciones claras.
-   **L2.2 --- Condicionales**
    -   `if`, `elif`, `else`, anidamiento y condiciones compuestas.
    -   Evitar ramas redundantes y condiciones ambiguas.
-   **L2.3 --- Bucles `while`**
    -   Condición de parada, contadores, acumuladores y bucles
        infinitos.
    -   `break` y `continue`.
-   **L2.4 --- Bucles `for`**
    -   Iteración sobre cadenas y secuencias.
    -   `range`, `enumerate` y `zip` en situaciones sencillas.
-   **L2.5 --- Patrones de control**
    -   Validación repetida de entrada, menús y búsqueda lineal.
    -   Centinelas y bucles controlados por eventos de consola.
-   **L2.6 --- Depuración del flujo**
    -   Trazar valores paso a paso y construir tablas de seguimiento.

**Práctica:** juego de adivinar número, menú de operaciones y validador
de entrada.\
**Criterio de salida:** seleccionar correctamente entre condicionales y
bucles y justificar la condición de terminación.

## U3. Colecciones y estructuras de datos

**Nivel:** Básico \| **Objetivo:** almacenar y manipular conjuntos de
datos.

-   **L3.1 --- Listas**
    -   Crear, indexar, recorrer, modificar y cortar.
    -   `append`, `extend`, `insert`, `remove`, `pop`, `sort`, `sorted`.
    -   Copias, aliasing y mutabilidad.
-   **L3.2 --- Tuplas y desempaquetado**
    -   Inmutabilidad, retorno múltiple y asignación por desempaquetado.
-   **L3.3 --- Diccionarios**
    -   Clave--valor, acceso seguro con `get`, actualización, borrado e
        iteración.
    -   Claves válidas y casos de uso.
-   **L3.4 --- Conjuntos**
    -   Unicidad, pertenencia y operaciones de unión, intersección y
        diferencia.
-   **L3.5 --- Comprensiones**
    -   Comprensiones de listas, diccionarios y conjuntos.
    -   Cuándo mejoran legibilidad y cuándo conviene un bucle normal.
-   **L3.6 --- Elegir una estructura**
    -   Orden, unicidad, acceso por clave, coste intuitivo de
        operaciones.
    -   Estructuras anidadas y modelado de datos sencillos.

**Práctica:** agenda de contactos, inventario en memoria y análisis de
frecuencias.\
**Proyecto de bloque:** primera versión del gestor de tareas en consola,
con alta, listado, búsqueda, edición y borrado en memoria.

## U4. Funciones y diseño modular

**Nivel:** Básico \| **Objetivo:** descomponer problemas y evitar
duplicación.

-   **L4.1 --- Definir e invocar funciones**
    -   `def`, llamada, cuerpo, retorno y diferencia entre `print` y
        `return`.
-   **L4.2 --- Parámetros y argumentos**
    -   Posicionales, nombrados, valores por defecto y orden.
    -   Argumentos mutables y el problema de usar listas/diccionarios
        como valores por defecto.
-   **L4.3 --- Alcance**
    -   Variables locales y globales; evitar estado global innecesario.
-   **L4.4 --- Descomposición**
    -   Responsabilidad única a nivel de función, nombres expresivos y
        funciones pequeñas.
    -   Diseñar antes de codificar: entradas, salidas, invariantes y
        casos límite.
-   **L4.5 --- Funciones como valores**
    -   Introducción a funciones de orden superior y `lambda` solo en
        casos claros.
-   **L4.6 --- Módulos e imports**
    -   Crear módulos propios, `import`, `from`, alias y estructura de
        carpetas inicial.
    -   `if __name__ == "__main__":`.
-   **L4.7 --- Paquetes y organización**
    -   Paquetes, `__init__.py` cuando corresponda, responsabilidades y
        dependencias entre módulos.

**Práctica:** refactorizar el gestor de tareas en módulos de interfaz,
lógica y almacenamiento en memoria.\
**Criterio de salida:** explicar el contrato de una función y
reutilizarla desde otro módulo.

## U5. Errores, excepciones y depuración

**Nivel:** Básico \| **Objetivo:** construir programas que fallen de
forma controlada.

-   **L5.1 --- Clases de errores**
    -   Errores de sintaxis, ejecución y lógica.
    -   Leer traceback desde la última línea hacia el origen.
-   **L5.2 --- Excepciones**
    -   `try`, `except`, `else`, `finally`; excepciones comunes.
    -   Capturar excepciones específicas y evitar `except` genérico
        silencioso.
-   **L5.3 --- Lanzar errores**
    -   `raise`, validación de argumentos y mensajes útiles.
    -   Excepciones propias de forma introductoria.
-   **L5.4 --- Depuración sistemática**
    -   Reproducir, aislar, formular hipótesis, inspeccionar y
        verificar.
    -   Breakpoints y depurador del editor.
-   **L5.5 --- Robustez de entradas**
    -   Validación, normalización, límites y mensajes para usuarios.
    -   No confundir validación con ocultar errores.

**Práctica:** endurecer el gestor de tareas frente a entradas vacías,
IDs inexistentes y datos inválidos.\
**Criterio de salida:** diagnosticar un traceback sencillo y elegir qué
excepción manejar.

## U6. Archivos y formatos de datos

**Nivel:** Básico--Intermedio \| **Objetivo:** persistir y recuperar
información.

-   **L6.1 --- Rutas y archivos**
    -   `pathlib`, rutas portables, existencia y creación de
        directorios.
-   **L6.2 --- Lectura y escritura**
    -   `open`, modos, codificación UTF-8, `with` y cierre seguro.
    -   Texto, líneas, append y sobrescritura.
-   **L6.3 --- CSV**
    -   `csv.reader`, `DictReader`, `writer`, cabeceras y delimitadores.
    -   Datos faltantes y normalización.
-   **L6.4 --- JSON**
    -   `json.load`, `loads`, `dump`, `dumps`.
    -   Tipos compatibles, indentación, codificación y errores de
        formato.
-   **L6.5 --- Persistencia del proyecto**
    -   Cargar al iniciar y guardar al modificar.
    -   Manejar archivo inexistente, vacío, corrupto y versiones del
        esquema de forma básica.
-   **L6.6 --- Serialización y límites**
    -   Diferencia entre serializar y guardar objetos arbitrarios.
    -   No cargar datos no confiables con mecanismos peligrosos como
        `pickle`.

**Práctica:** añadir persistencia JSON al gestor y exportación CSV.\
**Criterio de salida:** leer y escribir datos estructurados sin perder
información ante errores comunes.

## U7. Calidad, estilo y documentación

**Nivel:** Básico--Intermedio \| **Objetivo:** producir código que otra
persona pueda leer.

-   **L7.1 --- PEP 8 y legibilidad**
    -   Nombres, espacios, líneas, imports y organización.
-   **L7.2 --- Docstrings y comentarios**
    -   Documentar propósito, parámetros, retorno, excepciones y
        decisiones no obvias.
    -   Comentarios que explican el porqué, no repiten el código.
-   **L7.3 --- Type hints**
    -   Anotaciones de variables, parámetros y retornos.
    -   `list[str]`, `dict`, `Optional`/uniones y tipos básicos.
    -   Las anotaciones no validan automáticamente en tiempo de
        ejecución.
-   **L7.4 --- Herramientas de calidad**
    -   Formateador y linter (por ejemplo, Ruff), configuración y
        ejecución.
    -   Resolver advertencias entendiendo su causa.
-   **L7.5 --- Refactorización**
    -   Mejorar estructura sin cambiar comportamiento.
    -   Duplicación, complejidad, nombres y funciones demasiado grandes.
-   **L7.6 --- README**
    -   Objetivo, requisitos, instalación, ejecución, ejemplos y
        limitaciones.

**Práctica:** aplicar formato, linting, anotaciones y README al gestor.\
**Criterio de salida:** preparar un repositorio que otra persona pueda
ejecutar siguiendo instrucciones.

------------------------------------------------------------------------

# PARTE II --- Python intermedio y prácticas de desarrollo

## U8. Orientación a objetos aplicada

**Nivel:** Intermedio \| **Objetivo:** modelar conceptos con clases
cuando la abstracción aporta claridad.

-   **L8.1 --- Objetos y clases**
    -   Estado, comportamiento, instancia, atributos y métodos.
-   **L8.2 --- Constructor e identidad**
    -   `__init__`, `self`, atributos de instancia y de clase.
-   **L8.3 --- Encapsulación práctica**
    -   Convenciones públicas/privadas, propiedades y validación de
        estado.
-   **L8.4 --- Composición**
    -   Objetos que contienen o colaboran con otros objetos.
    -   Preferir composición cuando represente mejor el dominio.
-   **L8.5 --- Herencia y polimorfismo**
    -   Sobrescritura, `super`, sustitución y riesgos de jerarquías
        rígidas.
-   **L8.6 --- Métodos especiales**
    -   `__repr__`, `__str__`, igualdad y orden; implementar solo los
        necesarios.
-   **L8.7 --- Dataclasses y enumeraciones**
    -   `dataclasses`, `field`, `Enum` y modelos de datos.
-   **L8.8 --- Diseño orientado a objetos**
    -   Responsabilidades, acoplamiento, cohesión y cuándo no crear una
        clase.

**Práctica:** modelar `Task`, `TaskList` o servicios del gestor,
comparando una solución funcional con otra orientada a objetos.\
**Criterio de salida:** justificar el uso de clases y diseñar una
colaboración simple entre objetos.

## U9. Iteradores, generadores y context managers

**Nivel:** Intermedio \| **Objetivo:** comprender protocolos de Python y
procesar datos de forma eficiente.

-   **L9.1 --- Iterables e iteradores**
    -   `iter`, `next`, protocolo de iteración y `StopIteration`.
-   **L9.2 --- Generadores**
    -   `yield`, evaluación perezosa y consumo único.
-   **L9.3 --- Expresiones generadoras**
    -   Diferencias con comprensiones y ahorro de memoria.
-   **L9.4 --- Context managers**
    -   `with`, protocolo `__enter__`/`__exit__` y `contextlib`.
-   **L9.5 --- Aplicaciones**
    -   Procesamiento por lotes, lectura de archivos grandes y gestión
        de recursos.

**Práctica:** generador de tareas filtradas y context manager sencillo
para medir o gestionar un recurso.\
**Criterio de salida:** explicar cuándo conviene una secuencia perezosa
y usar `with` correctamente.

## U10. Biblioteca estándar esencial

**Nivel:** Intermedio \| **Objetivo:** resolver tareas comunes sin
reinventar herramientas.

-   **L10.1 --- Fechas y horas**
    -   `datetime`, `date`, `timedelta`, formatos y zonas horarias a
        nivel introductorio.
-   **L10.2 --- Matemáticas y aleatoriedad**
    -   `math`, `statistics`, `random`; distinguir azar reproducible de
        seguridad.
-   **L10.3 --- Expresiones regulares**
    -   `re`, patrones básicos, grupos y límites; no usarlas si una
        operación de cadenas es más clara.
-   **L10.4 --- Colecciones especializadas**
    -   `Counter`, `defaultdict`, `deque`, `namedtuple` cuando aporte
        valor.
-   **L10.5 --- Utilidades**
    -   `itertools`, `functools`, `operator`, `collections` y `textwrap`
        en escenarios prácticos.
-   **L10.6 --- Procesos y entorno**
    -   `os`, `sys`, `subprocess` con cautela; argumentos, variables de
        entorno y códigos de salida.
-   **L10.7 --- Logging**
    -   Niveles, handlers, formato y diferencia entre logging y `print`.

**Práctica:** añadir fechas de vencimiento, filtros, estadísticas y
logging al proyecto.\
**Criterio de salida:** localizar en la biblioteca estándar una
herramienta adecuada y leer su documentación.

## U11. Entornos, dependencias y empaquetado

**Nivel:** Intermedio \| **Objetivo:** reproducir un entorno de
desarrollo y ejecutar proyectos fuera del ordenador original.

-   **L11.1 --- Intérpretes y entornos**
    -   Qué problema resuelven los entornos virtuales.
    -   Crear, activar y desactivar `venv` en los principales sistemas.
-   **L11.2 --- pip y dependencias**
    -   Instalar, actualizar, inspeccionar y desinstalar paquetes.
    -   Versiones, dependencias directas/transitivas y riesgos de
        instalar globalmente.
-   **L11.3 --- Dependencias reproducibles**
    -   `requirements.txt` y/o metadatos modernos de proyecto según el
        flujo elegido.
    -   Fijación de versiones con criterio y actualización controlada.
-   **L11.4 --- Estructura de proyecto**
    -   `src` layout como opción, módulos, pruebas y archivos de
        configuración.
-   **L11.5 --- pyproject.toml**
    -   Propósito, metadatos, configuración de herramientas y nociones
        de construcción.
-   **L11.6 --- Instalar el proyecto**
    -   Instalación editable, imports y comandos de ejecución.
-   **L11.7 --- Configuración**
    -   Variables de entorno, valores por defecto, secretos fuera del
        repositorio y `.env` solo con herramientas apropiadas.

**Práctica:** convertir el gestor en un proyecto instalable y documentar
cómo recrear el entorno.\
**Criterio de salida:** otra persona puede crear un entorno limpio e
instalar el proyecto siguiendo el README.

## U12. Git y colaboración

**Nivel:** Intermedio \| **Objetivo:** trabajar con control de versiones
y colaborar de manera segura.

-   **L12.1 --- Conceptos**
    -   Repositorio, working tree, staging, commit y remoto.
-   **L12.2 --- Flujo básico**
    -   `init`, `status`, `add`, `commit`, `log`, `diff`.
-   **L12.3 --- Ramas**
    -   Crear, cambiar, fusionar y borrar ramas.
-   **L12.4 --- Remotos**
    -   `clone`, `fetch`, `pull`, `push`, `origin` y autenticación.
-   **L12.5 --- Conflictos**
    -   Entender marcadores, resolver, probar y completar el merge.
-   **L12.6 --- Pull requests**
    -   Descripción, alcance pequeño, revisión y respuesta a
        comentarios.
-   **L12.7 --- Higiene del repositorio**
    -   `.gitignore`, no versionar secretos, archivos temporales ni
        entornos virtuales.
-   **L12.8 --- Commits profesionales**
    -   Mensajes claros, cambios pequeños y relación con incidencias.

**Práctica:** alojar el proyecto en un repositorio remoto, trabajar en
una rama y simular una revisión.\
**Criterio de salida:** realizar un flujo de rama--commit--push--pull
request y resolver un conflicto simple.

## U13. Testing y calidad automatizada

**Nivel:** Intermedio \| **Objetivo:** verificar comportamiento y
prevenir regresiones.

-   **L13.1 --- Fundamentos de pruebas**
    -   Pruebas unitarias, integración, sistema y aceptación.
    -   Arrange--Act--Assert y casos positivos, negativos y límite.
-   **L13.2 --- unittest o pytest**
    -   Elegir un framework principal; sintaxis, descubrimiento y
        ejecución.
-   **L13.3 --- Assertions y parametrización**
    -   Comprobar resultados, excepciones y múltiples entradas.
-   **L13.4 --- Fixtures y aislamiento**
    -   Preparación y limpieza, datos temporales y estado compartido.
-   **L13.5 --- Dobles de prueba**
    -   Mocks, stubs y fakes; cuándo ayudan y cuándo ocultan problemas.
-   **L13.6 --- Cobertura**
    -   Qué mide, qué no mide y cómo encontrar ramas sin probar.
-   **L13.7 --- Pruebas de archivos y base de datos**
    -   Recursos temporales, bases aisladas y limpieza reproducible.
-   **L13.8 --- Automatización**
    -   Ejecutar tests y checks antes de integrar cambios.

**Práctica:** cubrir lógica del gestor, persistencia y validaciones;
incluir casos límite y pruebas de regresión.\
**Criterio de salida:** escribir pruebas útiles y diagnosticar un fallo
de test sin modificarlo para que pase artificialmente.

## U14. Algoritmos y estructuras de datos para el trabajo junior

**Nivel:** Intermedio \| **Objetivo:** razonar sobre soluciones y su
coste.

-   **L14.1 --- Descomposición de problemas**
    -   Especificación, ejemplos, casos límite y pseudocódigo.
-   **L14.2 --- Complejidad**
    -   Intuición de Big O: constante, logarítmica, lineal, cuadrática.
    -   Tiempo frente a memoria; evitar análisis matemático innecesario.
-   **L14.3 --- Búsqueda**
    -   Lineal y binaria; precondiciones de búsqueda binaria.
-   **L14.4 --- Ordenación**
    -   Ordenación incorporada, clave de ordenación y estabilidad a
        nivel conceptual.
    -   Cuándo no implementar un algoritmo propio.
-   **L14.5 --- Estructuras fundamentales**
    -   Pila, cola, conjunto, mapa y casos de uso.
-   **L14.6 --- Recursividad**
    -   Caso base, paso recursivo, pila de llamadas y límites.
-   **L14.7 --- Resolución de ejercicios**
    -   Leer especificación, construir ejemplos, implementar, probar y
        mejorar.
-   **L14.8 --- Selección de solución**
    -   Legibilidad, coste, restricciones y uso de biblioteca estándar.

**Práctica:** resolver ejercicios graduados de búsqueda, conteo,
agrupación, filtrado y transformación.\
**Criterio de salida:** comparar dos soluciones y explicar su
complejidad aproximada.

------------------------------------------------------------------------

# PARTE III --- Desarrollo de aplicaciones

## U15. HTTP, APIs y formatos de intercambio

**Nivel:** Intermedio--Junior \| **Objetivo:** consumir servicios web y
comprender el contrato HTTP.

-   **L15.1 --- Fundamentos de redes para desarrolladores**
    -   Cliente/servidor, DNS de forma conceptual, URL, puerto y
        TLS/HTTPS.
-   **L15.2 --- HTTP**
    -   Métodos GET, POST, PUT, PATCH y DELETE.
    -   Headers, body, códigos de estado y ciclo petición--respuesta.
-   **L15.3 --- JSON en APIs**
    -   Serialización, deserialización, tipos y validación de
        respuestas.
-   **L15.4 --- Consumir APIs**
    -   `requests` o `httpx` según el objetivo; timeout, errores y
        parámetros.
    -   No asumir que toda respuesta es exitosa o JSON válido.
-   **L15.5 --- Autenticación**
    -   API keys y tokens como conceptos; cabeceras, variables de
        entorno y no exponer secretos.
-   **L15.6 --- Paginación y límites**
    -   Paginación, rate limits, reintentos prudentes y backoff
        introductorio.
-   **L15.7 --- Diseño de cliente**
    -   Separar acceso HTTP de lógica de negocio y probarlo con dobles
        adecuados.

**Práctica:** integrar una API pública y mostrar resultados en consola.\
**Criterio de salida:** consumir una API con timeout, manejo de errores
y configuración segura.

## U16. Bases de datos y SQL

**Nivel:** Intermedio--Junior \| **Objetivo:** persistir datos
relacionales y consultarlos.

-   **L16.1 --- Modelado relacional**
    -   Tablas, filas, columnas, claves primarias y foráneas.
-   **L16.2 --- SQL esencial**
    -   `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `WHERE`, `ORDER BY`,
        `LIMIT`.
-   **L16.3 --- Relaciones**
    -   Uno a uno, uno a muchos y muchos a muchos.
    -   `JOIN`, integridad referencial y normalización introductoria.
-   **L16.4 --- Agregaciones**
    -   `COUNT`, `SUM`, `AVG`, `GROUP BY` y `HAVING`.
-   **L16.5 --- SQLite desde Python**
    -   Conexión, cursor, parámetros y transacciones.
    -   Evitar concatenar entradas de usuario en SQL; consultas
        parametrizadas.
-   **L16.6 --- Esquema y migraciones**
    -   Crear tablas, restricciones y evolución controlada del esquema.
-   **L16.7 --- ORM como herramienta**
    -   Qué problema resuelve un ORM, modelos, sesiones y consultas.
    -   Comparar SQL directo con un ORM sin ocultar SQL.
-   **L16.8 --- Pruebas y rendimiento básico**
    -   Base temporal, índices introductorios y consultas verificables.

**Práctica:** migrar el almacenamiento del gestor desde JSON a SQLite.\
**Criterio de salida:** diseñar tablas sencillas, escribir joins y
ejecutar consultas seguras desde Python.

## U17. Construcción de APIs con Python

**Nivel:** Junior \| **Objetivo:** implementar un servicio web pequeño
con contrato claro.

-   **L17.1 --- Arquitectura mínima de una API**
    -   Rutas, controladores/handlers, servicios, repositorios y
        modelos.
    -   Separar HTTP de reglas de negocio.
-   **L17.2 --- Framework**
    -   Introducción práctica a FastAPI (o alternativa acordada).
    -   Instalación, aplicación, servidor de desarrollo y documentación
        automática.
-   **L17.3 --- Endpoints y métodos**
    -   Rutas, parámetros de ruta, query y body.
-   **L17.4 --- Validación y esquemas**
    -   Modelos de entrada/salida, tipos, campos requeridos y errores de
        validación.
-   **L17.5 --- Códigos de estado y errores**
    -   Respuestas correctas, recursos inexistentes, conflictos y
        errores internos.
-   **L17.6 --- Persistencia**
    -   Conectar API con capa de servicio y base de datos.
-   **L17.7 --- Configuración y seguridad básica**
    -   CORS cuando proceda, secretos, validación, límites de confianza
        y no filtrar trazas.
-   **L17.8 --- Pruebas de API**
    -   Cliente de pruebas, fixtures y base aislada.
-   **L17.9 --- Documentación de API**
    -   OpenAPI, ejemplos de petición/respuesta y contrato estable.

**Práctica:** exponer operaciones CRUD de tareas mediante una API.\
**Criterio de salida:** entregar una API con validación, persistencia,
pruebas y documentación de endpoints.

## U18. Concurrencia y asincronía: fundamentos

**Nivel:** Junior introductorio \| **Objetivo:** reconocer modelos de
ejecución y usar asincronía básica cuando esté justificada.

-   **L18.1 --- Proceso, hilo y tarea**
    -   Diferencias conceptuales y casos de uso.
-   **L18.2 --- I/O-bound frente a CPU-bound**
    -   Cuándo la concurrencia puede ayudar y cuándo no.
-   **L18.3 --- `async` y `await`**
    -   Coroutines, event loop y operaciones cooperativas.
-   **L18.4 --- Async I/O**
    -   Llamadas HTTP o acceso asíncrono con bibliotecas compatibles.
-   **L18.5 --- Errores y cancelación**
    -   Excepciones, timeout y cancelación a nivel introductorio.
-   **L18.6 --- Threading y multiprocessing**
    -   Panorama, límites del GIL según versión/implementación y
        elección prudente.
-   **L18.7 --- Criterios de uso**
    -   No introducir asincronía en una aplicación simple sin necesidad
        medible.

**Práctica:** comparar llamadas HTTP secuenciales y concurrentes con
límites y timeouts.\
**Criterio de salida:** explicar cuándo usar ejecución secuencial, async
o procesos, sin prometer mejoras automáticas.

## U19. Seguridad y robustez para aplicaciones junior

**Nivel:** Junior \| **Objetivo:** evitar errores comunes que
comprometen datos o servicios.

-   **L19.1 --- Principios básicos**
    -   Mínimo privilegio, validación, límites de confianza y manejo de
        secretos.
-   **L19.2 --- Inyección**
    -   SQL injection y consultas parametrizadas; comandos del sistema y
        cautelas.
-   **L19.3 --- Datos sensibles**
    -   No registrar contraseñas/tokens; configuración fuera del código
        y rotación conceptual.
-   **L19.4 --- Contraseñas**
    -   Hash de contraseñas con algoritmos especializados a través de
        bibliotecas mantenidas; nunca cifrado reversible ni hash rápido
        genérico.
-   **L19.5 --- Errores y exposición**
    -   No mostrar stack traces ni detalles internos a clientes.
-   **L19.6 --- Dependencias**
    -   Actualizaciones, vulnerabilidades conocidas y revisión de
        paquetes.
-   **L19.7 --- Validación y límites**
    -   Tamaño de entrada, tipos, permisos y archivos.
-   **L19.8 --- Checklist de seguridad**
    -   Revisar configuración, secretos, SQL, logs, errores y
        dependencias.

**Práctica:** realizar una revisión de seguridad básica del gestor/API y
corregir hallazgos didácticos.\
**Criterio de salida:** identificar riesgos comunes y proponer
mitigaciones proporcionadas.

## U20. Logging, observabilidad y configuración de aplicaciones

**Nivel:** Junior \| **Objetivo:** hacer que una aplicación sea
diagnosticable.

-   **L20.1 --- Logging estructurado**
    -   Niveles, contexto y mensajes accionables.
-   **L20.2 --- Configuración por entorno**
    -   Desarrollo, pruebas y ejecución; variables de entorno y valores
        por defecto seguros.
-   **L20.3 --- Health checks**
    -   Disponibilidad básica y comprobación de dependencias.
-   **L20.4 --- Métricas y trazas: panorama**
    -   Qué preguntas responden y cuándo son necesarias.
-   **L20.5 --- Diagnóstico**
    -   Correlacionar petición, logs, errores y pruebas sin registrar
        información sensible.

**Práctica:** incorporar configuración y logging coherentes a la API.\
**Criterio de salida:** diagnosticar un fallo simulado a partir de logs
útiles.

## U21. Despliegue y entrega

**Nivel:** Junior \| **Objetivo:** ejecutar el proyecto en un entorno
distinto al de desarrollo.

-   **L21.1 --- Desarrollo frente a producción**
    -   Configuración, dependencias, secretos y diferencias operativas.
-   **L21.2 --- Servidor y proceso**
    -   Comando de arranque, puerto, señales y logs.
-   **L21.3 --- Contenedores: fundamentos**
    -   Imagen, contenedor, Dockerfile y variables de entorno.
    -   Construir una imagen sencilla si el entorno del alumno lo
        permite.
-   **L21.4 --- Despliegue**
    -   Plataforma sencilla o servidor de prácticas; variables,
        persistencia y límites del plan gratuito.
-   **L21.5 --- Migraciones y datos**
    -   Preparar esquema, persistencia y copias de seguridad a nivel
        introductorio.
-   **L21.6 --- CI básica**
    -   Pipeline que instala dependencias y ejecuta lint y tests en cada
        cambio.
-   **L21.7 --- Verificación posterior**
    -   Comprobar endpoint, logs, configuración y procedimiento de
        rollback sencillo.

**Práctica:** desplegar una versión de la API en un entorno accesible o,
si no es posible, reproducir el proceso localmente con contenedor.\
**Criterio de salida:** documentar y repetir el proceso de entrega sin
depender de pasos ocultos.

------------------------------------------------------------------------

# PARTE IV --- Preparación profesional junior

## U22. Arquitectura, diseño y mantenimiento

**Nivel:** Junior \| **Objetivo:** organizar una aplicación pequeña sin
sobrediseñarla.

-   **L22.1 --- Separación de responsabilidades**
    -   Presentación, dominio, servicios y persistencia.
-   **L22.2 --- Acoplamiento y cohesión**
    -   Dependencias explícitas y límites entre módulos.
-   **L22.3 --- Principios SOLID: introducción pragmática**
    -   Explicar cada principio con ejemplos pequeños y advertir contra
        su aplicación mecánica.
-   **L22.4 --- Patrones habituales**
    -   Repository, Factory y Strategy como herramientas, no recetas.
-   **L22.5 --- Configuración y dependencias**
    -   Inyección sencilla y evitar singletons/globales innecesarios.
-   **L22.6 --- Refactorización guiada**
    -   Detectar duplicación, funciones extensas, dependencias
        circulares y abstracciones prematuras.
-   **L22.7 --- Decisiones técnicas**
    -   Documentar alternativas, trade-offs y motivos de una elección.

**Práctica:** revisar la arquitectura del proyecto y justificar una
refactorización pequeña.\
**Criterio de salida:** explicar el flujo de una petición desde la ruta
hasta la persistencia.

## U23. Lectura de código ajeno y colaboración en equipo

**Nivel:** Junior \| **Objetivo:** integrarse en un repositorio
existente.

-   **L23.1 --- Orientarse en un repositorio**
    -   README, árbol de archivos, configuración, dependencias y tests.
-   **L23.2 --- Seguir un flujo**
    -   Buscar símbolos, referencias, llamadas y puntos de entrada.
-   **L23.3 --- Investigar un bug**
    -   Reproducir, reducir, formular hipótesis y escribir test de
        regresión.
-   **L23.4 --- Issues y tareas**
    -   Aclarar requisitos, criterios de aceptación y alcance.
-   **L23.5 --- Revisiones de código**
    -   Feedback concreto, preguntas, riesgos y tono profesional.
-   **L23.6 --- Comunicación técnica**
    -   Describir cambios, bloqueos, incertidumbre y decisiones.
-   **L23.7 --- Uso responsable de IA**
    -   Verificar código generado, tests, licencias, seguridad y
        comprensión.
    -   No aceptar código que el alumno no pueda explicar.

**Práctica:** trabajar sobre un repositorio didáctico preparado por el
agente: localizar un bug, proponer cambio y redactar una pull request.\
**Criterio de salida:** realizar una modificación acotada en código
ajeno y explicar cómo verificó que funciona.

## U24. Proyecto final integrador

**Nivel:** Junior \| **Tipo:** proyecto \| **Objetivo:** demostrar
autonomía en un producto pequeño.

**Enunciado:** completar el gestor de tareas como aplicación Python con
API, persistencia y entrega reproducible.

**Requisitos funcionales mínimos:** - Crear, consultar, actualizar y
eliminar tareas. - Cada tarea tiene identificador, título, descripción
opcional, estado y fechas relevantes. - Filtrar por estado y buscar por
texto. - Validar entradas y responder con errores adecuados. - Persistir
datos en SQLite. - Exponer API HTTP documentada. - Proporcionar ejemplos
de uso.

**Requisitos técnicos mínimos:** - Código organizado en módulos con
responsabilidades claras. - Entorno y dependencias reproducibles. - Type
hints en interfaces relevantes. - Formateo y linting configurados. -
Tests unitarios y de integración para las rutas críticas. - SQL
parametrizado o capa ORM bien configurada. - Logging sin secretos ni
datos sensibles innecesarios. - Configuración por entorno. - README
completo. - Repositorio Git con historial comprensible. - Procedimiento
de ejecución y despliegue documentado.

**Entregables:** 1. Repositorio. 2. README y guía de instalación. 3.
Código fuente. 4. Tests y evidencia de ejecución. 5. Esquema de datos o
migraciones. 6. Documentación de API y ejemplos. 7. Breve documento de
decisiones técnicas y limitaciones conocidas. 8. Demostración o
recorrido explicado por el alumno.

**Rúbrica sugerida (100 puntos):** - Funcionalidad y cumplimiento: 20. -
Diseño, modularidad y legibilidad: 15. - Persistencia y manejo de datos:
10. - Tests y calidad automatizada: 15. - API, validación y manejo de
errores: 10. - Seguridad y configuración: 10. - Git, documentación y
reproducibilidad: 10. - Capacidad de explicar decisiones y depurar: 10.

**Umbral orientativo:** 70/100 y ningún fallo crítico de seguridad,
pérdida de datos o imposibilidad de ejecutar el proyecto. El agente debe
usar la rúbrica para dar feedback, no para fingir una certificación
laboral.

## U25. Evaluación de preparación laboral y plan de mejora

**Nivel:** Junior \| **Objetivo:** identificar fortalezas y brechas
concretas.

-   **L25.1 --- Prueba práctica de Python**
    -   Resolver una tarea con colecciones, funciones, errores y tests.
-   **L25.2 --- Lectura y depuración**
    -   Explicar un módulo desconocido y corregir un bug.
-   **L25.3 --- SQL y API**
    -   Consultas, modelado básico y explicación de endpoints.
-   **L25.4 --- Git y colaboración**
    -   Describir un flujo de trabajo y resolver un conflicto
        conceptual.
-   **L25.5 --- Entrevista técnica junior**
    -   Explicar decisiones, complejidad básica, pruebas y trade-offs.
-   **L25.6 --- Portfolio**
    -   Presentar el proyecto, README, capturas o demo y contribuciones.
-   **L25.7 --- Plan individual**
    -   Priorizar brechas, proponer ejercicios y definir siguiente
        especialización.

**Evidencia:** informe de competencias con nivel demostrado, ejemplos,
lagunas y plan de 2--4 semanas.

------------------------------------------------------------------------

# 4. Especializaciones opcionales (no necesarias para completar el nivel junior general)

El agente solo debe abrir estas rutas después de completar el núcleo o
cuando el usuario elija una especialización.

## Ruta A --- Automatización y scripting

-   Automatización de archivos y carpetas.
-   Excel/CSV y documentos con bibliotecas adecuadas.
-   Automatización de tareas repetitivas.
-   CLI con `argparse` o Typer.
-   Planificación de tareas y ejecución segura.
-   Integración con servicios y APIs.
-   Logging, reintentos y reportes.

## Ruta B --- Backend ampliado

-   Diseño REST más profundo y versionado.
-   Autenticación/autorización y permisos.
-   PostgreSQL, índices y transacciones.
-   ORM y migraciones en un proyecto real.
-   Caché y tareas en segundo plano: panorama.
-   Docker y CI/CD ampliados.
-   Observabilidad y pruebas de contrato.

## Ruta C --- Datos

-   NumPy y pandas.
-   Limpieza y transformación de datos.
-   Exploración y visualización.
-   Calidad y validación de datos.
-   Consultas SQL analíticas.
-   Notebooks frente a módulos reutilizables.
-   Proyecto de análisis reproducible.

## Ruta D --- Aplicaciones de escritorio

-   GUI con un framework mantenido.
-   Eventos, estado y separación de lógica/interfaz.
-   Persistencia local.
-   Empaquetado y distribución.
-   Pruebas de lógica y usabilidad básica.

## Ruta E --- Automatización de pruebas / QA

-   Diseño de casos y estrategia de pruebas.
-   pytest avanzado.
-   Pruebas de API y navegador con herramientas adecuadas.
-   Fixtures, datos de prueba y mocks.
-   Reportes, CI y análisis de fallos.

------------------------------------------------------------------------

# 5. Hitos de dominio y puertas de avance

  -----------------------------------------------------------------------
  Hito                    Unidades                Evidencia mínima
  ----------------------- ----------------------- -----------------------
  H1 --- Primeros         U0--U2                  Scripts propios con
  programas                                       variables,
                                                  entrada/salida y
                                                  control de flujo

  H2 --- Programas        U3--U7                  Gestor de tareas
  estructurados                                   modular, persistente y
                                                  documentado

  H3 --- Python           U8--U14                 Diseño razonado,
  intermedio                                      herramientas, Git y
                                                  pruebas

  H4 --- Aplicación       U15--U18                API consumida, SQL y
  conectada                                       API propia

  H5 --- Entrega junior   U19--U25                Proyecto final probado,
                                                  documentado y
                                                  ejecutable
  -----------------------------------------------------------------------

El agente debe evaluar cada hito con una tarea nueva, no solo con
preguntas de memoria. Si el alumno no alcanza un criterio, debe asignar
refuerzo focalizado y volver a evaluar.

# 6. Fuentes de referencia recomendadas

Priorizar documentación oficial y recursos mantenidos. Verificar versión
y vigencia al preparar cada lección.

-   Tutorial oficial de Python: https://docs.python.org/3/tutorial/
-   Biblioteca estándar: https://docs.python.org/3/library/
-   Guía de instalación de Python: https://www.python.org/downloads/
-   PEP 8: https://peps.python.org/pep-0008/
-   Packaging Python: https://packaging.python.org/
-   Documentación de Git: https://git-scm.com/doc
-   pytest: https://docs.pytest.org/
-   Ruff: https://docs.astral.sh/ruff/
-   FastAPI: https://fastapi.tiangolo.com/
-   SQLite: https://www.sqlite.org/docs.html
-   HTTP Semantics (RFC 9110): https://www.rfc-editor.org/rfc/rfc9110

No convertir esta lista en una obligación de leerlo todo. El agente debe
seleccionar fuentes pertinentes y enlazar la documentación exacta que
sustente cada lección.

# 7. Instrucción de arranque para el agente

Cuando recibas este documento:

1.  Lee `SKILL_DESARROLLO_LECCIONES_PYTHON.md` completo.
2.  Presenta al alumno un resumen breve del itinerario y explica cómo se
    avanzará.
3.  Pregunta únicamente lo imprescindible para adaptar el entorno
    (sistema operativo y editor, si no se conocen). No conviertas el
    inicio en un cuestionario largo.
4.  Comienza por **Qué es programar y qué es Python**, siguiendo la
    skill.
5.  Al terminar cada lección, solicita la respuesta o evidencia del
    alumno, evalúala con criterios explícitos y recomienda el siguiente
    paso.
6.  No generes la siguiente lección hasta recibir la señal del alumno o
    una instrucción explícita para continuar.
7.  Usa el título descriptivo en lecciones, archivos y registro de
    progreso; deja los códigos del índice solo en este documento.
