import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './ui'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition hover:text-white"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-white"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
