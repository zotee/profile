// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skill';
import Projects from './pages/Projects/Projects';

import './App.css';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />

      </Routes>
   
   </div>
    </BrowserRouter>
    
  );
}

export default App;