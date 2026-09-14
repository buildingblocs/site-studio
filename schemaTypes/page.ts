import {defineType, defineField} from 'sanity'
import {customBlock} from '../components/block'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  preview: {
      select: {
        title: 'title',
        subtitle: 'parent.title'
      }
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'showList',
      title: 'Show List of Pages',
      description: 'Show list of pages in the directory rather than custom content. Note that this will replace the content field.',
      type: 'boolean',
    }),
    defineField({
        name: 'parent',
        title: 'Directory',
        type: 'reference',
        to: [
            { type: 'page' }
        ],
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'useImageHero',
      title: 'Hero with Background Image',
      type: 'boolean',
    }),
    defineField({
      name: 'imageHero',
      title: 'Images for Hero',
      type: 'array',
      of: [{type: 'image'}],
      hidden: ({document}) => !document?.useImageHero,
    }),
    customBlock,
  ],
})
