
export type FileType = 'markdown' | 'json' | 'typescript' | 'log';

export interface PortfolioFile {
  id: string;
  name: string;
  type: FileType;
  content: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
}

export interface Skill {
  category: string;
  items: string[];
}
