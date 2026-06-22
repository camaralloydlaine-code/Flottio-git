import { ProviderSidebar } from "@/components/layout/ProviderSidebar";

export default function ProviderLayout({ children }) {
  return (
    <div className="dark flex h-screen bg-background overflow-hidden">
      <ProviderSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 border-b border-border bg-[#0D0D12]/80 backdrop-blur-xl flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-heading font-bold text-white tracking-tight">Espace Partenaire</h1>
            <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-mono text-green-500 uppercase tracking-widest font-bold">En ligne</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center font-bold text-accent">
              ED
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
