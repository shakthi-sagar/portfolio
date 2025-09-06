import React from 'react';
import { siteConfig } from '../../config/site';
import AppCard from '../ui/AppCard';
import SectionHeader from '../ui/SectionHeader';

export default function ProductsSection(): React.ReactElement {
  const { products, products_section } = siteConfig;

  return (
    <section id="products" className="py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeader 
          title={products_section.title}
          description={products_section.description}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((app, index) => (
            <div 
              key={app.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AppCard app={app} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
