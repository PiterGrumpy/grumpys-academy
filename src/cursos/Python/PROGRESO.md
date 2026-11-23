# Progreso del curso de Python

Registro visible del itinerario descrito en [CONTENIDO_CURSO_PYTHON.md](CONTENIDO_CURSO_PYTHON.md) y la [skill de autoría](SKILL_DESARROLLO_LECCIONES_PYTHON.md). Se actualiza al cerrar cada grupo de lecciones; no es contenido publicado.

- **Última actualización:** 2026-11-23.
- **Versión del índice:** 1.1.
- **Modo de trabajo:** desarrollo completo por bloques de lecciones, con aviso al terminar cada bloque y autoevaluación con soluciones ocultas (ADR 0007).
- **Versión objetivo:** Python 3.14 (ejemplos de `print()`, errores, operadores y cadenas comprobados con 3.14.7 en el entorno de desarrollo).

## Registro de lecciones

| Unidad           | Lección                                | Estado                      | Evidencia recibida | Dificultades |
| ---------------- | -------------------------------------- | --------------------------- | ------------------ | ------------ |
| Antes de empezar | Qué es programar y qué es Python       | pendiente de autoevaluación | ninguna            | sin datos    |
| Antes de empezar | Instalación y comprobación del entorno | pendiente de autoevaluación | ninguna            | sin datos    |
| Antes de empezar | Terminal y sistema de archivos         | pendiente de autoevaluación | ninguna            | sin datos    |
| Antes de empezar | Primer programa y REPL                 | pendiente de autoevaluación | ninguna            | sin datos    |
| Antes de empezar | Editor, depuración inicial y hábitos   | pendiente de autoevaluación | ninguna            | sin datos    |
| Primeros Pasos   | Anatomía de un programa                | pendiente de autoevaluación | ninguna            | sin datos    |
| Primeros Pasos   | Variables y asignación                 | pendiente de autoevaluación | ninguna            | sin datos    |
| Primeros Pasos   | Tipos primitivos                       | pendiente de autoevaluación | ninguna            | sin datos    |
| Primeros Pasos   | Operadores                             | pendiente de autoevaluación | ninguna            | sin datos    |
| Primeros Pasos   | Entrada y salida                       | pendiente de autoevaluación | ninguna            | sin datos    |
| Primeros Pasos   | Cadenas de texto                       | pendiente de autoevaluación | ninguna            | sin datos    |

**Bloque de sintaxis, valores y variables completado.** La siguiente lección del índice es «Valores verdaderos y falsos»; no está desarrollada y se redactará cuando el usuario lo solicite. Las prácticas de este bloque son un conversor de unidades, una calculadora de propinas y una ficha de usuario.

## Prerrequisitos pendientes

- Confirmar el sistema operativo y el editor del alumno. Las lecciones ofrecen instrucciones para Windows y para sistemas Unix-like, pero el entorno concreto sigue sin confirmarse.
- Comprobar la versión de Python en el equipo del alumno (`python --version`, `python3 --version` o `py --version`). La instalación guiada se explica en «Instalación y comprobación del entorno».
- Revisar las autoevaluaciones de las once lecciones cuando el alumno lo solicite.
- Aclarar la conversión de entradas no numéricas: las lecciones actuales detectan el `ValueError`, pero la repetición controlada de la pregunta exige condicionales.

## Proyecto acumulado

Aún no aplica. El gestor de tareas empieza cuando se estudien las condiciones; por ahora se usan ejemplos independientes: `hola.py`, `entorno.py`, `diario.py`, `saludo.py`, `habitos.py`, `anatomia.py`, `cartel.py`, `variables.py`, `tarea.py`, `tipos.py`, `lectura.py`, `operadores.py`, `conversiones.py`, `entrada.py`, `propinas.py`, `cadenas.py` y `ficha.py`. El conversor de unidades, la calculadora de propinas y la ficha de usuario son las prácticas previstas para el bloque.

- Funcionalidades: ninguna en el proyecto longitudinal; programas de consola independientes con entrada, cálculo y salida.
- Estructura de archivos: carpeta de trabajo `python-curso`, prácticas individuales y copias `*_v1.py`.
- Persistencia: ninguna.
- Tests: ninguno.
- Comandos de ejecución: `python archivo.py` en Windows, `python3 archivo.py` en macOS/Linux.
- Deuda técnica deliberada: programas lineales, sin condicionales ni funciones propias; las entradas no numéricas detienen la ejecución con un mensaje de error.
- Decisiones: versión objetivo fijada en Python 3.14; nombres de archivo en minúsculas y derivados del título; soluciones ocultas con el formato del curso de R (ADR 0007); un único mini-proyecto integrador como cierre de cada lección (ADR 0008); títulos sin códigos de unidad o lección (ADR 0010); lecturas directas sin bloques de presentación (ADR 0012); cada unidad se declara en `unit` con un nombre público y se muestra en su desplegable (ADR 0015).

## Bloque portable

```text
CURSO: Python desde cero hasta nivel junior
VERSIÓN DEL ÍNDICE: 1.1
ÚLTIMA LECCIÓN: Cadenas de texto
ÚLTIMA UNIDAD: Primeros Pasos
ESTADO: dos bloques completos; lecciones pendientes de autoevaluación
ENTORNO: Windows en el entorno de desarrollo (Python 3.14.7); sistema y editor del alumno sin confirmar
CONCEPTOS DOMINADOS: sin evidencia del alumno todavía
DIFICULTADES: sin datos
PROYECTO: sin iniciar; prácticas independientes de entrada, cálculo y salida
SIGUIENTE: Valores verdaderos y falsos
INSTRUCCIÓN: continuar aplicando SKILL_DESARROLLO_LECCIONES_PYTHON.md; cerrar cada lección con un mini-proyecto integrador; avisar al terminar cada bloque.
```
