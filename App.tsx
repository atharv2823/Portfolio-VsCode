
import React, { useState, useEffect, useRef } from 'react';
import { X, Eye, Code, Copy, Check, SquareTerminal, BotMessageSquare } from 'lucide-react';
import ActivityBar from './components/ActivityBar';
import Sidebar from './components/Sidebar';
import ChatSidebar from './components/ChatSidebar';
import Terminal from './components/Terminal';
import StatusBar from './components/StatusBar';
import SyntaxHighlighter from './components/SyntaxHighlighter';
import ProjectPreview from './components/ProjectPreview';
import SettingsMenu from './components/SettingsMenu';
import Notification from './components/Notification';
import GitHubPanel from './components/GitHubPanel';
import LinkedInPanel from './components/LinkedInPanel';
import UserProfileDialog from './components/UserProfileDialog';
import { FILES, FileIconMap } from './constants';

const App: React.FC = () => {
  // Initialize state from localStorage with fallbacks
  const [activeFileId, setActiveFileId] = useState<string>(() => {
    return localStorage.getItem('activeFileId') || FILES[0].id;
  });
  const [openFiles, setOpenFiles] = useState<string[]>(() => {
    const saved = localStorage.getItem('openFiles');
    return saved ? JSON.parse(saved) : [FILES[0].id];
  });
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [isTerminalMaximized, setIsTerminalMaximized] = useState(false);
  const [terminalHeight, setTerminalHeight] = useState(200); // Default height in pixels
  const [isDragging, setIsDragging] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activePanel, setActivePanel] = useState('explorer');
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [previewMode, setPreviewMode] = useState<Record<string, boolean>>({
    'projects.json': true // Start with preview mode for projects
  });
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [copiedFile, setCopiedFile] = useState<string | null>(null);
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const terminalRef = useRef<any>(null);

  // Handle dropdown menu
  const handleDropdownClick = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Handle dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-menu')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Menu action handlers
  const handleMenuAction = (action: string) => {
    setActiveDropdown(null); // Close dropdown
    
    switch (action) {
      case 'toggle-terminal':
        setIsTerminalOpen(prev => !prev);
        break;
      case 'toggle-sidebar':
        setIsSidebarOpen(prev => !prev);
        break;
      case 'command-palette':
        // Could implement command palette
        break;
      case 'new-file':
        // Could implement new file creation
        break;
      case 'save':
        // Could implement save functionality
        break;
      default:
        break;
    }
  };

  // Handle terminal resizing
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    // Calculate new height based on mouse position from bottom of window
    const windowHeight = window.innerHeight;
    const newHeight = windowHeight - e.clientY;
    
    // Set minimum and maximum heights
    const minHeight = 100;
    const maxHeight = windowHeight - 150; // Leave space for top bar and some content
    
    if (newHeight >= minHeight && newHeight <= maxHeight) {
      setTerminalHeight(newHeight);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'row-resize';
      document.body.style.userSelect = 'none';
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging]);

  const activeFile = FILES.find(f => f.id === activeFileId) || FILES[0];

  // Persist and apply theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  // Persist active file and open files
  useEffect(() => {
    localStorage.setItem('activeFileId', activeFileId);
    localStorage.setItem('openFiles', JSON.stringify(openFiles));
  }, [activeFileId, openFiles]);

  const handleFileSelect = (id: string) => {
    setActiveFileId(id);
    if (!openFiles.includes(id)) {
      setOpenFiles([...openFiles, id]);
    }
  };

  const handleCloseFile = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const newOpenFiles = openFiles.filter(fid => fid !== id);
    setOpenFiles(newOpenFiles);
    if (activeFileId === id && newOpenFiles.length > 0) {
      setActiveFileId(newOpenFiles[newOpenFiles.length - 1]);
    } else if (newOpenFiles.length === 0) {
      setActiveFileId('');
    }
  };

  const togglePreview = (id: string) => {
    setPreviewMode(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const copyFileContent = async () => {
    if (!activeFile) return;
    try {
      await navigator.clipboard.writeText(activeFile.content);
      setCopiedFile(activeFileId);
      setNotification({ message: `Copied ${activeFile.name} to clipboard`, type: 'success' });
      setTimeout(() => setCopiedFile(null), 2000);
    } catch (err) {
      setNotification({ message: 'Failed to copy to clipboard', type: 'error' });
    }
  };

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      // Ctrl+B: Toggle sidebar
      if (e.ctrlKey && e.key === 'b') {
        e.preventDefault();
        setIsSidebarOpen(prev => !prev);
      }
      // Ctrl+J: Toggle terminal
      if (e.ctrlKey && e.key === 'j') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
      // Ctrl+W: Close active tab
      if (e.ctrlKey && e.key === 'w' && openFiles.length > 0) {
        e.preventDefault();
        const newOpenFiles = openFiles.filter(fid => fid !== activeFileId);
        setOpenFiles(newOpenFiles);
        if (newOpenFiles.length > 0) {
          setActiveFileId(newOpenFiles[newOpenFiles.length - 1]);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [activeFileId, openFiles, isSidebarOpen, isTerminalOpen]);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden select-none bg-[var(--bg-editor)] text-[var(--text-main)] theme-transition">
      {/* Top Bar */}
      <div className="h-8 bg-[#3c3c3c] flex items-center px-4 text-xs text-gray-400 border-b border-[#2b2b2b] flex-shrink-0 relative">
        <div className="flex gap-4 dropdown-menu">
          <span 
            className="hover:text-white cursor-pointer relative"
            onClick={() => handleDropdownClick('file')}
          >
            File
            {activeDropdown === 'file' && (
              <div className="absolute top-full left-0 mt-0 bg-[#3c3c3c] border border-[#555] rounded shadow-lg z-50 min-w-[200px]">
                <div className="py-1">
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white" onClick={() => handleMenuAction('new-file')}>New File</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">New Folder</div>
                  <div className="border-t border-[#555] my-1"></div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Open File...</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Open Folder...</div>
                  <div className="border-t border-[#555] my-1"></div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white" onClick={() => handleMenuAction('save')}>Save</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Save As...</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Save All</div>
                  <div className="border-t border-[#555] my-1"></div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Preferences</div>
                  <div className="border-t border-[#555] my-1"></div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Exit</div>
                </div>
              </div>
            )}
          </span>
          
          <span 
            className="hover:text-white cursor-pointer relative"
            onClick={() => handleDropdownClick('edit')}
          >
            Edit
            {activeDropdown === 'edit' && (
              <div className="absolute top-full left-0 mt-0 bg-[#3c3c3c] border border-[#555] rounded shadow-lg z-50 min-w-[200px]">
                <div className="py-1">
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white flex items-center justify-between">
                    Undo <span className="text-gray-400 text-xs">Ctrl+Z</span>
                  </div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white flex items-center justify-between">
                    Redo <span className="text-gray-400 text-xs">Ctrl+Y</span>
                  </div>
                  <div className="border-t border-[#555] my-1"></div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white flex items-center justify-between">
                    Cut <span className="text-gray-400 text-xs">Ctrl+X</span>
                  </div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white flex items-center justify-between">
                    Copy <span className="text-gray-400 text-xs">Ctrl+C</span>
                  </div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white flex items-center justify-between">
                    Paste <span className="text-gray-400 text-xs">Ctrl+V</span>
                  </div>
                  <div className="border-t border-[#555] my-1"></div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Find</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Replace</div>
                  <div className="border-t border-[#555] my-1"></div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Toggle Line Comment</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Toggle Block Comment</div>
                </div>
              </div>
            )}
          </span>
          
          <span 
            className="hover:text-white cursor-pointer relative"
            onClick={() => handleDropdownClick('selection')}
          >
            Selection
            {activeDropdown === 'selection' && (
              <div className="absolute top-full left-0 mt-0 bg-[#3c3c3c] border border-[#555] rounded shadow-lg z-50 min-w-[200px]">
                <div className="py-1">
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white flex items-center justify-between">
                    Select All <span className="text-gray-400 text-xs">Ctrl+A</span>
                  </div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Expand Selection</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Shrink Selection</div>
                  <div className="border-t border-[#555] my-1"></div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Copy Line Up</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Copy Line Down</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Move Line Up</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Move Line Down</div>
                  <div className="border-t border-[#555] my-1"></div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Add Cursor Above</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Add Cursor Below</div>
                </div>
              </div>
            )}
          </span>
          
          <span 
            className="hover:text-white cursor-pointer relative"
            onClick={() => handleDropdownClick('view')}
          >
            View
            {activeDropdown === 'view' && (
              <div className="absolute top-full left-0 mt-0 bg-[#3c3c3c] border border-[#555] rounded shadow-lg z-50 min-w-[200px]">
                <div className="py-1">
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white" onClick={() => handleMenuAction('command-palette')}>Command Palette...</div>
                  <div className="border-t border-[#555] my-1"></div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white" onClick={() => handleMenuAction('toggle-sidebar')}>Explorer</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Search</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Source Control</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Extensions</div>
                  <div className="border-t border-[#555] my-1"></div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white flex items-center justify-between" onClick={() => handleMenuAction('toggle-terminal')}>
                    Terminal <span className="text-gray-400 text-xs">Ctrl+`</span>
                  </div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Problems</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Output</div>
                  <div className="border-t border-[#555] my-1"></div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Split Editor</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Layout</div>
                  <div className="border-t border-[#555] my-1"></div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Zoom In</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Zoom Out</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Reset Zoom</div>
                </div>
              </div>
            )}
          </span>
          
          <span 
            className="hover:text-white cursor-pointer relative"
            onClick={() => { setIsTerminalOpen(true); terminalRef.current?.createNewTerminal(); }}
          >
            New Terminal
          </span>
          
          <span 
            className="hover:text-white cursor-pointer relative"
            onClick={() => handleDropdownClick('go')}
          >
            Go
            {activeDropdown === 'go' && (
              <div className="absolute top-full left-0 mt-0 bg-[#3c3c3c] border border-[#555] rounded shadow-lg z-50 min-w-[200px]">
                <div className="py-1">
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white flex items-center justify-between">
                    Back <span className="text-gray-400 text-xs">Alt+←</span>
                  </div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white flex items-center justify-between">
                    Forward <span className="text-gray-400 text-xs">Alt+→</span>
                  </div>
                  <div className="border-t border-[#555] my-1"></div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white flex items-center justify-between">
                    Go to File... <span className="text-gray-400 text-xs">Ctrl+P</span>
                  </div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white flex items-center justify-between">
                    Go to Symbol... <span className="text-gray-400 text-xs">Ctrl+Shift+O</span>
                  </div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white flex items-center justify-between">
                    Go to Line... <span className="text-gray-400 text-xs">Ctrl+G</span>
                  </div>
                  <div className="border-t border-[#555] my-1"></div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Switch Editor</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Recent Files</div>
                  <div className="border-t border-[#555] my-1"></div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Next Problem</div>
                  <div className="px-3 py-1 hover:bg-[#007acc] cursor-pointer text-white">Previous Problem</div>
                </div>
              </div>
            )}
          </span>
        </div>
        <div className="flex-1 text-center truncate px-4">Atharva Neware Portfolio - VS Code</div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`p-1 rounded transition-colors ${isChatOpen ? 'bg-[#007acc] text-white' : 'hover:bg-[#555] text-gray-400 hover:text-white'}`}
            title="Toggle Chat"
          >
            <BotMessageSquare size={20} />
          </button>
          <button
            onClick={() => setIsTerminalOpen(!isTerminalOpen)}
            className={`p-1 rounded transition-colors ${isTerminalOpen ? 'bg-[#007acc] text-white' : 'hover:bg-[#555] text-gray-400 hover:text-white'}`}
            title="Toggle Terminal"
          >
            <SquareTerminal size={20}/>
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden relative">
        <ActivityBar 
          activePanel={activePanel} 
          setActivePanel={(p) => setActivePanel(p)}
          isChatOpen={isChatOpen}
          toggleChat={() => setIsChatOpen(!isChatOpen)}
          onUserProfileClick={() => setIsUserProfileOpen(true)}
          onSettingsClick={() => setIsSettingsOpen(true)}
        />

        {/* Floating Settings Menu when active panel is settings */}
        {activePanel === 'settings' && (
          <SettingsMenu 
            currentTheme={currentTheme} 
            setTheme={setCurrentTheme} 
            onClose={() => setActivePanel('explorer')} 
          />
        )}

        {/* Settings Dialog */}
        {isSettingsOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-[#1e1e1e] rounded-lg shadow-2xl max-w-md w-full border border-[#3e3e42]">
              <div className="flex items-center justify-between p-4 border-b border-[#3e3e42]">
                <h3 className="text-lg font-semibold text-white">Settings</h3>
                <button
                  onClick={() => setIsSettingsOpen(false)}
                  className="text-gray-400 hover:text-white p-2 hover:bg-[#3e3e42] rounded transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-4">
                <SettingsMenu 
                  currentTheme={currentTheme} 
                  setTheme={setCurrentTheme} 
                  onClose={() => setIsSettingsOpen(false)} 
                />
              </div>
            </div>
          </div>
        )}

        {/* GitHub Panel when active panel is git */}
        {activePanel === 'git' && <GitHubPanel />}

        {/* LinkedIn Panel when active panel is linkedin */}
        {activePanel === 'linkedin' && <LinkedInPanel />}

        {isSidebarOpen && activePanel !== 'git' && activePanel !== 'linkedin' && (
          <div className="w-64 flex-shrink-0 lg:static fixed z-20 h-full lg:h-auto left-12 theme-transition" style={{ backgroundColor: 'var(--bg-sidebar)' }}>
            <Sidebar activeFileId={activeFileId} onFileSelect={handleFileSelect} />
          </div>
        )}

        <div className="flex-1 flex flex-col min-w-0 bg-[var(--bg-editor)] theme-transition">
          <div className="h-9 flex items-center bg-[var(--bg-sidebar)] overflow-x-auto border-b border-[var(--border)] scrollbar-hide theme-transition flex-shrink-0">
            <div className="flex flex-1 overflow-x-auto h-full scrollbar-hide">
              {openFiles.map(fid => {
                const file = FILES.find(f => f.id === fid);
                if (!file) return null;
                return (
                  <div
                    key={fid}
                    onClick={() => setActiveFileId(fid)}
                    className={`flex items-center px-3 min-w-[120px] max-w-[200px] border-r border-[var(--border)] cursor-pointer text-sm gap-2 transition-colors flex-shrink-0 h-full ${
                      activeFileId === fid ? 'bg-[var(--bg-editor)] text-white border-t-2 border-t-[var(--accent)]' : 'bg-[var(--bg-tab-inactive)] text-[var(--text-muted)] hover:bg-[var(--bg-activity)]'
                    }`}
                  >
                    {FileIconMap[file.icon]}
                    <span className="truncate flex-1">{file.name}</span>
                    <X size={14} className="hover:bg-[var(--bg-activity)] rounded p-0.5 flex-shrink-0" onClick={(e) => handleCloseFile(e, fid)} />
                  </div>
                );
              })}
            </div>
            {activeFileId && (activeFile.type === 'markdown' || activeFile.type === 'json') && (
              <button 
                onClick={() => togglePreview(activeFileId)}
                className="px-3 h-full flex items-center gap-2 hover:bg-[var(--bg-activity)] text-[var(--text-muted)] hover:text-white border-l border-[var(--border)] transition-colors"
                title={previewMode[activeFileId] ? "Show Code" : "Open Preview"}
              >
                {previewMode[activeFileId] ? <Code size={16} /> : <Eye size={16} />}
              </button>
            )}
            {activeFileId && (
              <button 
                onClick={copyFileContent}
                className="px-3 h-full flex items-center gap-2 hover:bg-[var(--bg-activity)] text-[var(--text-muted)] hover:text-white border-l border-[var(--border)] transition-colors"
                title="Copy file content"
              >
                {copiedFile === activeFileId ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
              </button>
            )}
          </div>

          <div className="flex-1 overflow-hidden relative flex flex-col">
            {activeFileId ? (
              <div 
                className="overflow-y-auto bg-[var(--bg-editor)] theme-transition"
                style={{ 
                  height: isTerminalOpen && !isTerminalMaximized 
                    ? `calc(100% - ${terminalHeight}px - 4px)` // Subtract terminal height and resizer height
                    : isTerminalMaximized 
                    ? '0px' // Hide editor when terminal is maximized
                    : '100%' // Full height when no terminal
                }}
              >
                {previewMode[activeFileId] && activeFile.type === 'json' ? (
                  <ProjectPreview content={activeFile.content} />
                ) : (
                  <SyntaxHighlighter content={activeFile.content} type={activeFile.type} />
                )}
              </div>
            ) : (
              <div 
                className="flex items-center justify-center text-[var(--text-muted)] font-bold text-4xl opacity-10 uppercase tracking-widest"
                style={{ 
                  height: isTerminalOpen && !isTerminalMaximized 
                    ? `calc(100% - ${terminalHeight}px - 4px)` 
                    : isTerminalMaximized 
                    ? '0px' 
                    : '100%' 
                }}
              >
                VS Code
              </div>
            )}

            {isTerminalOpen && !isTerminalMaximized && (
              <>
                {/* Resizer Handle */}
                <div
                  className="h-2 bg-[#3e3e42] hover:bg-[#007acc] cursor-row-resize transition-colors relative group border-t border-[#454545]"
                  onMouseDown={(e) => {
                    setIsDragging(true);
                    e.preventDefault();
                  }}
                >
                  <div className="absolute inset-x-0 top-0.5 h-0.5 bg-[#007acc] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-x-0 bottom-0.5 h-0.5 bg-[#007acc] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                {/* Terminal */}
                <div 
                  className="flex-shrink-0"
                  style={{ height: `${terminalHeight}px` }}
                >
                  <Terminal 
                    ref={terminalRef} 
                    onClose={() => setIsTerminalOpen(false)} 
                    onMaximize={() => {
                      if (isTerminalMaximized) {
                        // When restoring from maximized, keep current height
                        setIsTerminalMaximized(false);
                      } else {
                        // When maximizing, save current height and maximize
                        setIsTerminalMaximized(true);
                      }
                    }}
                    isMaximized={isTerminalMaximized}
                  />
                </div>
              </>
            )}

            {isTerminalOpen && isTerminalMaximized && (
              <div className="flex-1">
                <Terminal 
                  ref={terminalRef} 
                  onClose={() => setIsTerminalOpen(false)} 
                  onMaximize={() => setIsTerminalMaximized(false)}
                  isMaximized={isTerminalMaximized}
                />
              </div>
            )}
          </div>
        </div>

        {isChatOpen && (
          <div className="w-80 flex-shrink-0 lg:static fixed right-0 z-30 h-full lg:h-auto shadow-2xl lg:shadow-none theme-transition">
            <ChatSidebar onClose={() => setIsChatOpen(false)} />
          </div>
        )}
      </div>

      {notification && (
        <Notification 
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      <UserProfileDialog 
        isOpen={isUserProfileOpen}
        onClose={() => setIsUserProfileOpen(false)}
      />

      <StatusBar />
    </div>
  );
};

export default App;
