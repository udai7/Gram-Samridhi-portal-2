import { ReactNode } from "react";
import { DashboardNav } from "./DashboardNav";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export function DashboardLayout({
  children,
  title,
  description,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 shadow-sm">
        <DashboardNav />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <header className="bg-green-700 border-b border-green-700 px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            {description && (
              <p className="text-sm text-green-100 mt-1">{description}</p>
            )}
          </div>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
