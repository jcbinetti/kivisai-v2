import {defineType, defineField} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export const internalLinkType = defineType({
  name: 'internalLink',
  title: 'Internal Link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          {title: 'KIVISAI Services', value: 'services'},
          {title: 'Blog Articles', value: 'blog'},
          {title: 'Use Cases', value: 'usecases'},
          {title: 'About Pages', value: 'about'},
          {title: 'Contact & Booking', value: 'contact'},
          {title: 'Knowledge Hub', value: 'knowledge'},
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'service',
      title: 'KIVISAI Service',
      type: 'reference',
      to: [{type: 'service'}],
      hidden: ({parent}) => parent?.linkType !== 'services',
      options: {
        disableNew: true,
      },
    }),
    defineField({
      name: 'blogPost',
      title: 'Blog Article',
      type: 'reference',
      to: [{type: 'post'}],
      hidden: ({parent}) => parent?.linkType !== 'blog',
      options: {
        disableNew: true,
      },
    }),
    defineField({
      name: 'useCase',
      title: 'Use Case',
      type: 'reference',
      to: [{type: 'useCase'}],
      hidden: ({parent}) => parent?.linkType !== 'usecases',
      options: {
        disableNew: true,
      },
    }),
    defineField({
      name: 'aboutPage',
      title: 'About Page',
      type: 'string',
      hidden: ({parent}) => parent?.linkType !== 'about',
      options: {
        list: [
          {title: 'Über KIVISAI', value: '/ueber-kivisai'},
          {title: 'Bedeutung', value: '/ueber-kivisai/bedeutung'},
          {title: 'Methode', value: '/ueber-kivisai/methode'},
          {title: 'Prinzipien', value: '/ueber-kivisai/prinzipien'},
          {title: 'Team & Netzwerk', value: '/ueber-kivisai/team-netzwerk'},
        ],
      },
    }),
    defineField({
      name: 'contactPage',
      title: 'Contact Page',
      type: 'string',
      hidden: ({parent}) => parent?.linkType !== 'contact',
      options: {
        list: [
          {title: 'Kontakt', value: '/kontakt'},
          {title: 'Termin buchen', value: '/termin'},
          {title: 'Newsletter', value: '/kontakt/newsletter'},
        ],
      },
    }),
    defineField({
      name: 'knowledgePage',
      title: 'Knowledge Hub Page',
      type: 'string',
      hidden: ({parent}) => parent?.linkType !== 'knowledge',
      options: {
        list: [
          {title: 'Wissens-Hub', value: '/wissens-hub'},
          {title: 'Blog', value: '/wissens-hub/blog'},
          {title: 'Downloads', value: '/wissens-hub/downloads'},
          {title: 'Events', value: '/wissens-hub/events'},
          {title: 'Glossar', value: '/wissens-hub/glossar'},
        ],
      },
    }),
    defineField({
      name: 'customText',
      title: 'Custom Link Text',
      type: 'string',
      description: 'Leave empty to use the default page title',
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in new tab',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      linkType: 'linkType',
      service: 'service.title',
      blogPost: 'blogPost.title',
      useCase: 'useCase.title',
      aboutPage: 'aboutPage',
      contactPage: 'contactPage',
      knowledgePage: 'knowledgePage',
      customText: 'customText',
    },
    prepare(selection) {
      const {linkType, service, blogPost, useCase, aboutPage, contactPage, knowledgePage, customText} = selection
      
      let title = customText || 'Internal Link'
      let subtitle = ''
      
      switch (linkType) {
        case 'services':
          subtitle = service ? `→ ${service}` : 'No service selected'
          break
        case 'blog':
          subtitle = blogPost ? `→ ${blogPost}` : 'No blog post selected'
          break
        case 'usecases':
          subtitle = useCase ? `→ ${useCase}` : 'No use case selected'
          break
        case 'about':
          subtitle = aboutPage ? `→ ${aboutPage}` : 'No about page selected'
          break
        case 'contact':
          subtitle = contactPage ? `→ ${contactPage}` : 'No contact page selected'
          break
        case 'knowledge':
          subtitle = knowledgePage ? `→ ${knowledgePage}` : 'No knowledge page selected'
          break
        default:
          subtitle = 'No page selected'
      }
      
      return {
        title,
        subtitle,
      }
    },
  },
}) 