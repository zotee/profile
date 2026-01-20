// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import Header from '../../components/Header/Header';
import botslab from '../../assets/banner1.webp';
import hospital from '../../assets/hospital.jpeg';

/* ================= FRAMER MOTION VARIANTS ================= */

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const badgeVariants = {
  hidden: { scale: 0, rotate: -20 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 260, damping: 18 },
  },
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with React, Node.js, and MongoDB featuring user authentication, product management, shopping cart, and secure payment integration with Stripe.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
      github: 'https://github.com/zotee',
      demo: 'https://botslabnepal.com/',
      image: botslab,
      featured: true,
    },
    {
      id: 2,
      title: 'Hospital Management System',
      description:
        'A comprehensive hospital website with appointment scheduling, doctor profiles, service information, and patient portal for seamless healthcare management.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Node.js'],
      github: 'https://github.com/zotee',
      demo: 'https://www.goldenhospital.com.np/',
      image: hospital,
      featured: true,
    },
  ];

  return (
    <>
      <Header />

      <motion.section
        id="projects"
        className="projects"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          {/* TITLE */}
          <motion.h2 className="section-title" variants={cardVariants}>
            <span className="title-text">My Projects</span>
            <span className="title-underline"></span>
          </motion.h2>

          <motion.p
            className="section-subtitle"
            variants={cardVariants}
          >
            Here are some of my recent works that showcase my skills and experience
          </motion.p>

          {/* PROJECT GRID */}
          <motion.div className="projects-grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                {/* IMAGE */}
                <div className="project-image">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* OVERLAY */}
                  <motion.div
                    className="project-overlay"
                    variants={overlayVariants}
                    initial="hidden"
                    whileHover="visible"
                  >
                    <div className="project-links">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className="fab fa-github"></i>
                        Code
                      </motion.a>

                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link demo"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className="fas fa-external-link-alt"></i>
                        Live Demo
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* FEATURED BADGE */}
                  {project.featured && (
                    <motion.div
                      className="featured-badge"
                      variants={badgeVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      Featured
                    </motion.div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="tech-tag"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
