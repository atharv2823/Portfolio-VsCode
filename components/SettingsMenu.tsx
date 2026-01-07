
import React from 'react';
import { THEMES } from '../constants';

interface Props {
  currentTheme: string;
  setTheme: (id: string) => void;
  onClose: () => void;
}

const SettingsMenu: React.FC<Props> = ({ currentTheme, setTheme, onClose }) => {
  return (
    <div>
      <div className="px-3 py-2 text-[10px] font-bold text-[var(--text-muted)] uppercase border-b border-[var(--border)] mb-2">
        Color Theme
      </div>
      <div className="space-y-1">
        {THEMES.map((t) => (
          <button
            key={t.id}
            onClick={() => {
              setTheme(t.id);
              onClose();
            }}
            className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors hover:bg-[var(--accent)] hover:text-white rounded ${
              currentTheme === t.id ? 'bg-[var(--bg-activity)] text-white' : 'text-[var(--text-main)]'
            }`}
          >
            <span>{t.name}</span>
            <div className="w-3 h-3 rounded-full border border-[var(--border)]" style={{ backgroundColor: t.color }} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SettingsMenu;
