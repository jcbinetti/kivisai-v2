import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kpbuonm3',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
  },
  studioHost: 'kpbuonm3',
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
