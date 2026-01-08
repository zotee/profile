// src/components/Skills.jsx
import React, { useState } from 'react';
import '../Skills/Skill.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { name: 'HTML/CSS', level: 90, color: '#FF6B6B', icon: '💻', category: 'Frontend' },
    { name: 'JavaScript', level: 85, color: '#FFD166', icon: '⚡', category: 'Frontend' },
    { name: 'React', level: 75, color: '#06D6A0', icon: '⚛️', category: 'Frontend' },
    { name: 'Node.js', level: 75, color: '#118AB2', icon: '🟢', category: 'Backend' },
    { name: 'Python', level: 60, color: '#073B4C', icon: '🐍', category: 'Backend' },
    { name: 'MongoDB', level: 90, color: '#4ECDC4', icon: '🍃', category: 'Backend' },
    { name: 'Git & GitHub', level: 90, color: '#EF476F', icon: '📂', category: 'Tools' },
    { name: 'Dotnet', level: 40, color: '#7209B7', icon: '🔷', category: 'Learning' },
  ];

  const handleSkillHover = (index) => {
    setActiveSkill(index);
  };

  return (
    <>
      <Header />
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">
            <span className="title-text">My Skills</span>
            <span className="title-underline"></span>
          </h2>
          
          <div className="skills-container">
            {/* Detailed Skill Cards - 4 cards per row on large screens */}
            <div className="skills-details">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`skill-card ${activeSkill === index ? 'highlighted' : ''}`}
                  onMouseEnter={() => handleSkillHover(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                  style={{
                    '--skill-color': skill.color,
                  }}
                >
                  <div className="skill-card-header">
                    <span className="skill-card-icon">{skill.icon}</span>
                    <span className="skill-card-name">{skill.name}</span>
                  </div>
                  
                  <div className="skill-card-progress">
                    <div className="skill-card-bar">
                      <div
                        className="skill-card-fill"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                        }}
                      ></div>
                    </div>
                    <span className="skill-card-percentage">{skill.level}%</span>
                  </div>
                  
                  <div className="skill-card-description">
                    <div className="skill-level-indicator">
                      {skill.level >= 80 && 'Expert'}
                      {skill.level >= 60 && skill.level < 80 && 'Advanced'}
                      {skill.level >= 40 && skill.level < 60 && 'Intermediate'}
                      {skill.level < 40 && 'Beginner'}
                    </div>
                    <div className="skill-experience">
                      {skill.level >= 80 && '4+ years experience'}
                      {skill.level >= 60 && skill.level < 80 && '2-4 years experience'}
                      {skill.level >= 40 && skill.level < 60 && '1-2 years experience'}
                      {skill.level < 40 && 'Learning phase'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Legend - 4 items in one row for larger screens */}
          <div className="skills-legend">
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: '#FF6B6B' }}></div>
              <span>Frontend</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: '#4ECDC4' }}></div>
              <span>Backend</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: '#FFD166' }}></div>
              <span>Tools</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: '#7209B7' }}></div>
              <span>Learning</span>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Skills;