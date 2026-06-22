"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Radar, 
  ClipboardList, 
  Settings2,
  Wallet,
  User,
  LogOut,
  CalendarDays,
  X
} from "lucide-react";

export function ProviderSidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  const NavItem = ({ href, icon, label, onClick }) => {
    const active = pathname === href || pathname.startsWith(href + '/');
    return (
      <Link 
        href={href} 
        onClick={onClick}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-sans font-medium ${
          active 
            ? "bg-accent/10 text-accent" 
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
      >
        <div className={active ? "text-accent" : "text-gray-500"}>{icon}</div>
        <span>{label}</span>
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[#0D0D12]/80 z-40 md:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0D0D12] border-r border-border h-screen flex flex-col p-4 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex items-center justify-between mb-10 mt-4 px-2">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <span className="font-bold text-[#0D0D12]">F</span>
            </div>
            <span className="text-xl font-sans font-semibold text-white">Flottio</span>
          </Link>
          <button onClick={onClose} className="md:hidden p-1 text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto">
          <NavItem href="/radar" icon={<Radar size={20} />} label="Radar B2B" onClick={onClose} />
          <NavItem href="/agenda" icon={<CalendarDays size={20} />} label="Agenda" onClick={onClose} />
          <NavItem href="/missions" icon={<ClipboardList size={20} />} label="Mes Missions" onClick={onClose} />
          <NavItem href="/tarifs" icon={<Settings2 size={20} />} label="Mes Tarifs" onClick={onClose} />
          <NavItem href="/gains" icon={<Wallet size={20} />} label="Gains" onClick={onClose} />
        </nav>

        <div className="border-t border-border pt-4 mt-auto space-y-2 shrink-0">
          <NavItem href="/profil" icon={<User size={20} />} label="Mon profil" onClick={onClose} />
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all font-sans font-medium">
            <LogOut size={20} className="text-gray-500" />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>
    </>
  );
}
