"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, ArrowRight, ArrowUpRight, BarChart3, CheckCircle2, CircleDot, Clock, ShieldCheck, FileText, Smartphone, Car, Sparkles, X, ChevronRight, ChevronLeft, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Components ---

const Navbar = () => {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (!target) return;
    
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1200; // Snappier duration
    let start = null;

    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      window.scrollTo(0, startPosition + distance * easeOutQuart(progress));
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 rounded-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-4 w-[95%] md:w-[90%] max-w-5xl ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border border-primary/10 text-text shadow-lg' 
          : 'bg-transparent text-background border border-transparent'
      }`}
    >
      <div className="font-sans font-bold tracking-tight text-lg md:text-xl shrink-0">Flottio.</div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#features" onClick={(e) => handleSmoothScroll(e, '#features')} className="hover-lift">Fonctionnalités</a>
        <a href="#philosophie" onClick={(e) => handleSmoothScroll(e, '#philosophie')} className="hover-lift">Philosophie</a>
        <a href="#protocole" onClick={(e) => handleSmoothScroll(e, '#protocole')} className="hover-lift">Protocole</a>
        <a href="#tarifs" onClick={(e) => handleSmoothScroll(e, '#tarifs')} className="hover-lift">Tarifs</a>
      </div>
      <a 
        href="#cta" 
        onClick={(e) => handleSmoothScroll(e, '#cta')}
        className={`magnetic-btn px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-colors overflow-hidden relative group shrink-0 cursor-pointer ${
        isScrolled ? 'bg-accent text-primary' : 'bg-background text-primary'
      }`}>
        <span className="relative z-10 flex items-center gap-1.5 md:gap-2 whitespace-nowrap">
          <span>Inscription</span>
          <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
        </span>
      </a>
    </nav>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [text1Ref.current, text2Ref.current, ctaRef.current],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] w-full flex items-end pb-24 md:pb-32 px-6 md:px-16 overflow-hidden">
      {/* Background Image & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_fleet.png" 
          alt="Luxury clean car fleet" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/20"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl text-background">
        <h1 className="flex flex-col gap-2">
          <span ref={text1Ref} className="font-sans font-bold tracking-tight text-3xl md:text-5xl lg:text-6xl uppercase opacity-0">
            La gestion de flotte rencontre
          </span>
          <span ref={text2Ref} className="font-serif italic text-6xl md:text-8xl lg:text-[140px] leading-[0.9] text-accent opacity-0 block -ml-2">
            L'efficacité d'horloger.
          </span>
        </h1>
        <div ref={ctaRef} className="mt-12 opacity-0 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button 
            onClick={() => {
              const target = document.querySelector('#cta');
              if (!target) return;
              const targetPosition = target.getBoundingClientRect().top + window.scrollY;
              const startPosition = window.scrollY;
              const distance = targetPosition - startPosition;
              const duration = 1200;
              let start = null;
              const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
              const animation = (currentTime) => {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);
                window.scrollTo(0, startPosition + distance * easeOutQuart(progress));
                if (timeElapsed < duration) requestAnimationFrame(animation);
              };
              requestAnimationFrame(animation);
            }} 
            className="magnetic-btn bg-accent text-primary px-8 py-4 rounded-full font-sans font-bold text-lg flex items-center gap-3 hover:bg-accent/90 transition-colors"
          >
            Inscription <ArrowRight className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 text-sm font-mono text-background/70 border border-background/20 rounded-full px-5 py-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Marketplace B2B Opérationnelle
          </div>
        </div>
      </div>
    </section>
  );
};

// Feature 1: Diagnostic Mixer
const FeatureMixer = () => {
  const cards = [
    { id: 1, label: "Zéro Appels", desc: "Communication directe", icon: <Smartphone className="w-5 h-5"/> },
    { id: 2, label: "Workflows B2B", desc: "Devis et facturation intégrés", icon: <FileText className="w-5 h-5"/> },
    { id: 3, label: "Zéro Factures Perdues", desc: "Paiements centralisés", icon: <CheckCircle2 className="w-5 h-5"/> }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="h-64 relative flex items-center justify-center p-6 bg-background rounded-3xl border border-primary/10 shadow-sm overflow-hidden group">
      <div className="absolute top-4 left-4 flex flex-col">
        <h3 className="font-sans font-bold text-lg text-primary">Friction Admin</h3>
        <p className="text-sm text-text/60">Automatisation des processus</p>
      </div>
      <div className="relative w-full max-w-[240px] h-24 mt-8 flex items-center justify-center">
        {cards.map((card, i) => {
          let positionState = 'hidden-next';
          if (i === activeIndex) positionState = 'active';
          else if (i === (activeIndex - 1 + cards.length) % cards.length) positionState = 'hidden-prev';
          
          let translateY = '20px';
          let opacity = 0;
          let scale = 0.95;

          if (positionState === 'active') {
            translateY = '0px';
            opacity = 1;
            scale = 1;
          } else if (positionState === 'hidden-prev') {
            translateY = '-20px';
            opacity = 0;
            scale = 0.95;
          }

          return (
            <div 
              key={card.id}
              className="absolute w-full bg-white border border-primary/5 rounded-2xl p-4 shadow-lg flex items-center gap-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{
                transform: `translateY(${translateY}) scale(${scale})`,
                zIndex: positionState === 'active' ? 10 : 0,
                opacity: opacity,
                pointerEvents: positionState === 'active' ? 'auto' : 'none'
              }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-accent shrink-0">
                {card.icon}
              </div>
              <div>
                <div className="font-sans font-bold text-primary text-sm">{card.label}</div>
                <div className="text-xs text-text/50">{card.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Feature 2: Telemetry Typewriter
const FeatureTypewriter = () => {
  const [text, setText] = useState('');
  const fullText = "[LOG] Audit véhicule #AB-123-CD\n> Prestation: Nettoyage Intégral\n> Horodatage: 14:32:05 GMT+1\n> Statut: Validé (Preuves photos 4/4)\n> Conformité Leasing: OK";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        setTimeout(() => { i = 0; }, 2000); // Reset after 2s
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-64 relative flex flex-col p-6 bg-background rounded-3xl border border-primary/10 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-sans font-bold text-lg text-primary">Traçabilité</h3>
          <p className="text-sm text-text/60">Historique par véhicule</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-mono text-primary font-bold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          Flux en direct
        </div>
      </div>
      <div className="flex-1 bg-primary text-accent p-4 rounded-xl font-mono text-xs overflow-hidden shadow-inner leading-relaxed flex flex-col justify-start">
        <div className="w-full">
          {text.split('\n').map((line, idx, arr) => (
            <div key={idx} className="min-h-[1.5em] break-words">
              {line}
              {idx === arr.length - 1 && (
                <span className="inline-block w-2 h-3 bg-accent animate-pulse ml-1 align-middle"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Feature 3: Radar Geolocation
const FeatureRadar = () => {
  const containerRef = useRef(null);
  const radarRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Radar ping animation
      gsap.to(radarRef.current, {
        scale: 4,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power1.out"
      });

      // Providers appearing animation
      dotsRef.current.forEach((dot, i) => {
        gsap.fromTo(dot, 
          { scale: 0, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.5, 
            delay: i * 0.4 + 0.5, 
            repeat: -1, 
            repeatDelay: 3,
            yoyo: true,
            ease: "back.out(1.5)" 
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="h-64 relative flex flex-col p-6 bg-background rounded-3xl border border-primary/10 shadow-sm overflow-hidden group" ref={containerRef}>
      <div className="relative z-10">
        <h3 className="font-sans font-bold text-lg text-primary">Géolocalisation</h3>
        <p className="text-sm text-text/60">Matching de proximité</p>
      </div>
      
      <div className="absolute inset-0 mt-12 flex items-center justify-center overflow-hidden">
        {/* Map Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* Center Point (Fleet) */}
        <div className="relative z-10 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-background rounded-full" />
        </div>
        
        {/* Radar Ping */}
        <div 
          ref={radarRef}
          className="absolute w-12 h-12 border-2 border-accent rounded-full opacity-80"
        />

        {/* Provider Dots */}
        {[
          { id: 1, x: -60, y: -40, dist: "1.2 km" },
          { id: 2, x: 80, y: -20, dist: "3.4 km" },
          { id: 3, x: -30, y: 70, dist: "0.8 km" }
        ].map((dot, i) => (
          <div 
            key={dot.id}
            ref={el => dotsRef.current[i] = el}
            className="absolute flex flex-col items-center gap-1"
            style={{ transform: `translate(${dot.x}px, ${dot.y}px)` }}
          >
            <div className="w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_rgba(201,168,76,0.5)]" />
            <div className="bg-white/90 backdrop-blur-sm border border-primary/10 text-[9px] font-mono font-bold text-primary px-1.5 py-0.5 rounded shadow-sm">
              {dot.dist}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureMixer />
        <FeatureTypewriter />
        <FeatureRadar />
      </div>
    </section>
  );
};

const Philosophy = () => {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray('.reveal-line');
      gsap.fromTo(lines, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophie" ref={sectionRef} className="relative w-full py-32 md:py-48 px-6 md:px-16 bg-primary overflow-hidden flex items-center">
      {/* Background Parallax Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1542314831-c6a4d14eff50?q=80&w=2000&auto=format&fit=crop" 
          alt="Dark marble texture" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto w-full" ref={textContainerRef}>
        <p className="reveal-line text-background/50 font-sans text-xl md:text-3xl mb-8">
          La plupart des marketplaces se concentrent sur : <span className="line-through opacity-70">l'accumulation de contacts.</span>
        </p>
        <h2 className="reveal-line font-serif italic text-4xl md:text-6xl lg:text-8xl text-background leading-[1.1]">
          Nous nous concentrons sur : <br className="hidden md:block" />
          <span className="text-accent">la précision</span> d'exécution.
        </h2>
      </div>
    </section>
  );
};

// Protocol Cards Stack
const ProtocolCard = ({ index, number, title, desc, renderVisual }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Setup pin and stack effect
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top top",
        pin: true,
        pinSpacing: false,
        end: "+=100%", // Depends on how many cards
      });

      // Shrink and blur effect when next card comes up
      // We would ideally link this to the next card's scroll position
      gsap.to(cardRef.current, {
        scale: 0.9,
        filter: "blur(20px)",
        opacity: 0.5,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
        }
      });

    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={cardRef} 
      className="w-full h-screen sticky top-0 flex items-center justify-center p-6 md:p-16"
      style={{ zIndex: index }}
    >
      <div className="w-full max-w-6xl h-[80vh] bg-background border border-primary/10 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Content Half */}
        <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center">
          <div className="font-mono text-accent font-bold text-2xl mb-8">[{number}]</div>
          <h3 className="font-sans font-bold text-4xl md:text-5xl text-primary mb-6 tracking-tight">{title}</h3>
          <p className="text-lg text-text/70 leading-relaxed text-balance">{desc}</p>
        </div>
        {/* Visual Half */}
        <div className="w-full md:w-1/2 bg-primary relative flex items-center justify-center overflow-hidden">
          {renderVisual()}
        </div>
      </div>
    </div>
  );
};

const Protocol = () => {
  return (
    <section id="protocole" className="relative w-full bg-background pt-24 pb-[100vh]">
      <ProtocolCard 
        index={1} 
        number="01" 
        title="Connexion Réseau" 
        desc="Les gestionnaires de flottes et les préparateurs esthétiques accèdent à une plateforme centralisée où l'offre rencontre la demande de manière fluide et transparente."
        renderVisual={() => (
          <div className="relative w-64 h-64 flex items-center justify-center">
            {[1, 2, 3].map(i => (
              <div 
                key={i} 
                className="absolute border border-accent/30 rounded-full animate-[spin_10s_linear_infinite]"
                style={{ width: `${i*30}%`, height: `${i*30}%`, animationDuration: `${i*8}s`, animationDirection: i%2===0 ? 'reverse' : 'normal' }}
              />
            ))}
            <CircleDot className="text-accent w-12 h-12" />
          </div>
        )}
      />
      <ProtocolCard 
        index={2} 
        number="02" 
        title="Mise en Concurrence" 
        desc="L'algorithme de Flottio. analyse les besoins et soumet les requêtes aux prestataires qualifiés. Un historique des prix assure une sélection optimale."
        renderVisual={() => (
          <div className="relative w-full h-full bg-primary flex items-center justify-center">
            <div className="w-[80%] h-[60%] grid grid-cols-8 grid-rows-6 gap-2">
              {Array.from({length: 48}).map((_, i) => (
                <div key={i} className="bg-white/5 rounded-sm" />
              ))}
            </div>
            {/* Laser line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_15px_rgba(201,168,76,0.8)] animate-[scan_3s_ease-in-out_infinite_alternate]" />
          </div>
        )}
      />
      <ProtocolCard 
        index={3} 
        number="03" 
        title="Traçabilité Absolue" 
        desc="Chaque intervention est documentée, horodatée et archivée. Un dossier complet par véhicule, indispensable pour vos audits et contrats de leasing."
        renderVisual={() => (
          <svg className="w-full h-32 px-10 text-accent" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path 
              className="animate-[dash_2s_linear_infinite]" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeDasharray="20, 10"
              d="M0 50 Q 100 0, 200 50 T 400 50 T 600 50 T 800 50 T 1000 50"
            />
          </svg>
        )}
      />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan { from { top: 20%; } to { top: 80%; } }
        @keyframes dash { to { stroke-dashoffset: -30; } }
      `}} />
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="tarifs" className="py-32 px-6 md:px-16 bg-white relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="font-serif italic text-4xl md:text-6xl text-primary mb-6 text-center">L'excellence a un prix juste.</h2>
        <p className="text-lg text-text/60 mb-20 text-center max-w-2xl">Un abonnement logiciel fixe pour centraliser votre flotte. Payez vos lavages à la demande, avec des <strong className="text-primary font-bold">remises volume exclusives</strong> pour vos prestataires.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
          {/* Tier 1 */}
          <div className="bg-background border border-primary/10 rounded-[2.5rem] p-10 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <h3 className="font-sans font-bold text-2xl mb-2 text-primary">Starter</h3>
            <p className="text-text/60 mb-6 text-sm">Pour les petits parcs automobiles</p>
            <div className="mb-8">
              <span className="text-5xl font-bold text-primary">49€</span>
              <span className="text-text/50"> / mois</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-sm text-primary/80"><Check className="w-5 h-5 text-accent"/> De 1 à 10 véhicules</li>
              <li className="flex items-center gap-3 text-sm text-primary/80"><Check className="w-5 h-5 text-accent"/> Facturation centralisée</li>
              <li className="flex items-center gap-3 text-sm text-primary/80"><Check className="w-5 h-5 text-accent"/> Accès au réseau de préparateurs</li>
            </ul>
            <button 
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#cta');
                if (!target) return;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY;
                const startPosition = window.scrollY;
                const distance = targetPosition - startPosition;
                const duration = 1200;
                let start = null;
                const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
                const animation = (currentTime) => {
                  if (start === null) start = currentTime;
                  const timeElapsed = currentTime - start;
                  const progress = Math.min(timeElapsed / duration, 1);
                  window.scrollTo(0, startPosition + distance * easeOutQuart(progress));
                  if (timeElapsed < duration) requestAnimationFrame(animation);
                };
                requestAnimationFrame(animation);
              }} 
              className="block w-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors py-4 rounded-full font-bold"
            >
              Commencer
            </button>
          </div>

          {/* Tier 2 (Highlighted) */}
          <div className="bg-primary text-background border border-accent/20 rounded-[3rem] p-12 shadow-2xl transform md:scale-105 flex flex-col relative z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Recommandé</div>
            <h3 className="font-sans font-bold text-3xl mb-2">Business</h3>
            <p className="text-background/60 mb-6 text-sm">Le standard pour les flottes actives</p>
            <div className="mb-8">
              <span className="text-6xl font-bold text-accent">99€</span>
              <span className="text-background/50"> / mois</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-sm text-background/90"><Check className="w-5 h-5 text-accent"/> De 11 à 30 véhicules</li>
              <li className="flex items-center gap-3 text-sm text-background/90"><Check className="w-5 h-5 text-accent"/> Tarifs volume (dès 10 véhicules)</li>
              <li className="flex items-center gap-3 text-sm text-background/90"><Check className="w-5 h-5 text-accent"/> Historique et traçabilité absolue</li>
              <li className="flex items-center gap-3 text-sm text-background/90"><Check className="w-5 h-5 text-accent"/> Tableau de bord analytique</li>
            </ul>
            <button 
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#cta');
                if (!target) return;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY;
                const startPosition = window.scrollY;
                const distance = targetPosition - startPosition;
                const duration = 1200;
                let start = null;
                const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
                const animation = (currentTime) => {
                  if (start === null) start = currentTime;
                  const timeElapsed = currentTime - start;
                  const progress = Math.min(timeElapsed / duration, 1);
                  window.scrollTo(0, startPosition + distance * easeOutQuart(progress));
                  if (timeElapsed < duration) requestAnimationFrame(animation);
                };
                requestAnimationFrame(animation);
              }} 
              className="block magnetic-btn w-full bg-accent text-primary transition-colors py-4 rounded-full font-bold text-lg"
            >
              Essai gratuit de 14 jours
            </button>
          </div>

          {/* Tier 3 */}
          <div className="bg-background border border-primary/10 rounded-[2.5rem] p-10 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <h3 className="font-sans font-bold text-2xl mb-2 text-primary">Pro</h3>
            <p className="text-text/60 mb-6 text-sm">Pour les grands réseaux</p>
            <div className="mb-8">
              <span className="text-5xl font-bold text-primary">199€</span>
              <span className="text-text/50"> / mois</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-sm text-primary/80"><Check className="w-5 h-5 text-accent"/> De 31 à 100 véhicules</li>
              <li className="flex items-center gap-3 text-sm text-primary/80"><Check className="w-5 h-5 text-accent"/> Tarifs volume maximisés</li>
              <li className="flex items-center gap-3 text-sm text-primary/80"><Check className="w-5 h-5 text-accent"/> Rapports d'impact écologique</li>
              <li className="flex items-center gap-3 text-sm text-primary/80"><Check className="w-5 h-5 text-accent"/> Intégration API (logiciels)</li>
            </ul>
            <Link href="/inscription" className="block text-center w-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors py-4 rounded-full font-bold">Nous contacter</Link>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="font-sans text-primary font-bold text-lg text-center">Vous gérez plus de 100 véhicules ? <a href="#" className="text-accent underline underline-offset-4 decoration-accent/50 hover:decoration-accent transition-colors">Parlons-en.</a></p>
          <p className="font-mono text-sm text-text/50 border border-primary/10 rounded-full px-6 py-2 inline-block text-center max-w-3xl leading-relaxed">
            Partenaires préparateurs : Inscription 100% gratuite. <br className="hidden md:block" />
            Commission transparente de 12-15% uniquement sur les prestations finalisées.
          </p>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="cta" className="py-32 px-6 md:px-16 bg-background flex flex-col items-center justify-center">
      <h2 className="font-serif italic text-5xl md:text-7xl text-primary mb-16 text-center">Rejoignez l'écosystème Flottio.</h2>
      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Espace Gestionnaire */}
        <div className="bg-primary text-background p-10 md:p-14 rounded-[3rem] flex flex-col justify-between group shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-8 border border-accent/30">
              <Car className="w-8 h-8" />
            </div>
            <h3 className="font-sans font-bold text-3xl md:text-4xl mb-4">Gestionnaires de Flottes</h3>
            <p className="text-background/60 mb-10 text-lg leading-relaxed">Centralisez vos demandes, réduisez vos coûts et bénéficiez d'une traçabilité absolue pour chaque véhicule de votre parc automobile.</p>
          </div>
          <Link href="/inscription-flotte" className="magnetic-btn w-full bg-accent text-primary px-8 py-4 rounded-full font-sans font-bold text-lg flex items-center justify-center gap-3 hover:bg-accent/90 transition-colors relative z-10">
            Espace Flottes <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Espace Préparateur */}
        <div className="bg-white border border-primary/10 text-primary p-10 md:p-14 rounded-[3rem] flex flex-col justify-between group shadow-xl relative overflow-hidden">
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-primary/5 text-primary flex items-center justify-center mb-8 border border-primary/10">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="font-sans font-bold text-3xl md:text-4xl mb-4">Préparateurs Esthétiques</h3>
            <p className="text-text/60 mb-10 text-lg leading-relaxed">Développez votre clientèle B2B, optimisez votre planning et garantissez des paiements rapides, automatisés et sécurisés.</p>
          </div>
          <Link href="/inscription-partenaire" className="magnetic-btn w-full bg-primary text-accent px-8 py-4 rounded-full font-sans font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors relative z-10">
            Espace Partenaires <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary rounded-t-[4rem] px-6 md:px-16 pt-24 pb-12 mt-12 text-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        <div className="md:col-span-2">
          <div className="font-sans font-bold tracking-tight text-3xl mb-4">Flottio.</div>
          <p className="text-background/50 text-balance max-w-sm">La précision absolue pour la gestion des nettoyages de votre flotte automobile.</p>
        </div>
        <div>
          <h4 className="font-mono text-sm text-accent mb-6 font-bold uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-4 text-background/70 font-medium">
            <li><a href="#features" className="hover:text-accent transition-colors">Fonctionnalités</a></li>
            <li><a href="#philosophie" className="hover:text-accent transition-colors">Philosophie</a></li>
            <li><a href="#protocole" className="hover:text-accent transition-colors">Protocole</a></li>
            <li><a href="#tarifs" className="hover:text-accent transition-colors">Tarifs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-sm text-accent mb-6 font-bold uppercase tracking-wider">Légal</h4>
          <ul className="space-y-4 text-background/70 font-medium">
            <li><a href="#" className="hover:text-accent transition-colors">Confidentialité</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">CGV</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Mentions Légales</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 text-sm text-background/40">
        <p>&copy; {new Date().getFullYear()} Flottio. Tous droits réservés.</p>
        <div className="flex items-center gap-3 font-mono mt-6 md:mt-0 px-4 py-2 rounded-full bg-white/5 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Système Opérationnel
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-text">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

