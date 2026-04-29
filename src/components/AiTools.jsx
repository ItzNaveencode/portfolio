export default function AiTools() {
  return (
    <section id="ai-tools" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="section-container">
        <p className="section-label">Workflow</p>
        <h2 className="section-title">AI & Tools</h2>
        <div className="section-divider"></div>

        <div className="card max-w-3xl">
          <p className="text-text-dim leading-relaxed mb-6">
            I use AI tools to accelerate development, generate ideas, debug code, and build small utilities efficiently. I focus on understanding and improving AI-generated outputs rather than relying on them blindly.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded bg-accent-dim flex items-center justify-center text-accent mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-text">Productivity</h4>
              <p className="text-xs text-muted leading-relaxed">
                Rapid prototyping, scaffolding boilerplates, and utility script generation.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="w-8 h-8 rounded bg-accent-dim flex items-center justify-center text-accent mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-text">Debugging</h4>
              <p className="text-xs text-muted leading-relaxed">
                Analyzing complex logs, error stack traces, and isolating edge-case bugs.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="w-8 h-8 rounded bg-accent-dim flex items-center justify-center text-accent mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-text">Experimentation</h4>
              <p className="text-xs text-muted leading-relaxed">
                Exploring new backend libraries and testing architectural approaches quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
