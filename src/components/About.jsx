const STATS = [
  { label: 'Projects Built', value: '3+' },
  { label: 'Technologies', value: '10+' },
  { label: 'Focus Area', value: 'Backend' },
]

const HIGHLIGHTS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Backend Architecture',
    desc: 'Spring Boot, REST APIs, Microservices — building reliable, scalable systems.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8m-4-4v4"/>
        <path d="M9 8l-2 2 2 2m6-4l2 2-2 2"/>
      </svg>
    ),
    title: 'Developer Tools',
    desc: 'Building utilities that solve real developer problems, like format converters.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    title: 'Containerization',
    desc: 'Docker-first approach to packaging and deploying backend services.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <p className="section-label">About Me</p>
        <h2 className="section-title">Who I Am</h2>
        <div className="section-divider"></div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — text */}
          <div className="space-y-5">
            <p className="text-text-dim leading-relaxed">
              Hi, I’m Naveen, a <span className="text-text font-medium">final-year Computer Science student</span> with a strong focus on backend development.
            </p>
            <p className="text-text-dim leading-relaxed">
              I have been working mainly with <span className="text-accent font-medium">Java</span> and <span className="text-accent font-medium">Spring Boot</span>, where I’ve built REST APIs and worked on how data flows through real applications. Recently, I worked on a microservices-based patient management system, where I built multiple services and containerized them using <span className="text-accent font-medium">Docker</span>. This helped me understand service communication, debugging, and how backend systems are structured.
            </p>
            <p className="text-text-dim leading-relaxed">
              Along with that, I developed an Android application called CivicWatch using Kotlin and Firebase, where I worked on features like location tracking, API integration, and real-time data handling. I also built a developer utility tool called DevTool Converter to solve common data transformation tasks.
            </p>
            <p className="text-text-dim leading-relaxed">
              I’ve also consistently practiced problem-solving in Java by solving 250+ problems, which improved my logical thinking and debugging skills.
            </p>
            <p className="text-text-dim leading-relaxed">
              Right now, I’m focused on becoming a strong backend engineer by building real systems, understanding architecture, and improving how I design and debug applications.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/40">
              {STATS.map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-bold text-gradient">{value}</p>
                  <p className="text-xs text-muted mt-1 font-mono">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — highlight cards */}
          <div className="space-y-4">
            {HIGHLIGHTS.map(({ icon, title, desc }) => (
              <div key={title} className="card flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-dim border border-accent/20 flex items-center justify-center text-accent">
                  {icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text mb-1">{title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}

            {/* Code snippet flavor */}
            <div className="card bg-background font-mono text-xs leading-relaxed overflow-x-auto">
              <div className="flex gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
              </div>
              <p><span className="text-purple-400">const</span> <span className="text-blue-400">naveen</span> <span className="text-text-dim">= {'{'}</span></p>
              <p className="pl-4"><span className="text-emerald-400">role</span><span className="text-text-dim">: </span><span className="text-amber-300">"Backend Developer"</span><span className="text-text-dim">,</span></p>
              <p className="pl-4"><span className="text-emerald-400">focus</span><span className="text-text-dim">: </span><span className="text-amber-300">"Scalable Systems"</span><span className="text-text-dim">,</span></p>
              <p className="pl-4"><span className="text-emerald-400">learning</span><span className="text-text-dim">: </span><span className="text-amber-300">"System Design"</span><span className="text-text-dim">,</span></p>
              <p className="pl-4"><span className="text-emerald-400">openTo</span><span className="text-text-dim">: </span><span className="text-amber-300">"Opportunities"</span></p>
              <p><span className="text-text-dim">{'}'}</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
