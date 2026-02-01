import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import About from "../About/About";
import Skill from "../Skills/Skill";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import me from "../../assets/me.jpeg";

/* ================= ANIMATIONS ================= */

const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const textItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Home = () => {
  return (
    <>
      <Header />

      <section id="home" className="home">
        <div className="container">
          <div className="home-content">

            {/* TEXT */}
            <motion.div
              className="home-text"
              variants={textContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 variants={textItem}>
               <span className="highlight">Hello, I'm Jyoti Sah</span>
              </motion.h1>
             

              <motion.h2
                variants={textItem}
                style={{ fontStyle: "italic", marginTop: "0" }}
              >
                Full Stack Developer
              </motion.h2>
              <motion.p variants={textItem} style={{ textAlign: 'justify' }}>
              I build digital experiences from the ground up. As a Full Stack Developer, I thrive where frontend creativity meets backend logic-crafting complete, scalable applications that deliver exceptional user value. My approach blends meticulous attention to code quality with a passion for solving real problems, ensuring every project is not just functional, but thoughtfully engineered for lasting impact.
</motion.p>

              <motion.div className="home-butons" variants={textItem}>
                <Link to="/projects">
                  <button className="btnn btnn-primary">
                    View My Work
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="btnn btnn-secondary">
                    Contact Me
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* IMAGE */}
            <div className="home-image">
              <motion.div
                className="profile-image"
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={me} alt="Jyoti Sah" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;