import { defineType, defineField } from "sanity";

export const partnerType = defineType({
    name: "partners",
    title: "Partners",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Organisation Name",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "description",
            title: "Organisation Writeup",
            type: "text",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "link",
            title: "Organisation Link",
            type: "url",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "logo",
            title: "Organisation Logo",
            type: "image",
            validation: (Rule) => Rule.required()
        })
    ]
});
