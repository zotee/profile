// src/components/Home.jsx
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import About from '../About/About';
import Skill from '../Skills/Skill';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import me from "../../assets/me.jpeg"

const Home = () => {
  return (
    <>
      <Header />
      <section id="home" className="home">
        <div className="container">
          <div className="home-content">
            <div className="home-text">
              <h1>Hello, I'm <span className="highlight">Jyoti Sah</span></h1>
              <h2>Full Stack Developer</h2>
              <p>
                I create beautiful and functional web applications 
                with modern technologies and best practices.
              </p>
              <div className="home-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="home-image">
              <div className="profile-image">
                <img src={me} alt="Jyoti Sah" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Footer />
    </>
  );
};

export default Home;