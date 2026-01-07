
import React from 'react';
import { ExternalLink, Play, Github } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  tech: string[];
  status: string;
  demoUrl?: string;
  videoUrl?: string;
}

interface Props {
  content: string;
}

const ProjectPreview: React.FC<Props> = ({ content }) => {
  let projects: Project[] = [];
  try {
    projects = JSON.parse(content);
  } catch (e) {
    return <div className="p-8 text-red-500">Error parsing projects data.</div>;
  }

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-[var(--bg-sidebar)] border border-[var(--border)] rounded-lg p-6 flex flex-col gap-4 shadow-lg hover:border-[var(--accent)] transition-all">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
            <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-[var(--accent)] text-white rounded">
              {project.status}
            </span>
          </div>
          
          <p className="text-[var(--text-main)] text-sm leading-relaxed flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-[11px] bg-[var(--bg-activity)] px-2 py-1 rounded text-[var(--text-muted)]">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-2">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[var(--accent)] hover:opacity-90 text-white px-4 py-2 rounded text-sm font-medium transition-opacity"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            {project.videoUrl && (
              <a 
                href={project.videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-[var(--border)] hover:bg-[var(--bg-activity)] text-[var(--text-main)] px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                <Play size={16} /> Walkthrough
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPreview;
