
import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { X, Maximize2, ChevronUp, Plus, Trash2 } from 'lucide-react';

interface TerminalSession {
  id: string;
  name: string;
  cwd: string;
  history: string[];
  currentCommand: string;
  isActive: boolean;
}

interface TerminalRef {
  createNewTerminal: () => void;
}

interface TerminalProps {
  onClose?: () => void;
  onMaximize?: () => void;
  isMaximized?: boolean;
}

const Terminal = forwardRef<TerminalRef, TerminalProps>(({ onClose, onMaximize, isMaximized }, ref) => {
  const [sessions, setSessions] = useState<TerminalSession[]>([
    {
      id: '1',
      name: 'Terminal 1',
      cwd: '~',
      history: [
        'visitor@atharva-portfolio:~$ npm run build',
        '> building site...',
        '> collecting portfolio data...',
        '> initializing Gemini AI assistant...',
        'DONE compiled successfully in 1240ms',
        'visitor@atharva-portfolio:~$ '
      ],
      currentCommand: '',
      isActive: true
    }
  ]);

  const [activeSessionId, setActiveSessionId] = useState('1');
  const [activeTab, setActiveTab] = useState('TERMINAL');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);

  const activeSession = sessions.find(s => s.id === activeSessionId) || sessions[0];

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [activeSessionId]);

  useImperativeHandle(ref, () => ({
    createNewTerminal
  }));

  const scrollToTop = () => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = 0;
    }
  };

  const handleMaximize = () => {
    if (onMaximize) {
      onMaximize();
    }
  };

  const createNewTerminal = () => {
    const newId = (sessions.length + 1).toString();
    const newSession: TerminalSession = {
      id: newId,
      name: `Terminal ${newId}`,
      cwd: '~',
      history: [`visitor@atharva-portfolio:~$ `],
      currentCommand: '',
      isActive: true
    };

    setSessions(prev => [...prev, newSession]);
    setActiveSessionId(newId);
  };

  const closeTerminal = (sessionId: string) => {
    setSessions(prev => prev.filter(s => s.id !== sessionId));

    // If closing active session, switch to another one or clear if last
    if (activeSessionId === sessionId) {
      const remainingSessions = sessions.filter(s => s.id !== sessionId);
      if (remainingSessions.length > 0) {
        setActiveSessionId(remainingSessions[0].id);
      } else {
        setActiveSessionId('');
      }
    }
  };

  const executeCommand = (command: string) => {
    const trimmedCommand = command.trim();
    if (!trimmedCommand) return;

    const newHistory = [...activeSession.history];
    newHistory[newHistory.length - 1] = `visitor@alex-rivera-portfolio:~${activeSession.cwd}$ ${trimmedCommand}`;

    // Simulate command execution
    let output = '';
    switch (trimmedCommand.toLowerCase()) {
      case 'ls':
        output = 'about.md  projects.json  skills.ts  experience.log';
        break;
      case 'pwd':
        output = `/home/visitor/portfolio${activeSession.cwd === '~' ? '' : activeSession.cwd}`;
        break;
      case 'whoami':
        output = 'visitor';
        break;
      case 'date':
        output = new Date().toString();
        break;
      case 'clear':
        setSessions(prev => prev.map(s =>
          s.id === activeSessionId
            ? { ...s, history: [`visitor@atharva-portfolio:~${s.cwd}$ `] }
            : s
        ));
        return;
      case 'help':
        output = 'Available commands: ls, pwd, whoami, date, clear, help, echo [text]';
        break;
      default:
        if (trimmedCommand.startsWith('echo ')) {
          output = trimmedCommand.substring(5);
        } else if (trimmedCommand.startsWith('cd ')) {
          const newDir = trimmedCommand.substring(3);
          if (newDir === '..') {
            output = `Changed directory to ${activeSession.cwd === '~' ? '/' : activeSession.cwd.split('/').slice(0, -1).join('/') || '~'}`;
          } else {
            output = `Changed directory to ${newDir}`;
          }
        } else {
          output = `Command not found: ${trimmedCommand}. Type 'help' for available commands.`;
        }
    }

    newHistory.push(output);
    newHistory.push(`visitor@atharva-portfolio:~${activeSession.cwd}$ `);

    setSessions(prev => prev.map(s =>
      s.id === activeSessionId
        ? { ...s, history: newHistory, currentCommand: '' }
        : s
    ));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(activeSession.currentCommand);
    } else if (e.key === 'ArrowUp') {
      // Could implement command history here
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      // Could implement command history here
      e.preventDefault();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSessions(prev => prev.map(s =>
      s.id === activeSessionId
        ? { ...s, currentCommand: value }
        : s
    ));
  };

  return (
    <div className="w-full h-full bg-[#1e1e1e] flex flex-col border-t border-[#333333]">
      <div className="flex items-center justify-between px-4 py-1.5 text-[11px] bg-[#1e1e1e] border-b border-[#333333]">
        <div className="flex gap-4">
          <span 
            className={`cursor-pointer px-1 ${activeTab === 'PROBLEMS' ? 'text-white border-b-2 border-white font-bold' : 'text-gray-500 hover:text-white border-b border-transparent'}`}
            onClick={() => setActiveTab('PROBLEMS')}
          >
            PROBLEMS
          </span>
          <span 
            className={`cursor-pointer px-1 ${activeTab === 'OUTPUT' ? 'text-white border-b-2 border-white font-bold' : 'text-gray-500 hover:text-white border-b border-transparent'}`}
            onClick={() => setActiveTab('OUTPUT')}
          >
            OUTPUT
          </span>
          <span 
            className={`cursor-pointer px-1 ${activeTab === 'TERMINAL' ? 'text-white border-b-2 border-white font-bold' : 'text-gray-500 hover:text-white border-b border-transparent'}`}
            onClick={() => setActiveTab('TERMINAL')}
          >
            TERMINAL
          </span>
          <span 
            className={`cursor-pointer px-1 ${activeTab === 'DEBUG CONSOLE' ? 'text-white border-b-2 border-white font-bold' : 'text-gray-500 hover:text-white border-b border-transparent'}`}
            onClick={() => setActiveTab('DEBUG CONSOLE')}
          >
            DEBUG CONSOLE
          </span>
        </div>
        <div className="flex gap-2 text-gray-500">
          <button
            onClick={createNewTerminal}
            className="hover:text-white p-1 rounded transition-colors"
            title="New Terminal"
          >
            <Plus size={14} />
          </button>
          <button
            onClick={scrollToTop}
            className="hover:text-white p-1 rounded transition-colors"
            title="Scroll to Top"
          >
            <ChevronUp size={14} />
          </button>
          <button
            onClick={handleMaximize}
            className={`p-1 rounded transition-colors ${isMaximized ? 'text-blue-400 hover:text-blue-300' : 'hover:text-white'}`}
            title={isMaximized ? "Restore Terminal" : "Maximize Terminal"}
          >
            <Maximize2 size={14} />
          </button>
          <button
            onClick={onClose}
            className="hover:text-white p-1 rounded transition-colors"
            title="Close Terminal"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div ref={terminalContentRef} className="flex-1 p-4 font-mono text-sm overflow-y-auto bg-[#1e1e1e]">
        {activeTab === 'TERMINAL' && (
          <>
            {/* Terminal Tabs */}
            {sessions.length > 0 && (
              <div className="flex items-center bg-[#2d2d30] border-b border-[#3e3e42] px-2 mb-4">
                {sessions.map((session) => (
                  <div
                    key={session.id}
                    className={`flex items-center gap-2 px-3 py-1 text-xs cursor-pointer border-r border-[#3e3e42] min-w-[120px] ${
                      session.id === activeSessionId
                        ? 'bg-[#1e1e1e] text-white'
                        : 'bg-[#2d2d30] text-gray-400 hover:bg-[#37373d] hover:text-gray-300'
                    }`}
                    onClick={() => setActiveSessionId(session.id)}
                  >
                    <span className="truncate">{session.name}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        closeTerminal(session.id);
                      }}
                      className="hover:bg-[#3e3e42] rounded p-0.5 ml-auto"
                    >
                      <X size={10} />
                    </button>
                  </div>
                ))}
                <div className="ml-auto text-xs text-gray-500 px-2">
                  {sessions.length} terminal{sessions.length > 1 ? 's' : ''}
                </div>
              </div>
            )}

            {!activeSession ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <p className="mb-4">No terminals open</p>
                <button
                  onClick={createNewTerminal}
                  className="flex items-center gap-2 px-4 py-2 bg-[#0e639c] hover:bg-[#1177bb] text-white rounded text-sm transition-colors"
                >
                  <Plus size={16} />
                  New Terminal
                </button>
              </div>
            ) : (
              <>
                {activeSession.history.map((line, index) => (
                  <div key={index} className="mb-1">
                    {line.includes('>') ? (
                      <span className="text-gray-400">{line}</span>
                    ) : line.includes('DONE') ? (
                      <span className="text-green-400">{line}</span>
                    ) : line.includes('visitor@') ? (
                      <span className="text-green-500">{line}</span>
                    ) : line.includes('Command not found') ? (
                      <span className="text-red-400">{line}</span>
                    ) : (
                      <span className="text-gray-300">{line}</span>
                    )}
                  </div>
                ))}

                {/* Current Command Input */}
                <div className="flex items-center">
                  <span className="text-green-500">visitor@atharva-portfolio</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-blue-500">~{activeSession.cwd}</span>
                  <span className="text-green-500">$ </span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={activeSession.currentCommand}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    className="flex-1 bg-transparent border-none outline-none text-gray-300 caret-white"
                    spellCheck={false}
                    autoComplete="off"
                  />
                  <span className="animate-pulse text-gray-400">_</span>
                </div>
              </>
            )}
          </>
        )}

        {activeTab === 'PROBLEMS' && (
          <div className="text-gray-300">
            <div className="mb-4 text-gray-400">No problems found in workspace.</div>
            <div className="text-xs text-gray-500">
              <div>• TypeScript: No errors</div>
              <div>• ESLint: No warnings</div>
              <div>• Build: Successful</div>
            </div>
          </div>
        )}

        {activeTab === 'OUTPUT' && (
          <div className="text-gray-300">
            <div className="mb-2 text-green-400">[INFO] Starting development server...</div>
            <div className="mb-2 text-gray-400">[BUILD] Compiling TypeScript...</div>
            <div className="mb-2 text-green-400">[SUCCESS] Compiled successfully in 1.2s</div>
            <div className="mb-2 text-blue-400">[HMR] Hot Module Replacement enabled</div>
            <div className="mb-2 text-green-400">[INFO] Local development server running on http://localhost:5173</div>
            <div className="text-gray-500 text-xs mt-4">
              Press Ctrl+C to stop the server
            </div>
          </div>
        )}

        {activeTab === 'DEBUG CONSOLE' && (
          <div className="text-gray-300">
            <div className="mb-2 text-yellow-400">[DEBUG] Initializing portfolio data...</div>
            <div className="mb-2 text-blue-400">[DEBUG] Loading projects from projects.json</div>
            <div className="mb-2 text-blue-400">[DEBUG] Loading skills from skills.ts</div>
            <div className="mb-2 text-blue-400">[DEBUG] Loading experience from experience.log</div>
            <div className="mb-2 text-green-400">[DEBUG] Gemini AI assistant initialized</div>
            <div className="mb-2 text-green-400">[DEBUG] All components loaded successfully</div>
            <div className="text-gray-500 text-xs mt-4">
              Debug console shows internal application logs
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default Terminal;
