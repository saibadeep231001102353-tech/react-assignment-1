import React from 'react';
import { User, Code, Layers, Zap, HeartHandshake, CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <Code className="highlight-icon" size={24} />,
      title: 'Modern Frontend Engineering',
      desc: 'Specializing in React.js, modern JSX, modular reusable components, state management, and external CSS styling.',
    },
    {
      icon: <Layers className="highlight-icon" size={24} />,
      title: 'Full-Stack Foundations',
      desc: 'Solid understanding of backend APIs, RESTful services, database modeling, and connecting clients to cloud endpoints.',
    },
    {
      icon: <Zap className="highlight-icon" size={24} />,
      title: 'Performance & UX',
      desc: 'Obsessed with fast render cycles, responsive mobile-first layouts, accessibility standards, and clean UI aesthetics.',
    },
    {
      icon: <HeartHandshake className="highlight-icon" size={24} />,
      title: 'Agile & Collaborative',
      desc: 'Active collaborator with version control (Git/GitHub), code reviews, thorough documentation, and problem solving.',
    },
  ];

  const quickFacts = [
    { label: 'Name', value: 'Saibadeep Mullick' },
    { label: 'Role', value: 'Full-Stack & React Developer' },
    { label: 'Degree', value: 'Bachelor of Computer Applications (BCA)' },
    { label: 'Academic Standing', value: '4th Year Student' },
    { label: 'Location', value: 'Kolkata, India' },
    { label: 'Status', value: 'Available for Opportunities' },
    { label: 'Languages', value: 'English, Bengali, Hindi' },
  ];

  const passions = [
    'React & Ecosystem',
    'Component Driven Design',
    'Modern UI/UX',
    'Responsive Layouts',
    'REST APIs',
    'Open Source',
    'Clean Code & Refactoring',
    'Continuous Learning',
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>Discover My Story</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A passionate 4th-year Bachelor of Computer Applications (BCA) student with a deep fascination for crafting elegant,
            responsive, and high-performance digital experiences.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative & Quick Facts */}
          <div className="about-narrative card-glass">
            <h3 className="narrative-heading">
              Engineering with <span className="gradient-text">Passion & Purpose</span>
            </h3>
            <p className="narrative-text">
              Hello! I'm <strong>Saibadeep Mullick</strong>, a 4th-year Bachelor of Computer Applications (BCA) student 
              driven by the ambition to solve real-world problems through intuitive software engineering. 
              My journey began with a curiosity about how dynamic web applications work under the hood, 
              which swiftly evolved into a committed passion for modern web technologies.
            </p>
            <p className="narrative-text">
              I specialize in creating modular, reusable component architectures using <strong>React</strong>, 
              delivering pixel-perfect responsive designs with pure external CSS, and building 
              seamless user interactions. I love turning complex logic into sleek, effortless experiences.
            </p>

            <div className="quick-facts-grid">
              {quickFacts.map((fact, index) => (
                <div key={index} className="quick-fact-item">
                  <span className="fact-label">{fact.label}:</span>
                  <span className="fact-value">{fact.value}</span>
                </div>
              ))}
            </div>

            <div className="interests-wrapper">
              <h4 className="interests-title">Core Areas of Interest:</h4>
              <div className="tags-cloud">
                {passions.map((item, idx) => (
                  <span key={idx} className="interest-tag">
                    <CheckCircle2 size={13} className="tag-check" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Value Pillars */}
          <div className="about-highlights-list">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card card-glass">
                <div className="highlight-icon-box">
                  {item.icon}
                </div>
                <div className="highlight-content">
                  <h4 className="highlight-title">{item.title}</h4>
                  <p className="highlight-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
