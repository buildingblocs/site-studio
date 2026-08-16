import { defineType, defineField } from "sanity";
import { linkFields } from "../components/link";

export const siteInfoType = defineType({
    name: "siteInfo",
    title: "Site Information",
    type: "document",
    options: {
        singleton: true // Identify this document as a singleton
    },
    fields: [
        defineField({
            name: "name",
            title: "Page Name",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            title: "Footer",
            name: "footer",
            type: "object",
            fields: [
                {
                    name: "main",
                    type: "array",
                    title: "Main Links",
                    of: [{
                        type: "object",
                        fields: [
                            {
                                type: "string",
                                name: "title"
                            },
                            ...linkFields
                        ]
                    }]
                },
                {
                    name: "section",
                    type: "array",
                    title: "Sections",
                    of: [{
                        type: "object",
                        fields: [
                            {
                                type: "string",
                                name: "title"
                            },
                            {
                                type: "array",
                                name: "links",
                                of: [{
                                    type: "object",
                                    fields: [
                                        {
                                            type: "string",
                                            name: "title"
                                        },
                                        ...linkFields
                                    ]
                                }]
                            }
                        ]
                    }]
                },
                {
                    name: "social",
                    type: "array",
                    title: "Social Media",
                    of: [{
                        type: "object",
                        fields: [
                            {
                                type: "string",
                                name: "title"
                            },
                            {
                                type: "url",
                                name: "link"
                            },
                            {
                                name: "icon",
                                type: "image"
                            }
                        ]
                    }]
                }
            ]
        }),
        defineField({
            title: "Navigation Bar",
            name: "nav",
            type: "object",
            fields: [
                {
                    type: "object",
                    name: "featured",
                    fields: [
                        {
                            type: "boolean",
                            name: "showFeatured",
                            title: "Show Featured Link"
                        },
                        {
                            type: "string",
                            name: "message"
                        },
                        ...linkFields
                    ]
                },
                {
                    type: "object",
                    name: "banner",
                    fields: [
                        {
                            type: "boolean",
                            name: "showBanner",
                            title: "Show Banner"
                        },
                        {
                            type: "string",
                            name: "message"
                        },
                        {
                            name: "type",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Informative", value: "info" },
                                    { title: "Alert", value: "alert" },
                                    { title: "Warning", value: "warn" }
                                ],
                                layout: "radio"
                            }
                        }
                    ]
                }
            ]
        })
    ]
});
