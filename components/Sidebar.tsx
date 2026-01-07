
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, MoreHorizontal } from 'lucide-react';
import { FILES, FileIconMap } from '../constants';
import { PortfolioFile } from '../types';

interface Props {
  activeFileId: string;
  onFileSelect: (fileId: string) => void;
}

const Sidebar: React.FC<Props> = ({ activeFileId, onFileSelect }) => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(true);

  return (
    <div className="w-full h-full bg-[#252526] text-[#cccccc] flex flex-col border-r border-[#1e1e1e]">
      <div className="flex items-center justify-between px-4 py-3 uppercase text-[11px] font-bold tracking-wider text-gray-500">
        <span>Explorer</span>
        <MoreHorizontal size={14} className="cursor-pointer" />
      </div>

      <div className="flex flex-col select-none">
        <button
          onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
          className="flex items-center px-1 py-1 hover:bg-[#2a2d2e] w-full text-left font-bold text-[11px]"
        >
          {isPortfolioOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          <span className="ml-1 uppercase">Portfolio_V1</span>
        </button>

        {isPortfolioOpen && (
          <div className="flex flex-col">
            {FILES.map((file) => (
              <button
                key={file.id}
                onClick={() => onFileSelect(file.id)}
                className={`flex items-center px-4 py-1.5 w-full text-left text-sm transition-colors ${
                  activeFileId === file.id ? 'bg-[#37373d] text-white' : 'hover:bg-[#2a2d2e]'
                }`}
              >
                <span className="mr-2">{FileIconMap[file.icon]}</span>
                {file.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
