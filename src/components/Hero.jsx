export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(108,99,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,99,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="section-container relative z-10 pt-32 pb-16">
        {/* Status badge */}
        <div className="flex items-center gap-2 mb-8 animate-in opacity-0 stagger-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
          <span className="text-xs font-mono text-muted tracking-wider">Available for opportunities</span>
        </div>

        {/* Name + Title */}
        <div className="animate-in opacity-0 stagger-2">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
            Hi, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-text mb-3 leading-none">
            M Naveen
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-text-dim mb-6">
            Backend-Focused{' '}
            <span className="text-gradient">Developer</span>
          </h2>
        </div>

        {/* Tagline */}
        <div className="animate-in opacity-0 stagger-3">
          <p className="text-base md:text-lg text-muted max-w-xl mb-10 leading-relaxed font-mono">
            <span className="text-accent">{'// '}</span>
            I build scalable backend systems, APIs, and developer tools.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 animate-in opacity-0 stagger-4">
          <a href="#projects" className="btn-primary" id="hero-view-projects">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <path d="M8 21h8m-4-4v4"/>
            </svg>
            View Projects
          </a>
          <a
            href="https://github.com/ItzNaveencode"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            id="hero-github"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
          <a href="#" className="btn-outline" id="hero-resume">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            Resume
          </a>
        </div>

        {/* Tech Strip */}
        <div className="mt-16 pt-12 border-t border-border/40 animate-in opacity-0 stagger-4">
          <p className="text-xs text-muted font-mono mb-4 tracking-widest uppercase">Primary Stack</p>
          <div className="flex flex-wrap gap-3">
            {['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Docker', 'Kotlin'].map(tech => (
              <span key={tech} className="skill-pill">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-in opacity-0 stagger-4">
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted/50 to-transparent"></div>
      </div>
    </section>
  )
}
