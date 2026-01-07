
import React from 'react';
import { Files, Search, GitBranch, Play, LayoutGrid, User, Settings, MessageSquare, Linkedin, Instagram } from 'lucide-react';

interface Props {
  activePanel: string;
  setActivePanel: (p: string) => void;
  isChatOpen: boolean;
  toggleChat: () => void;
  onUserProfileClick: () => void;
  onSettingsClick: () => void;
}

const ActivityBar: React.FC<Props> = ({ activePanel, setActivePanel, isChatOpen, toggleChat, onUserProfileClick, onSettingsClick }) => {
  const items = [
    { id: 'explorer', icon: <Files size={24} /> },
    { id: 'search', icon: <Search size={24} /> },
    { id: 'git', icon: <GitBranch size={24} /> },
    { id: 'run', icon: <Play size={24} /> },
    { id: 'extensions', icon: <LayoutGrid size={24} /> },
    { id: 'linkedin', icon: <Linkedin size={24} /> },
    { id: 'instagram', icon: <Instagram size={24} /> },


  ];

  return (
    <div className="w-12 flex flex-col items-center bg-[var(--bg-activity)] py-2 border-r border-[var(--border)] h-full justify-between z-40 theme-transition">
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePanel(item.id)}
            className={`p-2 transition-all hover:text-white ${
              activePanel === item.id ? 'border-l-2 border-white text-white' : 'text-gray-500'
            }`}
          >
            {item.icon}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-4 mb-4">
        <button
          onClick={toggleChat}
          className={`p-2 transition-all hover:text-white ${
            isChatOpen ? 'text-white' : 'text-gray-500'
          }`}
        >
          <MessageSquare size={24} />
        </button>
        <button
          onClick={onUserProfileClick}
          className="p-2 text-gray-500 hover:text-white"
          title="Developer Profile"
        >
          <User size={24} />
        </button>
        <button 
          onClick={onSettingsClick}
          className="p-2 text-gray-500 hover:text-white"
          title="Settings"
        >
          <Settings size={24} />
        </button>
      </div>
    </div>
  );
};

export default ActivityBar;
