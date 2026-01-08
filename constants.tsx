
import React from 'react';
import { FileText, FileJson, FileCode, Terminal as TerminalIcon } from 'lucide-react';
import { PortfolioFile } from './types';

export const THEMES = [
  { id: 'dark', name: 'Dark (Default)', color: '#1e1e1e' },
  { id: 'light', name: 'Light', color: '#ffffff' },
  { id: 'monokai', name: 'Monokai', color: '#272822' },
];

export const FILES: PortfolioFile[] = [
  {
    id: 'about.md',
    name: 'about.md',
    type: 'markdown',
    icon: 'md',
    content: `# Atharva Neware
## Full Satck Developer 

Passionate full-stack developer with 1 years of experience building end-to-end scalable web applications,from intuitive user 
interfaces to robust backend systems.

Focused on performance, clean code, and user-centric design.

### Quick Stats
- Based in: Nagpur, India
- Favorite Stack: Next.js, Node, Supabase.
- Hobbies: Mechanical Keyboards, Open Source, Hiking

"Code is like humor. When you have to explain it, it’s bad."`
  },
  {
    id: 'projects.json',
    name: 'projects.json',
    type: 'json',
    icon: 'json',
    content: `[
  {
    "name": "CloudScale AI",
    "description": "An enterprise-grade LLM orchestration platform.",
    "tech": ["Next.js", "Python", "Kubernetes"],
    "status": "Deployed",
    "demoUrl": "https://example.com/demo1",
    "videoUrl": "https://example.com/video1"
  },
  {
    "name": "EtherFlow",
    "description": "Real-time Ethereum gas price predictor and dashboard.",
    "tech": ["Web3.js", "Redis", "React"],
    "status": "Archived",
    "demoUrl": "https://example.com/demo2",
    "videoUrl": "https://example.com/video2"
  },
  {
    "name": "NexusOS",
    "description": "A browser-based operating system shell.",
    "tech": ["TypeScript", "WebAssembly", "SCSS"],
    "status": "Active",
    "demoUrl": "https://example.com/demo3",
    "videoUrl": "https://example.com/video3"
  }
]`
  },
  {
    id: 'skills.ts',
    name: 'skills.ts',
    type: 'typescript',
    icon: 'ts',
    content: `export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind", "Framer Motion"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Go", "PostgreSQL", "GraphQL"]
  },
  {
    category: "Infrastructure",
    items: ["AWS", "Docker", "CI/CD", "Terraform"]
  }
];`
  },
  {
    id: 'experience.log',
    name: 'experience.log',
    type: 'log',
    icon: 'log',
    content: `[2022-01-15] INFO: Joined 'TechVanguard' as Senior Software Engineer.
[2022-08-10] DEBUG: Refactored legacy billing system, reducing latency by 40%.
[2023-03-22] INFO: Promoted to Tech Lead for the Core Platform team.
[2023-11-05] WARN: Successfully mitigated massive DDoS attack on production.
[2024-02-14] INFO: Launched 'CloudScale' project to 10k+ beta users.`
  }
];

export const FileIconMap: Record<string, React.ReactNode> = {
  md: <FileText size={16} className="text-blue-400" />,
  json: <FileJson size={16} className="text-yellow-400" />,
  ts: <FileCode size={16} className="text-blue-500" />,
  log: <TerminalIcon size={16} className="text-gray-400" />,
};
