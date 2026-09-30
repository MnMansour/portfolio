import { useState } from 'react'
import { ArrowUpRight, Briefcase, ChevronDown, MapPin } from 'lucide-react'
import { journey } from '../data/profile'
import { Reveal, Section } from './ui'

export default function Timeline() {
  const [open, setOpen] = useState(0)

  return (
    <Section
      id="journey"
      eyebrow="Professional Journey"
      title={
        <>
          8+ years, from <span className="text-gradient">fullstack to agentic</span>
        </>
      }
      description="From Stockholm startups to Helsinki consultancies, SaaS and media. Click a role to expand the highlights."
    >
      {/* Glowing rail drawn via ::before so the <ol> only contains <li> children */}
      <ol className="relative ml-3 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-gradient-to-b before:from-accent-cyan before:via-accent-violet before:to-white/5 sm:ml-5">
        {journey.map((role, i) => {
          const expandable = role.achievements.length > 0 || role.tags.length > 0 || !!role.links?.length
          const isOpen = expandable && open === i
          return (
            <li key={role.company} className="relative pb-10 pl-8 last:pb-0 sm:pl-12">
              <span
                className={`absolute -left-[9px] top-6 grid h-[18px] w-[18px] place-items-center rounded-full border-2 transition ${
                  isOpen ? 'border-accent-cyan bg-ink-950 shadow-glow' : 'border-white/20 bg-ink-900'
                }`}
              >
                {role.current && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-cyan" />}
              </span>

              <Reveal delay={(i % 3) * 80}>
                <div
                  className={`card overflow-hidden ${isOpen ? 'border-accent-cyan/25 bg-white/[0.035]' : 'hover:border-white/15'}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    disabled={!expandable}
                    aria-expanded={expandable ? isOpen : undefined}
                    className="flex w-full items-start gap-4 p-5 text-left disabled:cursor-default sm:p-6"
                  >
                    <div className="hidden h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.04] text-accent-cyan sm:grid">
                      <Briefcase size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-lg font-semibold">{role.company}</h3>
                        <span
                          className={`rounded-full px-2 py-0.5 font-mono text-[11px] ${
                            role.current ? 'bg-accent-emerald/10 text-accent-emerald' : 'bg-white/5 text-slate-400'
                          }`}
                        >
                          {role.period}
                        </span>
                      </div>
                      <p className="mt-0.5 flex flex-wrap items-center gap-x-3 text-sm text-accent-cyan/90">
                        {role.role}
                        {role.location && (
                          <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                            <MapPin size={12} /> {role.location}
                          </span>
                        )}
                      </p>
                      <p className="mt-2 text-sm text-slate-400">{role.summary}</p>
                    </div>
                    {expandable && (
                      <ChevronDown
                        size={20}
                        className={`mt-1 shrink-0 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent-cyan' : ''}`}
                      />
                    )}
                  </button>

                  {expandable && (
                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/[0.06] px-5 pb-6 pt-5 sm:px-6 sm:pl-[5.25rem]">
                          <ul className="space-y-2.5 empty:hidden">
                            {role.achievements.map((a) => (
                              <li key={a} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-violet" />
                                {a}
                              </li>
                            ))}
                          </ul>
                          {role.tags.length > 0 && (
                            <div className="mt-5 flex flex-wrap gap-2">
                              {role.tags.map((t) => (
                                <span key={t} className="tag">
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                          {role.links && (
                            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                              {role.links.map((l) => (
                                <a
                                  key={l.href}
                                  href={l.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1 text-sm text-accent-cyan transition hover:text-white"
                                >
                                  {l.label} <ArrowUpRight size={14} />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
