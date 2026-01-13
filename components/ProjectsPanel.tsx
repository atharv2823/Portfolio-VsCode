import React from 'react';
import { FILES } from '../constants';
import { Folder } from 'lucide-react';

interface Project {
    name: string;
    description: string;
    tech: string[];
    status: string;
    demoUrl?: string;
    videoUrl?: string;
}

interface Props {
    onSelectProject: (projectName: string) => void;
}

const ProjectsPanel: React.FC<Props> = ({ onSelectProject }) => {
    const projectsFile = FILES.find(f => f.id === 'projects.json');
    let projects: Project[] = [];

    try {
        if (projectsFile) {
            projects = JSON.parse(projectsFile.content);
        }
    } catch (e) {
        console.error('Failed to parse projects');
    }

    return (
        <div className="h-full flex flex-col bg-[var(--bg-sidebar)] border-r border-[var(--border)] w-64">
            <div className="p-3 text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center justify-between">
                <span>Projects Explorer</span>
            </div>
            <div className="flex-1 overflow-y-auto">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="group px-3 py-2 cursor-pointer hover:bg-[var(--bg-activity)] transition-colors border-l-2 border-transparent hover:border-[var(--accent)]"
                        onClick={() => onSelectProject(project.name)}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <Folder size={14} className="text-[var(--accent)]" />
                            <span className="text-sm font-medium text-[var(--text-main)] group-hover:text-white transition-colors">
                                {project.name}
                            </span>
                        </div>

                        <div className="text-xs text-[var(--text-muted)] pl-6 truncate">
                            {project.status} • {project.tech[0]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPanel;
