import React from 'react';
import { siteConfig } from '../../config/site';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/50 py-12 px-4 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
    <div className="mx-auto max-w-6xl text-center">
      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
        © {new Date().getFullYear()} {siteConfig.name} • {siteConfig.footer.description}
      </p>
    </div>
  </footer>
  );
};

export default Footer;
