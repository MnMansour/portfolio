import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { projects, type Project } from '../data/profile'
import { GithubIcon, Reveal, Section } from './ui'

const PIPELINE = [
  { label: 'Logs', sub: 'ingest' },
  { label: 'Classify', sub: 'LangGraph' },
  { label: 'Hybrid RAG', sub: 'pgvector' },
  { label: 'Plan', sub: 'LLM' },
  { label: 'Remediate', sub: 'FastMCP' },
  { label: 'Verify', sub: 'Langfuse' },
]

/** Animated architecture strip for the featured project. */
function ArchitectureFlow() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-ink-950/60 p-5">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">Agent graph</p>
      <ol className="flex flex-wrap items-center gap-y-3">
        {PIPELINE.map((step, i) => (
          <li key={step.label} className="flex items-center">
            <div className="group rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center transition hover:border-accent-cyan/50 hover:shadow-glow">
              <div className="text-xs font-semibold text-slate-100">{step.label}</div>
              <div className="font-mono text-[10px] text-slate-500 group-hover:text-accent-cyan">{step.sub}</div>
            </div>
            {i < PIPELINE.length - 1 && (
              <svg width="28" height="10" className="mx-1 shrink-0 text-accent-cyan/60" aria-hidden>
                <line
                  x1="0"
                  y1="5"
                  x2="22"
                  y2="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="animate-flow"
                />
                <path d="M22 1 L27 5 L22 9" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noreferrer" className="btn-ghost !py-2.5">
          <GithubIcon className="h-4 w-4" /> Source
        </a>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noreferrer" className="btn-ghost !py-2.5">
          Live demo <ArrowUpRight size={16} />
        </a>
      )}
    </div>
  )
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 transition duration-500 hover:border-accent-cyan/30 sm:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-cyan/10 blur-3xl transition duration-700 group-hover:bg-accent-cyan/20" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-violet/10 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-violet">{project.kicker}</p>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h3>
            <p className="mt-4 leading-relaxed text-slate-400">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <ProjectLinks project={project} />
            </div>
          </div>

          <div className="space-y-5">
            <ArchitectureFlow />
            <ul className="space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-emerald" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay}>
      <article className="card card-hover flex h-full flex-col p-6 sm:p-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">{project.kicker}</p>
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>
        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-slate-300">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-8">
          <ProjectLinks project={project} />
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title={
        <>
          Agents that <span className="text-gradient">do real work</span>
        </>
      }
      description="Production-minded AI systems: observable, testable, and safe to run against real infrastructure."
    >
      <div className="space-y-6">
        {featured.map((p) => (
          <FeaturedProject key={p.title} project={p} />
        ))}
        <div className={`grid gap-6 ${rest.length > 1 ? 'md:grid-cols-2' : ''}`}>
          {rest.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 100} />
          ))}
        </div>
      </div>
    </Section>
  )
}
