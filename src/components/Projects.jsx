function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

const PROJECTS = [
  {
    id: 'patient-management',
    number: '01',
    title: 'Patient Management System',
    subtitle: 'Microservices Architecture',
    description:
      'A production-style backend system built with Spring Boot microservices. Implements separate services for patient management, billing, and communication — each containerized with Docker and communicating via REST.',
    features: [
      'Independent patient, billing & communication services',
      'Docker containerization for each service',
      'Clean REST API contracts between services',
      'Service-oriented architecture with clear boundaries',
    ],
    stack: ['Java', 'Spring Boot', 'Microservices', 'Docker', 'REST API'],
    github: 'https://github.com/ItzNaveencode/Patient-management.git',
    accent: '#6c63ff',
  },
  {
    id: 'devtool-converter',
    number: '02',
    title: 'DevTool Converter',
    subtitle: 'Developer Utility',
    description:
      'A practical developer utility for data format conversions. Built to eliminate the need for switching between online tools — handles common encoding, decoding, and format transformation tasks right from one place.',
    features: [
      'Multi-format data conversion support',
      'Fast, client-side processing',
      'Clean, minimal developer UI',
      'Solves real daily developer friction',
    ],
    stack: ['React', 'JavaScript', 'REST API', 'Developer Tools'],
    github: 'https://github.com/ItzNaveencode/InstantDevToolConverter.git',
    live: 'https://instant-dev-tool-converter.vercel.app',
    accent: '#8b5cf6',
  },
  {
    id: 'civicwatch',
    number: '03',
    title: 'CivicWatch App',
    subtitle: 'Android Mobile Application',
    description:
      'An Android application that enables civic engagement through real-time location tracking and data feeds. Built with Kotlin and Firebase, the app integrates live API data and uses Jetpack Compose for a modern UI.',
    features: [
      'Real-time location tracking integration',
      'Firebase backend for live data sync',
      'REST API integration for live feeds',
      'Built with Jetpack Compose',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Android', 'REST API'],
    github: 'https://github.com/ItzNaveencode',
    accent: '#06b6d4',
  },
]

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0
  return (
    <div
      id={`project-${project.id}`}
      className="card group relative overflow-hidden"
    >
      {/* Number watermark */}
      <span
        className="absolute top-4 right-6 font-mono font-black text-6xl opacity-[0.04] select-none pointer-events-none"
        style={{ color: project.accent }}
      >
        {project.number}
      </span>

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="font-mono text-xs text-muted mb-1 block">{project.number} /</span>
            <h3 className="text-lg font-bold text-text">{project.title}</h3>
            <p className="text-xs text-muted font-mono mt-0.5">{project.subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                id={`project-${project.id}-live`}
                className="flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors px-2 py-1 border border-border rounded-md hover:border-accent/40"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg> Live
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              id={`project-${project.id}-github`}
              className="flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors px-2 py-1 border border-border rounded-md hover:border-accent/40"
            >
              <GitHubIcon /> Code
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-5">
          {project.features.map(f => (
            <li key={f} className="flex items-start gap-2 text-xs text-text-dim">
              <span className="mt-0.5 flex-shrink-0" style={{ color: project.accent }}>▹</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
          {project.stack.map(tech => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative">
      {/* Subtle section separator gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="section-container">
        <p className="section-label">Work</p>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider"></div>
        <p className="text-muted text-sm max-w-lg mb-12 leading-relaxed">
          A selection of projects that demonstrate my backend engineering skills — from microservices to mobile apps.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/ItzNaveencode"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            id="projects-view-all"
          >
            <GitHubIcon />
            View all repositories
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
