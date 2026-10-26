import { useId } from 'react'
import { Code2, Layers, Cpu, Wrench } from 'lucide-react'
import { skills } from '../data/portfolioData'

const categoryIcons = {
  Languages: Code2,
  'Web & Frameworks': Layers,
  'Core CS': Cpu,
  'Tools & DevOps': Wrench,
}

export default function Skills() {
  const headingId = useId()

  return (
    <section
      id="skills"
      aria-labelledby={headingId}
      className="scroll-mt-16 bg-slate-950 py-20 text-slate-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-mono text-xs font-medium tracking-widest text-cyan-400 sm:text-sm">
            {'// TECHNICAL ARSENAL'}
          </p>
          <h2 id={headingId} className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills &amp; Technologies
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            The languages, tools, and foundations I use to turn ideas into working software.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ category, items }) => {
            const Icon = categoryIcons[category] ?? Code2

            return (
              <article
                key={category}
                className="min-w-0 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 transition-all duration-200 hover:border-cyan-500/40 motion-reduce:transition-none"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/5 text-cyan-400">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-slate-100">
                    {category}
                  </h3>
                </div>

                <ul aria-label={`${category} skills`} className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-slate-700/60 bg-slate-800/80 px-3 py-1.5 text-sm text-slate-200 transition-colors duration-200 hover:border-cyan-400/50 hover:text-cyan-300 motion-reduce:transition-none"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
