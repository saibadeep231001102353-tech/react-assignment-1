import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Sparkles } from 'lucide-react';
import { Github } from './Icons';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projectList = [
    {
      id: 1,
      title: 'Student Information Management Portal',
      category: 'react',
      tag: 'React & Props Architecture',
      description:
        'A comprehensive student management portal displaying student profiles with dynamic search filtering, department tags, and modular reusable card components.',
      tech: ['React.js', 'Props', 'Component Reusability', 'External CSS'],
      github: 'https://github.com',
      demo: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Weather Intelligence Dashboard',
      category: 'api',
      tag: 'API Integration & Async',
      description:
        'Real-time weather application consuming the OpenWeatherMap API with city search, live temperature, wind speed, sunrise/sunset, loading spinners, and error handling.',
      tech: ['React.js', 'useEffect', 'Fetch API', 'Async/Await'],
      github: 'https://github.com',
      demo: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Modern E-Commerce Shopping Cart',
      category: 'state',
      tag: 'Context API & State Management',
      description:
        'Feature-packed online shopping cart with real-time quantity updates, coupon code discounts, automated checkout calculations, and persisted cart state.',
      tech: ['React.js', 'useReducer', 'Context API', 'State Management'],
      github: 'https://github.com',
      demo: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Task Manager SPA with Routing',
      category: 'state',
      tag: 'React Router & Dynamic Routing',
      description:
        'Single-page application featuring nested routes, URL parameters, priority categorization, mock authentication, and responsive task analytics.',
      tech: ['React.js', 'React Router v6', 'Dynamic Routes', 'LocalStorage'],
      github: 'https://github.com',
      demo: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'GitHub DevFinder & Profile Explorer',
      category: 'api',
      tag: 'REST API & Search Filtering',
      description:
        'Interactive developer explorer consuming the GitHub REST API to display user profiles, repository statistics, follower counts, and tech breakdown.',
      tech: ['React.js', 'GitHub REST API', 'Async State', 'Debounce'],
      github: 'https://github.com',
      demo: '#',
      featured: true,
    },
    {
      id: 6,
      title: 'Interactive Markdown & Note Editor',
      category: 'react',
      tag: 'Live State & Component Architecture',
      description:
        'Real-time markdown workspace featuring instant live preview, syntax highlighting, word and reading-time metrics, and local storage synchronization.',
      tech: ['React.js', 'Custom Hooks', 'LocalStorage', 'Component State'],
      github: 'https://github.com',
      demo: '#',
      featured: false,
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projectList 
    : projectList.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of web applications and interactive systems built using modern React,
            clean state architecture, and responsive design systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="project-filters">
          <button 
            type="button" 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Work ({projectList.length})
          </button>
          <button 
            type="button" 
            className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
            onClick={() => setFilter('react')}
          >
            Components & Props
          </button>
          <button 
            type="button" 
            className={`filter-btn ${filter === 'api' ? 'active' : ''}`}
            onClick={() => setFilter('api')}
          >
            API Integration
          </button>
          <button 
            type="button" 
            className={`filter-btn ${filter === 'state' ? 'active' : ''}`}
            onClick={() => setFilter('state')}
          >
            State & Routing
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card card-glass">
              <div className="project-header">
                <div className="project-top-row">
                  <span className="project-badge">{project.tag}</span>
                  {project.featured && (
                    <span className="featured-badge">
                      <Sparkles size={12} />
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech-stack">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="project-action-link"
                >
                  <Github size={16} />
                  <span>Source Code</span>
                </a>
                <a 
                  href={project.demo} 
                  className="project-action-link live-btn"
                >
                  <ExternalLink size={16} />
                  <span>Live Preview</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
