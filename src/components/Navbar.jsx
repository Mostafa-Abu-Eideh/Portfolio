import { useId, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const linkClassName =
  'rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 motion-reduce:transition-none'

const resumeClassName =
  'inline-flex items-center justify-center rounded-lg border border-cyan-400/50 px-4 py-2 text-sm font-semibold text-cyan-400 transition-colors duration-200 hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 motion-reduce:transition-none'

// Place your CV in public/resume.pdf, or supply a custom resumeUrl.
export default function Navbar({ resumeUrl = `${import.meta.env.BASE_URL}resume.pdf` }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const mobileMenuId = useId()
  const toggleRef = useRef(null)

  function handleKeyDown(event) {
    if (event.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false)
      toggleRef.current?.focus()
    }
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md"
      onKeyDown={handleKeyDown}
    >
      <nav aria-label="Main navigation" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[calc(4rem-1px)] items-center justify-between gap-6">
          <a
            href="#"
            className="rounded-md text-xl font-bold tracking-tight text-white transition-colors duration-200 hover:text-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 motion-reduce:transition-none"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-4 md:flex">
            {links.map(({ href, label }) => (
              <a key={href} href={href} className={linkClassName}>
                {label}
              </a>
            ))}
            <a href={resumeUrl} className={resumeClassName}>
              Resume
            </a>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-slate-300 transition-colors duration-200 hover:bg-slate-800/70 hover:text-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 motion-reduce:transition-none md:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls={mobileMenuId}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        <div
          id={mobileMenuId}
          inert={!isMenuOpen}
          aria-hidden={!isMenuOpen}
          className={`grid transition-[grid-template-rows,opacity] duration-200 ease-in-out motion-reduce:transition-none md:hidden ${
            isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-2 border-t border-slate-800 py-4">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={`${linkClassName} flex min-h-11 items-center hover:bg-slate-800/50`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <a href={resumeUrl} className={`${resumeClassName} mt-2 min-h-11`} onClick={() => setIsMenuOpen(false)}>
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
