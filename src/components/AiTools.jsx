export default function AiTools() {
  return (
    <section id="ai-tools" className="relative">
      <div className="section-separator" />
      <div className="section-container">
        <p className="section-label">Workflow</p>
        <h2 className="section-title">AI & Tools</h2>
        <div className="section-divider"></div>

        <div className="card max-w-4xl p-8 md:p-12">
          <p className="text-lg text-text-dim leading-relaxed mb-10">
            I use AI tools to accelerate development, generate ideas, debug code, and build small utilities efficiently. I focus on understanding and improving AI-generated outputs rather than relying on them blindly.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent-dim flex items-center justify-center text-accent mb-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h4 className="text-base font-bold text-text">Productivity</h4>
              <p className="text-sm text-text-dim leading-relaxed">
                Rapid prototyping, scaffolding boilerplates, and utility script generation.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent-dim flex items-center justify-center text-accent mb-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
              </div>
              <h4 className="text-base font-bold text-text">Debugging</h4>
              <p className="text-sm text-text-dim leading-relaxed">
                Analyzing complex logs, error stack traces, and isolating edge-case bugs.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent-dim flex items-center justify-center text-accent mb-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h4 className="text-base font-bold text-text">Experimentation</h4>
              <p className="text-sm text-text-dim leading-relaxed">
                Exploring new backend libraries and testing architectural approaches quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
