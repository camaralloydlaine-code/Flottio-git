"use client";
import { useState } from "react";
import { ProviderSidebar } from "@/components/layout/ProviderSidebar";
import { Menu } from "lucide-react";

export default function ProviderLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark flex h-screen bg-background overflow-hidden relative">
      <ProviderSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 md:h-20 border-b border-border bg-[#0D0D12]/80 backdrop-blur-xl flex items-center justify-between px-4 md:px-8 shrink-0">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 -ml-2 text-gray-400 hover:text-white transition-colors"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-lg md:text-2xl font-sans font-bold text-white tracking-tight truncate">Espace Partenaire</h1>
            <div className="hidden sm:flex px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-mono text-green-500 uppercase tracking-widest font-bold">En ligne</span>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface border border-border flex items-center justify-center font-bold text-accent text-sm md:text-base">
              ED
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
