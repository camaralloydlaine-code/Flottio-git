"use client"

import { Receipt, Download, Filter } from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function FacturationPage() {
  const mockInvoices = [
    { id: "INV-2026-06-01", date: "2026-06-30", amount: 1250.00, status: "en_attente", ordersCount: 12 },
    { id: "INV-2026-05-01", date: "2026-05-31", amount: 980.00, status: "payee", ordersCount: 8 },
    { id: "INV-2026-04-01", date: "2026-04-30", amount: 1450.00, status: "payee", ordersCount: 15 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-sans font-semibold text-white mb-1">Facturation</h1>
          <p className="text-gray-400 text-sm">Consultez et téléchargez vos factures mensuelles.</p>
        </div>
        <button className="bg-surface border border-border text-white hover:bg-white/5 transition-colors px-4 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2">
          <Filter size={18} />
          Filtrer
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-gray-400 text-sm mb-2">À payer</h3>
          <p className="text-3xl font-sans tracking-tight font-bold text-white">{formatCurrency(1250.00)}</p>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-gray-400 text-sm mb-2">Payé ce mois</h3>
          <p className="text-3xl font-sans tracking-tight font-bold text-white">{formatCurrency(0)}</p>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-gray-400 text-sm mb-2">Total annuel</h3>
          <p className="text-3xl font-sans tracking-tight font-bold text-white">{formatCurrency(3680.00)}</p>
        </div>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-lg font-semibold text-white mb-6">Historique des factures</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-400 uppercase bg-surface/50 border-y border-border">
              <tr>
                <th className="px-4 py-3 font-medium">Référence</th>
                <th className="px-4 py-3 font-medium">Date d'émission</th>
                <th className="px-4 py-3 font-medium">Commandes</th>
                <th className="px-4 py-3 font-medium">Statut</th>
                <th className="px-4 py-3 font-medium text-right">Montant</th>
                <th className="px-4 py-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-4 font-medium text-white flex items-center gap-2">
                    <Receipt size={16} className="text-gray-400" />
                    {inv.id}
                  </td>
                  <td className="px-4 py-4 text-gray-400">{formatDate(inv.date)}</td>
                  <td className="px-4 py-4 text-gray-300">{inv.ordersCount} prestations</td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      inv.status === 'payee' 
                        ? 'bg-status-completed/10 text-status-completed border-status-completed/20' 
                        : 'bg-status-pending/10 text-status-pending border-status-pending/20'
                    }`}>
                      {inv.status === 'payee' ? 'Payée' : 'En attente'}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right font-medium text-white">{formatCurrency(inv.amount)}</td>
                  <td className="px-4 py-4 text-right">
                    <button className="text-gray-400 hover:text-accent transition-colors">
                      <Download size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
