"use client";
import { useState } from "react";
import { Clock, CheckCircle2, ChevronRight, Camera, Upload, MapPin } from "lucide-react";

export default function MissionsPage() {
  const [activeTab, setActiveTab] = useState("en-cours");

  return (
    <div className="max-w-5xl mx-auto space-y-4 md:space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-sans font-bold text-white mb-1 md:mb-2">Mes Missions</h1>
        <p className="text-xs md:text-sm text-gray-400 font-sans">Suivi et exécution de vos missions de préparation.</p>
      </div>

      <div className="flex items-center gap-4 border-b border-border">
        <button 
          onClick={() => setActiveTab("en-cours")}
          className={`pb-3 md:pb-4 px-2 font-sans font-medium text-xs md:text-sm transition-colors border-b-2 ${activeTab === "en-cours" ? "border-accent text-white" : "border-transparent text-gray-500 hover:text-gray-300"}`}
        >
          En cours (1)
        </button>
        <button 
          onClick={() => setActiveTab("historique")}
          className={`pb-3 md:pb-4 px-2 font-sans font-medium text-xs md:text-sm transition-colors border-b-2 ${activeTab === "historique" ? "border-accent text-white" : "border-transparent text-gray-500 hover:text-gray-300"}`}
        >
          Historique (12)
        </button>
      </div>

      {activeTab === "en-cours" && (
        <div className="glass-card p-4 md:p-6 border-t-2 border-t-accent space-y-4 md:space-y-6">
          <div className="flex justify-between items-start gap-2">
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                <span className="px-2 py-0.5 md:px-2.5 md:py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider">
                  En route
                </span>
                <span className="text-xs md:text-sm font-sans text-gray-400">Demandé il y a 2h</span>
              </div>
              <h2 className="text-lg md:text-2xl font-sans font-bold text-white leading-tight">Flotte Sixt - Lot de 5 véhicules</h2>
              <p className="text-xs md:text-sm text-gray-400 font-sans mt-1 leading-tight">Nettoyage Intégral (Flotte) • Contact sur place: M. Dupont</p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-2xl md:text-3xl font-sans tracking-tight font-bold text-white">275€</span>
              <div className="text-[10px] md:text-xs text-gray-500 font-sans mt-0.5 md:mt-1">HT</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-surface border border-border p-3 md:p-4 rounded-xl flex items-start gap-3 md:gap-4">
              <MapPin className="text-accent mt-0.5 md:mt-1 w-4 h-4 md:w-5 md:h-5 shrink-0" />
              <div>
                <p className="font-sans font-bold text-white text-xs md:text-sm mb-1">Localisation Dépôt</p>
                <p className="text-gray-400 font-sans text-xs md:text-sm leading-tight">Parking Q-Park La Défense<br/>Niveau -2, Zone Loueurs (Places 400-405)</p>
              </div>
            </div>
            <div className="bg-surface border border-border p-3 md:p-4 rounded-xl flex items-start gap-3 md:gap-4">
              <Clock className="text-accent mt-0.5 md:mt-1 w-4 h-4 md:w-5 md:h-5 shrink-0" />
              <div>
                <p className="font-sans font-bold text-white text-xs md:text-sm mb-1">Instructions d'accès</p>
                <p className="text-gray-400 font-sans text-xs md:text-sm leading-tight">Récupérer le badge à l'accueil Q-Park. Les véhicules sont ouverts à distance.</p>
              </div>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="font-sans font-bold text-white text-base md:text-lg">Preuves d'intervention</h3>
            <div className="flex overflow-x-auto pb-2 md:grid md:grid-cols-4 gap-3 md:gap-4 snap-x">
              <div className="w-[40%] md:w-auto shrink-0 snap-start aspect-[4/3] md:aspect-square bg-surface border border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-1.5 md:gap-2 cursor-pointer hover:border-accent/50 hover:bg-white/5 transition-all group">
                <Camera className="text-gray-500 group-hover:text-accent transition-colors w-5 h-5 md:w-6 md:h-6" />
                <span className="text-[10px] md:text-xs font-sans text-gray-400 group-hover:text-gray-300 text-center">Intérieur<br/>(Avant)</span>
              </div>
              <div className="w-[40%] md:w-auto shrink-0 snap-start aspect-[4/3] md:aspect-square bg-surface border border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-1.5 md:gap-2 cursor-pointer hover:border-accent/50 hover:bg-white/5 transition-all group">
                <Camera className="text-gray-500 group-hover:text-accent transition-colors w-5 h-5 md:w-6 md:h-6" />
                <span className="text-[10px] md:text-xs font-sans text-gray-400 group-hover:text-gray-300 text-center">Extérieur<br/>(Avant)</span>
              </div>
              <div className="w-[40%] md:w-auto shrink-0 snap-start aspect-[4/3] md:aspect-square bg-surface border border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-1.5 md:gap-2 cursor-pointer hover:border-accent/50 hover:bg-white/5 transition-all group opacity-50">
                <Upload className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
                <span className="text-[10px] md:text-xs font-sans text-gray-400 text-center">Intérieur<br/>(Après)</span>
              </div>
              <div className="w-[40%] md:w-auto shrink-0 snap-start aspect-[4/3] md:aspect-square bg-surface border border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-1.5 md:gap-2 cursor-pointer hover:border-accent/50 hover:bg-white/5 transition-all group opacity-50">
                <Upload className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
                <span className="text-[10px] md:text-xs font-sans text-gray-400 text-center">Extérieur<br/>(Après)</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
            <button className="flex-1 bg-surface border border-border hover:bg-white/5 text-white py-2.5 md:py-3 rounded-lg md:rounded-xl font-sans font-bold text-xs md:text-sm transition-colors">
              Signaler un problème
            </button>
            <button className="flex-1 magnetic-btn bg-accent text-[#0D0D12] py-2.5 md:py-3 rounded-lg md:rounded-xl font-sans font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition-colors opacity-50 cursor-not-allowed">
              <CheckCircle2 size={16} className="md:w-[18px] md:h-[18px]" /> Valider la mission
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
