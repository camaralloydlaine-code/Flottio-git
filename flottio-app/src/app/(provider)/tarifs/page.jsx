"use client";
import { useState } from "react";
import { CheckCircle2, Save } from "lucide-react";

export default function TarifsPage() {
  const [tarifs, setTarifs] = useState({
    base: {
      interieur: 30,
      exterieur: 25,
      integral: 50
    },
    majoration: {
      berline: 5,
      suv: 10,
      utilitaire: 15
    }
  });

  const handleBaseChange = (key, value) => {
    setTarifs(prev => ({ ...prev, base: { ...prev.base, [key]: Number(value) } }));
  };

  const handleMajorationChange = (key, value) => {
    setTarifs(prev => ({ ...prev, majoration: { ...prev.majoration, [key]: Number(value) } }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-heading font-bold text-white mb-2">Mes Tarifs</h1>
          <p className="text-gray-400 font-sans">Fixez votre grille tarifaire. Flottio l'utilisera pour vous attribuer des missions.</p>
        </div>
        <button className="magnetic-btn bg-white text-[#0D0D12] hover:bg-gray-100 transition-colors px-6 py-2.5 rounded-full font-bold flex items-center gap-2">
          <Save size={18} /> Sauvegarder
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-mono text-sm border border-accent/20">1</div>
            Prestations de Base (Citadine)
          </h2>
          
          <div className="glass-card p-6 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-sans font-bold text-white text-sm">Lavage Extérieur</p>
                <p className="font-sans text-xs text-gray-500 mt-1">Carrosserie, vitres, jantes</p>
              </div>
              <div className="relative">
                <input 
                  type="number" 
                  value={tarifs.base.exterieur}
                  onChange={(e) => handleBaseChange("exterieur", e.target.value)}
                  className="w-24 bg-surface border border-border rounded-lg px-3 py-2 text-white font-sans text-right focus:outline-none focus:border-accent"
                />
                <span className="absolute right-3 top-2.5 text-gray-400">€</span>
              </div>
            </div>
            <div className="h-px bg-border w-full"></div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-sans font-bold text-white text-sm">Nettoyage Intérieur</p>
                <p className="font-sans text-xs text-gray-500 mt-1">Aspirateur, plastiques, vitres intérieures</p>
              </div>
              <div className="relative">
                <input 
                  type="number" 
                  value={tarifs.base.interieur}
                  onChange={(e) => handleBaseChange("interieur", e.target.value)}
                  className="w-24 bg-surface border border-border rounded-lg px-3 py-2 text-white font-sans text-right focus:outline-none focus:border-accent"
                />
                <span className="absolute right-3 top-2.5 text-gray-400">€</span>
              </div>
            </div>
            <div className="h-px bg-border w-full"></div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-sans font-bold text-accent text-sm">Nettoyage Intégral</p>
                <p className="font-sans text-xs text-gray-500 mt-1">Intérieur + Extérieur</p>
              </div>
              <div className="relative">
                <input 
                  type="number" 
                  value={tarifs.base.integral}
                  onChange={(e) => handleBaseChange("integral", e.target.value)}
                  className="w-24 bg-surface border border-accent/30 rounded-lg px-3 py-2 text-accent font-sans text-right focus:outline-none focus:border-accent font-bold"
                />
                <span className="absolute right-3 top-2.5 text-accent/50">€</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-mono text-sm border border-accent/20">2</div>
            Tarifs B2B (Remises sur Volume)
          </h2>
          
          <div className="glass-card p-6 space-y-5">
            <p className="text-sm font-sans text-gray-400 mb-4">Ajustez vos tarifs pour les lots de véhicules (Loueurs, Concessions, Flottes).</p>
            
            <div className="flex items-center justify-between opacity-50">
              <p className="font-sans font-bold text-white text-sm">1 à 4 véhicules</p>
              <div className="px-3 py-1.5 rounded-lg bg-surface border border-border font-mono text-sm text-gray-400">Prix Standard</div>
            </div>
            <div className="h-px bg-border w-full"></div>

            <div className="flex items-center justify-between">
              <p className="font-sans font-bold text-white text-sm">Lot de 5 à 9 véhicules</p>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400">-</span>
                <input 
                  type="number" 
                  value={tarifs.majoration.berline}
                  onChange={(e) => handleMajorationChange("berline", e.target.value)}
                  className="w-24 bg-surface border border-border rounded-lg pl-6 pr-6 py-2 text-white font-sans text-right focus:outline-none focus:border-accent"
                />
                <span className="absolute right-3 top-2.5 text-gray-400">%</span>
              </div>
            </div>
            <div className="h-px bg-border w-full"></div>

            <div className="flex items-center justify-between">
              <p className="font-sans font-bold text-white text-sm">Flotte (10+ véhicules)</p>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400">-</span>
                <input 
                  type="number" 
                  value={tarifs.majoration.suv}
                  onChange={(e) => handleMajorationChange("suv", e.target.value)}
                  className="w-24 bg-surface border border-border rounded-lg pl-6 pr-6 py-2 text-white font-sans text-right focus:outline-none focus:border-accent"
                />
                <span className="absolute right-3 top-2.5 text-gray-400">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
