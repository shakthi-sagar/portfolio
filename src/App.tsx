import { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import { CONFIG, PROJECTS, type ProjectCategory } from './config';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('All');
  const [isLight, setIsLight] = useState(() => document.documentElement.classList.contains('light'));

  const toggleTheme = () => {
    const nextLight = document.documentElement.classList.toggle('light');
    setIsLight(nextLight);
    localStorage.setItem('theme', nextLight ? 'light' : 'dark');
  };

  const filteredProjects = activeTab === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <div className="app-container">
      {/* Full Screen Hero */}
      <section className="hero">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {!isLight ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
        <h1 className="hero-title">{CONFIG.name}</h1>
        <p className="hero-subtitle">
          {CONFIG.tagline}
        </p>
        <div className="hero-socials">
          <a href={CONFIG.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href={CONFIG.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </section>

      {/* Sticky Tab Navigation */}
      <div className="tabs-container">
        <div className="tabs">
          {CONFIG.tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid rendering cards */}
      <section className="grid-section">
        <div className="grid">
          {filteredProjects.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              description={p.description}
              emoji={p.emoji}
              url={p.url}
              imageUrl={p.imageUrl}
              iframeUrl={p.iframeUrl}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        {CONFIG.footerText}
      </footer>
    </div>
  );
}

export default App;
