import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ 
          name: { label: 'Title' },
          validation: { isRequired: true }
        }),
        description: fields.text({ 
          label: 'Description',
          validation: { isRequired: true }
        }),
        pubDate: fields.date({ 
          label: 'Publication Date',
          validation: { isRequired: true }
        }),
        updatedDate: fields.date({ label: 'Updated Date' }),
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'src/assets/blog',
          publicPath: '../../assets/blog/',
        }),
        content: fields.document({
          label: 'Content',
          formatting: {
            headingLevels: [1, 2, 3, 4, 5, 6],
            inlineMarks: {
              bold: true,
              italic: true,
              strikethrough: true,
              code: true,
              underline: true,
            },
            listTypes: {
              ordered: true,
              unordered: true,
            },
            blockTypes: {
              blockquote: true,
              code: true,
            },
          },
          links: true,
          dividers: true,
          images: {
            directory: 'src/assets/blog',
            publicPath: '../../assets/blog/',
          },
        }),
      },
    }),
  },
});