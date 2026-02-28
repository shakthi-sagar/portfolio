import { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import { CONFIG, PROJECTS, type ProjectCategory } from './config';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('All');

  const filteredProjects = activeTab === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <div className="app-container">
      {/* Full Screen Hero */}
      <section className="hero">
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
              imageUrl={p.imageUrl}
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
