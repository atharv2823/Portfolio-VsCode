
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
    content: `# 👨‍💻 Atharva Neware
## Full Stack Developer • Building Modern Digital Experiences

> Turning ideas into fast, scalable, and user-focused applications.

---

## 🚀 About Me

Hey there! I'm **Atharva**, a passionate full-stack developer who enjoys crafting seamless digital experiences — from beautiful frontend interfaces to powerful backend architectures.

I love building products that are:
- ⚡ Fast
- 🎯 User-Centric
- 🔒 Secure
- 📈 Scalable
- ✨ Visually Modern

Whether it's developing a startup MVP, designing APIs, or optimizing UI performance, I enjoy transforming complex problems into elegant solutions.

---

## 🧠 Developer Philosophy

\`\`\`bash
while(alive) {
  learn();
  build();
  improve();
  repeat();
}
\`\`\`

> "Code is like humor. When you have to explain it, it’s bad."

---

## ⚡ Tech Arsenal

### Frontend
- Next.js
- React.js
- Tailwind CSS
- Framer Motion
- TypeScript / JavaScript

### Backend
- Node.js
- Express.js
- Supabase
- PostgreSQL
- REST APIs

### Tools & Workflow
- Git & GitHub
- Vercel
- Postman
- Figma
- VS Code

---

## 📊 Quick Developer Stats

| 💡 Category | 🚀 Details |
|---|---|
| Experience | 1+ Year Building Full Stack Apps |
| Location | Nagpur, India 🇮🇳 |
| Favorite Stack | Next.js + Supabase |
| Current Focus | AI Powered Web Apps |
| Learning | System Design & Scalable Architectures |
| Fun Fact | I Debug Faster at Night 🌙 |

---

## 🛠 Currently Building

- 🤖 AI Resume Builder
- 🎉 Event Discovery Platform
- 💬 Real-Time Chat Applications
- 📄 Smart PDF & Resume Tools

---

## 🎯 What Drives Me

I enjoy creating products that people genuinely use and love.
Clean UI, smooth UX, optimized performance, and meaningful interactions are the things I care about most.

Every project is an opportunity to:
- Learn something new
- Solve real-world problems
- Push creative boundaries

---

## 🌍 Beyond Coding

When I'm not coding, you'll probably find me:
- ⌨️ Exploring Mechanical Keyboards
- 🌲 Hiking & Exploring Nature
- 📖 Reading About Startups & Tech
- 🌐 Contributing to Open Source

---

## 📬 Let's Build Something Amazing

\`\`\`ts
const collaboration = true;

if (collaboration) {
  createSomethingAwesome();
}
\`\`\`
`
  },
  {
    id: 'projects.json',
    name: 'projects.json',
    type: 'json',
    icon: 'json',
    content: `[
  {
    "name": "Resume Craft AI",
    "description": "An AI based Resume Builder Platform. And Also check ATS score and also get best resume templates, do mock test according to resume.",
    "tech": ["Next.js", "Javascript","AI","Ats","React Library"],
    "status": "Deployed",
    "demoUrl": "https://resume-craft-4u.vercel.app/",
    "videoUrl": "https://youtu.be/qB1c9O6Q314"
  },
  {
    "name": "DummyDB",
    "description": "Best Toole for the Developer to create the dummy data for the Project and practice.",
    "tech": ["Next.js", "Javascript","Typescript","React Library","Tailwind Css"],
    "status": "Deployed",
    "demoUrl": "https://dummy-db-dev.vercel.app/",
    "videoUrl": "https://dummy-db-dev.vercel.app/"
  },
  {
    "name": "Paharma Lence",
    "description": "Real-time use for medical prescription reading and gives all information about the medicine and storage of medicine.", 
    "tech": ["Next.js", "Gemmini", "Language Translater"],
    "status": "Deployed",
    "demoUrl": "https://pharma-lence.vercel.app/",
    "videoUrl": "https://example.com/video2" 
  },
  {
    "name": "LinkLocker",
    "description": "This tools helps to store the usefull links and give the description for the links.",
    "tech": ["Next.js", "MongoDb", ""],
    "status": "Deployed",
    "demoUrl": "https://link-locker-web.vercel.app/",
    "videoUrl": "https://link-locker-web.vercel.app/"
  },
  {
    "name": "Hotel Management System",
    "description": "Manage Food bookings, billing for a Resturents.",
    "tech": ["Next.js", "Javascript", "Tailwind Css"],
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
    items: [ "Next.js","React.js", "Tailwind", "HTML","CSS","Figma"]
  },
  {
    category: "Backend",
    items: [ "Node.js", "Express", "PostgreSQL", "Supabase","Prisma", "Mongodb"]
  },
  {
    category: "Infrastructure",
    items: [ "GitHub", "Git", "AWS", "Vercel", "Netlify"]
  },
  {
  category: "Other",
  items:[ "Word","Excel","Powerpoint"]
  }
];`
  },
  {
    id: 'experience.log',
    name: 'experience.log',
    type: 'log',
    icon: 'log',
    content: `[2025-01-08] INFO: Joined 'Procohat Technologies Pvt Ltd' as Full Stack Developer intern. 
[2025-02-08] DEBUG: start Building the real-time project.

[2025-01-07] INFO: Joined 'Procohat Technologies Pvt Ltd' as Full Stack Developer Trainee.
[2025-01-07] DEBUG: Building the Full stack application for the organizer panel and  ticketing panel and Listing Platform and many more.

[2026-01-03] INFO: Joined 'Procohat Technologies Pvt Ltd' as Full Stack Developer.
[2026-01-03] DEBUG: start Building the Full Stack applications and many more project.
`
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
