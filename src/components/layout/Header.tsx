import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { cn } from '../../utils/cn';
import { siteConfig } from '../../config/site';



const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Products', href: '#products' },
    // { name: 'Tools', href: '#tools' },
    { name: 'Fun', href: '#fun' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];
  

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/40 dark:border-slate-800/40">
      <div className="mx-auto max-w-7xl px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo with subtle hover effect */}
          <a 
            href="/" 
            className="text-xl font-bold text-blue-500  transition-all duration-200 hover:scale-105"
          >
            {siteConfig.name}
          </a>
          
          {/* Enhanced navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="relative text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition-all duration-200 group py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Premium theme toggle */}
          <button
            onClick={toggleTheme}
            className="relative p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-slate-700/80 transition-all duration-200 hover:scale-110 group border border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300/60 dark:hover:border-slate-600/60"
            aria-label="Toggle theme"
          >
            <div className="relative w-5 h-5">
              <Sun className={cn(
                'absolute inset-0 transition-all duration-300',
                theme === 'dark' ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
              )} size={20} />
              <Moon className={cn(
                'absolute inset-0 transition-all duration-300',
                theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
              )} size={20} />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;