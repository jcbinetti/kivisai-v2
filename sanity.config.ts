/**
 * This configuration is used to for the Sanity Studio that's mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/kivisai/schemaTypes'

// Structure configuration
const structure = (S: any) =>
  S.list()
    .title('Kivisai Content')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('event').title('Events'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item: any) => item.getId() && !['post', 'category', 'author', 'event'].includes(item.getId()!),
      ),
    ])

export default defineConfig({
  name: 'default',
  title: 'kivisai',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kpbuonm3',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
