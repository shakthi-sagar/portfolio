import React from 'react';
import { siteConfig } from '../../config/site';
import AppCard from '../ui/AppCard';
import SectionHeader from '../ui/SectionHeader';

export default function FunProjectsSection(): React.ReactElement {
  const { funProjects, fun_section } = siteConfig;

  return (
    <section id="fun" className="py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader 
          title={fun_section.title}
          description={fun_section.description}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {funProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AppCard app={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
