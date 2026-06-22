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
  CalendarDays
} from "lucide-react";

export function ProviderSidebar() {
  const pathname = usePathname();

  const NavItem = ({ href, icon, label }) => {
    const active = pathname === href || pathname.startsWith(href + '/');
    return (
      <Link 
        href={href} 
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
    <aside className="w-64 bg-[#0D0D12] border-r border-border h-screen flex flex-col p-4">
      <Link href="/" className="flex items-center gap-3 mb-10 px-2 mt-4 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
          <span className="font-bold text-[#0D0D12]">F</span>
        </div>
        <span className="text-xl font-heading font-semibold text-white">Flottio</span>
      </Link>

      <nav className="flex-1 space-y-2">
        <NavItem href="/radar" icon={<Radar size={20} />} label="Radar B2B" />
        <NavItem href="/agenda" icon={<CalendarDays size={20} />} label="Agenda" />
        <NavItem href="/missions" icon={<ClipboardList size={20} />} label="Mes Missions" />
        <NavItem href="/tarifs" icon={<Settings2 size={20} />} label="Mes Tarifs" />
        <NavItem href="/gains" icon={<Wallet size={20} />} label="Gains" />
      </nav>

      <div className="border-t border-border pt-4 mt-auto space-y-2">
        <NavItem href="/profil" icon={<User size={20} />} label="Mon profil" />
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all font-sans font-medium">
          <LogOut size={20} className="text-gray-500" />
          <span>Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}
