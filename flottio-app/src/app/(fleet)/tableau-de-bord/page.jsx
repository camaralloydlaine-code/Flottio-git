import { formatCurrency, formatDate } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight, Wallet, CreditCard } from "lucide-react";
import { mockOrders } from "@/lib/mock-data/orders";
import { ORDER_STATUS_CONFIG } from "@/lib/constants";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-gray-400">Gardez le contrôle sur vos tâches, suivez vos progrès et le statut de vos commandes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Balance Card (Primary/Accent) */}
        <div className="glass-card p-6 flex flex-col justify-between col-span-1 md:col-span-1 border border-accent/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent"></div>
          <div>
            <h3 className="text-gray-400 text-sm mb-2">Solde Total</h3>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-sans tracking-tight font-bold text-white">{formatCurrency(689372.00)}</span>
            </div>
            <p className="text-status-completed text-sm mt-2 flex items-center gap-1">
              <ArrowUpRight size={16} />
              +1.1% depuis le mois dernier
            </p>
          </div>
          <div className="flex gap-3 mt-8">
            <button className="flex-1 bg-white text-[#0D0D12] py-2.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
              <Wallet size={16} /> Transférer
            </button>
            <button className="flex-1 bg-surface border border-border text-white py-2.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
              <CreditCard size={16} /> Demander
            </button>
          </div>
        </div>

        {/* Earnings & Spending */}
        <div className="flex flex-col gap-6 col-span-1">
          <div className="bg-[#B95D34] rounded-2xl p-6 relative overflow-hidden h-full flex flex-col justify-center">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
             <h3 className="text-white/80 text-sm mb-2">Total Revenus</h3>
             <span className="text-3xl font-sans tracking-tight font-bold text-white">{formatCurrency(950.00)}</span>
             <p className="text-white/60 text-sm mt-2 flex items-center gap-1">
              <ArrowUpRight size={16} /> +2.3% Ce mois-ci
            </p>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-6 relative h-full flex flex-col justify-center">
             <h3 className="text-gray-400 text-sm mb-2">Total Dépenses</h3>
             <span className="text-3xl font-sans tracking-tight font-bold text-white">{formatCurrency(700.00)}</span>
             <p className="text-gray-500 text-sm mt-2 flex items-center gap-1">
              <ArrowDownRight size={16} /> -1.2% Ce mois-ci
            </p>
          </div>
        </div>

        {/* Chart Widget Mock */}
        <div className="glass-card p-6 col-span-1 flex flex-col">
           <div className="flex justify-between items-start mb-6">
             <div>
               <h3 className="text-gray-400 text-sm mb-1">Activité</h3>
               <p className="text-xs text-gray-500">Aperçu de vos opérations par période</p>
             </div>
           </div>
           <div className="flex-1 flex items-end gap-2 mt-4 justify-between">
              {[40, 70, 45, 90, 60, 30, 80, 55, 65, 40].map((h, i) => (
                <div key={i} className="w-full flex flex-col justify-end gap-1 group">
                   <div className="w-full bg-[#B95D34] rounded-t-sm opacity-80 group-hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                   <div className="w-full bg-surface border border-border rounded-b-sm" style={{ height: `${20}%` }}></div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="glass-card mt-8 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-white">Commandes Récentes</h2>
          <Link href="/commandes" className="text-sm text-accent hover:underline">Voir tout</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-400 uppercase bg-surface/50 border-y border-border">
              <tr>
                <th className="px-4 py-3 font-medium">Référence</th>
                <th className="px-4 py-3 font-medium">Véhicule</th>
                <th className="px-4 py-3 font-medium">Statut</th>
                <th className="px-4 py-3 font-medium">Date prévue</th>
                <th className="px-4 py-3 font-medium text-right">Montant</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockOrders.slice(0, 4).map((order) => {
                const statusConfig = ORDER_STATUS_CONFIG[order.status];
                return (
                  <tr key={order.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-4 font-medium text-white">{order.reference}</td>
                    <td className="px-4 py-4 text-gray-300">
                       {order.vehicle.make} {order.vehicle.model} <span className="text-gray-500 text-xs ml-1">{order.vehicle.license_plate}</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusConfig.color} border border-current/20`}>
                        {statusConfig.label}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-400">{formatDate(order.scheduled_date)}</td>
                    <td className="px-4 py-4 text-right font-medium text-white">
                      {order.final_price ? formatCurrency(order.final_price) : formatCurrency(order.service.base_price)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
