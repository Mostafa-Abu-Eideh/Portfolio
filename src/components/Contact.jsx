import { useId } from 'react'
import { Mail, Github, Linkedin, Send, Terminal } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const currentYear = new Date().getFullYear()

const inputClassName =
  'w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition-colors placeholder:text-slate-500 hover:border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 motion-reduce:transition-none'

export default function Contact() {
  const id = useId()
  const contactLinks = [
    { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, Icon: Mail },
    { label: 'GitHub', value: personalInfo.github, href: personalInfo.github, Icon: Github, external: true },
    { label: 'LinkedIn', value: personalInfo.linkedin, href: personalInfo.linkedin, Icon: Linkedin, external: true },
  ]

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = data.get('name').trim()
    const email = data.get('email').trim()
    const message = data.get('message').trim()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="bg-slate-950 text-slate-100">
      <section id="contact" aria-labelledby={`${id}-heading`} className="scroll-mt-16 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 font-mono text-xs font-medium tracking-widest text-cyan-400 sm:text-sm">
              {'// GET IN TOUCH'}
            </p>
            <h2 id={`${id}-heading`} className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s Build Something Together
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              Have a project in mind, an opportunity to share, or a question? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="min-w-0 space-y-4 lg:col-span-5">
              {contactLinks.map(({ label, value, href, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  aria-label={external ? `${label} (opens in a new tab)` : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 transition-colors duration-200 hover:border-cyan-500/40 hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 motion-reduce:transition-none"
                >
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/5 text-cyan-400">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-slate-100 transition-colors group-hover:text-cyan-400 motion-reduce:transition-none">
                      {label}
                    </span>
                    <span className="mt-1 block break-all text-sm text-slate-400">{value}</span>
                  </span>
                </a>
              ))}
            </div>

            <form onSubmit={handleSubmit} aria-label="Contact form" aria-describedby={`${id}-form-note`} className="min-w-0 space-y-6 lg:col-span-7">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${id}-name`} className="mb-2 block text-sm font-medium text-slate-300">Name</label>
                  <input id={`${id}-name`} name="name" type="text" autoComplete="name" required maxLength={100} placeholder="Your name" className={inputClassName} />
                </div>
                <div>
                  <label htmlFor={`${id}-email`} className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                  <input id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" className={inputClassName} />
                </div>
              </div>
              <div>
                <label htmlFor={`${id}-message`} className="mb-2 block text-sm font-medium text-slate-300">Message</label>
                <textarea id={`${id}-message`} name="message" rows={6} required maxLength={4000} placeholder="Tell me about your idea or opportunity…" className={`${inputClassName} min-h-40 resize-y`} />
              </div>
              <div className="flex flex-col items-start gap-3">
                <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 motion-reduce:transition-none sm:w-auto">
                  Send Message
                  <Send size={18} aria-hidden="true" />
                </button>
                <p id={`${id}-form-note`} className="text-sm leading-relaxed text-slate-500">
                  Opens a draft in your email app. Review and send it there.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="mx-auto mt-20 max-w-7xl border-t border-slate-800/80 px-4 pt-8 pb-8 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        <Terminal size={20} aria-hidden="true" className="mx-auto mb-3 text-cyan-400" />
        <p>© {currentYear} <bdi>{personalInfo.name}</bdi>. All rights reserved.</p>
      </footer>
    </div>
  )
}
