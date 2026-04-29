const CONTACTS = [
  {
    id: 'contact-email',
    label: 'Email',
    value: 'naveenmydur720@gmail.com',
    href: 'mailto:naveenmydur720@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    id: 'contact-github',
    label: 'GitHub',
    value: 'ItzNaveencode',
    href: 'https://github.com/ItzNaveencode',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    id: 'contact-linkedin',
    label: 'LinkedIn',
    value: 'naveen-mydur',
    href: 'https://www.linkedin.com/in/naveen-mydur',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    id: 'contact-leetcode',
    label: 'LeetCode',
    value: 'Naveen_Mydur',
    href: 'https://leetcode.com/u/Naveen_Mydur/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="section-container">
        <p className="section-label">Let's Talk</p>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider"></div>

        <div className="max-w-3xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left — message */}
            <div className="space-y-6">
              <p className="text-lg text-text-dim leading-relaxed">
                I'm currently open to{' '}
                <span className="text-text font-medium">engineering roles</span> and interesting
                backend architecture problems to collaborate on.
              </p>
              <p className="text-lg text-text-dim leading-relaxed">
                Whether you have a position in mind, a project to discuss, or just want to connect —
                my inbox is open.
              </p>

              <div className="inline-flex items-center gap-3 px-5 py-2.5 mt-4 rounded-xl bg-accent-dim border border-accent/20 text-accent text-sm font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                Available for opportunities
              </div>
            </div>

            {/* Right — contact cards */}
            <div className="space-y-3">
              {CONTACTS.map(({ id, label, value, href, icon }) => (
                <a
                  key={id}
                  id={id}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-dim border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-200">
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted font-mono uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-sm text-text font-medium truncate">{value}</p>
                  </div>
                  <svg className="ml-auto text-muted group-hover:text-accent transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-7-7l7 7-7 7"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
