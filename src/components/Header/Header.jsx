// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <h2>Jyoti Sah</h2>
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link 
                to="/" 
                className={isActiveLink('/') ? 'active' : ''}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActiveLink('/about') ? 'active' : ''}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/skills" 
                className={isActiveLink('/skills') ? 'active' : ''}
                onClick={closeMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={isActiveLink('/projects') ? 'active' : ''}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActiveLink('/contact') ? 'active' : ''}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;