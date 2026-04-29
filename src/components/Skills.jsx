const SKILL_GROUPS = [
  {
    category: 'Backend',
    color: '#6c63ff',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  {
    category: 'Architecture',
    color: '#8b5cf6',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="8" height="8" rx="1"/>
        <rect x="14" y="3" width="8" height="8" rx="1"/>
        <rect x="2" y="14" width="8" height="8" rx="1"/>
        <rect x="14" y="14" width="8" height="8" rx="1"/>
      </svg>
    ),
    skills: [
      { name: 'Microservices', level: 80 },
      { name: 'MVC Pattern', level: 85 },
      { name: 'System Design', level: 72 },
    ],
  },
  {
    category: 'Tools & DevOps',
    color: '#06b6d4',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    skills: [
      { name: 'Docker', level: 78 },
      { name: 'Git', level: 88 },
      { name: 'Linux / CLI', level: 75 },
    ],
  },
  {
    category: 'Frontend',
    color: '#10b981',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    skills: [
      { name: 'React', level: 65 },
      { name: 'HTML / CSS', level: 72 },
      { name: 'JavaScript', level: 68 },
    ],
  },
  {
    category: 'Mobile',
    color: '#f59e0b',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    skills: [
      { name: 'Kotlin', level: 75 },
      { name: 'Jetpack Compose', level: 68 },
      { name: 'Firebase', level: 70 },
    ],
  },
]

function SkillBar({ name, level, color }) {
  return (
    <div id={`skill-${name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-text-dim font-mono">{name}</span>
        <span className="text-xs text-muted">{level}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}99, ${color})`,
          }}
        />
      </div>
    </div>
  )
}

function SkillGroup({ category, color, icon, skills }) {
  return (
    <div className="card space-y-5">
      <div className="flex items-center gap-3 pb-4 border-b border-border/50">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: `${color}1a`, border: `1px solid ${color}30`, color }}
        >
          {icon}
        </div>
        <h3 className="font-semibold text-text text-sm">{category}</h3>
      </div>
      <div className="space-y-4">
        {skills.map(skill => (
          <SkillBar key={skill.name} {...skill} color={color} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="section-container">
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-divider"></div>
        <p className="text-muted text-sm max-w-lg mb-12 leading-relaxed">
          My technical foundation is backend-first. I'm continuously expanding into adjacent areas.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map(group => (
            <SkillGroup key={group.category} {...group} />
          ))}
        </div>
      </div>
    </section>
  )
}
