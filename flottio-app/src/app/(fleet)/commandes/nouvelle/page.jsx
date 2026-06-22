"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Car, Droplets, MapPin, CheckCircle2, Navigation } from "lucide-react";

export default function NouvelleCommandePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    vehicules: "",
    prestation: "",
    lieu: "",
    date: "",
    instructions: ""
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const StepIndicator = ({ number, label, current }) => (
    <div className={`flex items-center gap-3 ${current ? 'opacity-100' : 'opacity-40'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-sm border ${current ? 'bg-accent/10 border-accent/20 text-accent' : 'bg-surface border-border text-gray-500'}`}>
        {number}
      </div>
      <span className={`font-sans font-bold hidden md:inline ${current ? 'text-white' : 'text-gray-500'}`}>{label}</span>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-4 border-b border-border pb-6">
        <Link href="/commandes" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-3xl font-sans font-bold text-white mb-1">Nouvelle Commande</h1>
          <p className="text-gray-400 font-sans text-sm">Créez un appel d'offres pour vos partenaires préparateurs.</p>
        </div>
      </div>

      <div className="flex justify-between items-center bg-surface/30 p-4 rounded-2xl border border-border">
        <StepIndicator number="1" label="Le Parc" current={step === 1} />
        <div className="h-px bg-border flex-1 mx-4"></div>
        <StepIndicator number="2" label="Prestation" current={step === 2} />
        <div className="h-px bg-border flex-1 mx-4"></div>
        <StepIndicator number="3" label="Logistique" current={step === 3} />
        <div className="h-px bg-border flex-1 mx-4"></div>
        <StepIndicator number="4" label="Publication" current={step === 4} />
      </div>

      <div className="glass-card p-8 min-h-[400px]">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-8">
              <Car className="text-accent" size={24} />
              <h2 className="text-2xl font-sans font-bold text-white">Sélectionnez les véhicules</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                onClick={() => setFormData({...formData, vehicules: "Unité"})}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${formData.vehicules === "Unité" ? "border-accent bg-accent/5" : "border-border bg-surface hover:border-gray-500"}`}
              >
                <h3 className="font-sans font-bold text-white text-lg mb-2">Véhicule Unique</h3>
                <p className="text-gray-400 text-sm font-sans">Pour une préparation ponctuelle ou VIP (Direction).</p>
              </div>
              <div 
                onClick={() => setFormData({...formData, vehicules: "Lot"})}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${formData.vehicules === "Lot" ? "border-accent bg-accent/5" : "border-border bg-surface hover:border-gray-500"}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-sans font-bold text-white text-lg">Lot de Véhicules</h3>
                  <span className="bg-accent/10 text-accent text-xs font-mono px-2 py-1 rounded uppercase">Remise Volume</span>
                </div>
                <p className="text-gray-400 text-sm font-sans">Pour préparer plusieurs véhicules sur le même site (Dépôt).</p>
              </div>
            </div>

            {formData.vehicules === "Lot" && (
              <div className="mt-6">
                <label className="text-sm font-sans font-medium text-gray-300 block mb-2">Nombre de véhicules estimés</label>
                <input type="number" placeholder="Ex: 5" className="w-full max-w-xs bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent" />
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-8">
              <Droplets className="text-accent" size={24} />
              <h2 className="text-2xl font-sans font-bold text-white">Niveau de Prestation</h2>
            </div>
            
            <div className="space-y-4">
              {["Nettoyage Intérieur Premium", "Lavage Extérieur", "Préparation Intégrale (Livraison VN)"].map(prest => (
                <div 
                  key={prest}
                  onClick={() => setFormData({...formData, prestation: prest})}
                  className={`p-5 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all ${formData.prestation === prest ? "border-accent bg-accent/5" : "border-border bg-surface hover:border-gray-500"}`}
                >
                  <span className="font-sans font-bold text-white">{prest}</span>
                  {formData.prestation === prest && <div className="w-3 h-3 rounded-full bg-accent"></div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="text-accent" size={24} />
              <h2 className="text-2xl font-sans font-bold text-white">Logistique et Accès</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-sans font-medium text-gray-300">Lieu d'intervention</label>
                <input 
                  type="text" 
                  placeholder="Ex: Dépôt Charles de Gaulle, Zone C" 
                  value={formData.lieu}
                  onChange={e => setFormData({...formData, lieu: e.target.value})}
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-sans font-medium text-gray-300">Date et Heure souhaitées</label>
                <input 
                  type="datetime-local" 
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent" 
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-sans font-medium text-gray-300">Instructions d'accès pour le préparateur</label>
                <textarea 
                  rows={3}
                  placeholder="Ex: Demandez le badge à l'accueil. Les clés sont dans la boîte sécurisée." 
                  className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent resize-none" 
                />
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-8">
              <Navigation className="text-accent" size={24} />
              <h2 className="text-2xl font-sans font-bold text-white">Récapitulatif & Publication</h2>
            </div>
            
            <div className="bg-surface border border-border p-6 rounded-2xl space-y-4">
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-gray-400 font-sans text-sm">Volume</span>
                <span className="text-white font-sans font-bold">{formData.vehicules || "Non renseigné"}</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-4">
                <span className="text-gray-400 font-sans text-sm">Prestation</span>
                <span className="text-white font-sans font-bold">{formData.prestation || "Non renseigné"}</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-gray-400 font-sans text-sm">Lieu</span>
                <span className="text-white font-sans font-bold">{formData.lieu || "Non renseigné"}</span>
              </div>
            </div>

            <div className="glass-card p-6 border border-accent/20 bg-accent/5 text-center mt-6">
              <p className="text-accent font-sans text-sm mb-2">Estimation budgétaire selon la grille des partenaires locaux</p>
              <p className="text-4xl font-sans tracking-tight font-bold text-white">~ 250€ <span className="text-xl text-gray-500">HT</span></p>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="visibility" className="w-4 h-4 accent-accent" defaultChecked />
                <span className="text-sm font-sans text-white">Publier sur le radar public (Plus rapide)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer opacity-50">
                <input type="radio" name="visibility" className="w-4 h-4 accent-accent" disabled />
                <span className="text-sm font-sans text-white">Mes partenaires favoris (Bientôt disponible)</span>
              </label>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
          <button 
            onClick={prevStep}
            disabled={step === 1}
            className="px-6 py-3 rounded-xl font-sans font-bold text-sm text-gray-400 hover:text-white transition-colors disabled:opacity-0"
          >
            Retour
          </button>
          
          {step < 4 ? (
            <button 
              onClick={nextStep}
              className="magnetic-btn bg-white text-[#0D0D12] hover:bg-gray-100 px-8 py-3 rounded-xl font-sans font-bold text-sm transition-colors"
            >
              Étape suivante
            </button>
          ) : (
            <Link 
              href="/commandes"
              className="magnetic-btn bg-accent text-[#0D0D12] px-8 py-3 rounded-xl font-sans font-bold text-sm transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(201,168,76,0.3)]"
            >
              <CheckCircle2 size={18} /> Publier la commande
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
