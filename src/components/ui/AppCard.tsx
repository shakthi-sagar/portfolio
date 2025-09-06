import React from 'react';
import type { AppMeta } from '../../types/app';
import { cn } from '../../utils/cn';
import {  Github, ArrowUpRight } from 'lucide-react';

interface AppCardProps {
  app: AppMeta;
  className?: string;
}

const AppCard: React.FC<AppCardProps> = ({ app, className }) => {
  const getStatusConfig = (status?: string) => {
    switch (status) {
      case 'live':
        return { 
          badge: (
            <div className="inline-flex items-center gap-2 bg-green-50/90 dark:bg-green-950/60 border border-green-200/60 dark:border-green-800/60 text-green-700 dark:text-green-300 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Live
            </div>
          )
        };
      case 'beta':
        return { 
          badge: (
            <span className="inline-flex items-center gap-2 bg-yellow-50/90 dark:bg-yellow-950/60 border border-yellow-200/60 dark:border-yellow-800/60 text-yellow-700 dark:text-yellow-300 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
              Beta
            </span>
          )
        };
      case 'waitlist':
        return { 
          badge: (
            <span className="inline-flex items-center gap-2 bg-blue-50/90 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              Waitlist
            </span>
          )
        };
      case 'building':
      case 'development':
        return { 
          badge: (
            <span className="inline-flex items-center gap-2 bg-orange-50/90 dark:bg-orange-950/60 border border-orange-200/60 dark:border-orange-800/60 text-orange-700 dark:text-orange-300 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              Building
            </span>
          )
        };
      default:
        return { badge: null };
    }
  };

  const getPrimaryAction = () => {
    if (app.status === 'live' && app.link) {
      return { text: 'Visit Website', href: app.link };
    }
    if (app.status === 'beta' && app.link) {
      return { text: 'Try Beta', href: app.link };
    }
    if (app.status === 'waitlist' && app.link) {
      return { text: 'Join Waitlist', href: app.link };
    }
    return null;
  };

  const statusConfig = getStatusConfig(app.status);
  const primaryAction = getPrimaryAction();

  return (
    <article 
      className={cn(
        'group relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 hover:border-blue-200/60 dark:hover:border-blue-700/60 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] h-72 flex flex-col',
        className
      )}
    >
      {/* Status badge - floating */}
      {statusConfig.badge && (
        <div className="absolute -top-2 left-4">
          {statusConfig.badge}
        </div>
      )}

      {/* App header */}
      <div className="flex items-start gap-4 mb-4 mt-1">
        {/* App icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-sm shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
          style={{ 
            background: `linear-gradient(135deg, ${app.brandColor || '#64748b'}, ${app.brandColor || '#64748b'}cc)`
          }}
        >
          {app.name[0]}
        </div>
        
        {/* App info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
            {app.name}
          </h3>
          {app.category && (
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium truncate">
              {app.category}
            </p>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
        {app.tagline}
      </p>

      {/* Tech stack */}
      {app.tech && app.tech.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {app.tech.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Actions - bottom aligned */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200/50 dark:border-slate-700/50 mt-auto">
        {primaryAction && primaryAction.href ? (
          <a 
            href={primaryAction.href} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
          >
            {primaryAction.text}
            <ArrowUpRight size={14} />
          </a>
        ) : (
          <span className="text-slate-400 dark:text-slate-500 text-sm">
            Coming Soon
          </span>
        )}

        {/* GitHub link */}
        {app.github && (
          <a 
            href={app.github}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-md text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all duration-200"
            aria-label="View on GitHub"
          >
            <Github size={14} />
          </a>
        )}
      </div>
    </article>
  );
};

export default AppCard;