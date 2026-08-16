import { defineField } from 'sanity'

export const linkFields = [
    defineField({
        name: 'isInternal',
        title: 'Internal Link',
        type: 'boolean'
    }),
    defineField({
        name: 'externalLink',
        title: 'External Link',
        type: 'url',
        hidden: ({ parent }) => Boolean(parent?.isInternal)
    }),
    defineField({
        name: 'internalLink',
        title: 'Internal Link',
        type: 'reference',
        to: [
            { type: 'event' },
            { type: 'about' }
        ],
        hidden: ({ parent }) => !parent?.isInternal
    })
]
