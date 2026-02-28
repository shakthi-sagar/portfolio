import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
    title: string;
    description: string;
    emoji: string;
    type: string;
    url?: string;
    imageUrl?: string;
    iframeUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, emoji, type, url, imageUrl, iframeUrl }) => {
    return (
        <a href={url || "#"} target="_blank" rel="noreferrer" className="project-card">
            <div className="card-media">
                {iframeUrl ? (
                    <iframe
                        src={iframeUrl}
                        title={title}
                        className="card-iframe"
                        sandbox="allow-scripts allow-same-origin"
                        loading="lazy"
                    />
                ) : imageUrl ? (
                    <img src={imageUrl} alt={title} className="card-image" loading="lazy" />
                ) : (
                    <div className="media-placeholder">
                        {emoji}
                    </div>
                )}
            </div>

            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-desc">{description}</p>

                <div className="card-footer">
                    <span style={{ textTransform: 'uppercase', color: 'var(--text-muted)' }}>{type}</span>
                    <span className="visit-link">View Project →</span>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
