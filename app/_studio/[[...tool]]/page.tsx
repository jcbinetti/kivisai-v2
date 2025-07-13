/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  // Only render studio in development mode
  if (process.env.NODE_ENV === 'production') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-kivisai-deep-dark-blue mb-4">
            Sanity Studio
          </h1>
          <p className="text-gray-600 mb-4">
            Das Sanity Studio ist nur im Development-Modus verfügbar.
          </p>
          <p className="text-sm text-gray-500">
            Verwende das separate Sanity Studio unter{' '}
            <a 
              href="http://localhost:3333" 
              className="text-kivisai-clear-turquoise hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://localhost:3333
            </a>
          </p>
        </div>
      </div>
    )
  }

  return <NextStudio config={config} />
}
