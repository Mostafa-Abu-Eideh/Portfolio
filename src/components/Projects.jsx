import { useId } from 'react'
import { Github, ExternalLink, FolderGit2 } from 'lucide-react'
import { projects } from '../data/portfolioData'

const actionClassName =
  'inline-flex size-11 items-center justify-center rounded-lg text-slate-400 transition-colors duration-200 hover:bg-cyan-400/5 hover:text-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 motion-reduce:transition-none'

export default function Projects() {
  const headingId = useId()

  return (
    <section
      id="projects"
      aria-labelledby={headingId}
      className="scroll-mt-16 bg-slate-950 py-20 text-slate-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-mono text-xs font-medium tracking-widest text-cyan-400 sm:text-sm">
            {'// FEATURED WORK'}
          </p>
          <h2 id={headingId} className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projects &amp; Case Studies
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            A selection of projects exploring algorithms, practical applications, and modern web development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, title, description, techStack, githubUrl, liveUrl }) => (
            <article
              key={id}
              className="group flex min-w-0 flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <FolderGit2 size={32} className="shrink-0 text-cyan-400" aria-hidden="true" />
                <div className="flex items-center gap-1">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} source on GitHub (opens in a new tab)`}
                    className={actionClassName}
                  >
                    <Github size={20} aria-hidden="true" />
                  </a>
                  {liveUrl?.trim() && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${title} live demo (opens in a new tab)`}
                      className={actionClassName}
                    >
                      <ExternalLink size={20} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              <h3 dir="auto" className="text-xl font-bold text-slate-100 transition-colors group-hover:text-cyan-400 motion-reduce:transition-none">
                {title}
              </h3>
              <p dir="auto" className="my-4 text-sm leading-relaxed text-slate-400">
                {description}
              </p>

              <ul aria-label={`${title} technologies`} className="mt-auto flex flex-wrap gap-2 border-t border-slate-800/60 pt-4">
                {techStack.map((technology) => (
                  <li key={technology} className="rounded-md bg-cyan-950/40 px-2.5 py-1 font-mono text-xs text-cyan-300">
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
