import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const courses = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Ruta del logo opcional en public/images/.
    image: z.string().optional(),
  }),
});

// `course` guarda el id de la entrada de courses a la que pertenece la lección.
// `order` define la posición de la lección dentro de ese curso.
// `unit`, cuando existe, es el nombre público de la unidad y agrupa la lección en un desplegable.
const lessons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    course: z.string(),
    order: z.number().int().positive(),
    unit: z.string().optional(),
  }),
});

export const collections = { courses, lessons };
