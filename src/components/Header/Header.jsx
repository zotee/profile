// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoImage from '../../assets/diya.jpeg'; // Adjust the path based on your file structure

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  // Check if current page is home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (isHomePage) {
        if (scrollTop > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        setIsScrolled(true);
      }
    };

    if (!isHomePage) {
      setIsScrolled(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <div className="logo-container">
              <img 
                src={logoImage} 
                alt="Jyoti Sah Logo" 
                className="logo-image"
                onError={(e) => {
                  console.error('Logo image failed to load');
                  e.target.style.display = 'none';
                  // Fallback to text if image fails
                  e.target.parentNode.innerHTML = `
                    <div class="logo-fallback">
                      <span class="logo-j">Jyoti</span>
                      <span class="logo-sah">Sah</span>
                    </div>
                  `;
                }}
              />
            </div>
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className="nav-icon">🏠</span>
                <span className="nav-text">Home</span>
                <span className="nav-underline"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className="nav-icon">👤</span>
                <span className="nav-text">About</span>
                <span className="nav-underline"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/skills" 
                className={`nav-link ${isActiveLink('/skills') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className="nav-icon">⚡</span>
                <span className="nav-text">Skills</span>
                <span className="nav-underline"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={`nav-link ${isActiveLink('/projects') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className="nav-icon">💼</span>
                <span className="nav-text">Projects</span>
                <span className="nav-underline"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className="nav-icon">📞</span>
                <span className="nav-text">Contact</span>
                <span className="nav-underline"></span>
              </Link>
            </li>
          </ul>
        </nav>

        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;