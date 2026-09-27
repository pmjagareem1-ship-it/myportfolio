import { useEffect, useState } from 'react'
import {
  education,
  extras,
  profile,
  projects,
  skills,
} from './data'
import './App.css'

const nav = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
]

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site">
      <div className="grain" aria-hidden="true" />

      <header className={scrolled ? 'nav nav-solid' : 'nav'}>
        <a className="mark" href="#top">
          PMJ
        </a>
        <details className="nav-details">
          <summary className="menu" aria-label="Menu">
            <span />
            <span />
          </summary>
          <nav className="links">
            {nav.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
            <a className="pill" href={`mailto:${profile.email}`}>
              Hire me
            </a>
          </nav>
        </details>
      </header>

      <main id="top">
        <section className="hero">
          <p className="kicker">
            <span className="dot" />
            Available for internships · Full-stack
          </p>
          <div className="hero-grid">
            <div>
              <h1>
                {profile.name.split(' ').slice(0, 2).join(' ')}
                <em> {profile.name.split(' ').slice(2).join(' ')}</em>
              </h1>
              <p className="lede">{profile.tagline}</p>
              <div className="cta">
                <a className="btn primary" href="#work">
                  See selected work
                </a>
                <a className="btn ghost" href={profile.links.github}>
                  GitHub
                </a>
              </div>
            </div>
            <aside className="card-id">
              <img src={profile.photo} alt={profile.name} width="96" height="96" />
              <dl>
                <div>
                  <dt>Role</dt>
                  <dd>{profile.role}</dd>
                </div>
                <div>
                  <dt>Study</dt>
                  <dd>B.Tech CSE–AI · 2027</dd>
                </div>
                <div>
                  <dt>Based</dt>
                  <dd>{profile.location}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section id="work" className="block">
          <header className="block-head">
            <p>Selected work</p>
            <h2>Products I am building</h2>
          </header>
          <ol className="projects">
            {projects.map((project) => (
              <li key={project.code}>
                <a href={project.href} target="_blank" rel="noreferrer">
                  <span className="code">{project.code}</span>
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.summary}</p>
                    <ul className="tags">
                      {project.stack.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="go" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section id="about" className="block about">
          <header className="block-head">
            <p>About</p>
            <h2>Curious builder, campus coordinator, quick study</h2>
          </header>
          <div className="about-grid">
            <p>
              {profile.objective} I pick up new AI tools fast, stay close to
              GitHub, and like turning messy real-world problems — solar
              adoption, data privacy — into software people can actually use.
            </p>
            <ul className="facts">
              <li>College event coordinator</li>
              <li>2nd place in technical quizzes</li>
              <li>Languages: {profile.languages.join(' · ')}</li>
            </ul>
          </div>

          <ol className="timeline">
            {education.map((item) => (
              <li key={item.title}>
                <time>{item.year}</time>
                <div>
                  <strong>{item.title}</strong>
                  <span>
                    {item.place} · {item.meta}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" className="block">
          <header className="block-head">
            <p>Toolkit</p>
            <h2>How I ship</h2>
          </header>
          <div className="skill-grid">
            {skills.map((skill) => (
              <article key={skill.group}>
                <h3>{skill.group}</h3>
                <p>{skill.items.join('  ·  ')}</p>
              </article>
            ))}
          </div>
          <ul className="certs">
            {extras.map((item) => (
              <li key={item.title}>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                <em>{item.detail}</em>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="block contact">
          <header className="block-head">
            <p>Contact</p>
            <h2>Let’s build something useful</h2>
          </header>
          <div className="contact-row">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.phoneHref}>{profile.phone}</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="foot">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Nagari · Andhra Pradesh</span>
      </footer>
    </div>
  )
}

export default App
