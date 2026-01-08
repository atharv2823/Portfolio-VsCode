import React, { useState } from 'react';
import { Linkedin, MapPin, Briefcase, GraduationCap, Award, ExternalLink, Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react';

const LinkedInPanel: React.FC = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const profileData = {
    name: "Atharva Neware",
    title: "Full Stack Developer",
    location: "Nagpur, Maharashtra, India",
    summary: "Passionate full-stack developer with expertise in modern web technologies, AI integration, and creating innovative solutions. Experienced in React, Node.js, Python, and cloud technologies.",
    experience: [
      {
        title: "Full Stack Developer",
        company: "Procohat Technologies Pvt Ltd",
        duration: "2025 - Present",
        description: "Developing modern web applications using React, Node.js, and cloud technologies. Specializing in AI-powered applications and responsive design."
      },
      {
        title: "Full Stack Developer",
        company: "Procohat Technologies Pvt Ltd",
        duration: "2025 - present",
        description: "Built responsive user interfaces and implemented complex state management solutions using React and Redux."
      }
    ],
    education: [
      {
        degree: "Bachelor of Technology in Computer Science",
        school: "Rashtrasant Tukdoji Maharaj Nagpur University , Nagpur",
        year: "2020 - 2023",
        description: "Done the Graduation in Computer Science."
      },
      {
        degree: "Masters Of Computer Applications (MCA)",
        school: "GH Raisoni Amravati University , Amravati",
        year: "2023 - 2025",
        description: "Specialized in software engineering and artificial intelligence."
      }
    ],
    skills: ["React.js","Next.js", "Node.js", "Python", "TypeScript", "MongoDB", "AWS", "Docker", "Git"],
    certifications: [
      "AWS Certified Developer",
      "Google Cloud Professional",
      "React Developer Certification"
    ],
    contact: {
      email: "atharva.neware@example.com",
      phone: "+91 98765 43210",
      linkedin: "linkedin.com/in/atharvaneware",
      github: "github.com/atharvaneware"
    }
  };

  return (
    <div className="w-80 flex-shrink-0 bg-[var(--bg-sidebar)] border-r border-[var(--border)] h-full overflow-y-auto theme-transition custom-scrollbar shadow-xl">
      <div className="flex flex-col">
        {/* Top Navigation Bar (LinkedIn Style) */}
        <div className="sticky top-0 z-10 bg-[var(--bg-sidebar)] border-b border-[var(--border)] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-[#0a66c2] p-1 rounded">
              <Linkedin size={18} className="text-white" />
            </div>
            <span className="text-sm font-bold text-[var(--text-main)]">LinkedIn</span>
          </div>
          <button className="text-[var(--text-muted)] hover:text-[var(--text-main)] p-1 transition-colors">
            <ExternalLink size={16} />
          </button>
        </div>

        {/* Profile Card */}
        <div className="relative mb-4 bg-[var(--bg-editor)] border-b border-[var(--border)]">
          {/* Cover Image Placeholder */}
          <div className="h-20 w-full bg-gradient-to-r from-[#0a66c2] to-[#004182]"></div>
          
          <div className="px-4 pb-4">
            {/* Avatar - Overlapping Cover */}
            <div className="relative -mt-10 mb-2">
              <div className="w-20 h-20 bg-[var(--bg-editor)] p-1 rounded-full shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl border-2 border-[var(--border)]">
                  AN
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold text-[var(--text-main)] leading-tight">{profileData.name}</h3>
              <p className="text-sm text-[var(--text-main)] mt-1">{profileData.title}</p>
              <div className="flex items-center text-[var(--text-muted)] text-xs mt-2">
                <MapPin size={12} className="mr-1" />
                {profileData.location}
              </div>
              <div className="flex items-center gap-2 mt-3">
                <button className="bg-[#0a66c2] hover:bg-[#004182] text-white text-xs font-semibold py-1.5 px-4 rounded-full transition-colors flex items-center gap-1.5">
                  Connect
                </button>
                <button className="border border-[#0a66c2] text-[#0a66c2] hover:bg-[#0a66c2]/10 text-xs font-semibold py-1.5 px-4 rounded-full transition-colors">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="px-4 py-4 mb-4 bg-[var(--bg-sidebar)] border-b border-[var(--border)]">
          <h4 className="text-[var(--text-main)] font-semibold text-sm mb-2">About</h4>
          <p className="text-[var(--text-muted)] text-xs leading-relaxed line-clamp-4 hover:line-clamp-none transition-all cursor-pointer">
            {profileData.summary}
          </p>
        </div>

        {/* Experience Section */}
        <div className="px-4 py-4 mb-4 bg-[var(--bg-sidebar)] border-b border-[var(--border)]">
          <h4 className="text-[var(--text-main)] font-semibold text-sm mb-4 flex items-center gap-2">
            Experience
          </h4>
          <div className="space-y-6">
            {profileData.experience.map((exp, index) => (
              <div key={index} className="flex gap-3">
                <div className="w-10 h-10 bg-[var(--bg-editor)] rounded flex items-center justify-center border border-[var(--border)] flex-shrink-0">
                  <Briefcase size={20} className="text-[var(--text-muted)]" />
                </div>
                <div className="flex-1">
                  <h5 className="text-[var(--text-main)] text-sm font-bold">{exp.title}</h5>
                  <p className="text-[var(--text-main)] text-xs">{exp.company}</p>
                  <p className="text-[var(--text-muted)] text-[10px] mt-0.5">{exp.duration}</p>
                  <p className="text-[var(--text-muted)] text-xs mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="px-4 py-4 mb-4 bg-[var(--bg-sidebar)] border-b border-[var(--border)]">
          <h4 className="text-[var(--text-main)] font-semibold text-sm mb-4 flex items-center gap-2">
            Education
          </h4>
          <div className="space-y-6">
            {profileData.education.map((edu, index) => (
              <div key={index} className="flex gap-3">
                <div className="w-10 h-10 bg-[var(--bg-editor)] rounded flex items-center justify-center border border-[var(--border)] flex-shrink-0">
                  <GraduationCap size={20} className="text-[var(--text-muted)]" />
                </div>
                <div className="flex-1">
                  <h5 className="text-[var(--text-main)] text-sm font-bold">{edu.degree}</h5>
                  <p className="text-[var(--text-main)] text-xs">{edu.school}</p>
                  <p className="text-[var(--text-muted)] text-[10px] mt-0.5">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="px-4 py-4 mb-4 bg-[var(--bg-sidebar)] border-b border-[var(--border)]">
          <h4 className="text-[var(--text-main)] font-semibold text-sm mb-3">Skills</h4>
          <div className="space-y-3">
            {(showAllSkills ? profileData.skills : profileData.skills.slice(0, 3)).map((skill, index) => (
              <div key={index} className="border-b border-[var(--border)] pb-2 last:border-0">
                <p className="text-[var(--text-main)] text-xs font-semibold">{skill}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Award size={10} className="text-[#0a66c2]" />
                  <span className="text-[10px] text-[var(--text-muted)]">Endorsed by 10+ colleagues</span>
                </div>
              </div>
            ))}
            <button 
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="w-full flex items-center justify-center gap-1 text-sm font-semibold text-[var(--text-muted)] hover:text-[#0a66c2] transition-colors mt-2"
            >
              {showAllSkills ? (
                <>Show less <ChevronUp size={14} /></>
              ) : (
                <>Show all {profileData.skills.length} skills <ChevronDown size={14} /></>
              )}
            </button>
          </div>
        </div>

        {/* Contact info (Footer-ish) */}
        <div className="px-4 py-6 bg-[var(--bg-editor)]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer">
              <Mail size={16} />
              <span className="text-xs">{profileData.contact.email}</span>
            </div>
            <div className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer">
              <Linkedin size={16} />
              <span className="text-xs">{profileData.contact.linkedin}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInPanel;