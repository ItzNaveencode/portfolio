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
    title: 'Microservices-Based Patient Management System',
    subtitle: 'Spring Boot Architecture',
    description:
      'A robust backend system architected to handle complex clinical workflows. Divided into independent services to ensure fault isolation and independent scalability. Containerized entirely with Docker.',
    features: [
      'Designed clear service boundaries for patient, billing, and communication modules',
      'Implemented inter-service communication using REST APIs',
      'Ensured consistent deployment environments via Docker containerization',
      'Applied strong backend architecture and system design thinking',
    ],
    stack: ['Java', 'Spring Boot', 'Microservices', 'Docker', 'REST API'],
    github: 'https://github.com/ItzNaveencode/Patient-management.git',
    accent: '#6c63ff',
    hasDiagram: true,
  },
  {
    id: 'devtool-converter',
    number: '02',
    title: 'DevTool Converter',
    subtitle: 'Developer Workflow Utility',
    description:
      'Built to eliminate repetitive developer tasks and data format conversions. It solves real daily friction by providing fast, client-side processing for multiple data structures.',
    features: [
      'Solves practical developer problems with data transformation',
      'Explored using AI-assisted workflows to enhance development speed and usability',
      'Focus on clean architecture and high-performance parsing',
    ],
    stack: ['React', 'JavaScript', 'Developer Tools', 'AI-Assisted'],
    github: 'https://github.com/ItzNaveencode/InstantDevToolConverter.git',
    live: 'https://instant-dev-tool-converter.vercel.app',
    accent: '#8b5cf6',
  },
  {
    id: 'civicwatch',
    number: '03',
    title: 'CivicWatch',
    subtitle: 'Location & Data Mobile Platform',
    description:
      'A real-world Android application focused on civic data integration. Engineered to handle real-time location tracking and continuous data synchronization with backend APIs.',
    features: [
      'Robust API integration and data parsing logic',
      'Real-time data handling using Firebase',
      'System-level thinking applied to mobile location services',
      'Optimized application behavior and state management',
    ],
    stack: ['Kotlin', 'Firebase', 'REST API', 'System Architecture'],
    github: 'https://github.com/ItzNaveencode',
    accent: '#06b6d4',
  },
]

function ProjectCard({ project, index }) {
  return (
    <div
      id={`project-${project.id}`}
      className="card group relative overflow-hidden flex flex-col h-full bg-surface"
    >
      <span
        className="absolute top-8 right-8 font-mono font-black text-7xl opacity-[0.03] select-none pointer-events-none"
        style={{ color: project.accent }}
      >
        {project.number}
      </span>

      <div
        className="absolute top-0 left-0 right-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
      />

      <div className="relative z-10 flex-grow space-y-6">
        <div>
          <span className="font-mono text-sm text-muted mb-2 block">{project.number} /</span>
          <h3 className="text-xl md:text-2xl font-bold text-text mb-2">{project.title}</h3>
          <p className="text-sm text-accent font-mono">{project.subtitle}</p>
        </div>

        <p className="text-base text-text-dim leading-relaxed">
          {project.description}
        </p>

        {project.hasDiagram && (
          <div className="my-6 p-6 bg-background rounded-xl font-mono text-xs text-text-dim flex flex-col items-center gap-3 border border-border/50">
            <div className="px-4 py-1.5 bg-surface border border-border rounded-lg shadow-sm text-accent font-semibold">API Gateway</div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex gap-4">
              <div className="px-3 py-1.5 bg-surface border border-border rounded-lg shadow-sm">Patient Svc</div>
              <div className="px-3 py-1.5 bg-surface border border-border rounded-lg shadow-sm">Billing Svc</div>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="px-4 py-1.5 border border-blue-500/30 text-blue-400 bg-blue-500/5 rounded-lg shadow-sm w-full text-center">
              Docker Network
            </div>
          </div>
        )}

        <ul className="space-y-3">
          {project.features.map(f => (
            <li key={f} className="flex items-start gap-3 text-sm text-text-dim">
              <span className="mt-0.5 flex-shrink-0" style={{ color: project.accent }}>▹</span>
              <span className="leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 pt-6 border-t border-border">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map(tech => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              id={`project-${project.id}-live`}
              className="flex items-center gap-2 text-sm font-medium text-text hover:text-accent transition-colors px-4 py-2 border border-border rounded-lg hover:border-accent/40 bg-background"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg> Live Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-${project.id}-github`}
            className="flex items-center gap-2 text-sm font-medium text-text hover:text-accent transition-colors px-4 py-2 border border-border rounded-lg hover:border-accent/40 bg-background"
          >
            <GitHubIcon /> Source Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="section-container">
        <p className="section-label">Engineering Work</p>
        <h2 className="section-title">Systems & Applications</h2>
        <div className="section-divider"></div>
        <p className="text-lg text-text-dim max-w-2xl mb-16 leading-relaxed">
          A selection of robust engineering projects emphasizing clean architecture, system design, and practical utility.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
