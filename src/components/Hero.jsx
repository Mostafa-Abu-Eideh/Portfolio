import { useId } from 'react'
import { Github, Linkedin, Mail, ArrowRight, FileText } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const focusStyles =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400'

export default function Hero({ resumeUrl = `${import.meta.env.BASE_URL}resume.pdf` }) {
  const headingId = useId()
  const socialLinks = [
    { label: 'GitHub', href: personalInfo.github, Icon: Github, external: true },
    { label: 'LinkedIn', href: personalInfo.linkedin, Icon: Linkedin, external: true },
    { label: 'Email', href: `mailto:${personalInfo.email}`, Icon: Mail },
  ]

  return (
    <section
    id="about"
      aria-labelledby={headingId}
      className="relative isolate overflow-hidden bg-slate-950 text-slate-100"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 content-center items-center gap-12 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="mx-auto w-full min-w-0 max-w-2xl text-center lg:col-span-7 lg:mx-0 lg:text-left">
          <div className="mb-8 inline-flex max-w-full items-center gap-2.5 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-300 sm:text-sm">
            <span className="relative flex size-2 shrink-0" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Available for internships / roles
          </div>

          <h1 id={headingId} className="font-bold tracking-tight">
            <span className="mb-3 block text-lg font-medium tracking-normal text-slate-400 sm:text-xl">
              Hi, I’m
            </span>
            <span dir="auto" className="block break-words bg-linear-to-r from-cyan-300 via-cyan-400 to-indigo-400 bg-clip-text text-4xl leading-tight font-extrabold tracking-tight text-transparent sm:text-5xl xl:text-6xl">
              {personalInfo.name}
            </span>
            <span dir="auto" className="mt-5 block bg-linear-to-r from-cyan-100 to-indigo-300 bg-clip-text text-2xl leading-snug text-transparent sm:text-3xl xl:text-4xl">
              {personalInfo.title}
            </span>
          </h1>

          <p dir="auto" className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400 lg:mx-0">
            {personalInfo.bio}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition-colors duration-200 hover:bg-cyan-300 motion-reduce:transition-none ${focusStyles}`}
            >
              View Projects
              <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" />
            </a>
            <a
              href={resumeUrl}
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors duration-200 hover:border-cyan-400/60 hover:bg-slate-800 hover:text-cyan-400 motion-reduce:transition-none ${focusStyles}`}
            >
              <FileText size={18} aria-hidden="true" />
              Resume
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <span className="mr-1 text-xs font-medium uppercase tracking-widest text-slate-500">Connect</span>
            {socialLinks.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={external ? `${label} (opens in a new tab)` : label}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className={`inline-flex size-11 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition-colors duration-200 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-cyan-400 motion-reduce:transition-none ${focusStyles}`}
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div aria-hidden="true" className="relative mx-auto w-full min-w-0 max-w-md select-none lg:col-span-5 lg:max-w-none">
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-linear-to-br from-cyan-500/10 to-indigo-500/10 blur-xl" />
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-black/30">
            <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4">
              <span className="size-2.5 rounded-full bg-rose-400/70" />
              <span className="size-2.5 rounded-full bg-amber-400/70" />
              <span className="size-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 font-mono text-xs text-slate-500">developer.js</span>
            </div>
            <pre className="overflow-x-auto p-5 text-left font-mono text-xs leading-7 text-slate-300 sm:p-7 sm:text-sm" dir="ltr">
              <code>
                <span className="text-indigo-400">const</span>{' developer = {\n'}
                {'  focus: '}<span className="text-cyan-300">'Computer Science'</span>{',\n'}
                {'  mindset: [\n'}
                {'    '}<span className="text-cyan-300">'Stay curious'</span>{',\n'}
                {'    '}<span className="text-cyan-300">'Solve problems'</span>{',\n'}
                {'    '}<span className="text-cyan-300">'Build with purpose'</span>{'\n'}
                {'  ],\n'}
                {'  openToWork: '}<span className="text-emerald-400">true</span>{'\n'}
                {'};\n\n'}
                <span className="text-slate-500">{'// Always learning. Always building.'}</span>
              </code>
            </pre>
            <div className="flex items-center gap-2 border-t border-slate-800 px-5 py-3 font-mono text-xs text-slate-500">
              <span className="text-emerald-400">❯</span>
              ready for the next challenge
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
