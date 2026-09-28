import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Copy, Check, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('saibadeepmullick@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const contactCards = [
    {
      icon: <Mail size={22} className="info-icon" />,
      title: 'Email Address',
      value: 'saibadeepmullick@gmail.com',
      action: 'copy',
      subtitle: 'Fastest response within 24 hours',
    },
    {
      icon: <MapPin size={22} className="info-icon" />,
      title: 'Location',
      value: 'Kolkata, West Bengal, India',
      action: 'info',
      subtitle: 'Available for remote & hybrid roles',
    },
    {
      icon: <Phone size={22} className="info-icon" />,
      title: 'Academic / Project Inquiry',
      value: 'Open for Collaborations',
      action: 'info',
      subtitle: 'Internships, Hackathons & Freelance',
    },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Contact <span className="gradient-text">Information</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, want to discuss software development, or have an opportunity?
            Feel free to drop a message or reach out directly!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Column */}
          <div className="contact-info-column">
            <h3 className="info-column-title">
              Let's build something <span className="gradient-text">extraordinary</span> together.
            </h3>
            <p className="info-column-desc">
              I am actively looking for internship roles, developer communities, and collaborative
              open-source initiatives. My inbox is always open.
            </p>

            <div className="info-cards-list">
              {contactCards.map((card, idx) => (
                <div key={idx} className="info-card card-glass">
                  <div className="info-icon-box">{card.icon}</div>
                  <div className="info-details">
                    <span className="info-label">{card.title}</span>
                    <h4 className="info-val">{card.value}</h4>
                    <span className="info-sub">{card.subtitle}</span>
                  </div>
                  {card.action === 'copy' && (
                    <button
                      type="button"
                      className="copy-btn"
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                    >
                      {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="schedule-call-card card-glass">
              <div className="call-text">
                <h4>Prefer direct networking?</h4>
                <p>Connect with me on LinkedIn for quick career updates and discussions.</p>
              </div>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary call-btn"
              >
                <span>LinkedIn</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="contact-form-column card-glass">
            {submitStatus === 'success' ? (
              <div className="form-success-state">
                <div className="success-icon-box">
                  <CheckCircle size={48} />
                </div>
                <h3 className="success-title">Message Sent Successfully!</h3>
                <p className="success-text">
                  Thank you for reaching out. I have received your message and will get back to you
                  as soon as possible.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setSubmitStatus(null)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-heading">Send a Message</h3>
                <p className="form-subtext">Fill in the fields below and I'll reply promptly.</p>

                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary submit-btn"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
