
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
  selectedProject?: string | null;
}

const ProjectPreview: React.FC<Props> = ({ content, selectedProject }) => {
  let projects: Project[] = [];
  try {
    projects = JSON.parse(content);
  } catch (e) {
    return <div className="p-8 text-red-500">Error parsing projects data.</div>;
  }

  // Filter if a specific project is selected
  if (selectedProject) {
    const project = projects.find(p => p.name === selectedProject);
    if (!project) return <div className="p-8 text-[var(--text-muted)]">Project not found.</div>;

    return (
      <div className="h-full p-12 max-w-4xl mx-auto flex flex-col gap-8 animate-in fade-in duration-500">
        <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold text-white tracking-tight">{project.name}</h1>
            <span className="text-xs uppercase font-bold px-3 py-1 bg-[var(--accent)] text-white rounded-full tracking-wider shadow-lg shadow-[var(--accent)]/20">
              {project.status}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-sm border border-[var(--border)] px-3 py-1 rounded-full text-[var(--text-muted)] bg-[var(--bg-activity)]">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <p className="text-lg text-[var(--text-main)] leading-8">
            {project.description}
          </p>
          <div className="mt-8 p-6 bg-[var(--bg-sidebar)] rounded-lg border border-[var(--border)] text-[var(--text-muted)] italic">
            This represents a detailed view of the project. In a real application, this would contain a full case study, architecture diagrams, and more extensive documentation about {project.name}.
          </div>
        </div>

        <div className="flex gap-4 pt-8 border-t border-[var(--border)]">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[var(--accent)] hover:opacity-90 text-white px-6 py-3 rounded-md text-base font-semibold transition-all shadow-lg shadow-[var(--accent)]/20 hover:-translate-y-1"
            >
              <ExternalLink size={20} /> View Live Demo
            </a>
          )}
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[var(--border)] hover:border-[var(--text-main)] text-[var(--text-main)] px-6 py-3 rounded-md text-base font-semibold transition-all hover:bg-[var(--bg-activity)] hover:-translate-y-1"
            >
              <Play size={20} /> Watch Walkthrough
            </a>
          )}
        </div>
      </div>
    );
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
