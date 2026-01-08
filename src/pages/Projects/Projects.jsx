// src/components/Projects.jsx
import React from 'react';
import './Projects.css';
import Header from '../../components/Header/Header';
import botslab from '../../assets/banner1.webp';
import hospital from '../../assets/hospital.jpeg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB featuring user authentication, product management, shopping cart, and secure payment integration with Stripe.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
      github: 'https://github.com/zotee',
      demo: 'https://botslabnepal.com/',
      image: botslab,
      featured: true
    },
    {
      id: 2,
      title: 'Hospital Management System',
      description: 'A comprehensive hospital website with appointment scheduling, doctor profiles, service information, and patient portal for seamless healthcare management.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Node.js'],
      github: 'https://github.com/zotee',
      demo: 'https://www.goldenhospital.com.np/',
      image: hospital,
      featured: true
    },
  ];

  return (
    <>
      <Header />
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">
            <span className="title-text">My Projects</span>
            <span className="title-underline"></span>
          </h2>
          <p className="section-subtitle">Here are some of my recent works that showcase my skills and experience</p>
          
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link github"
                      >
                        <i className="fab fa-github"></i>
                        Code
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link demo"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        Live Demo
                      </a>
                    </div>
                  </div>
                  {project.featured && <div className="featured-badge">Featured</div>}
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;