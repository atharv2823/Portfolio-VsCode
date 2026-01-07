import React from 'react';
import { Linkedin, MapPin, Briefcase, GraduationCap, Award, ExternalLink, Mail, Phone } from 'lucide-react';

const LinkedInPanel: React.FC = () => {
  const profileData = {
    name: "Atharva Neware",
    title: "Full Stack Developer & AI Enthusiast",
    location: "Mumbai, Maharashtra, India",
    summary: "Passionate full-stack developer with expertise in modern web technologies, AI integration, and creating innovative solutions. Experienced in React, Node.js, Python, and cloud technologies.",
    experience: [
      {
        title: "Full Stack Developer",
        company: "Freelance",
        duration: "2023 - Present",
        description: "Developing modern web applications using React, Node.js, and cloud technologies. Specializing in AI-powered applications and responsive design."
      },
      {
        title: "Frontend Developer",
        company: "Tech Startup",
        duration: "2022 - 2023",
        description: "Built responsive user interfaces and implemented complex state management solutions using React and Redux."
      }
    ],
    education: [
      {
        degree: "Bachelor of Technology in Computer Science",
        school: "University of Mumbai",
        year: "2020 - 2024",
        description: "Specialized in software engineering and artificial intelligence."
      }
    ],
    skills: ["React", "Node.js", "Python", "TypeScript", "MongoDB", "AWS", "Docker", "Git"],
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
    <div className="w-80 flex-shrink-0 bg-[var(--bg-sidebar)] border-r border-[var(--border)] h-full overflow-y-auto theme-transition">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Linkedin size={20} className="text-blue-500" />
            LinkedIn Profile
          </h2>
          <button className="text-gray-400 hover:text-white p-1">
            <ExternalLink size={16} />
          </button>
        </div>

        {/* Profile Header */}
        <div className="bg-[#2d2d30] rounded-lg p-4 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              AN
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">{profileData.name}</h3>
              <p className="text-blue-400 text-sm mb-2">{profileData.title}</p>
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin size={14} className="mr-1" />
                {profileData.location}
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-4 leading-relaxed">{profileData.summary}</p>
        </div>

        {/* Experience */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Briefcase size={16} />
            Experience
          </h4>
          <div className="space-y-4">
            {profileData.experience.map((exp, index) => (
              <div key={index} className="bg-[#2d2d30] rounded-lg p-4">
                <h5 className="text-white font-medium">{exp.title}</h5>
                <p className="text-blue-400 text-sm mb-2">{exp.company}</p>
                <p className="text-gray-400 text-xs mb-2">{exp.duration}</p>
                <p className="text-gray-300 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <GraduationCap size={16} />
            Education
          </h4>
          <div className="space-y-4">
            {profileData.education.map((edu, index) => (
              <div key={index} className="bg-[#2d2d30] rounded-lg p-4">
                <h5 className="text-white font-medium">{edu.degree}</h5>
                <p className="text-blue-400 text-sm mb-2">{edu.school}</p>
                <p className="text-gray-400 text-xs mb-2">{edu.year}</p>
                <p className="text-gray-300 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {profileData.skills.map((skill, index) => (
              <span key={index} className="bg-[#007acc] text-white px-3 py-1 rounded-full text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Award size={16} />
            Certifications
          </h4>
          <div className="space-y-2">
            {profileData.certifications.map((cert, index) => (
              <div key={index} className="bg-[#2d2d30] rounded-lg p-3">
                <p className="text-gray-300 text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail size={16} />
              <span className="text-sm">{profileData.contact.email}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone size={16} />
              <span className="text-sm">{profileData.contact.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Linkedin size={16} />
              <span className="text-sm">{profileData.contact.linkedin}</span>
            </div>
          </div>
        </div>

        {/* Connect Button */}
        <button className="w-full bg-[#007acc] hover:bg-[#0056b3] text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
          <Linkedin size={16} />
          Connect on LinkedIn
        </button>
      </div>
    </div>
  );
};

export default LinkedInPanel;