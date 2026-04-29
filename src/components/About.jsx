const HIGHLIGHTS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        <p className="section-label">Background</p>
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left — text */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-lg text-text-dim leading-relaxed">
              I am a Backend Developer focused on building robust, scalable infrastructure. I work primarily with <span className="text-accent font-medium">Java</span> and <span className="text-accent font-medium">Spring Boot</span> to design clean REST APIs and architect systems that handle real-world data flows.
            </p>
            
            <p className="text-lg text-text-dim leading-relaxed">
              My engineering approach centers on strict service boundaries, inter-service communication, and clean contracts.
            </p>

            <div className="pl-6 border-l-2 border-accent">
              <p className="text-xl font-medium text-text leading-snug">
                I enjoy debugging systems and understanding failure cases, not just building features.
              </p>
            </div>

            <p className="text-lg text-text-dim leading-relaxed">
              I actively use AI tools to improve development speed and experiment with new ideas, treating them as productivity multipliers for coding and utility generation.
            </p>
            
            <div className="p-6 mt-10 bg-surface border border-border rounded-xl">
              <p className="text-base font-mono text-text-dim leading-relaxed flex items-start gap-3">
                <span className="text-accent text-lg mt-0.5">▹</span>
                All projects include clean code, documentation, and working implementations on GitHub.
              </p>
            </div>
          </div>

          {/* Right — highlight cards */}
          <div className="lg:col-span-5 space-y-6">
            {HIGHLIGHTS.map(({ icon, title, desc }) => (
              <div key={title} className="card flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent-dim border border-accent/20 flex items-center justify-center text-accent">
                  {icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-text mb-2">{title}</h3>
                  <p className="text-sm text-text-dim leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
