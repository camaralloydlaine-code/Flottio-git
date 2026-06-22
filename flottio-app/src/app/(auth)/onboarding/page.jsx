import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function OnboardingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-center mb-2">
        <h1 className="text-3xl font-heading font-bold text-white mb-2">Presque terminé</h1>
        <p className="text-gray-400 font-sans">Dites-nous en plus sur votre entreprise pour personnaliser votre tableau de bord.</p>
      </div>

      <div className="glass-card p-8 flex flex-col gap-6 border-l-2 border-l-accent">
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-sans font-medium text-gray-300">Nom de l'entreprise ou de la flotte</label>
            <input 
              type="text" 
              placeholder="Ex: Auto Fleet Express" 
              className="bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-sans"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-sans font-medium text-gray-300">Taille de la flotte</label>
            <select className="bg-surface border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-sans appearance-none cursor-pointer">
              <option value="" disabled selected>Sélectionnez une taille</option>
              <option value="1-10">1 à 10 véhicules</option>
              <option value="11-50">11 à 50 véhicules</option>
              <option value="51-200">51 à 200 véhicules</option>
              <option value="200+">Plus de 200 véhicules</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-sans font-medium text-gray-300">Numéro de téléphone</label>
            <input 
              type="tel" 
              placeholder="+33 6 12 34 56 78" 
              className="bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-sans"
            />
          </div>

          <Link 
            href="/tableau-de-bord" 
            className="w-full magnetic-btn bg-[#B95D34] hover:bg-[#B95D34]/90 text-white py-3.5 rounded-xl font-sans font-bold text-sm flex items-center justify-center gap-2 transition-colors mt-2"
          >
            <CheckCircle2 size={18} /> Accéder au tableau de bord
          </Link>
        </form>
      </div>
      
      {/* Steps indicator */}
      <div className="flex items-center justify-center gap-2 mt-2">
        <div className="w-2 h-2 rounded-full bg-accent"></div>
        <div className="w-8 h-2 rounded-full bg-accent"></div>
      </div>
    </div>
  );
}
