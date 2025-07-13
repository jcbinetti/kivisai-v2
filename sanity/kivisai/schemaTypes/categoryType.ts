import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'icon',
      title: 'Category Icon',
      type: 'image',
      description: 'Icon or pictogram for this category (recommended: 64x64px or larger)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'color',
      title: 'Category Color',
      type: 'string',
      description: 'Primary color for this category',
      options: {
        list: [
          {title: 'KIVISAI Turquoise', value: 'kivisai-clear-turquoise'},
          {title: 'KIVISAI Dark Blue', value: 'kivisai-deep-dark-blue'},
          {title: 'KIVISAI Moss Green', value: 'kivisai-moss-green'},
          {title: 'KIVISAI Vibrant Turquoise', value: 'kivisai-vibrant-turquoise'},
        ],
      },
    }),
  ],
})
