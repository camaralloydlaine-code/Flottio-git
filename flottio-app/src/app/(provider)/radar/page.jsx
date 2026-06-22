"use client";
import { MapPin, Clock, Navigation, CheckCircle2 } from "lucide-react";

export default function RadarPage() {
  const missions = [
    { id: 1, company: "Flotte Sixt", volume: "Lot de 5 véhicules", type: "Nettoyage Intégral (Flotte)", distance: "1.2 km", time: "Pour 18:00", price: 275, status: "new" },
    { id: 2, company: "Entreprise TechCorp", volume: "1 véhicule (Direction)", type: "Nettoyage Intérieur Premium", distance: "3.4 km", time: "Demain 09:00", price: 45, status: "new" },
    { id: 3, company: "Concession Renault", volume: "Lot de 3 véhicules", type: "Préparation Livraison VN", distance: "5.0 km", time: "Flexible", price: 120, status: "new" }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-4 md:space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-sans font-bold text-white mb-1 md:mb-2">Radar B2B</h1>
          <p className="text-xs md:text-sm text-gray-400 font-sans">Appels d'offres et commandes de flottes dans votre secteur.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="glass-card p-4 md:p-6 h-[200px] md:h-[400px] flex items-center justify-center relative overflow-hidden group">
          {/* Fake Radar Map Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="absolute w-16 h-16 md:w-32 md:h-32 border-2 border-accent rounded-full animate-ping opacity-20"></div>
          <div className="absolute w-32 h-32 md:w-64 md:h-64 border border-accent/20 rounded-full"></div>
          <div className="absolute w-48 h-48 md:w-96 md:h-96 border border-accent/10 rounded-full"></div>
          
          <div className="relative z-10 text-center space-y-2 md:space-y-4">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full mx-auto shadow-[0_0_15px_rgba(201,168,76,0.5)]"></div>
            <p className="font-mono text-[10px] md:text-sm text-accent uppercase tracking-widest font-bold bg-background/80 px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-accent/20 inline-block">Recherche...</p>
          </div>
        </div>

        <div className="space-y-3 md:space-y-4">
          {missions.map(m => (
            <div key={m.id} className="glass-card p-4 md:p-5 border-l-4 border-l-accent flex flex-col gap-3 md:gap-4">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] md:text-xs font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded uppercase tracking-wider">Pro</span>
                    <h3 className="font-sans font-bold text-base md:text-lg text-white leading-tight">{m.company}</h3>
                  </div>
                  <p className="font-sans text-xs md:text-sm text-gray-300 font-medium leading-tight">{m.volume} • <span className="text-gray-400">{m.type}</span></p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xl md:text-2xl font-sans tracking-tight font-bold text-white">{m.price}€</div>
                  <div className="text-[10px] md:text-xs text-gray-500 font-sans mt-0.5 md:mt-1">HT</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-gray-400 font-sans">
                <span className="flex items-center gap-1"><MapPin size={14}/> {m.distance}</span>
                <span className="flex items-center gap-1"><Clock size={14}/> {m.time}</span>
              </div>
              <button className="magnetic-btn w-full bg-white text-[#0D0D12] hover:bg-gray-100 transition-colors py-2 md:py-2.5 rounded-lg md:rounded-xl font-bold text-sm md:text-base flex items-center justify-center gap-2 mt-1 md:mt-2">
                <CheckCircle2 size={16} className="md:w-[18px] md:h-[18px]" /> Accepter
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
