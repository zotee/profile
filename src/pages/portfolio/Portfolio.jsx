import React from "react";
import "./Portfolio.css";

const experience = [
  {
    company: "Fortunelink Solutions",
    period: "Current",
    summary:
      "Building and improving web applications used to manage people, processes, and information.",
    details: [
      "Developing interfaces for client and staff workflows",
      "Connecting forms and screens with backend APIs",
      "Improving usability, validation, and responsive layouts",
    ],
  },
  {
    company: "Deskgoo",
    period: "Previously",
    summary:
      "An earlier chapter of my software development journey, where I strengthened my approach to building practical web experiences.",
    details: [
      "Frontend implementation",
      "Working with existing product requirements",
      "Collaboration and iterative improvements",
    ],
  },
  {
    company: "Bluefox",
    period: "Previously",
    summary:
      "Part of the foundation of my professional work in software development.",
    details: [
      "Building web interfaces",
      "Learning from real project constraints",
      "Developing stronger problem-solving habits",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "I start by identifying who will use the product, what they need to accomplish, and which requirements matter most.",
    output: "Clear goals and user flows",
  },
  {
    number: "02",
    title: "Plan the solution",
    description:
      "I map the screens, data, interactions, and edge cases before turning the work into manageable steps.",
    output: "A practical implementation plan",
  },
  {
    number: "03",
    title: "Build and improve",
    description:
      "I develop the interface, connect it to the backend where needed, and refine the details as the product takes shape.",
    output: "Working features and useful feedback",
  },
  {
    number: "04",
    title: "Test and deliver",
    description:
      "I check important flows, handle errors, and review the experience across different screen sizes.",
    output: "A more reliable final experience",
  },
];

const writingTopics = [
  {
    category: "Frontend",
    title: "Building a reusable search and filter experience",
    description:
      "How I think about filter controls, pagination, URL state, and keeping results understandable.",
    themes: "React · State · Usability",
  },
  {
    category: "Full stack",
    title: "Designing a job application workflow",
    description:
      "Exploring how job seekers, reviewers, administrators, and providers move an application forward.",
    themes: "Workflows · Roles · APIs",
  },
  {
    category: "Development",
    title: "What I learned building an admin dashboard",
    description:
      "Lessons from forms, permissions, client records, and presenting complex data clearly.",
    themes: "Dashboards · Forms · Product thinking",
  },
];

const focus = [
  {
    label: "01 / Building",
    title: "Job portal",
    description:
      "Developing the journey from seeker registration and applications through review, approval, and provider decisions.",
    tags: ["Applications", "Approvals", "Recruitment workflows"],
  },
  {
    label: "02 / Improving",
    title: "Admin dashboard",
    description:
      "Making client management, staff workflows, forms, and data presentation easier to use and maintain.",
    tags: ["Client management", "Staff tools", "Forms"],
  },
  {
    label: "03 / Learning",
    title: "Better product development",
    description:
      "Growing my skills in application architecture, accessibility, responsive design, and building dependable user experiences.",
    tags: ["Architecture", "Accessibility", "Responsive design"],
  },
];

function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <header className="portfolio-section-heading">
      <p className="portfolio-eyebrow">{eyebrow}</p>
      <h1 id={id}>{title}</h1>
      <p className="portfolio-section-intro">{description}</p>
    </header>
  );
}

export function Experience() {
  return (
    <section className="portfolio-page" aria-labelledby="experience-title">
      <div className="portfolio-page-inner">
        <SectionHeading
          id="experience-title"
          eyebrow="My journey"
          title="Experience"
          description="The places I’ve worked and the skills I’ve developed along the way."
        />

        <div className="experience-timeline">
          {experience.map((item, index) => (
            <article className="experience-entry" key={item.company}>
              <div className="experience-rail" aria-hidden="true">
                <span className="experience-dot" />
              </div>

              <div className="experience-body">
                <div className="experience-meta">
                  <span className="portfolio-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="experience-period">{item.period}</span>
                </div>

                <h2>{item.company}</h2>
                <p className="experience-summary">{item.summary}</p>

                <ul className="experience-details">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowIWork() {
  return (
    <section className="portfolio-page" aria-labelledby="process-title">
      <div className="portfolio-page-inner">
        <SectionHeading
          id="process-title"
          eyebrow="My approach"
          title="How I work"
          description="A simple process that keeps the work focused on the people who will use it."
        />

        <ol className="process-list">
          {process.map((step) => (
            <li className="process-step" key={step.number}>
              <span className="process-number" aria-hidden="true">
                {step.number}
              </span>

              <div className="process-content">
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </div>

              <p className="process-output">
                <span>Outcome</span>
                {step.output}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Writing() {
  return (
    <section className="portfolio-page" aria-labelledby="writing-title">
      <div className="portfolio-page-inner">
        <SectionHeading
          id="writing-title"
          eyebrow="Ideas and lessons"
          title="Writing"
          description="Notes I’m developing from the products I build and the problems I work through."
        />

        <div className="writing-list">
          {writingTopics.map((topic, index) => (
            <article className="writing-entry" key={topic.title}>
              <div className="writing-side">
                <span className="portfolio-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="writing-category">{topic.category}</span>
              </div>

              <div className="writing-main">
                <h2>{topic.title}</h2>
                <p>{topic.description}</p>
                <span className="writing-themes">{topic.themes}</span>
              </div>

              <span className="writing-status">Coming soon</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CurrentFocus() {
  return (
    <section className="portfolio-page" aria-labelledby="focus-title">
      <div className="portfolio-page-inner">
        <SectionHeading
          id="focus-title"
          eyebrow="What I'm doing now"
          title="Current focus"
          description="The products I’m contributing to and the skills I’m developing."
        />

        <div className="focus-list">
          {focus.map((item) => (
            <article className="focus-entry" key={item.title}>
              <span className="focus-label">{item.label}</span>

              <div className="focus-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>

                <ul className="focus-tags" aria-label={`${item.title} topics`}>
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>

              <span className="focus-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function PortfolioOverview() {
  return (
    <div className="portfolio">
      <Experience />
      <HowIWork />
      <Writing />
      <CurrentFocus />
    </div>
  );
}