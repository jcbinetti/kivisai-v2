import { defineType } from 'sanity'
export const useCaseType = defineType({
  name: 'useCase',
  title: 'Use Case',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' }
  ]
}) 