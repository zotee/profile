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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('Sending...');

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    
    // Add your Web3Forms access key here
    formDataToSend.append("access_key", "499e2f5a-8d4a-47e4-82f1-b0ffc86b07ae");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setResult('');
        }, 5000);
      } else {
        console.log("Error", data);
        setResult(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setResult('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
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
                    initial="hidden"
                    animate="visible"
                    whileHover={{ y: -3 }}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="btn btnnn-primary"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {result && (
                <motion.div 
                  className="result-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {result}
                </motion.div>
              )}
            </motion.form>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;