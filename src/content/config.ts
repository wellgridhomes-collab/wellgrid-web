import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    descripcion: z.string(),
    fecha: z.coerce.date(),
    categoria: z.enum(['automatizacion', 'tecnologia', 'propiedades', 'lifestyle']),
    imagen: z.string().optional(),
  }),
});

export const collections = { blog };
