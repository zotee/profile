// src/components/About.jsx
import React from 'react';
import './About.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <>
<Header/>
  
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating efficient, scalable, and user-friendly applications.
            </p>
            <p>
              With a strong foundation in computer science and hands-on experience in various 
              projects, I'm always eager to learn new technologies and take on challenging tasks.
            </p>
            <div className="about-details">
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
                <span>Kathmandu, Country</span>
              </div>
              <div className="detail-item">
                <strong>Availability:</strong>
                <span>Open for opportunities</span>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>1+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
   
    </>
  );
};

export default About;