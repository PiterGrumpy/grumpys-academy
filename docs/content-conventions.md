# Convenciones de contenido

Aplica al curso de R y a cualquier contenido que se añada en el futuro.

## Nombres y rutas

- Identificadores en `kebab-case`, minúsculas y sin acentos: `introduccion-a-variable`, no `Introducción a Variable`.
- Un identificador describe el contenido, no su posición: `vectores-y-matrices`, no `leccion2`.
- El curso de Python sigue la misma regla que el de R desde ADR 0010: `que-es-programar-y-python.md`, no `u0-l0.1-que-es-programar-y-python.md`. El `title` y el `h1` coinciden y no incluyen códigos de unidad ni de lección. Los códigos del índice maestro son internos y no se publican.
- El orden se guarda en el campo `order`, no en el nombre del archivo.
- Las URLs resultantes son limpias, estables y en minúsculas.

## Metadatos

Esquemas actuales en `src/content.config.ts`:

```yaml
# src/content/courses/r.md
title: 'Introducción a R' # obligatorio, string
description: 'Descripción breve' # obligatorio, string
image: '/images/r-logo.svg' # opcional, string: logo de la tarjeta

# src/content/lessons/*.md
title: 'Vectores y matrices' # obligatorio, string
description: 'Idea principal de la lección' # obligatorio, string
course: r # obligatorio, string: id de la entrada de courses
order: 2 # obligatorio, entero positivo y único dentro del curso
unit: 'Primeros Pasos' # opcional, string: nombre público de la unidad
```

Los campos se ampliarán solo cuando un contenido real lo exija. No se añadirán metadatos especulativos.

El campo opcional `unit` guarda el nombre representativo de la unidad, sin códigos `U` ni `L`. La página del curso genera un desplegable `<details>` por unidad usando ese nombre como `<summary>` (ADR 0015). En Python, las cinco lecciones iniciales usan `Antes de empezar` y las seis de sintaxis, valores y variables usan `Primeros Pasos`. Las lecciones que no declaran `unit` —por ahora las del curso de R— se muestran en una lista plana. Para publicar una unidad nueva basta con dar el mismo `unit` a sus lecciones; no se edita la ruta ni la interfaz.

## Organización

- `src/content/courses/`: una entrada por curso (`r.md`, `python.md`).
- `src/content/lessons/`: una entrada por lección, con `course` y `order`.
- `src/cursos/R/`: PDF originales entregados por el usuario. Son material de referencia; no se publican ni se cargan como contenido.
- `public/images/`: ilustraciones SVG locales. Se sirven tal cual; el logo de cada curso se referencia desde el campo `image` del frontmatter.

No existe todavía una colección de módulos. Si el curso crece, se documentará la decisión antes de crearla.

## Redacción Markdown

- Un `h1` por documento; después `h2`, `h3`, `h4` sin saltos.
- El `h1` va seguido directamente del contenido: sin tabla de metadatos, sin «Versión objetivo del curso», sin «Qué aprenderás», sin «Contexto y motivación» y sin el encabezado «Explicación conceptual». Los conceptos se presentan como apartados `##` con títulos descriptivos. Decisión en [ADR 0012](decisions/0012-lecturas-directas-sin-bloques-de-presentacion.md).
- Bloques de código con lenguaje explícito: `r`, `python` o `text` para salidas y transcripciones de terminal. Astro aplica el resaltado con paletas de alto contraste según el tema (ADR 0016).
- En el curso de R se usa `=` para asignar (`numero = 10`). Se menciona `<-` como forma tradicional que aparece en la documentación, y se distingue tanto de los argumentos nombrados dentro de funciones como de `==` para comparar. Decisión en ADR 0005.
- El resultado esperado se muestra en un bloque `text` después del código cuando aporte claridad.
- Consejos y advertencias como blockquote con etiqueta en negrita: `> **Consejo:** ...`, `> **Advertencia:** ...`.
- Ejercicios integrados en la lección, con enunciado, pista o criterios de éxito cuando ayuden, y solución en `<details>` con `<summary>` descriptivo.
- Cada lección termina con un único apartado `## Mini-proyecto`: enunciado integrador, criterios de aceptación y solución oculta. No se usan listas de preguntas de recuperación como cierre. Decisión en [ADR 0008](decisions/0008-ancho-miniproyecto-y-navegacion-de-lecciones.md).
- Tablas Markdown solo cuando la comparación aporte claridad.
- Imágenes con texto alternativo que explique la idea ilustrada; solo se usan SVG alojados en `public/images/`.
- El texto alternativo no empieza por «imagen de» y describe el contenido, por ejemplo: `![Esquema de un vector y una matriz con sus celdas](/images/vectores-matrices.svg)`.
- Sin HTML inline salvo los bloques nativos necesarios (por ejemplo, `details`).

## Elementos pedagógicos

| Elemento              | Representación actual             | Estado |
| --------------------- | --------------------------------- | ------ |
| Explicación           | Párrafos y encabezados Markdown   | En uso |
| Código                | Bloque vallado con lenguaje       | En uso |
| Consejo / advertencia | Blockquote etiquetado             | En uso |
| Ejercicio             | Apartado `h3` con enunciado       | En uso |
| Solución oculta       | `<details>` + `<summary>`         | En uso |
| Mini-proyecto final   | Apartado `h2` con solución oculta | En uso |
| Tabla                 | Tabla Markdown                    | En uso |
| Imagen / diagrama     | Markdown SVG + alternativa        | En uso |

No hay componentes personalizados para estos elementos: se resuelven con Markdown, HTML nativo y estilos globales.

## Navegación

La navegación entre cursos y lecciones se deriva de `getCollection()` y del campo `order`. Las rutas generadas son `/cursos/`, `/cursos/<curso>/` y `/cursos/<curso>/<leccion>/`. No hay listas de enlaces duplicadas a mano. En las lecciones, el enlace anterior se renderiza a la izquierda y el siguiente a la derecha mediante las clases `lesson-nav__prev` y `lesson-nav__next`.
