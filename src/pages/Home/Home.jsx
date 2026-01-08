// src/components/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import About from '../About/About';
import Skill from '../Skills/Skill';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import me from "../../assets/me.jpeg";

const Home = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Jyoti. How can I help you today?", sender: 'bot', timestamp: new Date() }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.style.backgroundColor = '#ccc';
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages([...messages, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response after 1-2 seconds
    setTimeout(() => {
      const botResponses = [
        "Thanks for your message! I'll get back to you soon.",
        "That's interesting! Tell me more about it.",
        "I'd love to discuss this further. You can also email me at jyotishahqwerty@gmail.com",
        "Great question! I have experience with that. Would you like to see my projects?",
        "I'm currently available for new opportunities. Let's connect!"
      ];
      
      const botMessage = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
              <div className="home-butons">
                <button 
                  className="btn btnn-primary"
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </button>
                <button 
                  className="btn btnn-secondary"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="home-image">
              <div className="profile-image">
                <img 
                  src={me} 
                  alt="Jyoti Sah" 
                  onError={handleImageError}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Chatbot Widget */}
        <div className={`chatbot-widget ${chatOpen ? 'open' : ''}`}>
          {/* Chatbot Toggle Button */}
          <button 
            className="chatbot-toggle"
            onClick={() => setChatOpen(!chatOpen)}
          >
            {chatOpen ? '✕' : '💬'}
            <span className="chatbot-badge">Chat</span>
          </button>

          {/* Chat Window */}
          <div className="chatbot-window">
            <div className="chatbot-header">
              <div className="chatbot-avatar">
                <span>JS</span>
              </div>
              <div className="chatbot-info">
                <h3>Jyoti Sah</h3>
                <p>Full Stack Developer</p>
              </div>
              <button 
                className="chatbot-close"
                onClick={() => setChatOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map(message => (
                <div 
                  key={message.id} 
                  className={`message ${message.sender}`}
                >
                  <div className="message-content">
                    <p>{message.text}</p>
                    <span className="message-time">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="message bot typing">
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form className="chatbot-input" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                disabled={isTyping}
              />
              <button 
                type="submit"
                disabled={isTyping || !inputMessage.trim()}
              >
                <span className="send-icon">➤</span>
              </button>
            </form>
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