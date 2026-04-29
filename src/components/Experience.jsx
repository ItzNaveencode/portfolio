const EXPERIENCE = [
  {
    id: 'kodnest',
    role: 'Java Full Stack Development with AI Training',
    company: 'Kodnest Training Institute',
    period: 'Ongoing',
    type: 'Training',
    description:
      'Currently training in Java Full Stack Development with an integration of AI. Actively working on Java, Spring Boot, REST APIs, and microservices-based projects.',
    highlights: [
      'Developing REST APIs and microservices using Spring Boot',
      'Focusing on practical problem solving and project implementation',
      'Working on full stack project architecture and development',
    ],
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Full Stack'],
  },
]

function TimelineItem({ exp }) {
  return (
    <div id={`exp-${exp.id}`} className="relative pl-8 pb-8">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-accent -translate-x-[3.5px] shadow-[0_0_8px_rgba(108,99,255,0.6)]" />

      <div className="card">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
          <div>
            <h3 className="font-bold text-text text-lg">{exp.role}</h3>
            <p className="text-accent text-sm font-medium mt-1">{exp.company}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-muted px-3 py-1.5 border border-border rounded-lg">{exp.period}</span>
            <span className="text-xs font-mono text-accent px-3 py-1.5 bg-accent-dim border border-accent/20 rounded-lg">{exp.type}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-base text-muted leading-relaxed mb-6">{exp.description}</p>

        {/* Highlights */}
        <ul className="space-y-3 mb-6">
          {exp.highlights.map(h => (
            <li key={h} className="flex items-start gap-3 text-sm text-text-dim">
              <span className="text-accent mt-0.5 flex-shrink-0">▹</span>
              <span className="leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
          {exp.skills.map(s => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="section-container">
        <p className="section-label">Background</p>
        <h2 className="section-title">Experience</h2>
        <div className="section-divider"></div>

        <div className="max-w-2xl">
          {EXPERIENCE.map(exp => (
            <TimelineItem key={exp.id} exp={exp} />
          ))}

          {/* Currently learning card */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border/40" />
            <div className="absolute left-0 top-1 w-2 h-2 rounded-full border border-accent/60 bg-background -translate-x-[3.5px]">
              <span className="absolute inset-0.5 rounded-full bg-accent/40 animate-ping"></span>
            </div>
            <div className="card border-dashed">
              <p className="text-xs font-mono text-muted mb-1 uppercase tracking-widest">Currently</p>
              <p className="text-sm text-text-dim leading-relaxed">
                Actively building projects, learning system design, and seeking internship / junior developer opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
