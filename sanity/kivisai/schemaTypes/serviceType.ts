import { defineType } from 'sanity'
export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' }
  ]
}) 