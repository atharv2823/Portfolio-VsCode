
import React from 'react';
import { Files, Search, GitBranch, Play, LayoutGrid, User, Settings, MessageSquare, Linkedin, Instagram, Download, Briefcase, Award } from 'lucide-react';

interface Props {
  activePanel: string;
  setActivePanel: (p: string) => void;
  isChatOpen: boolean;
  toggleChat: () => void;
  onUserProfileClick: () => void;
  onSettingsClick: () => void;
  onDownloadResume: () => void;
}

interface ActivityItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ icon, label, isActive, onClick }) => (
  <div className="relative group w-full flex justify-center">
    <button
      onClick={onClick}
      className={`p-2 transition-all hover:text-white relative ${isActive ? 'text-white' : 'text-gray-500'}`}
    >
      {/* Active Indicator Border */}
      {isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white" />
      )}
      {icon}
    </button>
    {/* Tooltip */}
    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1 bg-[#252526] text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity border border-[#454545] shadow-xl">
      {label}
    </div>
  </div>
);

const ActivityBar: React.FC<Props> = ({ activePanel, setActivePanel, isChatOpen, toggleChat, onUserProfileClick, onSettingsClick, onDownloadResume }) => {
  const items = [
    { id: 'explorer', icon: <Files size={24} />, name: 'Explorer' },
    { id: 'search', icon: <Search size={24} />, name: 'Search' },
    { id: 'git', icon: <GitBranch size={24} />, name: 'GitHub' },
    // { id: 'run', icon: <Play size={24} />, name: 'Run and Debug' },
    { id: 'projects', icon: <Briefcase size={24} />, name: 'Projects' },
    { id: 'certifications', icon: <Award size={24} />, name: 'Certifications' },
    // { id: 'extensions', icon: <LayoutGrid size={24} />, name: 'Extensions' },
    { id: 'linkedin', icon: <Linkedin size={24} />, name: 'LinkedIn' },
    { id: 'instagram', icon: <Instagram size={24} />, name: 'Instagram' },
  ];

  return (
    <div className="w-12 flex flex-col items-center bg-[var(--bg-activity)] py-2 border-r border-[var(--border)] h-full justify-between z-40 theme-transition">
      <div className="flex flex-col gap-4 w-full">
        {items.map((item) => (
          <ActivityItem
            key={item.id}
            icon={item.icon}
            label={item.name}
            isActive={activePanel === item.id}
            onClick={() => setActivePanel(item.id)}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 mb-4 w-full">
        <ActivityItem
          icon={<MessageSquare size={24} />}
          label="AI Assistant"
          isActive={isChatOpen}
          onClick={toggleChat}
        />
        <ActivityItem
          icon={<User size={24} />}
          label="Profile"
          onClick={onUserProfileClick}
        />
        <ActivityItem
          icon={<Download size={24} />}
          label="Download Resume"
          onClick={onDownloadResume}
        />
        <ActivityItem
          icon={<Settings size={24} />}
          label="Settings"
          onClick={onSettingsClick}
        />
      </div>
    </div>
  );
};

export default ActivityBar;
