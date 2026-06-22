import Link from "next/link";
import { 
  LayoutDashboard, 
  ClipboardList, 
  Car, 
  Users, 
  Receipt, 
  Settings,
  LogOut,
  X
} from "lucide-react";

export function FleetSidebar({ isOpen, onClose }) {
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
          <NavItem href="/tableau-de-bord" icon={<LayoutDashboard size={20} />} label="Tableau de bord" active onClick={onClose} />
          <NavItem href="/commandes" icon={<ClipboardList size={20} />} label="Commandes" onClick={onClose} />
          <NavItem href="/vehicules" icon={<Car size={20} />} label="Véhicules" onClick={onClose} />
          <NavItem href="/prestataires" icon={<Users size={20} />} label="Prestataires" onClick={onClose} />
          <NavItem href="/facturation" icon={<Receipt size={20} />} label="Facturation" onClick={onClose} />
        </nav>

        <div className="mt-auto space-y-2 pt-4 border-t border-border shrink-0">
          <div className="bg-surface rounded-xl p-4 mb-4">
            <p className="text-xs text-gray-400 mb-1">Plan actuel</p>
            <p className="text-sm font-semibold text-white">Enterprise</p>
          </div>
          <NavItem href="/parametres" icon={<Settings size={20} />} label="Paramètres" onClick={onClose} />
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors w-full text-left">
            <LogOut size={20} />
            Déconnexion
          </button>
        </div>
      </aside>
    </>
  );
}

function NavItem({ href, icon, label, active, onClick }) {
  return (
    <Link 
      href={href}
      onClick={onClick}
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
