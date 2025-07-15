import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard | KIVISAI',
  description: 'KIVISAI Website Administration',
  robots: 'noindex, nofollow', // Verhindert Indexierung
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="admin-layout">
      {children}
    </div>
  )
} 