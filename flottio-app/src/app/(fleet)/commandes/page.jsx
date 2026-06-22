"use client";
import Link from "next/link";
import { Plus, Search, Filter, Clock, MapPin, CheckCircle2 } from "lucide-react";

export default function CommandesPage() {
  const commandes = [
    { id: "CMD-2026-001", volume: "Lot de 5 véhicules", type: "Nettoyage Intégral", date: "Demain, 08:00", lieu: "Dépôt La Défense", status: "En attente de prestataire", prix: "~ 250€ HT" },
    { id: "CMD-2026-002", volume: "1 véhicule (VIP)", type: "Nettoyage Intérieur Premium", date: "Aujourd'hui, 14:00", lieu: "Agence Charles de Gaulle", status: "Attribué (TechCorp)", prix: "45€ HT" },
    { id: "CMD-2026-003", volume: "Lot de 3 véhicules", type: "Lavage Extérieur", date: "15 Juin 2026", lieu: "Dépôt La Défense", status: "Terminé", prix: "75€ HT" }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-sans font-bold text-white mb-2">Commandes B2B</h1>
          <p className="text-gray-400 font-sans">Gérez vos appels d'offres et suivez les interventions sur votre flotte.</p>
        </div>
        <Link 
          href="/commandes/nouvelle" 
          className="magnetic-btn bg-accent hover:bg-accent/90 text-[#0D0D12] py-3 px-6 rounded-xl font-sans font-bold text-sm flex items-center justify-center gap-2 transition-colors shrink-0"
        >
          <Plus size={18} /> Nouvelle Commande
        </Link>
      </div>

      <div className="glass-card p-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Rechercher par ID, lieu, statut..." 
            className="w-full bg-surface border border-border rounded-xl pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-sans text-sm"
          />
        </div>
        <button className="bg-surface border border-border hover:bg-white/5 text-white py-2.5 px-4 rounded-xl font-sans font-medium text-sm flex items-center justify-center gap-2 transition-colors">
          <Filter size={18} /> Filtrer
        </button>
      </div>

      <div className="space-y-4">
        {commandes.map((cmd) => (
          <div key={cmd.id} className="glass-card p-6 border-l-4 border-l-accent flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors cursor-pointer group">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded uppercase tracking-wider">{cmd.id}</span>
                <span className={`text-xs font-sans font-bold px-2.5 py-1 rounded-full ${
                  cmd.status.includes('Attente') ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' : 
                  cmd.status.includes('Terminé') ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 
                  'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                }`}>
                  {cmd.status}
                </span>
              </div>
              <div>
                <h3 className="font-sans font-bold text-xl text-white group-hover:text-accent transition-colors">{cmd.volume}</h3>
                <p className="font-sans text-sm text-gray-400 mt-1">{cmd.type}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-300 font-sans">
                <Clock size={16} className="text-gray-500" /> {cmd.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 font-sans">
                <MapPin size={16} className="text-gray-500" /> {cmd.lieu}
              </div>
            </div>

            <div className="text-right shrink-0">
              <div className="text-2xl font-sans tracking-tight font-bold text-white">{cmd.prix}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
