
import React from 'react';
import { FileText, FileJson, FileCode, Terminal as TerminalIcon } from 'lucide-react';
import { PortfolioFile } from './types';

export const THEMES = [
  { id: 'dark', name: 'Dark (Default)', color: '#1e1e1e' },
  { id: 'light', name: 'Light', color: '#ffffff' },
  { id: 'monokai', name: 'Monokai', color: '#272822' },
];

export const FILES: PortfolioFile[] = [
  // use warn for yellow color and for switch compnay 
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
    items: [ "Next.js","React", "Tailwind", "HTML","CSS","Figma"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Supabase","Prisma"]
  },
  {
    category: "Infrastructure",
    items: ["GitHub", "Git", "AWS", "Netlify", "Vercel"]
  },
  {
  category: "Other",
  items:["Word","Excel","Power point"]
  }
];`
  },
  {
    id: 'experience.log',
    name: 'experience.log',
    type: 'log',
    icon: 'log',
    content: `[2025-01-08] INFO: Joined 'Procohat Technologies Pvt Ltd' as Full Stack Developer Intern.
[2025-02-28] DEBUG: Building the Full stack application using Next.js and Node.js.
[2025-06-16] INFO: working as the Trainee .
[2024-02-14] INFO: Build Nxtwknd Organizer and Nxtexpo Platform using Next.js and Node.js.`
  },
  {
    id: 'certifications.json',
    name: 'certifications.json',
    type: 'json',
    icon: 'json',
    content: `[
  {
    "name": "Full stack Developer ",
    "issuer": "Road To Code (RTC)",
    "date": "2024-07",
    "credentialUrl": "https://www.roadtocode.org/"
  },
  {
    "name": "Node js Backend Developer",
    "issuer": "Udemy",
    "date": "2025-05",
    "credentialUrl": "https://www.udemy.com/certificate/UC-1c524742-cad3-4325-bff3-a3505d009bb1/"
  },
  {
    "name": "Meta Frontend Developer",
    "issuer": "Meta",
    "date": "2022-08",
    "credentialUrl": "https://www.coursera.org/professional-certificates/meta-front-end-developer"
  }
]`
  }
];

export const FileIconMap: Record<string, React.ReactNode> = {
  md: <FileText size={16} className="text-blue-400" />,
  json: <FileJson size={16} className="text-yellow-400" />,
  ts: <FileCode size={16} className="text-blue-500" />,
  log: <TerminalIcon size={16} className="text-gray-400" />,
};
