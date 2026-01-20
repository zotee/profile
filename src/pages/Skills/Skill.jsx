// src/components/Skills/Skills.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skill.css';
import Header from '../../components/Header/Header';


/* ================= FRAMER MOTION VARIANTS ================= */

const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const progressVariant = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: { duration: 1.4, ease: 'easeInOut' },
  }),
};

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { name: 'HTML/CSS', level: 90, color: '#FF6B6B', icon: '💻', category: 'Frontend' },
    { name: 'JavaScript', level: 85, color: '#FFD166', icon: '⚡', category: 'Frontend' },
    { name: 'React', level: 75, color: '#7209B7', icon: '⚛️', category: 'Frontend' },
    { name: 'Node.js', level: 75, color: '#06D6A0', icon: '🟢', category: 'Backend' },
    { name: 'Python', level: 60, color: '#073B4C', icon: '🐍', category: 'Backend' },
    { name: 'MongoDB', level: 90, color: '#4ECDC4', icon: '🍃', category: 'Backend' },
    { name: 'Git & GitHub', level: 90, color: '#EF476F', icon: '📂', category: 'Tools' },
    { name: 'Dotnet', level: 40, color: '#118AB2', icon: '🔷', category: 'Learning' },
  ];

  return (
    <>
      <Header />

      <motion.section
        id="skills"
        className="skills"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          {/* TITLE */}
          <motion.h2 className="section-title" variants={cardVariant}>
            <span className="title-text">My Skills</span>
            <span className="title-underline"></span>
          </motion.h2>

          {/* SKILLS GRID */}
          <div className="skills-container">
            <motion.div className="skills-details">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={`skill-card ${activeSkill === index ? 'highlighted' : ''}`}
                  variants={cardVariant}
                  whileHover={{ y: -10, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                  style={{ '--skill-color': skill.color }}
                >
                  {/* HEADER */}
                  <div className="skill-card-header">
                    <span className="skill-card-icon">{skill.icon}</span>
                    <span className="skill-card-name">{skill.name}</span>
                  </div>

                  {/* PROGRESS */}
                  <div className="skill-card-progress">
                    <div className="skill-card-bar">
                      <motion.div
                        className="skill-card-fill"
                        custom={skill.level}
                        variants={progressVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                    <span className="skill-card-percentage">{skill.level}%</span>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="skill-card-description">
                    <div className="skill-level-indicator">
                      {skill.level >= 80 && 'Expert'}
                      {skill.level >= 60 && skill.level < 80 && 'Advanced'}
                      {skill.level >= 40 && skill.level < 60 && 'Intermediate'}
                      {skill.level < 40 && 'Beginner'}
                    </div>

                    <div className="skill-experience">
                      {skill.level >= 80 && '4+ years experience'}
                      {skill.level >= 60 && skill.level < 80 && '2 – 4 years experience'}
                      {skill.level >= 40 && skill.level < 60 && '1 – 2 years experience'}
                      {skill.level < 40 && 'Learning phase'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

       
        </div>
      </motion.section>

    
    </>
  );
};

export default Skills;
