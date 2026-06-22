import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function OnboardingPartenairePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-center mb-2">
        <h1 className="text-3xl font-sans font-bold text-white mb-2">Profil Préparateur</h1>
        <p className="text-gray-400 font-sans">Finalisez la configuration de votre espace partenaire.</p>
      </div>

      <div className="glass-card p-8 flex flex-col gap-6 border-l-2 border-l-accent">
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-sans font-medium text-gray-300">Nom de votre entreprise (ou Auto-entreprise)</label>
            <input 
              type="text" 
              placeholder="Ex: Éclat Detailing" 
              className="bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-sans"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-sans font-medium text-gray-300">Rayon d'action (km)</label>
            <input 
              type="number" 
              placeholder="Ex: 30" 
              className="bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-sans"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-sans font-medium text-gray-300">Numéro de SIRET</label>
            <input 
              type="text" 
              placeholder="123 456 789 00012" 
              className="bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-sans"
            />
          </div>

          <Link 
            href="/radar" 
            className="w-full magnetic-btn bg-[#B95D34] hover:bg-[#B95D34]/90 text-white py-3.5 rounded-xl font-sans font-bold text-sm flex items-center justify-center gap-2 transition-colors mt-2"
          >
            <CheckCircle2 size={18} /> Accéder à mes missions
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
