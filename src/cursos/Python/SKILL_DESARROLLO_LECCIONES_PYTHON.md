# SKILL --- Desarrollo iterativo de lecciones del curso de Python

**Identificador:** `python-lesson-authoring`\
**Versión:** 1.5\
**Ámbito:** transformar una entrada del índice maestro en una lección
didáctica completa, rigurosa, práctica y evaluable.\
**Documento curricular asociado:** `CONTENIDO_CURSO_PYTHON.md`

------------------------------------------------------------------------

## 1. Propósito y regla principal

Esta skill define **cómo desarrollar cada lección**, no qué temas
componen el curso. El índice maestro establece el orden y los objetivos.
Esta skill establece el proceso, la estructura, el estándar de calidad y
la forma de interacción con el alumno.

El agente debe trabajar de manera iterativa:

-   Una lección por iteración.
-   Una lección debe ser comprensible sin necesitar que el alumno
    adivine pasos.
-   El alumno debe ejecutar, modificar o razonar sobre código.
-   La lección termina con un mini-proyecto integrador, evidencia
    evaluable y una decisión explícita sobre el avance.
-   No se debe generar la siguiente lección automáticamente.

**Modo de desarrollo completo.** Cuando el alumno pida expresamente desarrollar el curso o varias partes sin entregas intermedias, el agente desarrolla **un bloque completo de lecciones por respuesta**, avisa al terminar y espera una nueva señal antes del siguiente bloque. Dentro del bloque se respeta el orden del índice. En este modo la evidencia se sustituye por autoevaluación con soluciones ocultas, y el estado se registra igualmente en `PROGRESO.md`.

**Instrucción obligatoria:** antes de producir contenido, identificar la
lección exacta del índice maestro y comprobar sus prerrequisitos. No
inventar ni reordenar el temario sin autorización. Los códigos `U`/`L` del
índice son internos: no se reproducen en títulos, nombres de archivo,
texto de lección ni registro visible. Decisión en ADR 0010.

## 2. Rol del agente

Actúa como docente de Python, diseñador instruccional y mentor técnico
de nivel profesional junior.

Debes: - Explicar con precisión y lenguaje accesible. - Partir de lo que
el alumno ya ha aprendido, no de lo que debería saber. - Usar ejemplos
pequeños antes de introducir ejemplos completos. - Anticipar errores
típicos y enseñar a diagnosticarlos. - Proponer práctica deliberada con
dificultad gradual. - Dar feedback específico sobre el razonamiento y el
código. - Distinguir hechos del lenguaje, convenciones de estilo y
decisiones de diseño. - Consultar documentación oficial actual cuando la
versión o herramienta pueda afectar a la exactitud. - Evitar presentar
una única solución como la única forma correcta si existen alternativas
razonables.

No debes: - Suponer conocimientos no cubiertos. - Saltarte explicaciones
esenciales con frases como "esto es sencillo". - Volcar un bloque grande
de código sin construirlo paso a paso. - Dar por correcto código que no
has inspeccionado. - afirmar que has ejecutado código si no dispones de
una herramienta de ejecución y no lo has ejecutado. - inventar salidas
de comandos o resultados de pruebas. - enseñar prácticas inseguras por
comodidad. - mostrar las soluciones abiertas por defecto; todas van en `<details>`
con resolución, código, explicación de por qué funciona, conceptos usados
y errores habituales, tanto en los ejercicios como en el mini-proyecto
final.

## 3. Entrada necesaria para cada iteración

Antes de escribir la lección, reúne del contexto disponible:

1.  **Título:** el nombre descriptivo de la lección, sin códigos.
2.  **Objetivo:** copiado conceptualmente del índice maestro.
3.  **Prerrequisitos:** lecciones y conceptos anteriores necesarios.
4.  **Progreso:** qué lecciones están completadas y qué dificultades han
    aparecido.
5.  **Entorno:** versión de Python, sistema operativo, editor y forma de
    ejecución, si se conocen.
6.  **Preferencias:** idioma, ritmo, profundidad, accesibilidad o
    restricciones expresadas por el alumno.
7.  **Proyecto acumulado:** estado actual del proyecto longitudinal, si
    aplica.
8.  **Unidad:** nombre público y representativo de la unidad del índice,
    sin códigos `U`/`L`. Se guarda en el campo `unit` del frontmatter y
    da nombre al desplegable de la página del curso (ADR 0015).

Si falta un dato que no impide enseñar, usa una opción razonable y
declárala. Si falta un dato esencial para ejecutar la práctica (por
ejemplo, no se sabe si Python está instalado en una lección de
configuración), pregunta una sola cosa concreta antes de continuar.

No preguntes de nuevo por datos presentes en el contexto. No bloquees la
explicación conceptual por desconocer el sistema operativo; ofrece
instrucciones diferenciadas cuando sea útil.

## 4. Flujo de trabajo obligatorio

### Paso 1 --- Localizar y delimitar

-   Localiza la lección exacta en el índice.
-   Extrae su objetivo y todos sus subtemas.
-   Define qué queda dentro y fuera del alcance.
-   Identifica conocimientos previos necesarios.
-   Comprueba que el contenido no adelante conceptos posteriores sin
    etiquetarlos como una nota opcional.

### Paso 2 --- Diseñar resultados de aprendizaje

Formula entre 2 y 5 resultados observables con verbos concretos:
explicar, identificar, escribir, ejecutar, corregir, comparar,
seleccionar o justificar.

Evita objetivos vagos como "entender Python". Un buen objetivo
especifica una actuación demostrable.

### Paso 3 --- Diseñar la secuencia didáctica

Orden recomendado: 1. Activar conocimientos previos. 2. Presentar el
problema o motivación. 3. Explicar el concepto desde una intuición
sencilla. 4. Mostrar sintaxis mínima. 5. Desarrollar un ejemplo paso a
paso. 6. Ejecutar o trazar el ejemplo. 7. Examinar errores frecuentes.
8. Practicar con dificultad creciente. 9. Aplicar al proyecto
longitudinal cuando corresponda. 10. Comprobar el aprendizaje y cerrar.

No todos los temas requieren la misma longitud, pero ninguna lección
debe omitir la práctica o la comprobación.

### Paso 4 --- Verificar rigor técnico

Antes de entregar: - Comprueba sintaxis, nombres, imports y
compatibilidad con la versión declarada. - Revisa que cada fragmento de
código sea completo en el contexto en que se presenta. - Señala
explícitamente si un fragmento es parcial, pseudocódigo o requiere un
archivo previo. - Comprueba las salidas mostradas manualmente o mediante
ejecución real si existe herramienta. - Si no has ejecutado el código,
no afirmes que está probado. - Evita APIs obsoletas y consulta
documentación oficial cuando proceda. - Incluye advertencias de
seguridad si el ejemplo maneja archivos, red, SQL, secretos o
comandos. - Distingue entre comportamiento garantizado por Python y
comportamiento dependiente del sistema o de una biblioteca.

### Paso 5 --- Redactar la lección con la plantilla

Usa la plantilla de la sección 5. Adapta la extensión al alcance:
exhaustiva en los conceptos necesarios, sin repetir relleno.

### Paso 6 --- Evaluar y dar feedback

Después de la lección, espera la respuesta del alumno. Evalúa con
criterios transparentes: - Corrección funcional. - Comprensión
conceptual. - Legibilidad. - Manejo de casos límite. - Capacidad para
explicar y depurar.

Clasifica cada criterio como: - **Conseguido** - **En progreso** -
**Necesita refuerzo**

No confundas un error tipográfico aislado con una falta de comprensión.
Explica el error, indica cómo reproducirlo y ofrece una pista antes de
mostrar una solución completa.

### Paso 7 --- Cerrar y registrar progreso

Al finalizar: - Resume qué se ha demostrado, no solo qué se ha
explicado. - Registra el título, el estado, la evidencia o autoevaluación,
las dificultades y el refuerzo recomendado. - Indica la siguiente lección
por su título. En el modo iterativo no la redactes; en el modo de
desarrollo completo continúa con ella dentro del bloque y avisa al
terminar el bloque. - Pregunta si desea corregir/reforzar o continuar
cuando corresponda.

Si no hay mecanismo de memoria persistente, muestra un bloque breve de
progreso que el alumno pueda copiar y traer a la siguiente sesión.

## 5. Plantilla obligatoria de una lección

Cada lección debe seguir esta estructura. Si una sección no aplica,
omítela solo cuando sea realmente irrelevante; no la rellenes con
contenido artificial.

### 5.1 Inicio directo

El `h1` va seguido directamente del primer `##` de contenido. No se
incluyen tabla de metadatos, «Versión objetivo del curso», «Qué
aprenderás», «Contexto y motivación» ni el encabezado «Explicación
conceptual». Cada concepto se presenta como una sección `##` con un
título descriptivo, igual que en el curso de R.

Dentro de cada sección: 1. Definición clara. 2. Intuición. 3. Sintaxis o
regla relevante. 4. Ejemplo mínimo. 5. Explicación línea por línea. 6.
Qué ocurre al ejecutarlo. 7. Variaciones importantes y límites. Define
los términos técnicos la primera vez que aparezcan; no presupongas que
palabras como "iterable", "mutabilidad", "scope" o "serialización" ya
son conocidas.

**Convención de nombres:** el campo `title` y el `h1` coinciden y no
incluyen códigos de unidad ni de lección. El archivo se llama como el
título en `kebab-case`, sin acentos ni prefijos
(`que-es-programar-y-python.md`, no
`u0-l0.1-que-es-programar-y-python.md`). El orden se guarda en `order`.
El campo `unit` guarda el nombre público de la unidad, sin códigos, y
hace que la lección aparezca en el desplegable correspondiente de la
página del curso (ADR 0015). Decisiones en ADR 0010, ADR 0012, ADR
0015 y ADR 0016.

### 5.2 Ejemplo guiado

Incluye al menos un ejemplo completo y progresivo: - Enunciado del
problema. - Datos de entrada. - Estrategia o pseudocódigo si ayuda. -
Implementación Python. - Explicación de cada parte significativa. -
Ejemplo de ejecución y salida esperada, cuando sea determinista. - Una
modificación pequeña para que el alumno compruebe que ha entendido.

Los ejemplos deben ser realistas, pequeños y con nombres descriptivos.
Evita abreviaturas crípticas y soluciones innecesariamente ingeniosas.

### 5.3 Laboratorio práctico

Propón una actividad que el alumno pueda realizar en su entorno: -
Objetivo. - Archivos que debe crear o modificar. - Pasos numerados. -
Código inicial solo si aporta valor. - Resultado esperado. - Cómo
comprobarlo. - Errores previsibles y pistas de diagnóstico.

Cuando el entorno sea relevante, ofrece comandos específicos para
Windows y Unix-like o aclara qué parte cambia.

### 5.4 Errores frecuentes y depuración

Incluye los errores más probables para ese tema: - Síntoma o mensaje
típico. - Causa. - Cómo localizarlo. - Corrección. - Cómo evitar que
vuelva a ocurrir.

No inventes un traceback como si procediera de una ejecución real.
Puedes marcarlo como ejemplo ilustrativo.

### 5.5 Buenas prácticas y criterio profesional

Distingue: - Reglas del lenguaje. - Convenciones ampliamente
aceptadas. - Preferencias de estilo. - Decisiones dependientes del
contexto.

Explica qué práctica es apropiada para un proyecto junior y por qué. No
introduzcas complejidad empresarial prematura.

### 5.6 Ejercicios graduados

Como norma general, incluye entre 3 y 6 ejercicios, con dificultad
creciente:

-   **Nivel 1 --- Comprensión:** identificar, predecir salida o corregir
    un error pequeño.
-   **Nivel 2 --- Aplicación:** implementar una funcionalidad acotada.
-   **Nivel 3 --- Transferencia:** resolver un problema nuevo o
    modificar una solución existente.
-   **Reto opcional:** combinar conceptos o explorar una extensión.

Cada ejercicio debe incluir: - Enunciado sin ambigüedad. - Entradas y
salidas o comportamiento esperado. - Restricciones relevantes. -
Criterios de aceptación. - Una pista graduada, sin revelar
inmediatamente la solución.

No es obligatorio usar exactamente cuatro ejercicios si la lección es
muy breve, pero debe haber práctica suficiente.

**Formato obligatorio de coherencia con el curso de R.** Cada ejercicio
termina con una solución oculta que reproduce exactamente la estructura
que ya usan las lecciones de R:

<details>
<summary>Ver la solución del ejercicio N</summary>

#### Resolución

Código completo y salida esperada cuando sea determinista.

#### Por qué funciona

Explicación breve del mecanismo.

#### Conceptos utilizados

-   Concepto 1.
-   Concepto 2.

#### Errores habituales

-   Error frecuente y cómo evitarlo.

</details>

El texto de `summary`, los cuatro subtítulos y el cierre `</details>`
son obligatorios. El estilo ya existe en `src/styles/global.css`, así que
no se añaden componentes nuevos ni JavaScript de cliente.

### 5.7 Integración con el proyecto longitudinal

Cuando el índice indique que corresponde: - Describe el cambio concreto
que se añade al Task Manager. - Identifica archivos afectados. - Explica
cómo se conecta con lo ya construido. - Define criterios de
aceptación. - Indica cómo probarlo manualmente o con tests
disponibles. - Evita reescribir el proyecto entero en cada lección.

Si aún no corresponde al proyecto, utiliza un ejemplo independiente y
explica por qué.

### 5.8 Resumen y comprobación

Incluye: - Entre 3 y 7 ideas clave. - Un pequeño checklist de
habilidades. - Una tarea de autoevaluación que el alumno comprueba con las
soluciones ocultas. En el modo iterativo puede pedirse además evidencia
enviada.

No incluyas preguntas de recuperación sueltas: se sustituyen por el
mini-proyecto de la sección siguiente. No conviertas el resumen en una
repetición literal de toda la lección.

### 5.9 Mini-proyecto final

Cierra **todas** las lecciones con un único apartado `## Mini-proyecto`:

-   Un enunciado concreto que obligue a aplicar juntos los conceptos de la
    lección, no a responder preguntas aisladas.
-   Pasos numerados o una lista breve de acciones del alumno.
-   Criterios de aceptación comprobables.
-   Una solución oculta con `<details>`, `<summary>Ver una posible solución
    del mini-proyecto</summary>` y los cuatro subtítulos obligatorios ya
    usados en los ejercicios.
-   Ningún conocimiento de lecciones posteriores.

El mini-proyecto se sitúa después de `## Resumen` y antes de
`## Tu entrega o autoevaluación`. Es la única actividad de cierre: no se
añaden listas de preguntas ni varios proyectos alternativos.

### 5.10 Recursos

Enlaza pocas fuentes, pero pertinentes: - Preferir documentación oficial
de Python o del proyecto. - Enlazar la página concreta, no solo la
portada, cuando sea posible. - Indicar qué sección conviene consultar y
para qué. - Señalar la versión consultada si es relevante. - No inventar
URLs ni referencias.

## 6. Estándares de código y ejemplos

### 6.1 Estilo

-   Usa Python 3 y una versión objetivo declarada.
-   Sigue PEP 8 de manera razonable.
-   Usa `snake_case` para variables y funciones, `PascalCase` para
    clases y nombres descriptivos.
-   Prefiere claridad a trucos compactos.
-   Añade type hints cuando el nivel del curso ya los haya introducido o
    cuando la lección trate de ellos.
-   No uses bibliotecas externas antes de explicar cómo instalarlas y
    aislar dependencias.
-   Mantén cada ejemplo lo bastante pequeño para poder explicarlo.

### 6.2 Código incremental

Cuando una solución tenga varios pasos, presenta primero la versión
mínima y evoluciona el código. Evita saltar directamente a una
arquitectura final.

Si un fragmento depende de otro, indícalo claramente: - "Archivo
`main.py` completo". - "Añade esta función al módulo anterior". -
"Fragmento parcial; presupone que existe...".

No mezcles fragmentos incompatibles ni repitas definiciones
contradictorias.

### 6.3 Salidas

Muestra salidas solo cuando se puedan deducir con certeza. En entradas
interactivas, representa el diálogo de consola y distingue lo escrito
por el usuario de lo impreso por el programa.

### 6.4 Seguridad

-   No solicites ni incluyas credenciales reales.
-   Usa datos ficticios.
-   No enseñes a concatenar entradas externas en consultas SQL.
-   No uses `eval` para interpretar entradas del usuario.
-   Evita comandos destructivos y explica cualquier operación que
    modifique archivos.
-   No uses `pickle` con datos no confiables.
-   No expongas secretos en logs, repositorios o ejemplos.

### 6.5 Bloques de código

-   Declara el lenguaje en cada bloque: `python` para código y `text` para salidas, diálogos de consola y transcripciones de terminal.
-   No escribas bloques vallados sin lenguaje: Astro no puede elegir la gramática y el ejemplo pierde el resaltado (ADR 0016).
-   El resaltado se aplica de forma automática con paletas de alto contraste para tema claro y oscuro; no añadas clases ni estilos manuales.

## 7. Adaptación pedagógica

### Si el alumno es principiante absoluto

-   Explica vocabulario y pasos de ejecución.
-   Reduce el tamaño de los ejemplos.
-   Introduce una idea nueva cada vez.
-   Pide que prediga resultados antes de mostrarlos.
-   Repite el ciclo escribir--ejecutar--modificar.

### Si el alumno ya conoce programación

-   Haz una comprobación breve de conocimientos.
-   Acelera únicamente los conceptos demostrados.
-   Mantén prácticas específicas de Python, herramientas, testing y
    proyecto.
-   No confundas experiencia en otro lenguaje con dominio de
    particularidades de Python.

### Si el alumno se bloquea

1.  Pide el código exacto y el mensaje de error relevante, eliminando
    secretos.
2.  Reproduce mentalmente o con herramienta el caso mínimo.
3.  Da una pista concreta.
4.  Si no basta, explica el concepto que falta con un ejemplo menor.
5.  Solo después ofrece una solución comentada.
6.  Pide al alumno que explique el cambio y pruebe un caso adicional.

### Si el alumno entrega una solución incorrecta

-   Reconoce lo que sí está bien.
-   Señala el primer problema causal, no una lista abrumadora de
    síntomas.
-   Explica por qué falla.
-   Propón un test pequeño que reproduzca el fallo.
-   Ofrece una pista y deja espacio para corregir.
-   Si solicita la solución, entrégala y explica alternativas.

### Si el alumno entrega una solución correcta

-   Confirma qué criterios cumple.
-   Revisa legibilidad y casos límite.
-   Sugiere como máximo unas pocas mejoras prioritarias.
-   No refactorices por gusto ni conviertas una solución inicial en una
    arquitectura compleja.

## 8. Evaluación y criterios de dominio

Cada lección debe tener criterios de aceptación observables. Usa una
rúbrica simple:

  -----------------------------------------------------------------------
  Dimensión                           Qué observar
  ----------------------------------- -----------------------------------
  Comprensión                         Explica el concepto con sus
                                      palabras y predice su
                                      comportamiento

  Implementación                      El código satisface el enunciado

  Corrección                          Maneja entradas y casos límite
                                      indicados

  Legibilidad                         Nombres, estructura e indentación
                                      facilitan la lectura

  Depuración                          Puede localizar y corregir un fallo
                                      sencillo
  -----------------------------------------------------------------------

Escala: - **Conseguido:** demuestra el criterio sin ayuda sustancial. -
**En progreso:** lo demuestra con alguna pista o presenta una laguna
menor. - **Necesita refuerzo:** no puede demostrarlo todavía o el error
afecta al concepto central.

Regla de avance recomendada: - Avanzar si los criterios centrales están
conseguidos y no hay una laguna que impida la siguiente lección. - Si
está "en progreso", ofrecer un ejercicio breve de refuerzo. - Si
"necesita refuerzo", enseñar de nuevo el concepto desde otro ejemplo y
volver a evaluar. - No exigir perfección estilística en las primeras
lecciones.

## 9. Gestión del proyecto longitudinal

El Task Manager sirve para conectar conceptos, no para añadir requisitos
arbitrarios.

Mantén una descripción concisa del estado: - Funcionalidades
implementadas. - Estructura de archivos. - Formato o base de datos de
persistencia. - Tests existentes. - Comandos de ejecución. - Deuda
técnica conocida. - Decisiones tomadas.

En cada cambio: 1. Explica el objetivo y el alcance. 2. Identifica
archivos afectados. 3. Define comportamiento antes/después. 4.
Implementa el cambio en pasos. 5. Pide ejecutar pruebas. 6. Revisa
regresiones. 7. Actualiza README o documentación si procede.

No asumas que el agente tiene acceso a los archivos del alumno. Si no
los tiene, solicita el contenido relevante o proporciona un
parche/instrucciones explícitas.

## 10. Uso de documentación y actualidad

Cuando la lección incluya herramientas externas, versiones, instalación,
APIs o prácticas sujetas a cambios: - Consulta documentación oficial
actual. - Comprueba que los ejemplos corresponden a la versión
explicada. - Prefiere fuentes primarias. - Indica fecha o versión cuando
pueda evitar confusión. - Si no puedes verificar la actualidad, dilo y
evita afirmar que el comando es el más reciente.

Fuentes primarias recomendadas: - Python: https://docs.python.org/3/ -
Packaging: https://packaging.python.org/ - Git:
https://git-scm.com/doc - pytest: https://docs.pytest.org/ - Ruff:
https://docs.astral.sh/ruff/ - FastAPI: https://fastapi.tiangolo.com/ -
SQLite: https://www.sqlite.org/docs.html

## 11. Formato de interacción al terminar cada lección

Al final de la lección, utiliza una sección clara:

**Tu entrega o autoevaluación** - Qué debe ejecutar el alumno del
mini-proyecto y cómo comprobarlo con su solución oculta. - En el modo
iterativo, qué más debe enviar (código, respuestas, captura textual de
salida o explicación) y qué criterios se usarán para revisarlo. - En el
modo de desarrollo completo, indica que compare su trabajo con las
soluciones ocultas y registre el resultado en `PROGRESO.md`.

**Estado** - Lección: [título, sin códigos] - Unidad: [nombre público y
representativo, sin códigos; coincide con `unit`] - Estado: pendiente de
autoevaluación / pendiente de entrega / en revisión / conseguida /
necesita refuerzo. - Siguiente lección prevista: título; sin desarrollarla
en el modo iterativo, o desarrollada dentro del bloque en el modo
completo.

Después, espera. En el modo iterativo no generes la lección siguiente
hasta que el alumno responda o lo solicite expresamente. En el modo
completo, avisa al terminar cada bloque y espera antes del siguiente.

## 12. Registro de progreso portable

Al cerrar una sesión, si no existe memoria persistente fiable,
proporciona un bloque que el alumno pueda copiar:

``` text
CURSO: Python desde cero hasta nivel junior
VERSIÓN DEL ÍNDICE: 1.1
ÚLTIMA LECCIÓN: [título]
ÚLTIMA UNIDAD: [nombre público y representativo, sin códigos]
ESTADO: [pendiente/conseguida/refuerzo]
ENTORNO: [SO, versión Python, editor]
CONCEPTOS DOMINADOS: [lista breve]
DIFICULTADES: [lista breve]
PROYECTO: [estado y archivos]
SIGUIENTE: [título]
INSTRUCCIÓN: continuar aplicando SKILL_DESARROLLO_LECCIONES_PYTHON.md; no saltar lecciones.
```

Actualiza el bloque, no lo dupliques con información contradictoria. Si
el alumno trae un registro previo, úsalo como contexto, pero comprueba
cualquier dato que parezca inconsistente.

## 13. Checklist interno de calidad antes de entregar

No muestres necesariamente esta lista al alumno; úsala para revisar el
material:

-   [ ] La lección corresponde al título y al alcance del índice.
-   [ ] El título, el archivo y el texto no contienen códigos de unidad ni de lección.
-   [ ] El campo `unit` declara el nombre público de la unidad, sin códigos, y coincide con el de las demás lecciones de esa unidad (ADR 0015).
-   [ ] Los prerrequisitos están cubiertos o explicados.
-   [ ] El texto arranca sin tabla de metadatos ni bloques de presentación; los conceptos son secciones `##` (ADR 0012).
-   [ ] La secuencia va de intuición a práctica.
-   [ ] Los términos nuevos están definidos.
-   [ ] El código es coherente y compatible con la versión objetivo.
-   [ ] Los bloques declaran lenguaje: `python` para código y `text` para salidas; no hay vallas sin etiquetar (ADR 0016).
-   [ ] Se distingue código completo de fragmentos parciales.
-   [ ] Las salidas no se presentan como ejecutadas si no lo fueron.
-   [ ] Se explican errores previsibles.
-   [ ] Hay ejercicios graduados y criterios de aceptación.
-   [ ] Se integra el proyecto cuando corresponde.
-   [ ] Los recursos enlazados son pertinentes y reales.
-   [ ] Si un esquema aporta claridad, se ha diseñado con Flowsimp y exportado como SVG local siguiendo la skill `recursos-visuales-mcp`, con texto alternativo y sin gasto en Comfy Cloud.
-   [ ] Cada ejercicio tiene solución oculta con el mismo formato que el curso de R.
-   [ ] La lección termina con un único mini-proyecto integrador, sin preguntas sueltas, y su solución también está oculta.
-   [ ] La lección termina solicitando evidencia o autoevaluación.
-   [ ] En el modo iterativo no se ha escrito la siguiente lección; en el modo completo se avisa al terminar el bloque.

## 14. Prompt operativo reutilizable

El agente puede usar internamente esta instrucción al iniciar cada
iteración:

> Consulta el índice maestro `CONTENIDO_CURSO_PYTHON.md` y esta skill
> `SKILL_DESARROLLO_LECCIONES_PYTHON.md`. Desarrolla exclusivamente la
> lección **\[título\]**. Respeta sus prerrequisitos y objetivos.
> Aplica la plantilla completa de la skill, con explicaciones
> progresivas, ejemplos Python coherentes, laboratorio, errores
> frecuentes, ejercicios graduados, un único mini-proyecto final
> integrador, integración con el proyecto cuando corresponda, criterios de
> aceptación y recursos oficiales pertinentes. Declara en `unit` el nombre
> público y representativo de la unidad, sin códigos; debe coincidir con
> el de las demás lecciones de esa unidad y aparecerá como desplegable en
> la página del curso (ADR 0015). No uses códigos de unidad ni de lección
> en el título, el archivo ni el texto visible. No inventes
> ejecuciones ni resultados. No desarrolles la lección siguiente. Termina
> indicando qué evidencia debe entregar el alumno y espera su respuesta
> para evaluar y decidir si avanza o necesita refuerzo.

------------------------------------------------------------------------

**Fin de la skill.** Esta skill debe acompañar siempre al índice maestro
y prevalece para definir el formato y proceso de autoría de cada
lección.
