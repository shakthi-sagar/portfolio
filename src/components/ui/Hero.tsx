import React from 'react';
import { Button } from './Button';
import { ArrowRight, Mail } from 'lucide-react';
import { siteConfig } from '../../config/site';

const Hero: React.FC = () => {
  const { hero } = siteConfig;

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-slate-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/8 dark:bg-blue-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-slate-500/6 dark:bg-slate-300/6 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="mx-auto max-w-4xl text-center relative">

        {/* Hero heading with perfect gradient */}
        <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-8 leading-tight">
          <span className="text-slate-900 dark:text-white block mb-2">
            {hero.title}
          </span>
          <span className="font-bold bg-gradient-to-r from-blue-600 via-sky-300 to-blue-600 bg-clip-text text-transparent animate-gradient-flow">
            {hero.subtitle}
          </span>
        </h1>
        
        {/* Compelling description */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
          {hero.description}
        </p>
        
        {/* Enhanced CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button asChild size="lg" className="group">
            <a href="#products" className="flex items-center gap-2">
              {hero.cta.primary}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <Button variant="ghost" size="lg" asChild className="group">
            <a href="#contact" className="flex items-center gap-2">
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
              {hero.cta.secondary}
            </a>
          </Button>
        </div>

        {/* Beautiful stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {hero.stats.map((stat, index) => (
            <div 
              key={index} 
              className="group bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 hover:border-blue-200/60 dark:hover:border-blue-700/60 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
