// Single source of truth for all portfolio content.
// Edit this file to update the site — components only render what's here.

export const profile = {
  name: 'Mohammed N Mansoor',
  shortName: 'Mansoor',
  title: 'Senior Fullstack Engineer & AI/Agentic Engineer',
  location: 'Helsinki, Finland',
  yearsExperience: '8+',
  tagline:
    'I design and ship production-grade agentic systems — LLM orchestration, RAG pipelines and MCP tooling — on top of 8+ years of battle-tested fullstack and cloud engineering.',
  openTo: 'Senior AI/Agentic Engineer · Senior Fullstack Developer',
  links: {
    github: 'https://github.com/MnMansour',
    linkedin: 'https://www.linkedin.com/in/mnmansoor/',
    email: 'mohammednmansoor@gmail.com',
  },
} as const

export type StackCategory = {
  id: string
  title: string
  subtitle: string
  accent: 'cyan' | 'violet' | 'emerald'
  items: { name: string; note: string }[]
}

export const stack: StackCategory[] = [
  {
    id: 'ai',
    title: 'AI Engine',
    subtitle: 'Agentic orchestration & retrieval',
    accent: 'violet',
    items: [
      { name: 'LangGraph', note: 'Stateful multi-agent graphs' },
      { name: 'Model Context Protocol', note: 'MCP servers & tool calling' },
      { name: 'RAG / pgvector', note: 'Hybrid semantic search' },
      { name: 'Langfuse', note: 'LLM tracing & evals' },
      { name: 'OpenAI API', note: 'Function calling, structured output' },
      { name: 'AWS Bedrock', note: 'Managed foundation models' },
      { name: 'Agent Orchestration', note: 'Planning, routing, guardrails' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Cloud',
    subtitle: 'Scalable services & data',
    accent: 'cyan',
    items: [
      { name: 'Node.js', note: 'High-throughput services' },
      { name: 'TypeScript', note: 'End-to-end type safety' },
      { name: 'PHP', note: 'Web backends & APIs' },
      { name: 'PostgreSQL / SQL', note: 'Modeling & performance' },
      { name: 'AWS', note: 'ECS · Lambda · DynamoDB' },
      { name: 'GCP', note: 'Cloud Run & managed data' },
      { name: 'Kafka', note: 'Event-driven streaming' },
      { name: 'Docker / Linux', note: 'Containers & ops' },
      { name: 'REST / GraphQL', note: 'API design' },
      { name: 'Python', note: 'AI tooling & scripting' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Fast, accessible interfaces',
    accent: 'emerald',
    items: [
      { name: 'React', note: 'Component architecture' },
      { name: 'Next.js', note: 'SSR / RSC apps' },
      { name: 'Tailwind CSS', note: 'Design systems' },
      { name: 'TypeScript', note: 'Typed UI & API contracts' },
    ],
  },
]

export type Project = {
  title: string
  kicker: string
  description: string
  highlights: string[]
  tech: string[]
  repo?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Agentic Infrastructure & Incident Triage Engine',
    kicker: 'Primary Project · AI DevOps',
    description:
      'An AI-powered DevOps & incident-management engine. It ingests server logs, reasons about the failure with a LangGraph agent, retrieves the right runbook through Hybrid RAG, and executes remediation through MCP tools — with every step traced in Langfuse.',
    highlights: [
      'LangGraph state machine: ingest → classify → retrieve → plan → remediate → verify',
      'Hybrid RAG over runbooks: pgvector embeddings + keyword (BM25) re-ranking',
      'FastMCP server exposing safe, audited remediation tools to the agent',
      'Human-in-the-loop approval gates for destructive actions',
      'End-to-end LLM observability, cost and latency tracking with Langfuse',
    ],
    tech: ['React', 'LangGraph', 'FastMCP', 'PostgreSQL', 'pgvector', 'Langfuse', 'AWS'],
    // repo: 'https://github.com/MnMansour/<repo-name>', // TODO: add once the repo is public
    featured: true,
  },
  {
    title: 'Production AI Workflows & RAG Pipeline',
    kicker: 'Enterprise · Data & Search',
    description:
      'Enterprise-grade async data processing and semantic search engine with real-time observability — built to turn large, messy document sets into reliable, queryable knowledge.',
    highlights: [
      'Async ingestion workers with retries, idempotency and back-pressure',
      'Chunking, embedding and vector indexing for low-latency semantic search',
      'Real-time tracing & quality metrics across the whole pipeline',
    ],
    tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'pgvector', 'Kafka', 'AWS Lambda', 'Langfuse'],
    // repo: 'https://github.com/MnMansour/<repo-name>', // TODO: add once the repo is public
  },
]

export type Role = {
  company: string
  role: string
  period: string
  location?: string
  summary: string
  achievements: string[]
  tags: string[]
  links?: { label: string; href: string }[]
  current?: boolean
}

// Source: LinkedIn profile. Roles without achievements render as non-expandable cards.
export const journey: Role[] = [
  {
    company: 'Vend (formerly Schibsted)',
    role: 'Senior Software Engineer',
    period: 'Aug 2023 — Present',
    current: true,
    summary: 'DRI for AI/LLM pipelines, async data processing and high-scale backend microservices.',
    achievements: [
      'Built production AI/LLM pipelines powering core product workflows',
      'Designed async data-processing systems for reliable, high-volume workloads',
      'Owned high-scale backend microservices end-to-end as DRI',
    ],
    tags: ['LLM Pipelines', 'Node.js', 'TypeScript', 'AWS', 'Microservices'],
  },
  {
    company: 'OpenNord',
    role: 'Founder · Side venture',
    period: 'May 2020 — Present',
    current: true,
    summary: 'Platform showing which Nordic companies are open for business and hiring.',
    achievements: [
      'Founded and built an online platform tracking Nordic companies still open and hiring',
      'Helps job seekers find local opportunities and showcases the resilience of the Nordic economy',
    ],
    tags: ['Founder', 'Product', 'Community'],
    links: [{ label: 'opennord.co', href: 'https://opennord.co/' }],
  },
  {
    company: 'Qvik',
    role: 'Software Engineer',
    period: 'Feb 2023 — Aug 2023',
    summary: 'Software engineer at a Helsinki digital product agency.',
    achievements: [],
    tags: [],
  },
  {
    company: 'Fixably',
    role: 'Software Developer',
    period: 'Jun 2021 — Feb 2023',
    summary: 'Software developer on a SaaS platform for repair and service businesses.',
    achievements: [],
    tags: [],
  },
  {
    company: 'Pixels Helsinki',
    role: 'Software Developer',
    period: 'Sep 2018 — Jun 2021',
    summary: 'Fullstack developer (frontend + backend) on customer projects in small, lean Agile teams.',
    achievements: [
      'Blueprint Genetics — modernized healthcare & genomics web platforms',
      'Delivered COVID-19 Virtual Booths for remote, interactive experiences',
      'Built client platforms including Talented, FITech and the WeUp Air Map',
    ],
    tags: ['JavaScript', 'React', 'PHP', 'WordPress', 'SQL', 'MongoDB', 'Docker', 'GCP'],
    links: [
      { label: 'talented.fi', href: 'https://talented.fi' },
      { label: 'fitech.io', href: 'https://fitech.io' },
      { label: 'WeUp Air Map', href: 'https://tietoa.com/artikkelit/weup-air-map/' },
    ],
  },
  {
    company: 'Digia Plc',
    role: 'Software Developer',
    period: 'Feb 2018 — Aug 2018',
    summary: 'Frontend lead on the MyHelsinki.fi city platform and an internal resource-planning tool.',
    achievements: [
      'Owned the frontend of MyHelsinki.fi in a team of 5, with great customer feedback throughout',
      'Built the frontend of an internal resource-planning tool for Digia in a team of 3',
    ],
    tags: ['JavaScript', 'React', 'Redux', 'MobX', 'GraphQL', 'Drupal 8'],
    links: [{ label: 'myhelsinki.fi', href: 'https://www.myhelsinki.fi' }],
  },
  {
    company: 'Integrify',
    role: 'Software Engineer',
    period: 'Dec 2017 — Aug 2018',
    summary: 'Consulting, talent and education company enabling integration through technology.',
    achievements: [
      'Software engineering as part of a mission to teach talented immigrants to code and connect them with developer jobs',
    ],
    tags: ['JavaScript', 'React', 'Node.js'],
  },
  {
    company: 'Globuzzer',
    role: 'Junior Full Stack Developer',
    period: 'Sep 2017 — Mar 2018',
    location: 'Stockholm, Sweden',
    summary: 'Built the Globuzzer homepage on a microservice architecture.',
    achievements: [
      'Delivered the new homepage in two months alongside the internal backend/API team',
      'Finished SkillScanner, a job-application portal',
    ],
    tags: ['React', 'Redux', 'JavaScript', 'HTML/CSS'],
  },
]
