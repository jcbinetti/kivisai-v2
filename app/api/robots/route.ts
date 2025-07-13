import { NextResponse } from "next/server"

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Disallow admin areas
Disallow: /admin/
Disallow: /api/

# Sitemap
Sitemap: https://www.kivisai.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1`

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
