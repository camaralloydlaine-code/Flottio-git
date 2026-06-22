"use client"

import { useParams } from "next/navigation";
import { mockOrders } from "@/lib/mock-data/orders";
import { ORDER_STATUS_CONFIG } from "@/lib/constants";
import { formatCurrency, formatDate } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Car, Clock, CheckCircle2 } from "lucide-react";

export default function CommandeDetailPage() {
  const params = useParams();
  const orderId = params.id;
  
  // Dans la Phase 1, on lit depuis les mock data
  const order = mockOrders.find(o => o.id === orderId);

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-xl font-semibold text-white mb-2">Commande introuvable</h2>
        <Link href="/commandes" className="text-accent hover:underline">Retour aux commandes</Link>
      </div>
    );
  }

  const statusConfig = ORDER_STATUS_CONFIG[order.status];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/commandes" className="p-2 bg-surface hover:bg-white/5 rounded-lg transition-colors">
          <ArrowLeft size={20} className="text-gray-400" />
        </Link>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-sans font-semibold text-white">{order.reference}</h1>
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusConfig.color} border border-current/20`}>
              {statusConfig.label}
            </span>
          </div>
          <p className="text-gray-400 text-sm mt-1">{order.service.label}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Details & Photos */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6 grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <span className="text-gray-500 text-xs uppercase font-medium flex items-center gap-2"><Car size={14}/> Véhicule</span>
              <p className="font-medium text-white">{order.vehicle.make} {order.vehicle.model}</p>
              <p className="text-sm text-gray-400">{order.vehicle.license_plate}</p>
            </div>
            <div className="space-y-1">
              <span className="text-gray-500 text-xs uppercase font-medium flex items-center gap-2"><Calendar size={14}/> Date prévue</span>
              <p className="font-medium text-white">{formatDate(order.scheduled_date)}</p>
              <p className="text-sm text-gray-400">À partir de 14:00</p>
            </div>
            <div className="space-y-1">
              <span className="text-gray-500 text-xs uppercase font-medium flex items-center gap-2"><MapPin size={14}/> Lieu</span>
              <p className="font-medium text-white">{order.location_address}</p>
            </div>
            <div className="space-y-1">
              <span className="text-gray-500 text-xs uppercase font-medium flex items-center gap-2"><Clock size={14}/> Montant</span>
              <p className="font-medium text-accent text-lg">{order.final_price ? formatCurrency(order.final_price) : formatCurrency(order.service.base_price)}</p>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Photos Avant / Après</h3>
            {order.photos.length === 0 ? (
              <div className="bg-surface/50 border border-dashed border-border rounded-xl p-8 text-center">
                <p className="text-gray-400">Aucune photo n'a encore été ajoutée par le prestataire.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {order.photos.map((photo, i) => (
                  <div key={i} className="relative group rounded-xl overflow-hidden border border-border">
                    <img src={photo.url} alt={`Photo ${photo.type}`} className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-medium text-white capitalize">
                      {photo.type}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Timeline & Provider */}
        <div className="space-y-6">
          {/* Provider Card */}
          <div className="glass-card p-6">
            <h3 className="text-sm font-medium text-gray-400 uppercase mb-4">Prestataire assigné</h3>
            {order.provider ? (
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-xl">🚗</div>
                 <div>
                   <p className="font-medium text-white">{order.provider.name}</p>
                   <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                     <span>⭐ {order.provider.rating}/5</span>
                   </div>
                 </div>
               </div>
            ) : (
              <div className="flex items-center gap-3 text-status-pending">
                <Loader2 className="animate-spin" size={18} />
                <span className="text-sm">Recherche en cours...</span>
              </div>
            )}
          </div>

          {/* Timeline */}
          <div className="glass-card p-6">
             <h3 className="text-sm font-medium text-gray-400 uppercase mb-6">Suivi de l'intervention</h3>
             <div className="relative border-l border-border ml-3 space-y-6">
                {order.timeline.map((event, i) => {
                  const isLast = i === order.timeline.length - 1;
                  return (
                    <div key={i} className="relative pl-6">
                      <div className={`absolute -left-1.5 top-1 w-3 h-3 rounded-full ${isLast ? 'bg-accent shadow-[0_0_10px_rgba(201,168,76,0.5)]' : 'bg-surface border border-gray-500'}`}></div>
                      <div>
                        <p className={`text-sm font-medium ${isLast ? 'text-white' : 'text-gray-300'}`}>{event.label}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{event.description}</p>
                        <p className="text-xs text-gray-600 mt-1">{formatDate(event.timestamp)}</p>
                      </div>
                    </div>
                  )
                })}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
