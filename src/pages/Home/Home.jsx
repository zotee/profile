import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Jyoti. How can I help you today?", sender: "bot", timestamp: new Date() }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages(prev => [...prev, {
      id: prev.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    }]);

    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: "Thanks for your message! Let's connect soon.",
        sender: "bot",
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1200);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
I am a passionate Full Stack Developer who enjoys building modern, scalable, and user‑friendly web applications. Comfortable working across both frontend and backend, I develop complete end‑to‑end solutions with a focus on clean, efficient, and maintainable code—always following best practices. Driven by curiosity and creativity, I thrive on solving real‑world problems through thoughtful technology.
</motion.p>

              <motion.div className="home-butons" variants={textItem}>
                <button className="btnn btnn-primary">
                  View My Work
                </button>
                <button className="btnn btnn-secondary">
                  Contact Me
                </button>
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
