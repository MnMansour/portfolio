import { useEffect, useState } from 'react'
import { ArrowRight, MapPin, Sparkles } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon } from './ui'

const ROLES = ['Agentic AI Systems', 'LLM Orchestration', 'RAG Pipelines', 'Cloud-Scale Backends']

/** Cycles through ROLES with a typewriter effect. */
function useTypewriter(words: string[], speed = 70, pause = 1600) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
      return
    }
    const t = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? speed / 2 : speed,
    )
    return () => clearTimeout(t)
  }, [text, deleting, index, words, speed, pause])

  return text
}

const TERMINAL_LINES = [
  { prompt: '$', text: 'agent.invoke("triage incident #4821")', color: 'text-slate-200' },
  { prompt: '→', text: 'classify: db_connection_pool_exhausted', color: 'text-accent-violet' },
  { prompt: '→', text: 'rag.search(runbooks) · 3 hits · 0.91', color: 'text-accent-cyan' },
  { prompt: '→', text: 'mcp.call("scale_service", {replicas: 6})', color: 'text-amber-300' },
  { prompt: '✓', text: 'resolved · traced in langfuse', color: 'text-accent-emerald' },
]

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section id="top" className="container-page relative flex min-h-screen items-center pb-20 pt-28">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div className="animate-[fadeIn_0.8s_ease]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-emerald/25 bg-accent-emerald/[0.07] px-3 py-1.5 text-xs font-medium text-accent-emerald">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
            </span>
            Open to {profile.openTo} roles
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-5 font-mono text-lg text-slate-300 sm:text-xl">
            {profile.yearsExperience} yrs fullstack <span className="text-slate-500">→</span>{' '}
            <span className="text-accent-cyan">{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-2 translate-y-0.5 animate-blink bg-accent-cyan" />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">{profile.tagline}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Sparkles size={15} className="text-accent-violet" /> {profile.title}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-accent-cyan" /> {profile.location}
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn-primary">
              <GithubIcon className="h-4 w-4" /> View GitHub
            </a>
            <a href="#contact" className="btn-ghost group">
              Contact Me <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/[0.06] pt-8">
            {[
              [profile.yearsExperience, 'Years shipping'],
              ['7', 'Companies'],
              ['AI', 'Agentic focus'],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="text-2xl font-bold text-slate-50 sm:text-3xl">{v}</dd>
                <dd className="mt-1 text-xs uppercase tracking-wider text-slate-500">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Agent terminal visual */}
        <div className="relative hidden animate-float lg:block">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent-cyan/20 via-transparent to-accent-violet/20 blur-2xl" />
          <div className="card relative overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-amber-300/70" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
              <span className="ml-3 font-mono text-xs text-slate-500">incident-triage — langgraph</span>
            </div>
            <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed">
              {TERMINAL_LINES.map((l, i) => (
                <div
                  key={i}
                  className="flex gap-3 opacity-0 animate-[fadeIn_0.5s_ease_forwards]"
                  style={{ animationDelay: `${400 + i * 450}ms` }}
                >
                  <span className="select-none text-slate-600">{l.prompt}</span>
                  <span className={l.color}>{l.text}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 border-t border-white/[0.06] text-center font-mono text-[11px] text-slate-500">
              <div className="border-r border-white/[0.06] py-3">
                <span className="block text-sm text-accent-cyan">RAG</span>hybrid search
              </div>
              <div className="border-r border-white/[0.06] py-3">
                <span className="block text-sm text-accent-violet">MCP</span>tool calls
              </div>
              <div className="py-3">
                <span className="block text-sm text-accent-emerald">HITL</span>approval
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
