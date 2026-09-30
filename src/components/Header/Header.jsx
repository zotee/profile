import React, { useEffect, useState } from "react";
import "./Header.css";

const links = ["home", "about", "skills", "projects", "contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    links.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}><span className="brand-dot" /> JYOTI <span>// DEV</span></a>
        <button className="nav-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "CLOSE ×" : " ☰"}</button>
        <nav id="primary-nav" className={menuOpen ? "site-nav nav-open" : "site-nav"} aria-label="Main navigation">
          {links.map((id) => <a key={id} className={active === id ? "active" : ""} href={`#${id}`} onClick={() => setMenuOpen(false)}>{id.toUpperCase()}</a>)}
        </nav>
        <a className="header-cta" href="mailto:jyotishahqwerty@gmail.com">LET’S TALK ↗</a>
      </div>
    </header>
  );
}
