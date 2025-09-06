import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Hero from './components/ui/Hero';
import Footer from './components/layout/Footer';
import ProductsSection from './components/sections/ProductsSection';
import FunProjectsSection from './components/sections/FunProjectsSection';
import ContactSection from './components/sections/ContactSection';

function AppContent(): React.ReactElement {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
      <Header/>
      
      <main>
        <Hero />
        <ProductsSection />
        <FunProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default function App(): React.ReactElement {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}