"use client";
import { useState } from "react";
import { Clock, CheckCircle2, ChevronRight, Camera, Upload, MapPin } from "lucide-react";

export default function MissionsPage() {
  const [activeTab, setActiveTab] = useState("en-cours");

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-sans font-bold text-white mb-2">Mes Missions</h1>
        <p className="text-gray-400 font-sans">Suivi et exécution de vos missions de préparation.</p>
      </div>

      <div className="flex items-center gap-4 border-b border-border">
        <button 
          onClick={() => setActiveTab("en-cours")}
          className={`pb-4 px-2 font-sans font-medium text-sm transition-colors border-b-2 ${activeTab === "en-cours" ? "border-accent text-white" : "border-transparent text-gray-500 hover:text-gray-300"}`}
        >
          En cours (1)
        </button>
        <button 
          onClick={() => setActiveTab("historique")}
          className={`pb-4 px-2 font-sans font-medium text-sm transition-colors border-b-2 ${activeTab === "historique" ? "border-accent text-white" : "border-transparent text-gray-500 hover:text-gray-300"}`}
        >
          Historique (12)
        </button>
      </div>

      {activeTab === "en-cours" && (
        <div className="glass-card p-6 border-t-2 border-t-accent space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-mono font-bold uppercase tracking-wider">
                  En route
                </span>
                <span className="text-sm font-sans text-gray-400">Demandé il y a 2h</span>
              </div>
              <h2 className="text-2xl font-sans font-bold text-white">Flotte Sixt - Lot de 5 véhicules</h2>
              <p className="text-gray-400 font-sans mt-1">Nettoyage Intégral (Flotte) • Contact sur place: M. Dupont</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-sans tracking-tight font-bold text-white">275€</span>
              <div className="text-xs text-gray-500 font-sans mt-1">HT</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface border border-border p-4 rounded-xl flex items-start gap-4">
              <MapPin className="text-accent mt-1" size={20} />
              <div>
                <p className="font-sans font-bold text-white text-sm mb-1">Localisation Dépôt</p>
                <p className="text-gray-400 font-sans text-sm">Parking Q-Park La Défense<br/>Niveau -2, Zone Loueurs (Places 400-405)</p>
              </div>
            </div>
            <div className="bg-surface border border-border p-4 rounded-xl flex items-start gap-4">
              <Clock className="text-accent mt-1" size={20} />
              <div>
                <p className="font-sans font-bold text-white text-sm mb-1">Instructions d'accès</p>
                <p className="text-gray-400 font-sans text-sm">Récupérer le badge universel à l'accueil Q-Park. Les véhicules sont ouverts à distance par le gestionnaire.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-sans font-bold text-white text-lg">Preuves d'intervention (Avant/Après)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="aspect-square bg-surface border border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-accent/50 hover:bg-white/5 transition-all group">
                <Camera className="text-gray-500 group-hover:text-accent transition-colors" size={24} />
                <span className="text-xs font-sans text-gray-400 group-hover:text-gray-300">Intérieur (Avant)</span>
              </div>
              <div className="aspect-square bg-surface border border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-accent/50 hover:bg-white/5 transition-all group">
                <Camera className="text-gray-500 group-hover:text-accent transition-colors" size={24} />
                <span className="text-xs font-sans text-gray-400 group-hover:text-gray-300">Extérieur (Avant)</span>
              </div>
              <div className="aspect-square bg-surface border border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-accent/50 hover:bg-white/5 transition-all group opacity-50">
                <Upload className="text-gray-500" size={24} />
                <span className="text-xs font-sans text-gray-400">Intérieur (Après)</span>
              </div>
              <div className="aspect-square bg-surface border border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-accent/50 hover:bg-white/5 transition-all group opacity-50">
                <Upload className="text-gray-500" size={24} />
                <span className="text-xs font-sans text-gray-400">Extérieur (Après)</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex-1 bg-surface border border-border hover:bg-white/5 text-white py-3 rounded-xl font-sans font-bold text-sm transition-colors">
              Signaler un problème
            </button>
            <button className="flex-1 magnetic-btn bg-accent text-[#0D0D12] py-3 rounded-xl font-sans font-bold text-sm flex items-center justify-center gap-2 transition-colors opacity-50 cursor-not-allowed">
              <CheckCircle2 size={18} /> Valider la fin de mission
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
