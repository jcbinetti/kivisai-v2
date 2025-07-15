import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon, LinkIcon, WarningOutlineIcon, DocumentIcon} from '@sanity/icons'

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'External URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
          {
            title: 'Internal Link',
            name: 'internalLink',
            type: 'internalLink',
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        }
      ]
    }),
    // Custom Button Block
    defineArrayMember({
      type: 'object',
      name: 'customButton',
      title: 'Button',
      icon: LinkIcon,
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'Button Text',
          validation: Rule => Rule.required(),
        },
        {
          name: 'url',
          type: 'url',
          title: 'Button URL',
          validation: Rule => Rule.required(),
        },
        {
          name: 'style',
          type: 'string',
          title: 'Button Style',
          options: {
            list: [
              {title: 'Primary (KIVISAI Turquoise)', value: 'primary'},
              {title: 'Secondary (Dark Blue)', value: 'secondary'},
              {title: 'Outline (White Border)', value: 'outline'},
            ],
          },
          initialValue: 'primary',
        },
        {
          name: 'openInNewTab',
          type: 'boolean',
          title: 'Open in new tab',
          initialValue: true,
        },
      ],
      preview: {
        select: {
          title: 'text',
          subtitle: 'url',
        },
      },
    }),
    // Custom Callout Block
    defineArrayMember({
      type: 'object',
      name: 'callout',
      title: 'Callout Box',
      icon: WarningOutlineIcon,
      fields: [
        {
          name: 'type',
          type: 'string',
          title: 'Callout Type',
          options: {
            list: [
              {title: 'Info (Blue)', value: 'info'},
              {title: 'Success (Green)', value: 'success'},
              {title: 'Warning (Orange)', value: 'warning'},
              {title: 'Tip (Turquoise)', value: 'tip'},
            ],
          },
          initialValue: 'info',
        },
        {
          name: 'title',
          type: 'string',
          title: 'Callout Title',
        },
        {
          name: 'content',
          type: 'array',
          title: 'Callout Content',
          of: [{type: 'block'}],
        },
      ],
      preview: {
        select: {
          title: 'title',
          type: 'type',
        },
        prepare({title, type}) {
          return {
            title: title || 'Callout',
            subtitle: type ? `${type.charAt(0).toUpperCase() + type.slice(1)} Callout` : 'Callout',
          }
        },
      },
    }),
    // Custom Quote Block
    defineArrayMember({
      type: 'object',
      name: 'customQuote',
      title: 'Quote',
      icon: DocumentIcon,
      fields: [
        {
          name: 'quote',
          type: 'text',
          title: 'Quote Text',
          validation: Rule => Rule.required(),
        },
        {
          name: 'author',
          type: 'string',
          title: 'Author',
        },
        {
          name: 'source',
          type: 'string',
          title: 'Source',
        },
        {
          name: 'style',
          type: 'string',
          title: 'Quote Style',
          options: {
            list: [
              {title: 'Standard', value: 'standard'},
              {title: 'Large', value: 'large'},
              {title: 'With Background', value: 'background'},
            ],
          },
          initialValue: 'standard',
        },
      ],
      preview: {
        select: {
          title: 'quote',
          author: 'author',
        },
        prepare({title, author}) {
          return {
            title: title ? title.slice(0, 50) + '...' : 'Quote',
            subtitle: author ? `— ${author}` : 'Quote',
          }
        },
      },
    }),
    // Social Media Integration Block
    defineArrayMember({
      type: 'object',
      name: 'socialShare',
      title: 'Social Media Share',
      icon: DocumentIcon,
      fields: [
        {
          name: 'platform',
          type: 'string',
          title: 'Platform',
          options: {
            list: [
              {title: 'LinkedIn', value: 'linkedin'},
              {title: 'Twitter/X', value: 'twitter'},
              {title: 'Facebook', value: 'facebook'},
              {title: 'Instagram', value: 'instagram'},
            ],
          },
          validation: Rule => Rule.required(),
        },
        {
          name: 'customText',
          type: 'text',
          title: 'Custom Share Text',
          description: 'Leave empty to use article title',
        },
        {
          name: 'hashtags',
          type: 'array',
          title: 'Hashtags',
          of: [{type: 'string'}],
          options: {
            layout: 'tags',
          },
        },
      ],
      preview: {
        select: {
          title: 'platform',
          customText: 'customText',
        },
        prepare({title, customText}) {
          return {
            title: `${title.charAt(0).toUpperCase() + title.slice(1)} Share`,
            subtitle: customText ? customText.slice(0, 30) + '...' : 'Auto-generated text',
          }
        },
      },
    }),
  ],
})
