
import React from 'react';
import { Bell, Wifi, GitBranch, RefreshCw, CheckCircle2 } from 'lucide-react';

const StatusBar: React.FC = () => {
  return (
    <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-3 text-[11px]">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 hover:bg-[#1f8ad2] px-1 cursor-pointer">
          <GitBranch size={12} />
          <span>main*</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-[#1f8ad2] px-1 cursor-pointer">
          <RefreshCw size={12} className="animate-spin-slow" />
          <span>Syncing...</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hover:bg-[#1f8ad2] px-1 cursor-pointer">Spaces: 2</div>
        <div className="hover:bg-[#1f8ad2] px-1 cursor-pointer">UTF-8</div>
        <div className="flex items-center gap-1 hover:bg-[#1f8ad2] px-1 cursor-pointer">
          <CheckCircle2 size={12} />
          <span>Prettier</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-[#1f8ad2] px-1 cursor-pointer">
          <Wifi size={12} />
          <span>Connected</span>
        </div>
        <div className="hover:bg-[#1f8ad2] px-1 cursor-pointer">
          <Bell size={12} />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
