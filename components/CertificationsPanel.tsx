
import React from 'react';
import { FILES } from '../constants';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
    name: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
}

const CertificationsPanel: React.FC = () => {
    const certsFile = FILES.find(f => f.id === 'certifications.json');
    let certifications: Certification[] = [];

    try {
        if (certsFile) {
            certifications = JSON.parse(certsFile.content);
        }
    } catch (e) {
        console.error('Failed to parse certifications');
    }

    return (
        <div className="h-full flex flex-col bg-[var(--bg-sidebar)] border-r border-[var(--border)] w-64">
            <div className="p-3 text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center justify-between">
                <span>Certifications</span>
            </div>
            <div className="flex-1 overflow-y-auto">
                {certifications.map((cert, idx) => (
                    <div
                        key={idx}
                        className="group px-3 py-3 hover:bg-[var(--bg-activity)] transition-colors border-l-2 border-transparent hover:border-[var(--accent)] flex flex-col gap-1"
                    >
                        <div className="flex items-start gap-2">
                            <Award size={16} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-[var(--text-main)] group-hover:text-white transition-colors leading-tight">
                                {cert.name}
                            </span>
                        </div>

                        <div className="pl-6 flex flex-col gap-1">
                            <div className="text-xs text-[var(--text-muted)]">
                                {cert.issuer}
                            </div>
                            <div className="flex items-center justify-between text-[10px] text-gray-500">
                                <span>{cert.date}</span>
                                {cert.credentialUrl && (
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                        title="View Credential"
                                    >
                                        Verify <ExternalLink size={10} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {certifications.length === 0 && (
                    <div className="p-4 text-xs text-gray-500 text-center">
                        No certifications found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default CertificationsPanel;
