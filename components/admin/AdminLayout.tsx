import AdminSidebar from "./AdminSidebar";
import Breadcrumbs from "../common/Breadcrumbs";
import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: string[];
}

export default function AdminLayout({ children, breadcrumbs }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 flex items-center px-8 border-b bg-white shadow-sm">
          <div className="flex-1 flex items-center gap-4">
            <span className="text-2xl font-bold text-kivisai-deep-dark-blue">KIVISAI Admin</span>
            {/* Optional: User, Logout, Sprache */}
          </div>
        </header>
        {/* Breadcrumbs */}
        <div className="px-8 pt-4">
          <Breadcrumbs items={breadcrumbs || ["Admin"]} />
        </div>
        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
} 