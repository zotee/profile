import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const profile = { name: "Jyoti Sah", role: "Full Stack Developer", location: "Kathmandu, Nepal", focus: ["Web apps", "APIs", "UX"], status: "Open to opportunities" };

export default function About() {
  return (
    <section id="about" className="about-section section-shell">
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55 }}>
        <p className="eyebrow">// THE PERSON BEHIND THE CODE</p>
        <h2 className="section-heading"><span>01 /</span> About me</h2>
        <div className="about-grid">
          <div>
            <p className="about-lead">I enjoy the full journey from a rough idea to a product people can actually use.</p>
            <p>My work brings frontend design and backend engineering together. I focus on clear interfaces, dependable APIs, and sensible architecture that makes the next feature easier to build.</p>
            <p>Based in Kathmandu, Nepal. Interested in meaningful products, collaborative teams, and challenging engineering problems.</p>
          </div>
          <div className="about-terminal" aria-label="Developer profile">
            <div className="terminal-top"><span /><span /><span /><strong>profile.json</strong></div>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
