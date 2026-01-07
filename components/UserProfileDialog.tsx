import React from 'react';
import { X, MapPin, Mail, Phone, Calendar, Code, Globe, Award, Briefcase, GraduationCap, Languages, Github, Linkedin, Twitter } from 'lucide-react';

interface UserProfileDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfileDialog: React.FC<UserProfileDialogProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const userData = {
    personal: {
      name: "Atharva Neware",
      title: "Full Stack Developer & AI Enthusiast",
      avatar: "AN",
      location: "Mumbai, Maharashtra, India",
      bio: "Passionate full-stack developer with 3+ years of experience building modern web applications. Specialized in React, Node.js, and AI integration. Love creating innovative solutions that make a difference.",
      joinDate: "January 2021",
      lastActive: "Active now"
    },
    contact: {
      email: "atharva.neware@example.com",
      phone: "+91 98765 43210",
      linkedin: "linkedin.com/in/atharvaneware",
      github: "github.com/atharvaneware",
      twitter: "@atharvaneware",
      portfolio: "atharvaneware.dev"
    },
    education: [
      {
        degree: "Bachelor of Technology in Computer Science",
        school: "University of Mumbai",
        year: "2020 - 2024",
        grade: "First Class with Distinction",
        description: "Specialized in Software Engineering, Data Structures, and Artificial Intelligence"
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        school: "Mumbai Junior College",
        year: "2018 - 2020",
        grade: "92%",
        description: "Mathematics, Physics, Chemistry, and Computer Science"
      }
    ],
    experience: [
      {
        title: "Full Stack Developer",
        company: "Freelance & Personal Projects",
        duration: "2023 - Present",
        type: "Self-Employed",
        description: "Developing modern web applications using React, Node.js, and cloud technologies. Specializing in AI-powered applications, responsive design, and performance optimization.",
        technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker"]
      },
      {
        title: "Frontend Developer",
        company: "Tech Startup",
        duration: "2022 - 2023",
        type: "Full-time",
        description: "Built responsive user interfaces and implemented complex state management solutions. Collaborated with design team to create pixel-perfect implementations.",
        technologies: ["React", "Redux", "JavaScript", "CSS", "Figma"]
      },
      {
        title: "Junior Developer",
        company: "Software Solutions Ltd",
        duration: "2021 - 2022",
        type: "Internship",
        description: "Learned industry best practices, contributed to open-source projects, and gained experience with modern development workflows.",
        technologies: ["HTML", "CSS", "JavaScript", "Git", "Agile"]
      }
    ],
    skills: {
      frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Sass"],
      backend: ["Node.js", "Express.js", "Python", "Django", "PostgreSQL", "MongoDB", "Redis"],
      cloud: ["AWS", "Vercel", "Netlify", "Docker", "Kubernetes", "CI/CD"],
      tools: ["Git", "VS Code", "Figma", "Postman", "Jest", "Webpack"],
      ai: ["OpenAI API", "TensorFlow.js", "Machine Learning", "NLP"]
    },
    languages: [
      { name: "English", level: "Native", proficiency: "Fluent" },
      { name: "Hindi", level: "Native", proficiency: "Fluent" },
      { name: "Marathi", level: "Native", proficiency: "Fluent" }
    ],
    certifications: [
      {
        name: "AWS Certified Developer - Associate",
        issuer: "Amazon Web Services",
        date: "2023",
        credentialId: "AWS-CDA-2023-001"
      },
      {
        name: "Google Cloud Professional Developer",
        issuer: "Google Cloud",
        date: "2023",
        credentialId: "GCP-PD-2023-002"
      },
      {
        name: "React Developer Certification",
        issuer: "Meta",
        date: "2022",
        credentialId: "META-REACT-2022-003"
      }
    ],
    stats: {
      projectsCompleted: 45,
      yearsExperience: 3,
      technologies: 25,
      githubRepos: 28,
      codeCommits: 1200,
      coffeeConsumed: 500
    },
    interests: ["AI & Machine Learning", "Open Source", "UI/UX Design", "Cloud Computing", "Mobile Development", "Game Development"]
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1e1e1e] rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#3e3e42]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#3e3e42]">
          <h2 className="text-2xl font-bold text-white">Developer Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 hover:bg-[#3e3e42] rounded transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Personal Info */}
          <div className="bg-[#2d2d30] rounded-lg p-6 mb-6">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-3xl">
                {userData.personal.avatar}
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-2">{userData.personal.name}</h3>
                <p className="text-blue-400 text-lg mb-3">{userData.personal.title}</p>
                <div className="flex items-center text-gray-400 mb-2">
                  <MapPin size={16} className="mr-2" />
                  {userData.personal.location}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Joined {userData.personal.joinDate}</span>
                  <span>•</span>
                  <span>{userData.personal.lastActive}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mt-4 leading-relaxed">{userData.personal.bio}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {Object.entries(userData.stats).map(([key, value]) => (
              <div key={key} className="bg-[#2d2d30] rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">{value.toLocaleString()}</div>
                <div className="text-gray-400 text-sm capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Mail size={20} />
              Contact Information
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={16} className="text-blue-400" />
                  <span>{userData.contact.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={16} className="text-green-400" />
                  <span>{userData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Globe size={16} className="text-purple-400" />
                  <span>{userData.contact.portfolio}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Linkedin size={16} className="text-blue-600" />
                  <span>{userData.contact.linkedin}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Github size={16} />
                  <span>{userData.contact.github}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Twitter size={16} className="text-blue-400" />
                  <span>{userData.contact.twitter}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Briefcase size={20} />
              Professional Experience
            </h4>
            <div className="space-y-4">
              {userData.experience.map((exp, index) => (
                <div key={index} className="bg-[#2d2d30] rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-white font-semibold text-lg">{exp.title}</h5>
                    <span className="text-gray-400 text-sm">{exp.duration}</span>
                  </div>
                  <p className="text-blue-400 mb-2">{exp.company} • {exp.type}</p>
                  <p className="text-gray-300 mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-[#007acc] text-white px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <GraduationCap size={20} />
              Education
            </h4>
            <div className="space-y-4">
              {userData.education.map((edu, index) => (
                <div key={index} className="bg-[#2d2d30] rounded-lg p-4">
                  <h5 className="text-white font-semibold text-lg">{edu.degree}</h5>
                  <p className="text-blue-400 mb-1">{edu.school}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.year} • {edu.grade}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Code size={20} />
              Technical Skills
            </h4>
            <div className="space-y-4">
              {Object.entries(userData.skills).map(([category, skills]) => (
                <div key={category}>
                  <h5 className="text-gray-300 font-medium mb-2 capitalize">{category}</h5>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span key={index} className="bg-[#007acc] text-white px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Languages size={20} />
              Languages
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              {userData.languages.map((lang, index) => (
                <div key={index} className="bg-[#2d2d30] rounded-lg p-4 text-center">
                  <h5 className="text-white font-semibold">{lang.name}</h5>
                  <p className="text-gray-400 text-sm">{lang.level}</p>
                  <p className="text-blue-400 text-sm">{lang.proficiency}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Award size={20} />
              Certifications
            </h4>
            <div className="space-y-3">
              {userData.certifications.map((cert, index) => (
                <div key={index} className="bg-[#2d2d30] rounded-lg p-4">
                  <h5 className="text-white font-semibold">{cert.name}</h5>
                  <p className="text-blue-400 mb-1">{cert.issuer}</p>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{cert.date}</span>
                    <span>ID: {cert.credentialId}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-white mb-4">Interests & Hobbies</h4>
            <div className="flex flex-wrap gap-2">
              {userData.interests.map((interest, index) => (
                <span key={index} className="bg-[#2d2d30] text-gray-300 px-3 py-2 rounded-lg text-sm border border-[#3e3e42]">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDialog;