# Convenciones de contenido

Aplica al curso de R y a cualquier contenido que se añada en el futuro.

## Nombres y rutas

- Identificadores en `kebab-case`, minúsculas y sin acentos: `introduccion-a-variable`, no `Introducción a Variable`.
- Un identificador describe el contenido, no su posición: `vectores-y-matrices`, no `leccion2`.
- El orden se guarda en el campo `order`, no en el nombre del archivo.
- Las URLs resultantes son limpias, estables y en minúsculas.

## Metadatos

Esquemas actuales en `src/content.config.ts`:

```yaml
# src/content/courses/r.md
title: 'Introducción a R' # obligatorio, string
description: 'Descripción breve' # obligatorio, string
image: '/images/r-consola.svg' # opcional, string: portada de la tarjeta

# src/content/lessons/*.md
title: 'Vectores y matrices' # obligatorio, string
description: 'Idea principal de la lección' # obligatorio, string
course: r # obligatorio, string: id de la entrada de courses
order: 2 # obligatorio, entero positivo y único dentro del curso
```

Los campos se ampliarán solo cuando un contenido real lo exija. No se añadirán metadatos especulativos.

## Organización

- `src/content/courses/`: una entrada por curso (`r.md`).
- `src/content/lessons/`: una entrada por lección, con `course` y `order`.
- `src/cursos/R/`: PDF originales entregados por el usuario. Son material de referencia; no se publican ni se cargan como contenido.
- `public/images/`: ilustraciones SVG locales. Se sirven tal cual; las portadas de curso se referencian desde el campo `image` del frontmatter.

No existe todavía una colección de módulos. Si el curso crece, se documentará la decisión antes de crearla.

## Redacción Markdown

- Un `h1` por documento; después `h2`, `h3`, `h4` sin saltos.
- Bloques de código con lenguaje explícito: `r, `js, `html, `css.
- El resultado esperado se muestra en un bloque `text` después del código cuando aporte claridad.
- Consejos y advertencias como blockquote con etiqueta en negrita: `> **Consejo:** ...`, `> **Advertencia:** ...`.
- Ejercicios integrados en la lección, con enunciado, pista o criterios de éxito cuando ayuden, y solución en `<details>` con `<summary>` descriptivo.
- Tablas Markdown solo cuando la comparación aporte claridad.
- Imágenes con texto alternativo que explique la idea ilustrada; solo se usan SVG alojados en `public/images/`.
- El texto alternativo no empieza por «imagen de» y describe el contenido, por ejemplo: `![Esquema de un vector y una matriz con sus celdas](/images/vectores-matrices.svg)`.
- Sin HTML inline salvo los bloques nativos necesarios (por ejemplo, `details`).

## Elementos pedagógicos

| Elemento              | Representación actual           | Estado |
| --------------------- | ------------------------------- | ------ |
| Explicación           | Párrafos y encabezados Markdown | En uso |
| Código                | Bloque vallado con lenguaje     | En uso |
| Consejo / advertencia | Blockquote etiquetado           | En uso |
| Ejercicio             | Apartado `h3` con enunciado     | En uso |
| Solución oculta       | `<details>` + `<summary>`       | En uso |
| Tabla                 | Tabla Markdown                  | En uso |
| Imagen / diagrama     | Markdown SVG + alternativa      | En uso |

No hay componentes personalizados para estos elementos: se resuelven con Markdown, HTML nativo y estilos globales.

## Navegación

La navegación entre cursos y lecciones se deriva de `getCollection()` y del campo `order`. Las rutas generadas son `/cursos/`, `/cursos/<curso>/` y `/cursos/<curso>/<leccion>/`. No hay listas de enlaces duplicadas a mano.
