import { defineType, defineField } from 'sanity'
import { customBlock } from '../components/block'

export const aboutType = defineType({
    name: 'about',
    title: 'About Us',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Page Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'desc',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        }),
        defineField({
            name: 'useImageHero',
            title: 'Hero with Background Image',
            type: 'boolean'
        }),
        defineField({
            name: 'imageHero',
            title: 'Images for Hero',
            type: 'array',
            of: [{ type: 'image' }],
            hidden: ({ document }) => !document?.useImageHero
        }),
        customBlock
    ]
})
