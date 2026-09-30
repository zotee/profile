import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Job Portal",
    category: "Full stack",
    summary:
      "A recruitment platform connecting job seekers and employers through an admin-managed hiring process. Job seekers can create profiles and apply for vacancies, employers can manage job postings, and administrators can review registrations and applications.",
    stack: ["Next.js", "Express", "MongoDB"],
    live: "",
    repo: "",
  },
  {
    title: "Ecommerce Website",
    category: "Full stack",
    summary:
      "An online shopping website that presents products through a customer-facing interface and connects it to backend functionality. The project brings together the website’s visual design and server-side data handling to support an online store.",
    stack: ["Frontend", "Backend"],
    live: "",
    repo: "",
  },
  {
    title: "Hospital Website",
    category: "Full stack",
    summary:
      "A hospital website that helps visitors explore information about the hospital and its services. The project combines accessible frontend pages with backend functionality to support the website’s content and data.",
    stack: ["Frontend", "Backend"],
    live: "",
    repo: "",
  },
  {
    title: "Recruitment Dashboard",
    category: "Full stack",
    summary:
      "An internal management dashboard for a recruitment business. Administrators and staff can manage client records, track recruitment stages, record payments, and review reports. Role-based access controls which information and actions each user can access.",
    stack: ["Next.js", "Express", "MongoDB"],
    live: "",
    repo: "",
  },
  {
    title: "Configurable Form Builder",
    category: "Frontend",
    summary:
      "An interactive tool for creating forms from configurable fields. Users can compose a form and validate submitted values according to its field configuration. The project demonstrates dynamic rendering, structured form data, and React state management.",
    stack: ["React", "JavaScript", "CSS"],
    live: "",
    repo: "",
  },
];

const categories = ["All", "Full stack", "Frontend"];
const GAP = 18;

function getVisibleCount() {
  if (window.innerWidth <= 640) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [viewportWidth, setViewportWidth] = useState(0);

  const viewportRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const shown = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  const maxIndex = Math.max(0, shown.length - visibleCount);
  const currentIndex = Math.min(index, maxIndex);

  const cardWidth =
    viewportWidth > 0
      ? (viewportWidth - GAP * (visibleCount - 1)) / visibleCount
      : 0;

  useEffect(() => {
    const measure = () => {
      setVisibleCount(getVisibleCount());
      setViewportWidth(viewportRef.current?.clientWidth ?? 0);
    };

    measure();

    const observer = new ResizeObserver(measure);

    if (viewportRef.current) {
      observer.observe(viewportRef.current);
    }

    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion || maxIndex === 0) return;

    const timer = window.setInterval(() => {
      setIndex((previous) => (previous >= maxIndex ? 0 : previous + 1));
    }, 4000);

    return () => window.clearInterval(timer);
  }, [reduceMotion, maxIndex]);

  const changeFilter = (category) => {
    setFilter(category);
    setIndex(0);
  };

  const goPrevious = () => {
    setIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  };

  const goNext = () => {
    setIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  };

  return (
    <section id="projects" className="projects-section section-shell">
      <p className="eyebrow">// SELECTED BUILDS</p>

      <div className="projects-heading">
        <h2 className="section-heading">
          <span>03 /</span> Projects
        </h2>

        <div className="project-filters" aria-label="Project filters">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              aria-pressed={filter === category}
              className={filter === category ? "selected" : ""}
              onClick={() => changeFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-carousel">
        <div className="project-viewport" ref={viewportRef}>
          <motion.div
            className="project-track"
            animate={{ x: -currentIndex * (cardWidth + GAP) }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 110, damping: 22 }
            }
          >
            {shown.map((project, projectIndex) => {
              const isVisible =
                projectIndex >= currentIndex &&
                projectIndex < currentIndex + visibleCount;

              return (
                <article
                  key={project.title}
                  className="project-card"
                  aria-hidden={!isVisible}
                >
                  <div className="project-art" aria-hidden="true">
                    <span>
                      &lt;{" "}
                      {project.title.toLowerCase().replaceAll(" ", "-")} /&gt;
                    </span>

                    <div className="art-bars">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>

                  <div className="project-body">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>

                    <div className="project-stack">
                      {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    {(project.live || project.repo) && (
                      <div className="project-links">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            tabIndex={isVisible ? 0 : -1}
                          >
                            LIVE SITE ↗
                          </a>
                        )}

                        {project.repo && (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            tabIndex={isVisible ? 0 : -1}
                          >
                            SOURCE ↗
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </motion.div>
        </div>

        {maxIndex > 0 && (
          <div className="project-navigation">
            <span className="project-count">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(maxIndex + 1).padStart(2, "0")}
            </span>

            <div className="project-arrows">
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Previous projects"
              >
                ←
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next projects"
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}