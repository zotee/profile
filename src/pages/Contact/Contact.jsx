// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import Header from '../../components/Header/Header';

/* ================= ANIMATION VARIANTS ================= */

const sectionVariants = {
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const itemHover = {
  hover: {
    y: -5,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Header />

      <motion.section
        id="contact"
        className="contact"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="contaiiner">
          {/* TITLE */}
          <motion.h2 className="section-title" variants={fadeUp}>
            <span className="title-text">Contact Me</span>
            <span className="title-underline"></span>
          </motion.h2>

          <motion.p className="section-subtitle" variants={fadeUp}>
            Let's work together to bring your ideas to life.
          </motion.p>

          <div className="contact-content">
            {/* LEFT INFO CARD */}
            <motion.div
              className="contact-info"
              variants={slideLeft}
              whileHover={{ y: -6 }}
            >
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in new opportunities and collaborations.
                Feel free to reach out if you'd like to work together.
              </p>

              <div className="contact-details">
                {[
                  {
                    icon: '📧',
                    title: 'Email',
                    value: 'jyotishahqwerty@gmail.com',
                  },
                  {
                    icon: '📱',
                    title: 'Phone',
                    value: '+977 9819097172',
                  },
                  {
                    icon: '📍',
                    title: 'Location',
                    value: 'Kathmandu, Nepal',
                  },
                ].map((item, index) => (
                  <motion.div
                    className="contact-item"
                    key={index}
                    variants={fadeUp}
                    whileHover="hover"
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-text">
                      <strong>{item.title}</strong>
                      <span>{item.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT FORM CARD */}
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              variants={slideRight}
            >
              <motion.div className="form-group" variants={fadeUp}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div className="form-group" variants={fadeUp}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div className="form-group" variants={fadeUp}>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="btn btnnn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
