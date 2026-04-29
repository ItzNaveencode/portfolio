const SKILL_GROUPS = [
  {
    category: 'Backend Architecture',
    color: '#6c63ff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'MVC Design'],
  },
  {
    category: 'Infrastructure & Tools',
    color: '#06b6d4',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    skills: ['Docker', 'Git', 'Linux / CLI', 'CI/CD Concepts'],
  },
  {
    category: 'Frontend & Mobile',
    color: '#10b981',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    skills: ['React (basic)', 'JavaScript', 'Kotlin', 'Jetpack Compose', 'Firebase'],
  },
  {
    category: 'AI & Developer Workflow',
    color: '#ec4899',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
      </svg>
    ),
    skills: ['LLM usage (basic)', 'Prompting', 'AI-assisted development', 'Utility Automation'],
  },
]

function SkillGroup({ category, color, icon, skills }) {
  return (
    <div className="card space-y-5">
      <div className="flex items-center gap-3 pb-4 border-b border-border/50">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: `${color}1a`, border: `1px solid ${color}30`, color }}
        >
          {icon}
        </div>
        <h3 className="font-semibold text-text text-sm">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span 
            key={skill} 
            className="px-3 py-1.5 text-xs rounded-md bg-surface border border-border text-text-dim hover:text-text transition-colors"
          >
            {skill}
          </span>
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
        <h2 className="section-title">Technical Stack</h2>
        <div className="section-divider"></div>

        <div className="grid sm:grid-cols-2 gap-6">
          {SKILL_GROUPS.map(group => (
            <SkillGroup key={group.category} {...group} />
          ))}
        </div>
      </div>
    </section>
  )
}
