import Link from "next/link";
import { ArrowRight, Car, Settings2 } from "lucide-react";

export default function InscriptionPortalPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-heading font-bold text-white mb-4">Bienvenue sur Flottio</h1>
        <p className="text-gray-400 font-sans text-lg">Choisissez votre profil pour commencer.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link 
          href="/inscription-flotte"
          className="glass-card p-8 flex flex-col items-center text-center gap-6 group hover:border-accent hover:bg-white/[0.02] transition-all cursor-pointer"
        >
          <div className="w-20 h-20 rounded-full bg-surface border border-border flex items-center justify-center group-hover:bg-accent/10 transition-colors">
            <Car size={32} className="text-gray-400 group-hover:text-accent transition-colors" />
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-accent transition-colors">Gestionnaire de Flotte</h2>
            <p className="text-gray-400 font-sans text-sm">Vous gérez un parc de véhicules et cherchez des prestataires de confiance pour leur préparation.</p>
          </div>
          <div className="mt-auto flex items-center gap-2 text-white font-sans font-bold text-sm bg-surface px-6 py-3 rounded-full group-hover:bg-accent group-hover:text-[#0D0D12] transition-all">
            Créer mon compte <ArrowRight size={16} />
          </div>
        </Link>

        <Link 
          href="/inscription-partenaire"
          className="glass-card p-8 flex flex-col items-center text-center gap-6 group hover:border-accent hover:bg-white/[0.02] transition-all cursor-pointer"
        >
          <div className="w-20 h-20 rounded-full bg-surface border border-border flex items-center justify-center group-hover:bg-accent/10 transition-colors">
            <Settings2 size={32} className="text-gray-400 group-hover:text-accent transition-colors" />
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-accent transition-colors">Préparateur Esthétique</h2>
            <p className="text-gray-400 font-sans text-sm">Vous êtes un professionnel indépendant et souhaitez recevoir des missions de flottes B2B.</p>
          </div>
          <div className="mt-auto flex items-center gap-2 text-white font-sans font-bold text-sm bg-surface px-6 py-3 rounded-full group-hover:bg-accent group-hover:text-[#0D0D12] transition-all">
            Devenir Partenaire <ArrowRight size={16} />
          </div>
        </Link>
      </div>

      <p className="text-center text-sm font-sans text-gray-400 mt-8">
        Vous avez déjà un compte ? <Link href="#" className="text-accent hover:underline">Connectez-vous</Link>
      </p>
    </div>
  );
}
