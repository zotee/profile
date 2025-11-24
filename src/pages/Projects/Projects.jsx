// src/components/Projects.jsx
import React from 'react';
import './Projects.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '/project1.jpg'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '/project2.jpg'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information dashboard',
      technologies: ['JavaScript', 'API', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '/project3.jpg'
    }
  ];

  return (
    <>
<Header/>
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
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