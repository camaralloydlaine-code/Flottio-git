"use client";
import { useState } from "react";
import { CheckCircle2, Save, Plus } from "lucide-react";

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
    },
    options: {
      shampooing: 40,
      poils: 15,
      lustrage: 80
    }
  });

  const handleBaseChange = (key, value) => {
    setTarifs(prev => ({ ...prev, base: { ...prev.base, [key]: Number(value) } }));
  };

  const handleMajorationChange = (key, value) => {
    setTarifs(prev => ({ ...prev, majoration: { ...prev.majoration, [key]: Number(value) } }));
  };

  const handleOptionChange = (key, value) => {
    setTarifs(prev => ({ ...prev, options: { ...prev.options, [key]: Number(value) } }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4 md:space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-sans font-bold text-white mb-1 md:mb-2">Mes Tarifs</h1>
          <p className="text-xs md:text-sm text-gray-400 font-sans">Fixez votre grille tarifaire. Flottio l'utilisera pour vous attribuer des missions.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-lg md:text-xl font-sans font-bold text-white flex items-center gap-2">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-mono text-xs md:text-sm border border-accent/20">1</div>
            Prestations de Base
          </h2>
          
          <div className="glass-card p-4 md:p-6 space-y-4 md:space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-sans font-bold text-white text-xs md:text-sm">Lavage Extérieur</p>
                <p className="font-sans text-[10px] md:text-xs text-gray-500 mt-0.5 md:mt-1">Carrosserie, vitres, jantes</p>
              </div>
              <div className="relative">
                <input 
                  type="number" 
                  value={tarifs.base.exterieur}
                  onChange={(e) => handleBaseChange("exterieur", e.target.value)}
                  className="w-20 md:w-24 bg-surface border border-border rounded-lg px-2 md:px-3 py-1.5 md:py-2 text-white font-sans text-right focus:outline-none focus:border-accent text-sm"
                />
                <span className="absolute right-2 md:right-3 top-1.5 md:top-2.5 text-gray-400 text-sm">€</span>
              </div>
            </div>
            <div className="h-px bg-border w-full"></div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-sans font-bold text-white text-xs md:text-sm">Nettoyage Intérieur</p>
                <p className="font-sans text-[10px] md:text-xs text-gray-500 mt-0.5 md:mt-1">Aspirateur, plastiques, vitres</p>
              </div>
              <div className="relative">
                <input 
                  type="number" 
                  value={tarifs.base.interieur}
                  onChange={(e) => handleBaseChange("interieur", e.target.value)}
                  className="w-20 md:w-24 bg-surface border border-border rounded-lg px-2 md:px-3 py-1.5 md:py-2 text-white font-sans text-right focus:outline-none focus:border-accent text-sm"
                />
                <span className="absolute right-2 md:right-3 top-1.5 md:top-2.5 text-gray-400 text-sm">€</span>
              </div>
            </div>
            <div className="h-px bg-border w-full"></div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-sans font-bold text-accent text-xs md:text-sm">Nettoyage Intégral</p>
                <p className="font-sans text-[10px] md:text-xs text-gray-500 mt-0.5 md:mt-1">Intérieur + Extérieur</p>
              </div>
              <div className="relative">
                <input 
                  type="number" 
                  value={tarifs.base.integral}
                  onChange={(e) => handleBaseChange("integral", e.target.value)}
                  className="w-20 md:w-24 bg-surface border border-accent/30 rounded-lg px-2 md:px-3 py-1.5 md:py-2 text-accent font-sans text-right focus:outline-none focus:border-accent font-bold text-sm"
                />
                <span className="absolute right-2 md:right-3 top-1.5 md:top-2.5 text-accent/50 text-sm">€</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <h2 className="text-lg md:text-xl font-sans font-bold text-white flex items-center gap-2">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-mono text-xs md:text-sm border border-accent/20">2</div>
            Tarifs B2B (Remises)
          </h2>
          
          <div className="glass-card p-4 md:p-6 space-y-4 md:space-y-5">
            <p className="text-[10px] md:text-sm font-sans text-gray-400 mb-2 md:mb-4">Ajustez vos tarifs pour les lots de véhicules (Loueurs, Concessions, Flottes).</p>
            
            <div className="flex items-center justify-between opacity-50">
              <p className="font-sans font-bold text-white text-xs md:text-sm">1 à 4 véhicules</p>
              <div className="px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-surface border border-border font-mono text-[10px] md:text-sm text-gray-400">Prix Standard</div>
            </div>
            <div className="h-px bg-border w-full"></div>

            <div className="flex items-center justify-between">
              <p className="font-sans font-bold text-white text-xs md:text-sm">Lot de 5 à 9 véh.</p>
              <div className="relative">
                <span className="absolute left-2 md:left-3 top-1.5 md:top-2.5 text-gray-400 text-sm">-</span>
                <input 
                  type="number" 
                  value={tarifs.majoration.berline}
                  onChange={(e) => handleMajorationChange("berline", e.target.value)}
                  className="w-20 md:w-24 bg-surface border border-border rounded-lg pl-5 pr-5 md:pl-6 md:pr-6 py-1.5 md:py-2 text-white font-sans text-right focus:outline-none focus:border-accent text-sm"
                />
                <span className="absolute right-2 md:right-3 top-1.5 md:top-2.5 text-gray-400 text-sm">%</span>
              </div>
            </div>
            <div className="h-px bg-border w-full"></div>

            <div className="flex items-center justify-between">
              <p className="font-sans font-bold text-white text-xs md:text-sm">Flotte (10+ véh.)</p>
              <div className="relative">
                <span className="absolute left-2 md:left-3 top-1.5 md:top-2.5 text-gray-400 text-sm">-</span>
                <input 
                  type="number" 
                  value={tarifs.majoration.suv}
                  onChange={(e) => handleMajorationChange("suv", e.target.value)}
                  className="w-20 md:w-24 bg-surface border border-border rounded-lg pl-5 pr-5 md:pl-6 md:pr-6 py-1.5 md:py-2 text-white font-sans text-right focus:outline-none focus:border-accent text-sm"
                />
                <span className="absolute right-2 md:right-3 top-1.5 md:top-2.5 text-gray-400 text-sm">%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6 md:col-span-2">
          <h2 className="text-lg md:text-xl font-sans font-bold text-white flex items-center gap-2">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-mono text-xs md:text-sm border border-accent/20">3</div>
            Options Supplémentaires
          </h2>
          
          <div className="glass-card p-4 md:p-6 space-y-4 md:space-y-5">
            <p className="text-[10px] md:text-sm font-sans text-gray-400 mb-2 md:mb-4">Facturez des suppléments pour des prestations spécifiques ou des véhicules très sales.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-sans font-bold text-white text-xs md:text-sm">Shampooing des Sièges</p>
                    <p className="font-sans text-[10px] md:text-xs text-gray-500 mt-0.5 md:mt-1">Tissus et moquettes</p>
                  </div>
                  <div className="relative">
                    <span className="absolute left-2 md:left-3 top-1.5 md:top-2.5 text-gray-400 text-sm">+</span>
                    <input 
                      type="number" 
                      value={tarifs.options.shampooing}
                      onChange={(e) => handleOptionChange("shampooing", e.target.value)}
                      className="w-20 md:w-24 bg-surface border border-border rounded-lg pl-5 pr-5 md:pl-6 md:pr-6 py-1.5 md:py-2 text-white font-sans text-right focus:outline-none focus:border-accent text-sm"
                    />
                    <span className="absolute right-2 md:right-3 top-1.5 md:top-2.5 text-gray-400 text-sm">€</span>
                  </div>
                </div>
                <div className="h-px bg-border w-full md:hidden"></div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-sans font-bold text-white text-xs md:text-sm">Poils d'animaux</p>
                    <p className="font-sans text-[10px] md:text-xs text-gray-500 mt-0.5 md:mt-1">Supplément temps</p>
                  </div>
                  <div className="relative">
                    <span className="absolute left-2 md:left-3 top-1.5 md:top-2.5 text-gray-400 text-sm">+</span>
                    <input 
                      type="number" 
                      value={tarifs.options.poils}
                      onChange={(e) => handleOptionChange("poils", e.target.value)}
                      className="w-20 md:w-24 bg-surface border border-border rounded-lg pl-5 pr-5 md:pl-6 md:pr-6 py-1.5 md:py-2 text-white font-sans text-right focus:outline-none focus:border-accent text-sm"
                    />
                    <span className="absolute right-2 md:right-3 top-1.5 md:top-2.5 text-gray-400 text-sm">€</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 md:space-y-5">
                <div className="h-px bg-border w-full md:hidden"></div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-sans font-bold text-white text-xs md:text-sm">Lustrage Express</p>
                    <p className="font-sans text-[10px] md:text-xs text-gray-500 mt-0.5 md:mt-1">Cire de finition brillante</p>
                  </div>
                  <div className="relative">
                    <span className="absolute left-2 md:left-3 top-1.5 md:top-2.5 text-gray-400 text-sm">+</span>
                    <input 
                      type="number" 
                      value={tarifs.options.lustrage}
                      onChange={(e) => handleOptionChange("lustrage", e.target.value)}
                      className="w-20 md:w-24 bg-surface border border-border rounded-lg pl-5 pr-5 md:pl-6 md:pr-6 py-1.5 md:py-2 text-white font-sans text-right focus:outline-none focus:border-accent text-sm"
                    />
                    <span className="absolute right-2 md:right-3 top-1.5 md:top-2.5 text-gray-400 text-sm">€</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center pt-2">
                  <button className="flex items-center gap-2 text-accent hover:text-white transition-colors text-xs md:text-sm font-sans font-bold bg-accent/5 hover:bg-accent/10 px-4 py-2 rounded-lg border border-accent/10 w-full justify-center">
                    <Plus size={16} /> Ajouter une option
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button className="magnetic-btn bg-white text-[#0D0D12] hover:bg-gray-100 transition-colors px-4 py-2 md:px-8 md:py-3 rounded-lg md:rounded-full font-bold flex items-center justify-center gap-2 text-sm md:text-base w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <Save size={18} className="w-[18px] h-[18px] md:w-5 md:h-5" /> Sauvegarder les tarifs
        </button>
      </div>
    </div>
  );
}
