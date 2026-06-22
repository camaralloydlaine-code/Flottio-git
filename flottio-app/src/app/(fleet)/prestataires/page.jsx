"use client"

import { Users, Star, MapPin } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function PrestatairesPage() {
  const mockProviders = [
    { id: "p1", name: "Esthétique Auto Pro", distance: "2.5 km", rating: 4.8, jobs: 124, status: "disponible" },
    { id: "p2", name: "CleanCar Express", distance: "4.1 km", rating: 4.5, jobs: 89, status: "occupé" },
    { id: "p3", name: "Luxe Wash", distance: "5.8 km", rating: 4.9, jobs: 312, status: "disponible" },
    { id: "p4", name: "Mobile Detailing", distance: "1.2 km", rating: 4.2, jobs: 45, status: "indisponible" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-semibold text-white mb-1">Prestataires</h1>
          <p className="text-gray-400 text-sm">Annuaire de vos partenaires de préparation esthétique.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProviders.map((p) => (
          <div key={p.id} className="glass-card p-6 flex flex-col relative">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-2xl">
                ✨
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                p.status === 'disponible' ? 'bg-status-completed/10 text-status-completed border-status-completed/20' :
                p.status === 'occupé' ? 'bg-status-pending/10 text-status-pending border-status-pending/20' :
                'bg-status-cancelled/10 text-status-cancelled border-status-cancelled/20'
              }`}>
                {p.status}
              </span>
            </div>
            <h3 className="font-semibold text-white text-lg">{p.name}</h3>
            
            <div className="flex items-center gap-4 mt-2 mb-6">
              <div className="flex items-center gap-1 text-sm text-accent">
                <Star size={16} fill="currentColor" />
                <span className="font-medium text-white">{p.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <MapPin size={16} />
                <span>{p.distance}</span>
              </div>
            </div>
            
            <div className="mt-auto pt-4 border-t border-border flex justify-between items-center text-sm">
              <span className="text-gray-500">{p.jobs} missions réalisées</span>
              <button className="text-white hover:text-accent font-medium transition-colors">
                Voir le profil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
