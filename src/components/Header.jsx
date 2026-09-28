import React from 'react';
import { ArrowRight, Download, Mail, Sparkles, Terminal } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './Header.css';

const Header = () => {
  return (
    <header id="home" className="hero-header">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span>Available for Opportunities</span>
            <Sparkles size={14} className="sparkle-icon" />
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Saibadeep Mullick</span>
          </h1>

          <h2 className="hero-role">
            <Terminal size={22} className="role-icon" />
            <span>Aspiring Full-Stack & React Developer</span>
          </h2>

          <p className="hero-description">
            I am a 4th-year Bachelor of Computer Applications (BCA) student passionate about crafting sleek, high-performance web applications 
            with modern React, clean component architecture, and intuitive user experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Contact Me</span>
              <Mail size={18} />
            </a>
            <a 
              href="#about" 
              className="btn btn-outline"
              title="Download Resume / Read Summary"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </div>

          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <div className="social-links">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon" 
                aria-label="GitHub"
              >
                <Github size={19} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon" 
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
              </a>
              <a 
                href="mailto:saibadeepmullick@gmail.com" 
                className="social-icon" 
                aria-label="Email"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-code-wrapper">
            <div className="code-glow"></div>
            <div className="code-card card-glass">
              <div className="code-card-header">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="code-card-title">developer.config.js</span>
                <span className="code-card-tag">React 19</span>
              </div>
              <div className="code-card-body">
                <pre className="code-pre">
                  <code>
                    <span className="token-keyword">const</span> <span className="token-var">developer</span> = {'{\n'}
                    {'  '}<span className="token-prop">name</span>: <span className="token-string">'Saibadeep Mullick'</span>,{'\n'}
                    {'  '}<span className="token-prop">degree</span>: <span className="token-string">'BCA'</span>,{'\n'}
                    {'  '}<span className="token-prop">year</span>: <span className="token-string">'4th Year Student'</span>,{'\n'}
                    {'  '}<span className="token-prop">skills</span>: [<span className="token-string">'React'</span>, <span className="token-string">'JavaScript'</span>, <span className="token-string">'CSS'</span>],{'\n'}
                    {'  '}<span className="token-prop">status</span>: <span className="token-string">'Available for Projects'</span>{'\n'}
                    {'}'};{'\n\n'}
                    <span className="token-comment">// Ready to engineer modern web experiences</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Floating Experience Badges */}
            <div className="floating-badge badge-react">
              <span className="badge-logo">⚛️</span>
              <div className="badge-meta">
                <span className="badge-name">React.js</span>
                <span className="badge-desc">Modern UI & Hooks</span>
              </div>
            </div>

            <div className="floating-badge badge-js">
              <span className="badge-logo">⚡</span>
              <div className="badge-meta">
                <span className="badge-name">ES6+ & Vite</span>
                <span className="badge-desc">Fast Performance</span>
              </div>
            </div>

            <div className="floating-badge badge-code">
              <span className="badge-logo">💻</span>
              <div className="badge-meta">
                <span className="badge-name">Clean Code</span>
                <span className="badge-desc">Modular Components</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats Ribbon */}
      <div className="hero-stats-wrapper">
        <div className="container hero-stats-container">
          <div className="stat-card">
            <span className="stat-number">6+</span>
            <span className="stat-title">Featured Projects</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <span className="stat-number">4th Year</span>
            <span className="stat-title">BCA Student</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-title">Commitment to Quality</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <span className="stat-number">24/7</span>
            <span className="stat-title">Passion for Learning</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
