import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon } from './ui'

const NAV = [
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav item for the section currently in view
  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector(n.href)).filter(Boolean) as Element[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/[0.06] bg-ink-950/75 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm font-semibold text-slate-100">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan transition group-hover:shadow-glow">
            M
          </span>
          <span>
            {profile.shortName}
            <span className="text-accent-cyan">.dev</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  active === n.href ? 'text-accent-cyan' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-300 transition hover:border-accent-cyan/40 hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </li>
        </ul>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl md:hidden">
          <ul className="container-page flex flex-col py-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-slate-300 hover:bg-white/[0.04] hover:text-white"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
