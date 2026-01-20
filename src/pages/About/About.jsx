// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import Header from '../../components/Header/Header';

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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const cardHover = {
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 14 },
  },
};

const About = () => {
  return (
    <>
      <Header />

      <motion.section
        id="about"
        className="about"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          {/* TITLE */}
          <motion.h2 className="section-title" variants={fadeUp}>
            <span className="title-text">About Me</span>
            <span className="title-underline"></span>
          </motion.h2>

          <div className="about-content">
            {/* TEXT CONTENT */}
            <motion.div className="about-text" variants={fadeUp}>
            <motion.p variants={fadeUp} className="about-teext">
  I'm a passionate full-stack developer with strong expertise in modern web
  technologies and frameworks, focused on building efficient and scalable
  solutions that emphasize performance, usability, and clean architecture,
  with the goal of delivering high-quality applications that solve meaningful
  real-world problems for users.
</motion.p>

<motion.p variants={fadeUp} className="about-teext">
  With a solid foundation in computer science and hands-on experience across
  multiple real-world projects, I am always eager to learn new technologies
  and take on challenging opportunities.
</motion.p>



              {/* DETAILS CARD */}
              <motion.div
                className="about-details"
                variants={fadeUp}
                whileHover="hover"
                initial="hidden"
                animate="visible"
              >
                <div className="detail-item">
                  <strong>Name:</strong>
                  <span>Jyoti Sah</span>
                </div>
                <div className="detail-item">
                  <strong>Email:</strong>
                  <span>jyotishahqwerty@gmail.com</span>
                </div>
                <div className="detail-item">
                  <strong>Location:</strong>
                  <span>Kathmandu, Nepal</span>
                </div>
                <div className="detail-item">
                  <strong>Availability:</strong>
                  <span>Open for opportunities</span>
                </div>
              </motion.div>
            </motion.div>

            {/* STATS */}
            <motion.div className="about-stats">
              <motion.div
                className="stat"
                variants={statVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  1+
                </motion.h3>
                <p>Years Experience</p>
              </motion.div>

              <motion.div
                className="stat"
                variants={statVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  5+
                </motion.h3>
                <p>Projects Completed</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
