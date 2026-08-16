import { defineType, defineField } from "sanity";

export const eventType = defineType({
    name: "event",
    title: "Event",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Event Name",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .slice(0, 200)
            }
        }),
        defineField({
            name: "signupForm",
            title: "Signup Link",
            type: "url",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "status",
            type: "string",
            options: {
                list: [
                    { title: "Registration Open", value: "open" },
                    { title: "Registration Closed", value: "closed" },
                    { title: "Event Over", value: "over" }
                ],
                layout: "radio"
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            type: "array",
            name: "links",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "title", type: "string" },
                        { name: "url", type: "url", title: "URL" }
                    ]
                }
            ]
        }),
        defineField({
            type: "array",
            name: "sponsors",
            of: [
                {
                    type: "object",
                    preview: {
                        select: {
                            title: "sponsor.name",
                            subtitle: "tier",
                            media: "sponsor.logo"
                        }
                    },
                    fields: [
                        {
                            name: "sponsor",
                            type: "reference",
                            to: [{ type: "partners" }]
                        },
                        {
                            name: "tier",
                            type: "string",
                            options: {
                                list: ["Gold", "Silver", "Bronze"],
                                layout: "radio"
                            }
                        }
                    ]
                }
            ]
        }),
        defineField({
            title: "Excerpts",
            name: "excerpts",
            type: "object",
            fields: [
                {
                    name: "excerpt",
                    type: "text",
                    title: "Excerpt",
                    description: "Excerpt that will be shown when sending the page on social media"
                },
                {
                    name: "openExcerpt",
                    type: "string",
                    title: "Nav Bar Description, Registration Open",
                    description: "Description that will be shown on the nav bar, when the event is open for registration"
                },
                {
                    name: "closedExcerpt",
                    type: "string",
                    title: "Nav Bar Description, Registration Closed",
                    description: "Description that will be shown on the nav bar, when the event is ongoing. Note: Usually set the same as Event Over"
                },
                {
                    name: "overExcerpt",
                    type: "string",
                    title: "Nav Bar Description, Event Over",
                    description: "Description that will be shown on the nav bar, when the event is over. Note: Usually set the same as Registration Closed"
                }
            ]
        }),
        defineField({
            name: "directions",
            title: "Directions",
            type: "array",
            of: [{
                type: "object",
                fields: [
                    { name: "day", type: "string" },
                    {
                        name: "tracks", type: "array", of: [{
                            type: "object",
                            fields: [
                                { name: "track", type: "string" },
                                {
                                    name: "methods",
                                    type: "array",
                                    of: [{
                                        type: "object",
                                        fields: [
                                            { name: "methodName", type: "string" },
                                            {
                                                name: "steps", type: "array", of: [{
                                                    type: "object",
                                                    fields: [
                                                        { name: "image", type: "image", title: "Image" },
                                                        { name: "step", type: "string", title: "Step" }
                                                    ]
                                                }]
                                            }
                                        ]
                                    }]
                                }
                            ]
                        }]
                    }
                ]
            }],
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "prospectus",
            title: "Prospectus",
            type: "array",
            of: [{ type: "image" }],
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "details",
            title: "Key Details",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required()
        }),
        defineField({
            title: "Description",
            name: "description",
            type: "array",
            of: [{ type: "block" }],
            validation: (Rule) => Rule.required()
        }),
        defineField({
            title: "FAQ",
            name: "faqs",
            type: "array",
            of: [{
                type: "object",
                fields: [
                    { name: "question", type: "string", title: "Question" },
                    { name: "answer", type: "text", title: "Answer" }
                ]
            }],
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "schedule",
            title: "Schedule",
            type: "array",
            of: [
                {
                    name: "timeline",
                    title: "Timeline",
                    type: "object",
                    fields: [
                        {
                            name: "track",
                            title: "Track",
                            type: "string"
                        },
                        {
                            name: "days",
                            title: "Days",
                            type: "array",
                            of: [
                                {
                                    name: "dayItem",
                                    title: "Day",
                                    type: "object",
                                    fields: [
                                        {
                                            name: "day",
                                            title: "Day",
                                            type: "string"
                                        },
                                        {
                                            name: "daySchedule",
                                            title: "Day Schedule",
                                            type: "array",
                                            of: [
                                                {
                                                    title: "Schedule Item",
                                                    type: "object",
                                                    preview: {
                                                        select: {
                                                            title: "title",
                                                            subtitle: "timing",
                                                        }
                                                    },
                                                    fields: [
                                                        {
                                                            name: "timing",
                                                            title: "Timing",
                                                            type: "string"
                                                        },
                                                        {
                                                            name: "title",
                                                            title: "Title",
                                                            type: "string"
                                                        },
                                                        {
                                                            name: "desc",
                                                            title: "Description",
                                                            type: "text"
                                                        },
                                                        {
                                                            name: "author",
                                                            title: "Author",
                                                            type: "string"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        })
    ]
});