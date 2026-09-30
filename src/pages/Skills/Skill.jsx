import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./Skill.css";

const skills = [
  { id: "html", name: "HTML / CSS", category: "Frontend", mark: "</>" },
  { id: "javascript", name: "JavaScript", category: "Frontend", mark: "JS" },
  { id: "typescript", name: "TypeScript", category: "Frontend", mark: "TS" },
  { id: "react", name: "React", category: "Frontend", mark: "⚛" },
  { id: "node", name: "Node.js", category: "Backend", mark: "N" },
  { id: "express", name: "Express.js", category: "Backend", mark: "EX" },
  { id: "python", name: "Python", category: "Backend", mark: "PY" },
  { id: "mongodb", name: "MongoDB", category: "Database", mark: "M" },
  { id: "mysql", name: "MySQL", category: "Database", mark: "SQL" },
  { id: "erp", name: "ERP Systems", category: "Business", mark: "ERP" },
  { id: "git", name: "Git & GitHub", category: "Tools", mark: "GIT" },
  { id: "dotnet", name: ".NET", category: "Learning", mark: ".NET" },
];

const categories = ["All", ...new Set(skills.map((skill) => skill.category))];

export default function Skills() {
  const [filter, setFilter] = useState("All");
  const reduceMotion = useReducedMotion();

  const shown = skills.filter(
    (skill) => filter === "All" || skill.category === filter
  );

  return (
    <section id="skills" className="skills section-shell">
      <div className="skills-container">
        <p className="eyebrow">// THE TOOLKIT</p>

        <div className="skills-heading">
          <h2 className="section-heading">
            <span>02 /</span> Skills
          </h2>

          <div
            className="skills-filters"
            role="group"
            aria-label="Filter skills by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={filter === category}
                className={`skills-filter ${
                  filter === category ? "selected" : ""
                }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <p className="skills-intro">
          Technologies I use to build interfaces, APIs, databases, and
          business solutions.
        </p>

        <div className="skills-grid">
          {shown.map((skill, index) => {
            const number = String(
              skills.findIndex((item) => item.id === skill.id) + 1
            ).padStart(2, "0");

            return (
              <motion.article
                key={skill.id}
                className={`skill-card skill-card--${skill.category.toLowerCase()}`}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={
                  reduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.35,
                  delay: reduceMotion ? 0 : Math.min(index * 0.03, 0.2),
                }}
              >
                <div className="skill-card-top">
                  <span className="skill-number">{number}</span>
                  <span className="skill-category">{skill.category}</span>
                </div>

                <div className="skill-card-main">
                  <span className="skill-mark" aria-hidden="true">
                    {skill.mark}
                  </span>
                  <h3 className="skill-name">{skill.name}</h3>
                </div>

                <div className="skill-card-bottom">
                  <span>IN MY TOOLKIT</span>
                  <span aria-hidden="true">+</span>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="skills-footer">
          <span aria-hidden="true">+</span>
          ALWAYS LEARNING. ALWAYS BUILDING.
        </p>
      </div>
    </section>
  );
}