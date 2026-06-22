import Link from "next/link";
import { 
  LayoutDashboard, 
  ClipboardList, 
  Car, 
  Users, 
  Receipt, 
  Settings,
  LogOut
} from "lucide-react";

export function FleetSidebar() {
  return (
    <aside className="w-64 bg-[#0D0D12] border-r border-border h-screen flex flex-col p-4">
      <Link href="/" className="flex items-center gap-3 mb-10 px-2 mt-4 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
          <span className="font-bold text-[#0D0D12]">F</span>
        </div>
        <span className="text-xl font-heading font-semibold text-white">Flottio</span>
      </Link>

      <nav className="flex-1 space-y-2">
        <NavItem href="/tableau-de-bord" icon={<LayoutDashboard size={20} />} label="Tableau de bord" active />
        <NavItem href="/commandes" icon={<ClipboardList size={20} />} label="Commandes" />
        <NavItem href="/vehicules" icon={<Car size={20} />} label="Véhicules" />
        <NavItem href="/prestataires" icon={<Users size={20} />} label="Prestataires" />
        <NavItem href="/facturation" icon={<Receipt size={20} />} label="Facturation" />
      </nav>

      <div className="mt-auto space-y-2 pt-4 border-t border-border">
        <div className="bg-surface rounded-xl p-4 mb-4">
          <p className="text-xs text-gray-400 mb-1">Plan actuel</p>
          <p className="text-sm font-semibold text-white">Enterprise</p>
        </div>
        <NavItem href="/parametres" icon={<Settings size={20} />} label="Paramètres" />
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors w-full text-left">
          <LogOut size={20} />
          Déconnexion
        </button>
      </div>
    </aside>
  );
}

function NavItem({ href, icon, label, active }) {
  return (
    <Link 
      href={href}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
        active 
          ? "bg-accent/10 text-accent" 
          : "text-gray-400 hover:text-white hover:bg-white/5"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
