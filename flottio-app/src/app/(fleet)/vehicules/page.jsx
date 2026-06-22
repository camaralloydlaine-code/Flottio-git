"use client"

import { Car, MoreVertical, Plus } from "lucide-react";

export default function VehiculesPage() {
  const mockVehicles = [
    { id: "v1", make: "Peugeot", model: "3008", plate: "AB-123-CD", status: "actif", lastService: "2026-06-20", mileage: "45,000 km" },
    { id: "v2", make: "Renault", model: "Clio", plate: "EF-456-GH", status: "actif", lastService: "2026-05-15", mileage: "28,500 km" },
    { id: "v3", make: "Tesla", model: "Model 3", plate: "IJ-789-KL", status: "maintenance", lastService: "2026-04-10", mileage: "12,000 km" },
    { id: "v4", make: "Audi", model: "A4", plate: "MN-012-OP", status: "actif", lastService: "2026-06-05", mileage: "89,000 km" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-sans font-semibold text-white mb-1">Véhicules</h1>
          <p className="text-gray-400 text-sm">Gérez votre parc automobile.</p>
        </div>
        <button className="bg-surface border border-border text-white hover:bg-white/5 transition-colors px-4 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2">
          <Plus size={18} />
          Ajouter un véhicule
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockVehicles.map((v) => (
          <div key={v.id} className="glass-card p-6 flex flex-col relative group">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreVertical size={18} />
            </button>
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400 mb-4">
              <Car size={24} />
            </div>
            <h3 className="font-semibold text-white text-lg">{v.make} {v.model}</h3>
            <p className="text-gray-400 text-sm mb-4">{v.plate}</p>
            
            <div className="mt-auto space-y-2 pt-4 border-t border-border">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Statut</span>
                <span className={`font-medium ${v.status === 'actif' ? 'text-status-completed' : 'text-status-pending'}`}>
                  {v.status === 'actif' ? 'Actif' : 'En maintenance'}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Dernière prestation</span>
                <span className="text-gray-300">{new Date(v.lastService).toLocaleDateString('fr-FR')}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Kilométrage</span>
                <span className="text-gray-300">{v.mileage}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
