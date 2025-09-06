import React from 'react';
import { siteConfig } from '../../config/site';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '../ui/Button';

export default function ContactSection(): React.ReactElement {
  const { contact_section } = siteConfig;

  return (
    <section id="contact" className="py-12 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
          {contact_section.title}
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {contact_section.description}
        </p>
        

        <Button asChild size="lg" className="group mb-12">
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2">
              {contact_section.cta}
              <Mail size={20} strokeWidth={3} className="font-bold group-hover:translate-x-1 transition-transform" />
            </a>
        </Button>


        {/* Social links - premium design */}
        <div className="flex items-center justify-center gap-6">
          {siteConfig.contact.github && (
            <a 
              href={`https://github.com/${siteConfig.contact.github}`}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 p-4"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                <Github size={24} />
              </div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">LinkedIn</span>
            </a>
          )}
          
          {siteConfig.contact.twitter && (
            <a 
              href={`https://twitter.com/${siteConfig.contact.twitter.replace('@', '')}`}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                <Twitter size={24} />
              </div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Twitter</span>
            </a>
          )}
          
          {siteConfig.contact.linkedin && (
            <a 
              href={`https://linkedin.com/in/${siteConfig.contact.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                <Linkedin size={24} />
              </div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">LinkedIn</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
