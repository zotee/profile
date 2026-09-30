import React from "react";
import "./Footer.css";

export default function Footer() {
  return <footer className="site-footer"><div className="footer-inner"><div><a href="#home">JYOTI <span>// DEV</span></a><p>Building thoughtful digital experiences.</p></div><div className="footer-links"><a href="https://github.com/zotee" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/jyoti-shah7172/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="mailto:jyotishahqwerty@gmail.com">EMAIL ↗</a></div><small>© {new Date().getFullYear()} Jyoti Sah</small></div></footer>;
}
