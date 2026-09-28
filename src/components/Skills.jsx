import React, { useState } from 'react';
import { Cpu, Layout, Server, Wrench, CheckCircle } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: <Cpu size={16} /> },
    { id: 'frontend', label: 'Frontend', icon: <Layout size={16} /> },
    { id: 'backend', label: 'Backend & DB', icon: <Server size={16} /> },
    { id: 'tools', label: 'Tools & Workflow', icon: <Wrench size={16} /> },
  ];

  const skillList = [
    // Frontend
    { name: 'React.js', level: 92, category: 'frontend', tag: 'Core Library', experience: 'Advanced' },
    { name: 'JavaScript (ES6+)', level: 90, category: 'frontend', tag: 'Language', experience: 'Advanced' },
    { name: 'HTML5 & Semantic Structure', level: 96, category: 'frontend', tag: 'Markup', experience: 'Expert' },
    { name: 'CSS3 / Flexbox / Grid', level: 94, category: 'frontend', tag: 'Styling', experience: 'Expert' },
    { name: 'Responsive Web Design', level: 95, category: 'frontend', tag: 'UI/UX', experience: 'Expert' },
    { name: 'Component-Based Design', level: 90, category: 'frontend', tag: 'Architecture', experience: 'Advanced' },

    // Backend & DB
    { name: 'Node.js', level: 80, category: 'backend', tag: 'Runtime', experience: 'Intermediate' },
    { name: 'Express.js', level: 78, category: 'backend', tag: 'Framework', experience: 'Intermediate' },
    { name: 'RESTful API Integration', level: 88, category: 'backend', tag: 'Architecture', experience: 'Advanced' },
    { name: 'SQL & Database Design', level: 82, category: 'backend', tag: 'Database', experience: 'Proficient' },
    { name: 'MongoDB', level: 75, category: 'backend', tag: 'NoSQL', experience: 'Intermediate' },
    { name: 'JSON Server & Mock APIs', level: 88, category: 'backend', tag: 'Testing', experience: 'Advanced' },

    // Tools & Workflow
    { name: 'Git & GitHub', level: 88, category: 'tools', tag: 'VCS', experience: 'Advanced' },
    { name: 'Vite & Build Tooling', level: 86, category: 'tools', tag: 'Bundler', experience: 'Advanced' },
    { name: 'npm & Package Management', level: 88, category: 'tools', tag: 'CLI', experience: 'Advanced' },
    { name: 'Chrome DevTools & Debugging', level: 90, category: 'tools', tag: 'DevTools', experience: 'Advanced' },
    { name: 'Postman API Testing', level: 84, category: 'tools', tag: 'Testing', experience: 'Proficient' },
    { name: 'VS Code & Antigravity IDE', level: 92, category: 'tools', tag: 'Environment', experience: 'Advanced' },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillList 
    : skillList.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive breakdown of technologies, frameworks, and developer tools
            I leverage to engineer robust modern applications.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`skills-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card card-glass">
              <div className="skill-card-top">
                <div className="skill-title-group">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-tag">{skill.tag}</span>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>

              <div className="progress-bar-container">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <div className="skill-card-bottom">
                <span className="skill-experience">
                  <CheckCircle size={13} className="check-icon" />
                  {skill.experience} Level
                </span>
                <span className="skill-category-pill">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stack Highlight Box */}
        <div className="skills-summary-banner card-glass">
          <div className="banner-content">
            <h3 className="banner-title">
              Looking for a specific <span className="gradient-text">tech stack</span>?
            </h3>
            <p className="banner-text">
              I am quick to adapt to modern engineering stacks, component libraries, and backend frameworks.
              Ready to learn and ship production-ready code.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary banner-btn">
            Discuss a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
