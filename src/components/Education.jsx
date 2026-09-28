import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Check } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationList = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'University Department of Computer Applications',
      location: 'Kolkata, India',
      duration: '2022 – 2026',
      description:
        'Comprehensive study of core computer science fundamentals, modern software engineering, data structures, and advanced web development architectures.',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management (DBMS & SQL)',
        'Web Application Development',
        'Computer Networks',
        'Software Engineering Principles',
      ],
      current: true,
    },
    {
      degree: 'Higher Secondary Education (Class XII - Science)',
      institution: 'Council of Higher Secondary Education',
      location: 'Kolkata, India',
      duration: '2020 – 2022',
      grade: 'Distinction',
      description:
        'Focused on core science and analytical subjects with an emphasis on Mathematics, Physics, and Computer Science fundamentals.',
      coursework: [
        'Physics',
        'Chemistry',
        'Mathematics',
        'Computer Science',
        'English Literature',
      ],
      current: false,
    },
  ];

  const certifications = [
    {
      title: 'Modern React & Redux Architecture',
      issuer: 'Frontend Masters / Online',
      date: '2025',
      badge: 'Certified',
    },
    {
      title: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      date: '2024',
      badge: 'Verified',
    },
    {
      title: 'Responsive Web Design & Modern CSS',
      issuer: 'Meta Frontend Track',
      date: '2024',
      badge: 'Certified',
    },
    {
      title: 'Version Control & Git Workflow Mastery',
      issuer: 'GitHub Global Campus',
      date: '2024',
      badge: 'Verified',
    },
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            My formal academic journey in Computer Science and verified technical certifications
            that have shaped my foundational knowledge.
          </p>
        </div>

        <div className="education-layout">
          {/* Main Timeline Column */}
          <div className="timeline-container">
            <h3 className="column-heading">
              <BookOpen size={20} className="heading-icon" />
              <span>Academic Timeline</span>
            </h3>

            <div className="timeline">
              {educationList.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <div className={`timeline-dot ${item.current ? 'active-dot' : ''}`}>
                      <GraduationCap size={16} />
                    </div>
                    {index !== educationList.length - 1 && <div className="timeline-line"></div>}
                  </div>

                  <div className="timeline-card card-glass">
                    <div className="card-top">
                      <div>
                        {item.current && <span className="status-tag">4th Year Student</span>}
                        <h4 className="degree-title">{item.degree}</h4>
                        <p className="institution-name">{item.institution}</p>
                      </div>
                      {item.grade && <span className="grade-pill">{item.grade}</span>}
                    </div>

                    <div className="meta-row">
                      <span className="meta-item">
                        <Calendar size={14} />
                        {item.duration}
                      </span>
                      <span className="meta-item">
                        <MapPin size={14} />
                        {item.location}
                      </span>
                    </div>

                    <p className="education-desc">{item.description}</p>

                    <div className="coursework-section">
                      <span className="coursework-title">Key Coursework:</span>
                      <div className="coursework-tags">
                        {item.coursework.map((course, idx) => (
                          <span key={idx} className="course-pill">
                            <Check size={12} className="check-icon" />
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Sidebar Column */}
          <div className="certifications-container">
            <h3 className="column-heading">
              <Award size={20} className="heading-icon" />
              <span>Certifications & Learning</span>
            </h3>

            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card card-glass">
                  <div className="cert-icon-wrapper">
                    <Award size={22} />
                  </div>
                  <div className="cert-info">
                    <div className="cert-header">
                      <h4 className="cert-title">{cert.title}</h4>
                      <span className="cert-badge">{cert.badge}</span>
                    </div>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
