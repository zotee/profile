import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import About from "../About/About";
import Skill from "../Skills/Skill";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import me from "../../assets/me.jpeg";
import "./Home.css";


export default function Home() {
  return (
    <div className="portfolio">
      <Header />

      <main>
        <section id="home" className="home section-shell">
          <div className="home-content">
            <p className="availability">
              <span className="status-dot" aria-hidden="true" />
              Available for opportunities
            </p>

            <p className="home-intro">Hello, I’m Jyoti Sah</p>

            <h1>
              I build digital products
              <span> from idea to launch.</span>
            </h1>

            <p className="hero-copy">
              I’m a full stack developer in Kathmandu, Nepal. I create
              intuitive interfaces, dependable APIs, and practical solutions
              that make people’s work easier.
            </p>

            <div className="hero-actions">
              <a className="action action-primary" href="#projects">
                View my work <span aria-hidden="true">↗</span>
              </a>
              <a className="action action-outline" href="#contact">
                Get in touch
              </a>
            </div>

            <p className="hero-specialties">
              React <span>·</span> Node.js <span>·</span> MongoDB
            </p>
          </div>

          <div className="home-visual">
            <div className="portrait-frame">
              <img src={me} alt="Jyoti Sah" />
            </div>
            <div className="portrait-caption">
              <span className="caption-mark" aria-hidden="true">✳</span>
              <div>
                <strong>Design meets development.</strong>
                <span>Thoughtful details, built to work.</span>
              </div>
            </div>
          </div>
        </section>
      

        <About />
        <Skill />
        <Projects />
        <Contact />
   
      </main>

    </div>
  );
}