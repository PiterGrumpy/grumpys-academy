# Convenciones de contenido

Aplica a contenido **futuro**. Hoy no hay entradas reales.

## Nombres y rutas

- Identificadores en `kebab-case`, minúsculas y sin acentos: `introduccion-a-variable`, no `Introducción a Variable`.
- Un identificador describe el contenido, no su posición: `tipos-de-datos`, no `leccion3`.
- Los números solo se usarán como prefijo cuando el orden sea parte del nombre de archivo y sea necesario para la navegación.
- Las URLs resultantes serán limpias, estables y en minúsculas.

## Metadatos de la colección `courses`

Esquema actual en `src/content.config.ts`:

```yaml
title: 'Título del curso' # obligatorio, string
description: 'Descripción breve' # obligatorio, string
```

Los campos se ampliarán solo cuando un curso real lo exija. No se añadirán metadatos especulativos.

## Organización prevista

La colección apunta a `src/content/courses/`. La estructura interna de cada curso se definirá en el momento de su incorporación. La propuesta inicial es agrupar por curso y dentro de este por módulo y lección, manteniendo los archivos Markdown cerca de su tema. Cualquier cambio de esta propuesta debe documentarse antes de crear contenido.

## Redacción Markdown

- Un `h1` por documento; después `h2`, `h3` sin saltos.
- Bloques de código con lenguaje explícito: `js, `html, ```css.
- Consejos y advertencias como blockquote con etiqueta en negrita: `> **Consejo:** ...`, `> **Advertencia:** ...`.
- Ejercicios con enunciado, pistas opcionales y solución en bloque nativo `<details>` con `<summary>` descriptivo.
- Tablas Markdown solo cuando la comparación aporte claridad.
- Imágenes con texto alternativo y diagramas con descripción textual equivalente.
- Sin HTML inline salvo los bloques nativos necesarios (por ejemplo, `details`).

## Elementos pedagógicos

| Elemento              | Representación actual           | Estado                                    |
| --------------------- | ------------------------------- | ----------------------------------------- |
| Explicación           | Párrafos y encabezados Markdown | Convención disponible                     |
| Código                | Bloque vallado con lenguaje     | Convención disponible                     |
| Consejo / advertencia | Blockquote etiquetado           | Convención disponible                     |
| Ejercicio             | Apartado con enunciado          | Convención disponible                     |
| Solución oculta       | `<details>` + `<summary>`       | Convención disponible; estilos pendientes |
| Tabla                 | Tabla Markdown                  | Convención disponible; estilos pendientes |
| Imagen / diagrama     | Markdown + alternativa textual  | Convención disponible; estilos pendientes |

No se crearán componentes personalizados para estos elementos hasta que exista contenido real que los use.

## Navegación

La navegación entre cursos, módulos y lecciones se derivará de los metadatos y del orden de los archivos, no de listas duplicadas a mano. Se implementará cuando existan rutas de cursos.
