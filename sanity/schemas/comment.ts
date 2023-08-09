import { defineField, defineType } from "sanity";

 export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'approve',
      title: 'Approve',
      type: 'boolean',
      description:"comment will not show on the site without approve"
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
    }),
    defineField({
      name: 'post',
      type: 'reference',
      to :[{type:"post"}]
    }),
  ]
})