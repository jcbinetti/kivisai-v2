'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ImageIcon, Layout, Palette, Activity, FileText, Settings, Upload, ListChecks, Code, Database, FolderOpen } from "lucide-react";

const adminLinks = [
  { label: "Dashboard", href: "/admin", icon: <Home className="w-5 h-5" /> },
  {
    label: "Bilder", icon: <ImageIcon className="w-5 h-5" />, children: [
      { label: "Bilder-Übersicht", href: "/admin/images", icon: <ListChecks className="w-4 h-4" /> },
      { label: "Bild hochladen", href: "/admin/images/upload", icon: <Upload className="w-4 h-4" /> },
    ]
  },
  {
    label: "Seiten & Templates", icon: <FileText className="w-5 h-5" />, children: [
      { label: "Seiten-Übersicht", href: "/admin/pages", icon: <ListChecks className="w-4 h-4" /> },
      { label: "Template-Konsistenz", href: "/admin/pages/consistency", icon: <ListChecks className="w-4 h-4" /> },
      { label: "Template-Zuordnung", href: "/admin/pages/template-mapping", icon: <Layout className="w-4 h-4" /> },
    ]
  },
  { label: "Page Builder", href: "/admin/page-builder", icon: <Layout className="w-5 h-5" /> },
  { label: "Design System", href: "/admin/design", icon: <Palette className="w-5 h-5" /> },
  { label: "System Status", href: "/admin/design-system-status", icon: <Activity className="w-5 h-5" /> },
  { label: "Scripts", href: "/admin/scripts", icon: <Code className="w-5 h-5" /> },
  { label: "Content Management", href: "/admin/content", icon: <Database className="w-5 h-5" /> },
  { label: "Dokumente", href: "/admin/documents", icon: <FolderOpen className="w-5 h-5" /> },
  { label: "Umgebung", href: "/admin/environment", icon: <Settings className="w-5 h-5" /> },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-white border-r border-gray-200 shadow-sm">
      <div className="flex items-center justify-center h-16 border-b border-gray-100">
        <span className="text-xl font-bold text-kivisai-deep-dark-blue tracking-wide">KIVISAI Admin</span>
      </div>
      <nav className="flex-1 py-6 px-2 space-y-1">
        {adminLinks.map((link) => {
          if (link.children) {
            // Parent with sublinks
            const isParentActive = link.children.some((child) => pathname.startsWith(child.href));
            return (
              <div key={link.label} className="mb-2">
                <div className={`flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium ${isParentActive ? "bg-kivisai-clear-turquoise text-white" : "text-gray-700"}`}>{link.icon}{link.label}</div>
                <div className="ml-6 mt-1 space-y-1">
                  {link.children.map((child) => {
                    const isActive = pathname === child.href;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm font-medium transition-colors ${isActive ? "bg-kivisai-clear-turquoise text-white" : "text-gray-600 hover:bg-gray-100"}`}
                      >
                        {child.icon}
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }
          // Single link
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition-colors ${isActive ? "bg-kivisai-clear-turquoise text-white" : "text-gray-700 hover:bg-gray-100"}`}
            >
              {link.icon}
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
} 