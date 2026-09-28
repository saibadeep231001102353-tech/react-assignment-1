import React from 'react';
import { ArrowUp, Code2, Heart, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="container footer-container">
        {/* Top Tier */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <a href="#home" className="footer-brand">
              <div className="brand-icon">
                <Code2 size={20} />
              </div>
              <span className="brand-text">
                Saibadeep<span className="brand-dot">.</span>
              </span>
            </a>
            <p className="footer-tagline">
              Crafting elegant digital experiences with React, clean component architecture,
              and modern responsive design.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About Me</a>
              <a href="#education" className="footer-link">Education</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          <div className="footer-social-col">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-social-icons">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-social-btn" 
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-social-btn" 
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:saibadeepmullick@gmail.com" 
                className="footer-social-btn" 
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="footer-location-text">Based in Kolkata, India</p>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Tier */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} Saibadeep Mullick. All rights reserved. Built for <strong>Assignment 1: React Environment Setup & Personal Portfolio</strong>.
          </p>

          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            title="Scroll back to top"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
