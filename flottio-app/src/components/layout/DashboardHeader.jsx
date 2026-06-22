import { Bell, Search, Menu } from "lucide-react";

export function DashboardHeader({ title, onMenuClick }) {
  return (
    <header className="h-16 md:h-20 flex items-center justify-between px-4 md:px-8 bg-background border-b border-border shrink-0">
      <div className="flex items-center gap-3">
        {onMenuClick && (
          <button 
            onClick={onMenuClick}
            className="md:hidden p-2 -ml-2 text-gray-400 hover:text-white transition-colors"
          >
            <Menu size={24} />
          </button>
        )}
        <h1 className="text-lg md:text-2xl font-sans font-semibold text-white truncate">{title}</h1>
      </div>
      
      <div className="flex items-center gap-3 md:gap-6">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Rechercher..." 
            className="bg-surface border border-border rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-accent/50 w-48 md:w-64 transition-colors"
          />
        </div>
        <button className="sm:hidden p-2 text-gray-400 hover:text-white transition-colors">
          <Search size={20} />
        </button>
        
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full border border-background"></span>
        </button>
        
        <div className="flex items-center gap-3 border-l border-border pl-3 md:pl-6">
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium text-white">Sajib Rahman</p>
            <p className="text-xs text-gray-400">sajib@flottio.com</p>
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold overflow-hidden shrink-0">
             <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
}
