import { useState, type FormEvent } from 'react'
import { Check, Copy, Mail, Send } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon, Reveal, Section } from './ui'

// GitHub Pages is static, so the form either posts to Formspree (if
// VITE_FORMSPREE_ID is set at build time) or falls back to opening a mailto: draft.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [copied, setCopied] = useState(false)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio contact from ${data.get('name')}`)
      const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`)
      window.location.href = `mailto:${profile.links.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.links.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const input =
    'w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 transition focus:border-accent-cyan/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan/20'

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's build something <span className="text-gradient">autonomous</span>
        </>
      }
      description="Hiring for a Senior AI/Agentic or Fullstack role, or want to talk LangGraph, MCP and RAG in production? My inbox is open."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <Reveal className="space-y-4">
          <div className="card p-6">
            <div className="flex items-center gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent-cyan/10 text-accent-cyan">
                <Mail size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-wider text-slate-500">Email</p>
                <a
                  href={`mailto:${profile.links.email}`}
                  className="block truncate font-medium text-slate-100 hover:text-accent-cyan"
                >
                  {profile.links.email}
                </a>
              </div>
              <button
                onClick={copyEmail}
                aria-label="Copy email"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:border-accent-cyan/40 hover:text-white"
              >
                {copied ? <Check size={16} className="text-accent-emerald" /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card card-hover flex items-center gap-4 p-6"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-sky-500/10 text-sky-400">
              <LinkedinIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">LinkedIn</p>
              <p className="font-medium text-slate-100">Connect with me</p>
            </div>
          </a>

          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="card card-hover flex items-center gap-4 p-6"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.06] text-slate-100">
              <GithubIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">GitHub</p>
              <p className="font-medium text-slate-100">Browse my code</p>
            </div>
          </a>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={onSubmit} className="card space-y-4 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-slate-400">Name</span>
                <input name="name" required autoComplete="name" placeholder="Jane Doe" className={input} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-slate-400">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@company.com"
                  className={input}
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-slate-400">Message</span>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about the role or project…"
                className={`${input} resize-none`}
              />
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
                <Send size={16} /> {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              {status === 'sent' && <p className="text-sm text-accent-emerald">Thanks — I'll get back to you soon.</p>}
              {status === 'error' && (
                <p className="text-sm text-red-400">Something went wrong. Please email me directly.</p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
