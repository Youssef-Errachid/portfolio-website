import { useState } from 'react';

const PROJECTS = [
  {
    id: 'e-social',
    cat: 'java',
    img: '/images/e-social-systems.png',
    alt: 'e-Social Systems – Java EE Social Security Management Platform',
    github: 'https://github.com/Youssef-Errachid/e-Social-Systems.git',
    title: 'e-Social Systems – Enterprise Social Security Application',
    desc: 'A full-stack Java EE app that simulates a social security platform for managing employers, workers, declarations, and contribution rules.',
    tech: ['Java EE', 'Servlets & JSP', 'JPA / Hibernate', 'MySQL', 'Tomcat', 'MVC Architecture'],
  },
  {
    id: 'finpay',
    cat: 'java',
    img: '/images/finpay.png',
    alt: 'FinPay – Payment Management System',
    github: 'https://github.com/Youssef-Errachid/FinPay',
    title: 'FinPay – Payment & Invoicing Management System',
    desc: 'A Java FinTech app for managing clients, invoices, payments, commissions, and financial reports in one place.',
    tech: ['Java', 'JDBC', 'MySQL', 'PDF Generation', 'Excel Export', 'OOP', 'Maven'],
  },
  {
    id: 'xtrade',
    cat: 'java',
    img: '/images/XTrade.png',
    alt: 'XTrade – Simplified Trading System',
    github: 'https://github.com/Youssef-Errachid/Xtrade-App-',
    title: 'XTrade – Simplified Trading System',
    desc: 'A Java console app that simulates trading with portfolios, asset transactions, and transaction history tracking.',
    tech: ['Java', 'OOP', 'Console App', 'Data Validation'],
  },
  {
    id: 'ebank',
    cat: 'java',
    img: '/images/E-bank.png',
    alt: 'E-BANK – Bank Management System',
    github: 'https://github.com/Youssef-Errachid/E-BANK-Bank-Management-System',
    title: 'E-BANK – Bank Management System',
    desc: 'A Java console banking app for managing accounts, deposits, withdrawals, transfers, and basic account operations.',
    tech: ['Java', 'OOP', 'Console App', 'Data Validation'],
  },
  {
    id: 'course',
    cat: 'java',
    img: '/images/course-management.png',
    alt: 'Online Course Management System – Java Console App',
    github: 'https://github.com/Youssef-Errachid/System-de-gestion-de-cours-en-line.git',
    title: 'EduManager – Online Course Management System',
    desc: 'A Java console app for managing students, instructors, courses, and registrations in an online learning system.',
    tech: ['Java', 'OOP', 'Collections Framework', 'Console App', 'Input Validation'],
  },
  {
    id: 'library',
    cat: 'javascript',
    img: '/images/library-system.png',
    alt: 'Library Management System – JS Console App',
    github: 'https://github.com/Youssef-Errachid/Library-Management-System',
    title: 'BiblioManager – Library Management System',
    desc: 'A Node.js console app that simulates library operations for books, subscribers, and borrowing transactions.',
    tech: ['JavaScript', 'Node.js', 'Console App', 'Relational Logic', 'State Management'],
  },
  {
    id: 'todo',
    cat: 'javascript',
    img: '/images/todo-list.png',
    alt: 'To-Do List – JS Console App',
    github: 'https://github.com/Youssef-Errachid/Todo-List-Manager',
    title: 'Taskify – Interactive To-Do List Manager',
    desc: 'A Node.js console app for creating, updating, completing, and organizing daily tasks with CRUD operations.',
    tech: ['JavaScript', 'Node.js', 'Console App', 'CRUD Operations', 'Array Manipulation'],
  },
  {
    id: 'calculator',
    cat: 'javascript',
    img: '/images/calculator.png',
    alt: 'JavaScript Console Calculator App',
    github: 'https://github.com/Youssef-Errachid/calculator-project-.git',
    title: 'JS CALCULATOR – JavaScript Console App',
    desc: 'A Node.js console calculator for arithmetic and scientific operations with history tracking and validation.',
    tech: ['JavaScript', 'Node.js', 'Console App', 'Data Validation', 'Data Structures'],
  },
  {
    id: 'rps',
    cat: 'cpp',
    img: '/images/rock-paper-scissors.png',
    alt: 'Rock Paper Scissors Game - C++ Console App',
    github: 'https://github.com/Youssef-Errachid/Rock-Paper-ScissRock-Paper-Scissors-gameors-game/tree/master',
    title: 'ROCK PAPER SCISSORS GAME – C++ Console App',
    desc: 'A C++ console game where players compete against the computer in Rock, Paper, Scissors with score tracking.',
    tech: ['C++', 'Console App', 'Enums', 'Structs', 'Random Logic'],
  },
  {
    id: 'mathquiz',
    cat: 'cpp',
    img: '/images/math-quiz-game.png',
    alt: 'Math Quiz Game - C++ Console App',
    github: 'https://github.com/Youssef-Errachid/Math-Quiz-Game/blob/master/MathOperationsQuiz.cpp',
    title: 'MATH QUIZ GAME – C++ Console App',
    desc: 'A C++ quiz game that generates math questions with multiple difficulty levels and score tracking.',
    tech: ['C++', 'Console App', 'Enums', 'Structs', 'Random Generation'],
  },
];

const FILTERS = [
  { label: 'All Projects', value: 'all' },
  { label: 'Java / Java EE', value: 'java' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'C++', value: 'cpp' },
];

/**
 * Projects section with filter tabs.
 * Uses React state instead of DOM manipulation for filtering.
 */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visible = PROJECTS.filter(
    (p) => activeFilter === 'all' || p.cat === activeFilter
  );

  return (
    <section id="projects">
      <h2 className="section-heading reveal">Some Things I&apos;ve Built</h2>

      {/* Filter Tabs */}
      <div className="projects-filter reveal">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
            data-filter={f.value}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="projects-grid">
        {visible.map((p) => (
          <div key={p.id} className="project reveal" data-cat={p.cat}>
            <div className="project-img">
              <img src={p.img} alt={p.alt} />
            </div>
            <div className="project-content">
              <div className="project-top">
                <i className="far fa-folder folder-icon"></i>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <h3 className="project-title">
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  {p.title}
                </a>
              </h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="projects-cta reveal">
        <p>Want to see more of my work?</p>
        <a
          href="https://github.com/Youssef-Errachid"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          id="github-cta-btn"
        >
          <i className="fab fa-github" style={{ marginRight: '10px' }}></i>View all on GitHub
        </a>
      </div>
    </section>
  );
}
