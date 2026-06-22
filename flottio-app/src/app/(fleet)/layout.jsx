"use client";
import { useState } from "react";
import { FleetSidebar } from "@/components/layout/FleetSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";

export default function FleetLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark flex h-screen bg-background overflow-hidden relative">
      <FleetSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <DashboardHeader 
          title="Bonjour, Sajib" 
          onMenuClick={() => setSidebarOpen(true)} 
        />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
