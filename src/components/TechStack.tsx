import { useState } from 'react'
import { BrainCircuit, Cloud, LayoutTemplate, type LucideIcon } from 'lucide-react'
import { stack, type StackCategory } from '../data/profile'
import { Reveal, Section } from './ui'

const ICONS: Record<string, LucideIcon> = {
  ai: BrainCircuit,
  backend: Cloud,
  frontend: LayoutTemplate,
}

const ACCENTS: Record<StackCategory['accent'], { text: string; border: string; bg: string; dot: string }> = {
  cyan: {
    text: 'text-accent-cyan',
    border: 'hover:border-accent-cyan/40',
    bg: 'bg-accent-cyan/10',
    dot: 'bg-accent-cyan',
  },
  violet: {
    text: 'text-accent-violet',
    border: 'hover:border-accent-violet/40',
    bg: 'bg-accent-violet/10',
    dot: 'bg-accent-violet',
  },
  emerald: {
    text: 'text-accent-emerald',
    border: 'hover:border-accent-emerald/40',
    bg: 'bg-accent-emerald/10',
    dot: 'bg-accent-emerald',
  },
}

export default function TechStack() {
  const [filter, setFilter] = useState<string>('all')
  const visible = filter === 'all' ? stack : stack.filter((c) => c.id === filter)

  return (
    <Section
      id="stack"
      eyebrow="Tech Stack"
      title={
        <>
          Tools I use to build <span className="text-gradient">intelligent systems</span>
        </>
      }
      description="From agent graphs and vector retrieval down to the cloud infrastructure and UI that ship them."
    >
      <Reveal className="mb-8 flex flex-wrap gap-2">
        {[{ id: 'all', title: 'All' }, ...stack].map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              filter === c.id
                ? 'border-accent-cyan/50 bg-accent-cyan/10 text-accent-cyan'
                : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200'
            }`}
          >
            {c.title}
          </button>
        ))}
      </Reveal>

      <div className={`grid gap-5 ${visible.length > 1 ? 'lg:grid-cols-3' : ''}`}>
        {visible.map((cat, i) => {
          const Icon = ICONS[cat.id]
          const a = ACCENTS[cat.accent]
          return (
            <Reveal key={cat.id} delay={i * 100}>
              <div className={`card h-full p-6 ${a.border}`}>
                <div className="mb-6 flex items-center gap-3">
                  <div className={`grid h-11 w-11 place-items-center rounded-xl ${a.bg} ${a.text}`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{cat.title}</h3>
                    <p className="text-xs text-slate-500">{cat.subtitle}</p>
                  </div>
                </div>
                <ul className={`grid gap-2.5 ${visible.length === 1 ? 'sm:grid-cols-2 lg:grid-cols-3' : ''}`}>
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="group flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.015] px-3.5 py-2.5 transition hover:border-white/15 hover:bg-white/[0.04]"
                    >
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${a.dot} opacity-60 transition group-hover:opacity-100 group-hover:shadow-[0_0_10px_currentColor]`}
                      />
                      <span className="text-sm font-medium text-slate-200">{item.name}</span>
                      <span className="ml-auto hidden text-right text-xs text-slate-500 sm:inline">{item.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
