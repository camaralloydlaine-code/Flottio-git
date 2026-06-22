"use client";
import { ArrowUpRight, Calendar, Download } from "lucide-react";

export default function GainsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-sans font-bold text-white mb-2">Gains & Facturation</h1>
          <p className="text-gray-400 font-sans">Suivez vos revenus et générez vos factures automatiquement.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 border-t-2 border-t-accent relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all"></div>
          <p className="text-gray-400 font-sans text-sm mb-2">Gagné cette semaine</p>
          <p className="text-4xl font-sans tracking-tight font-bold text-white">425,00€</p>
          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-green-400 uppercase tracking-wider">
            <ArrowUpRight size={14} /> +12% vs semaine dernière
          </div>
        </div>

        <div className="glass-card p-6">
          <p className="text-gray-400 font-sans text-sm mb-2">Total du mois (Juin)</p>
          <p className="text-4xl font-sans tracking-tight font-bold text-white">1 250,00€</p>
          <div className="mt-4 flex items-center gap-2 text-xs font-sans text-gray-500">
            18 missions réalisées
          </div>
        </div>

        <div className="glass-card p-6 bg-accent/5 border border-accent/10">
          <p className="text-accent/80 font-sans text-sm mb-2">Prochain versement (Vendredi)</p>
          <p className="text-4xl font-sans tracking-tight font-bold text-accent">180,00€</p>
          <div className="mt-4 flex items-center gap-2 text-xs font-sans text-gray-400">
            Virement bancaire automatique
          </div>
        </div>
      </div>

      <div className="glass-card mt-8 overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="text-xl font-sans font-bold text-white">Historique des missions</h2>
          <button className="flex items-center gap-2 text-sm font-sans font-medium text-accent hover:text-white transition-colors">
            <Download size={16} /> Exporter (CSV)
          </button>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left font-sans text-sm">
            <thead className="bg-surface/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-gray-400 font-medium">Date</th>
                <th className="px-6 py-4 text-gray-400 font-medium">Prestation</th>
                <th className="px-6 py-4 text-gray-400 font-medium">Véhicule</th>
                <th className="px-6 py-4 text-gray-400 font-medium">Montant</th>
                <th className="px-6 py-4 text-gray-400 font-medium">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-white">Aujourd'hui, 11:30</td>
                <td className="px-6 py-4 text-gray-300">Nettoyage Intégral</td>
                <td className="px-6 py-4 text-gray-500">Peugeot 3008</td>
                <td className="px-6 py-4 font-bold text-white">65€</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-lg font-mono uppercase">Payé</span></td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-white">Hier, 15:00</td>
                <td className="px-6 py-4 text-gray-300">Lavage Extérieur</td>
                <td className="px-6 py-4 text-gray-500">Tesla Model 3</td>
                <td className="px-6 py-4 font-bold text-white">25€</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-lg font-mono uppercase">Payé</span></td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-white">18 Juin, 09:15</td>
                <td className="px-6 py-4 text-gray-300">Nettoyage Intérieur</td>
                <td className="px-6 py-4 text-gray-500">Renault Clio</td>
                <td className="px-6 py-4 font-bold text-white">30€</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-lg font-mono uppercase">Payé</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
