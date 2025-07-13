import Link from "next/link"

interface UseCaseBreadcrumbProps {
  currentPage: string
  parentPage?: string
  parentUrl?: string
}

export default function UseCaseBreadcrumb({ currentPage, parentPage, parentUrl }: UseCaseBreadcrumbProps) {
  return (
    <div className="bg-kivisai-light-cool-gray border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-kivisai-moss-green">
          <Link href="/" className="hover:text-kivisai-clear-turquoise">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/use-cases" className="hover:text-kivisai-clear-turquoise">
            Use Cases
          </Link>
          {parentPage && parentUrl && (
            <>
              <span className="mx-2">/</span>
              <Link href={parentUrl} className="hover:text-kivisai-clear-turquoise">
                {parentPage}
              </Link>
            </>
          )}
          <span className="mx-2">/</span>
          <span className="text-kivisai-deep-dark-blue font-medium">{currentPage}</span>
        </nav>
      </div>
    </div>
  )
}
