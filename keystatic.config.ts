import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'wellgridhomes-collab/astro-blog-starter-template',
  },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        descripcion: fields.text({ label: 'Descripción corta', multiline: true }),
        fecha: fields.date({ label: 'Fecha de publicación' }),
        categoria: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Automatización', value: 'automatizacion' },
            { label: 'Tecnología', value: 'tecnologia' },
            { label: 'Propiedades', value: 'propiedades' },
            { label: 'Lifestyle', value: 'lifestyle' },
          ],
          defaultValue: 'tecnologia',
        }),
        imagen: fields.image({
          label: 'Imagen destacada',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        content: fields.markdoc({ label: 'Contenido' }),
      },
    }),
  },
});
