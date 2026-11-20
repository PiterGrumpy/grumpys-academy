# Contribución

## Antes de empezar

1. Leer `AGENT.md` y `MEMORY.md`.
2. Comprobar si la decisión que se va a tomar ya está documentada en `docs/decisions/`.
3. No crear cursos, módulos, lecciones, ejercicios ni catálogos sin solicitud expresa.

## Flujo

1. Crear una rama corta desde `main` cuando el cambio no sea trivial.
2. Realizar cambios pequeños y con una responsabilidad clara.
3. Si el cambio altera la arquitectura o introduce una dependencia importante, consultar primero y escribir un ADR.
4. Ejecutar:

```sh
npm run lint
npm run format:check
npm run check
npm run build
```

5. Comprobar en `npm run dev` que la página sigue siendo legible en móvil y escritorio.
6. Actualizar la documentación afectada y `MEMORY.md` si hay una decisión relevante.
7. Confirmar que no se ha añadido contenido ficticio.

## Mensajes de commit

Usar español, tono imperativo y alcance claro. Ejemplos:

- `Añadir base técnica de Astro y estilos globales`
- `Documentar convenciones de contenido`
- `Configurar validaciones de lint y tipos`

## Qué NO hacer

- Añadir dependencias "por comodidad" sin evaluar una solución nativa.
- Copiar las instrucciones en `AGENTS.md`, `CLAUDE.md` u otros archivos: son punteros.
- Versionar secretos, archivos de entorno privados ni estado local de agentes de IA.
- Documentar funcionalidades planeadas como si ya existieran.
