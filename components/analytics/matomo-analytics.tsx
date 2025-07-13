"use client"

import { useEffect } from "react"
import Script from "next/script"

declare global {
  interface Window {
    _paq: any[]
  }
}

export default function MatomoAnalytics() {
  const matomoUrl = process.env.NEXT_PUBLIC_MATOMO_URL
  const siteId = process.env.NEXT_PUBLIC_MATOMO_SITE_ID

  useEffect(() => {
    if (!matomoUrl || !siteId) return

    window._paq = window._paq || []
    window._paq.push(["trackPageView"])
    window._paq.push(["enableLinkTracking"])
    window._paq.push(["setTrackerUrl", `${matomoUrl}/matomo.php`])
    window._paq.push(["setSiteId", siteId])

    // DSGVO-konforme Einstellungen
    window._paq.push(["setDoNotTrack", true])
    window._paq.push(["disableCookies"])
  }, [matomoUrl, siteId])

  if (!matomoUrl || !siteId) {
    return null
  }

  return (
    <Script
      id="matomo-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var _paq = window._paq = window._paq || [];
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="${matomoUrl}/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '${siteId}']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        `,
      }}
    />
  )
}
