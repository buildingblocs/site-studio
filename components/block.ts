import { defineField } from 'sanity'

const blockImage = {
    type: 'image',
    name: 'blockImage',
    title: 'Image',
    fields: [
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            description: 'Important for SEO and accessiblity.',
        },
    ]
};

const blockImageCover = {
    type: 'object',
    name: 'imageCover',
    title: 'Image Cover',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'altText',
            title: "Alt Text",
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'link',
            type: 'url',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'desc',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'desc',
            media: 'image'
        }
    }
};

const blockCta = {
    type: 'object',
    title: 'Click-to-action',
    name: 'cta',
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'desc',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'primaryButton',
            type: 'object',
            title: 'Primary Button',
            fields: [
                { name: 'text', type: 'string' },
                { name: 'link', type: 'url' }
            ]
        },
        {
            name: 'secondaryButton',
            type: 'object',
            title: 'Secondary Button',
            fields: [
                { name: 'text', type: 'string' },
                { name: 'link', type: 'url' }
            ]
        }
    ]
}

export const customBlock = defineField({
    title: 'Content',
    name: 'content',
    type: 'array',
    of: [
        { type: 'block' },
        blockImage,
        blockImageCover,
        blockCta,
        {
            type: 'object',
            name: 'columnLayout',
            title: 'Column Layout',
            fields: [
                defineField({
                    name: 'columns',
                    title: 'Columns',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            name: 'column',
                            title: 'Column',
                            fields: [
                                defineField({
                                    name: 'content',
                                    title: 'Column Content',
                                    type: 'array',
                                    of: [
                                        { type: 'block' },
                                        blockImage,
                                        blockImageCover,
                                        blockCta
                                    ],
                                })
                            ],
                            preview: {
                                prepare() {
                                    return { title: 'Column Section' }
                                }
                            }
                        }
                    ],
                    validation: (Rule) => Rule.min(2).max(4)
                })
            ],
            preview: {
                select: {
                    columns: 'columns'
                },
                prepare({ columns }) {
                    const count = columns?.length || 0;
                    return {
                        title: 'Column Layout',
                        subtitle: `${count} Column${count === 1 ? '' : 's'}`
                    }
                }
            }
        }
    ]
})