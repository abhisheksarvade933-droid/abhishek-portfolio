import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Mail,
  Moon,
  Sun,
  Menu,
  X,
  Code2,
  Database,
  Layers3,
  Braces,
  GraduationCap,
  Sparkles,
  Terminal,
  MapPin,
  Download,
  CheckCircle2,
  Cpu,
  Cloud,
  Server,
  Wrench,
  ShieldCheck,
} from "lucide-react";

const profile = {
  name: "Abhishek Sarvade",
  role: "Full Stack Developer",
  email: "abhisheksarvade933@gmail.com",
  github: "https://github.com/abhisheksarvade933-droid",
  linkedin: "https://linkedin.com/in/abhishek-sarvade",
  leetcode: "https://leetcode.com/u/abhishek-sarvade",
};


const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "Kotlin"],
  },
  {
    title: "Core Computer Science",
    icon: Cpu,
    skills: [
      "Data Structures and Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
    ],
  },
  {
    title: "Frontend Development",
    icon: Layers3,
    skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: Braces,
    skills: [
      "Django",
      "Django ORM",
      "Flask",
      "Django REST Framework",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "SQLite", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    status: "Currently Learning",
    skills: ["AWS", "Amazon EC2", "Linux Basics"],
  },
  {
    title: "API & Backend",
    icon: Server,
    skills: [
      "CRUD Operations",
      "API Integration",
      "Authentication",
      "Database Management",
    ],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Software Practices",
    icon: ShieldCheck,
    skills: ["Debugging", "Testing", "Problem-Solving"],
  },
];


const projects = [
  {
    number: "01",
    name: "OrganMatch",
    type: "Healthcare · Machine Learning",
    description:
      "An organ donor–recipient matching application designed to support compatibility assessment using machine-learning predictions and relevant medical and location factors.",
    stack: ["Python", "Flask", "Scikit-learn", "MySQL"],
    detail: "Academic final-year project",
    mark: "OM",
    tone: "violet",
  },
  {
    number: "02",
    name: "College Management System",
    type: "Education · Full Stack",
    description:
      "A college administration web application built with Django and MySQL, with modules and interfaces for managing college-related information.",
    stack: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"],
    detail: "Full-stack web application",
    mark: "CMS",
    tone: "blue",
  },
  {
    number: "03",
    name: "Matru Sneha",
    type: "Maternal Healthcare · Android",
    description:
      "An Android application concept focused on maternal healthcare, developed using Kotlin and modern Android development components.",
    stack: ["Kotlin", "Jetpack Compose", "Room Database"],
    detail: "Android application project",
    mark: "MS",
    tone: "rose",
  },
  {
    number: "04",
    name: "Infopedia",
    type: "Knowledge Sharing",
    description:
      "A knowledge-sharing platform project. Add a short description of the specific features and your contribution before publishing this project.",
    stack: ["Web Development", "Project collaboration"],
    detail: "Academic project · contribution details to confirm",
    mark: "IN",
    tone: "amber",
  },
];

const experience = [
  {
    role: "Full Stack Development Intern – Python",
    company: "Dhee Coding Lab",
    period: "June 2026 – Present",
    points: [
      "Developing practical skills in Python full-stack development.",
      "Working through hands-on learning and application-building exercises.",
      "Strengthening frontend, backend and database fundamentals.",
    ],
  },
];

function SectionHeading({ eyebrow, title, accent, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        {title} <em>{accent}</em>
      </h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "education",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["home", "Home"],
    ["about", "About"],
    ["skills", "Skills"],
    ["projects", "Projects"],
    ["experience", "Experience"],
    ["education", "Education"],
    ["contact", "Contact"],
  ];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">
            AS<span>.</span>
          </span>
          <span>Abhishek Sarvade</span>
        </a>

        <button
          className="mobile-menu icon-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([id, label]) => (
            <a
              key={id}
              className={active === id ? "active" : ""}
              href={`#${id}`}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="top-actions">
          <button
            className="theme-toggle icon-button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle light and dark theme"
            title="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="nav-cta" href="#contact">
            Let's talk <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="status-line">
              <span className="status-dot" /> OPEN TO ENTRY-LEVEL OPPORTUNITIES
            </div>
            <p className="hero-kicker">
              HELLO, I'M <span>ABHISHEK SARVADE</span>
            </p>
            <h1>
              Building useful
              <br />
              <span className="gradient-text">digital experiences.</span>
            </h1>
            <p className="hero-summary">
              I'm a developer focused on building clean, responsive web
              applications with Python, JavaScript and modern frontend
              technologies.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a
                className="button button-quiet"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={16} /> View resume
              </a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Code2 size={16} /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={16} /> LinkedIn
              </a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer">
                <Code2 size={16} /> LeetCode
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="profile-card-top">
                <span>DEVELOPER PROFILE</span>
                <span className="live-dot" />
              </div>
              <div className="avatar">
                AS<span>.</span>
              </div>
              <h3>Abhishek Sarvade</h3>
              <p>Python · React · Django</p>
              <div className="profile-divider" />
              <div className="profile-meta">
                <span>
                  <MapPin size={13} /> India
                </span>
                <span>
                  <Terminal size={13} /> Building & learning
                </span>
              </div>
            </div>
            <div className="float-chip chip-code">
              <Code2 size={15} /> Clean code
            </div>
            <div className="float-chip chip-stack">
              <Layers3 size={15} /> Full stack
            </div>
            <div className="hero-grid-pattern" />
          </div>

          <a href="#about" className="scroll-cue">
            <ArrowDown size={14} /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="A LITTLE ABOUT ME"
              title="Curious mind."
              accent="Practical builder."
              text="A quick introduction to my background, interests and the direction I'm growing toward."
            />
            <div className="about-grid">
              <article className="panel about-main">
                <span className="mini-label">MY INTRODUCTION</span>
                <h3>Turning ideas into working applications.</h3>
                <p>
                  I'm a Bachelor of Engineering graduate in Information Science.
                  I enjoy learning how applications work end to end — from
                  building user interfaces to writing backend logic and
                  connecting databases.
                </p>
                <p>
                  I'm currently developing my full-stack skills through hands-on
                  training at Dhee Coding Lab, with a focus on Python, Django,
                  JavaScript and React.
                </p>
                <p>
                  I believe in learning by building, improving through practice
                  and writing software that is useful and easy to use.
                </p>
                <div className="about-tags">
                  <span>Problem solving</span>
                  <span>Continuous learning</span>
                  <span>Web development</span>
                </div>
              </article>

              <div className="about-side">
                <article className="panel info-panel">
                  <div className="panel-icon">
                    <GraduationCap />
                  </div>
                  <span className="mini-label">EDUCATION</span>
                  <h3>B.E. – Information Science</h3>
                  <p>Engineering graduate</p>
                </article>
                <article className="panel info-panel">
                  <div className="panel-icon">
                    <Sparkles />
                  </div>
                  <span className="mini-label">CURRENT FOCUS</span>
                  <h3>Python Full Stack</h3>
                  <p>
                    Building practical development skills with Python and modern
                    web technologies.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad" id="skills">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="MY TOOLKIT"
              title="Technologies I"
              accent="work with."
              text="A growing toolkit across programming, frontend, backend and databases."
            />

            <div className="skills-grid">
              {skillGroups.map(
                ({ title, icon: Icon, skills, status }, index) => (
                  <article className="panel skill-card" key={title}>
                    <div className="skill-card-head">
                      <div className="panel-icon">
                        <Icon size={20} />
                      </div>

                      {status ? (
                        <span className="learning-badge">{status}</span>
                      ) : (
                        <span className="mini-label">0{index + 1}</span>
                      )}
                    </div>

                    <h3>{title}</h3>

                    <div className="skill-pills">
                      {skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </article>
                ),
              )}
            </div>

            <div className="learning-strip">
              <span className="learning-pulse" /> CURRENTLY STRENGTHENING
              <b>React · Django · REST APIs · SQL · DSA</b>
            </div>
          </div>
        </section>

        <section className="projects-section section-pad" id="projects">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="SELECTED WORK"
              title="Projects with"
              accent="purpose."
              text="A selection of academic and practice projects. Open each repository to explore the implementation when available."
            />
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="panel project-card" key={project.number}>
                  <div className={`project-art ${project.tone}`}>
                    <span className="project-number">
                      {project.number} / PROJECT
                    </span>
                    <span className="project-monogram">{project.mark}</span>
                    <ArrowUpRight className="project-art-arrow" size={22} />
                  </div>
                  <div className="project-content">
                    <span className="mini-label">{project.type}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="skill-pills">
                      {project.stack.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                    <div className="project-foot">
                      <span>{project.detail}</span>
                      <span
                        className="project-link"
                        title="Add your repository URL when ready"
                      >
                        <Code2 size={16} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="section-note">
              Tip: add the correct GitHub repository URLs and screenshots for
              each project before sharing this portfolio with recruiters.
            </p>
          </div>
        </section>

        <section className="section-pad" id="experience">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="WHERE I'M GROWING"
              title="Experience &"
              accent="learning."
              text="Hands-on training and practical development experience."
            />
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item panel" key={item.company}>
                  <div className="timeline-marker">
                    <BriefcaseBusiness size={19} />
                  </div>
                  <div className="timeline-head">
                    <div>
                      <span className="mini-label">INTERNSHIP</span>
                      <h3>{item.role}</h3>
                      <p className="company-name">{item.company}</p>
                    </div>
                    <span className="date-pill">{item.period}</span>
                  </div>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={15} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="education-section section-pad" id="education">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="ACADEMIC BACKGROUND"
              title="Learning is a"
              accent="journey."
              text="My formal education and ongoing technical development."
            />
            <div className="education-grid">
              <article className="panel education-card">
                <div className="panel-icon">
                  <GraduationCap />
                </div>
                <span className="mini-label">BACHELOR'S DEGREE</span>
                <h3>Bachelor of Engineering</h3>
                <p>Information Science</p>
                <span className="education-foot">Completed engineering</span>
              </article>
              <article className="panel education-card">
                <div className="panel-icon">
                  <Terminal />
                </div>
                <span className="mini-label">PRACTICAL LEARNING</span>
                <h3>Full Stack Development</h3>
                <p>Dhee Coding Lab · Python</p>
                <span className="education-foot">
                  Internship and hands-on practice
                </span>
              </article>
            </div>
          </div>
        </section>

        <section className="section-pad contact-section" id="contact">
          <div className="section-wrap">
            <div className="contact-panel">
              <div>
                <span className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</span>
                <h2>
                  Let's build something
                  <br />
                  <em>meaningful.</em>
                </h2>
                <p>
                  I'm open to connecting about entry-level developer
                  opportunities, collaborations and learning experiences.
                </p>
              </div>
              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href={`mailto:${profile.email}`}
                >
                  <Mail size={17} /> Email me <ArrowUpRight size={16} />
                </a>
                <a
                  className="button button-outline"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BriefcaseBusiness size={17} /> LinkedIn
                </a>
                <a
                  className="button button-outline"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={16} /> GitHub
                </a>
                <span className="contact-email">{profile.email}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <a className="brand" href="#home">
            <span className="brand-mark">
              AS<span>.</span>
            </span>
            <span>Abhishek Sarvade</span>
          </a>
          <span>Designed & built with React and CSS.</span>
          <a href="#home" className="back-top">
            BACK TO TOP ↑
          </a>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Abhishek Sarvade. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
