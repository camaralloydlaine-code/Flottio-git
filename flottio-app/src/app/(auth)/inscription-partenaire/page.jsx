import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function InscriptionPartenairePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-center mb-4">
        <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6 border border-accent/20 text-accent">
          <Sparkles className="w-8 h-8"/>
        </div>
        <h1 className="text-3xl font-sans font-bold text-white mb-2">Devenez Partenaire Flottio</h1>
        <p className="text-gray-400 font-sans">Développez votre clientèle B2B et automatisez vos encaissements.</p>
      </div>

      <div className="glass-card p-8 flex flex-col gap-6 border-t-2 border-t-accent">
        <Link 
          href="/onboarding-partenaire"
          className="w-full magnetic-btn bg-white hover:bg-gray-100 text-[#0D0D12] py-3.5 rounded-xl font-sans font-bold text-sm flex items-center justify-center gap-3 transition-colors shadow-lg"
        >
          {/* Google G Logo SVG */}
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Continuer avec Google
        </Link>

        <div className="flex items-center gap-4">
          <div className="h-px bg-border flex-1"></div>
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Ou</span>
          <div className="h-px bg-border flex-1"></div>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-sans font-medium text-gray-300">Adresse e-mail professionnelle</label>
            <input 
              type="email" 
              placeholder="contact@detailing.com" 
              className="bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-sans"
            />
          </div>
          <Link href="/onboarding-partenaire" className="w-full magnetic-btn bg-surface border border-border text-white py-3.5 rounded-xl font-sans font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
            S'inscrire par e-mail <ArrowRight size={16} />
          </Link>
        </form>
      </div>
      
      <p className="text-center text-sm font-sans text-gray-400">
        Vous avez déjà un compte ? <Link href="#" className="text-accent hover:underline">Connectez-vous</Link>
      </p>
    </div>
  );
}
