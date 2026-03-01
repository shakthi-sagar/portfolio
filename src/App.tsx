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
              type={p.type}
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
