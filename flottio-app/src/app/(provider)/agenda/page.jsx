"use client";
import { Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export default function AgendaPage() {
  const days = ["Lun 22", "Mar 23", "Mer 24", "Jeu 25", "Ven 26", "Sam 27", "Dim 28"];
  const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

  return (
    <div className="max-w-6xl mx-auto space-y-8 h-full flex flex-col">
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-3xl font-sans font-bold text-white mb-2">Mon Agenda</h1>
          <p className="text-gray-400 font-sans">Visualisez et organisez vos créneaux de préparation.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-surface border border-border rounded-xl p-1">
            <button className="p-2 hover:bg-white/5 rounded-lg text-white transition-colors"><ChevronLeft size={20}/></button>
            <span className="px-4 font-sans font-bold text-white text-sm">Semaine 25 (Juin)</span>
            <button className="p-2 hover:bg-white/5 rounded-lg text-white transition-colors"><ChevronRight size={20}/></button>
          </div>
        </div>
      </div>

      <div className="glass-card flex-1 flex flex-col overflow-hidden">
        {/* Header Jours */}
        <div className="flex border-b border-border bg-surface/30 shrink-0">
          <div className="w-16 shrink-0"></div>
          {days.map((day, i) => (
            <div key={i} className={`flex-1 text-center py-4 font-sans font-medium text-sm ${i === 0 ? "text-accent border-b-2 border-accent" : "text-gray-400"}`}>
              {day}
            </div>
          ))}
        </div>

        {/* Grille */}
        <div className="flex-1 overflow-y-auto relative bg-[#0A0A0A]/50">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_60px]"></div>
          
          <div className="relative">
            {hours.map((hour, i) => (
              <div key={i} className="flex h-[60px]">
                <div className="w-16 shrink-0 text-right pr-4 text-xs font-mono text-gray-500 py-2 border-r border-border/50 bg-[#0D0D12] relative z-10">
                  {hour}
                </div>
                <div className="flex-1 flex border-b border-border/10">
                  {/* Colonnes des jours (vides par défaut) */}
                  {days.map((_, j) => (
                    <div key={j} className="flex-1 border-r border-border/10 last:border-none relative">
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Événements (Positionnés de manière absolue) */}
            {/* Lundi: Flotte Sixt (09:00 - 13:00) => top: 60px (09:00), height: 240px (4h) */}
            <div className="absolute top-[60px] left-[64px] w-[calc(14.28%-1px)] h-[240px] p-1 z-20">
              <div className="w-full h-full bg-accent/10 border border-accent/20 rounded-xl p-3 flex flex-col hover:bg-accent/20 transition-colors cursor-pointer group overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-xl"></div>
                <span className="text-xs font-mono font-bold text-accent uppercase mb-1">Lot de 5 véh.</span>
                <p className="font-sans font-bold text-white text-sm leading-tight group-hover:text-accent transition-colors">Flotte Sixt</p>
                <div className="mt-auto space-y-1">
                  <p className="text-xs text-gray-400 font-sans flex items-center gap-1"><MapPin size={12}/> Q-Park La Défense</p>
                  <p className="text-xs font-bold text-white font-sans mt-1">275€</p>
                </div>
              </div>
            </div>

            {/* Mercredi: TechCorp (14:00 - 15:30) => top: 360px (14:00), height: 90px (1.5h) */}
            <div className="absolute top-[360px] left-[calc(64px+14.28%*2)] w-[calc(14.28%-1px)] h-[90px] p-1 z-20">
              <div className="w-full h-full bg-surface border border-border rounded-xl p-2.5 flex flex-col hover:border-gray-500 transition-colors cursor-pointer group overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-500 rounded-l-xl"></div>
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase mb-0.5">1 véh.</span>
                <p className="font-sans font-bold text-white text-xs leading-tight truncate">Entreprise TechCorp</p>
                <p className="text-[10px] font-bold text-gray-300 font-sans mt-auto">45€</p>
              </div>
            </div>

            {/* Ligne temps réel (Lundi 10:30) => top: 150px */}
            <div className="absolute top-[150px] left-16 right-0 h-px bg-red-500/50 z-30 pointer-events-none">
              <div className="absolute -left-2 -top-1 w-2 h-2 rounded-full bg-red-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
