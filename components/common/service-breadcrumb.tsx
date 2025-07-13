import Link from "next/link"

interface ServiceBreadcrumbProps {
  serviceName: string
  subPage?: string
}

export function ServiceBreadcrumb({ serviceName, subPage }: ServiceBreadcrumbProps) {
  return (
    <nav className="bg-kivisai-light-cool-gray py-4 border-b border-kivisai-light-cool-gray/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 text-sm text-kivisai-moss-green">
          <Link href="/" className="hover:text-kivisai-deep-dark-blue transition-colors font-medium">
            Home
          </Link>
          <span className="text-kivisai-moss-green/60">/</span>
          <Link href="/leistungen" className="hover:text-kivisai-deep-dark-blue transition-colors font-medium">
            Leistungen
          </Link>
          <span className="text-kivisai-moss-green/60">/</span>
          <span className="text-kivisai-deep-dark-blue font-semibold">{serviceName}</span>
          {subPage && (
            <>
              <span className="text-kivisai-moss-green/60">/</span>
              <span className="text-kivisai-deep-dark-blue font-semibold">{subPage}</span>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
