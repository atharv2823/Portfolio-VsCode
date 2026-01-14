
import React from 'react';
import { Bell, Wifi, GitBranch, RefreshCw, CheckCircle2 } from 'lucide-react';

const StatusBar: React.FC = () => {
  const [isSyncing, setIsSyncing] = React.useState(true);
  const [branch, setBranch] = React.useState('main');
  const [showBranches, setShowBranches] = React.useState(false);
  const [prettierStatus, setPrettierStatus] = React.useState<'ready' | 'formatting'>('ready');
  const [isConnected, setIsConnected] = React.useState(true);

  React.useEffect(() => {
    // Simulate initial sync finish
    const timer = setTimeout(() => setIsSyncing(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSyncClick = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 2000);
  };

  const handleBranchClick = () => {
    setShowBranches(!showBranches);
  };

  const changeBranch = (newBranch: string) => {
    setBranch(newBranch);
    setShowBranches(false);
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 1500);
  };

  const handlePrettierClick = () => {
    setPrettierStatus('formatting');
    setTimeout(() => setPrettierStatus('ready'), 1000);
  };

  return (
    <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-3 text-[11px] select-none relative z-40">
      <div className="flex items-center gap-4">
        {/* Branch Selector */}
        <div className="relative">
          <div
            className="flex items-center gap-1 hover:bg-[#1f8ad2] px-2 py-0.5 rounded transition-colors cursor-pointer"
            onClick={handleBranchClick}
          >
            <GitBranch size={12} />
            <span>{branch}*</span>
          </div>

          {showBranches && (
            <div className="absolute bottom-full left-0 mb-1 w-32 bg-[#252526] border border-[#454545] shadow-xl text-white rounded overflow-hidden">
              {['main', 'dev', 'feature/ui'].map(b => (
                <div
                  key={b}
                  className={`px-3 py-1.5 cursor-pointer hover:bg-[#094771] flex items-center gap-2 ${branch === b ? 'bg-[#37373d]' : ''}`}
                  onClick={() => changeBranch(b)}
                >
                  <GitBranch size={10} />
                  {b}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sync Indicator */}
        <div
          className="flex items-center gap-1 hover:bg-[#1f8ad2] px-2 py-0.5 rounded transition-colors cursor-pointer group"
          onClick={handleSyncClick}
        >
          <RefreshCw
            size={12}
            className={`transition-all duration-700 ${isSyncing ? 'animate-spin' : 'group-hover:rotate-180'}`}
          />
          <span className="opacity-90">{isSyncing ? 'Syncing...' : 'Synced'}</span>
        </div>

        {!isSyncing && (
          <div className="flex items-center gap-1 text-[10px] animate-in fade-in slide-in-from-left-2 text-white/80">
            0<span className="rotate-180 inline-block">↑</span> 0↓
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="hover:bg-[#1f8ad2] px-2 py-0.5 rounded transition-colors cursor-pointer">
          Spaces: 2
        </div>
        <div className="hover:bg-[#1f8ad2] px-2 py-0.5 rounded transition-colors cursor-pointer">
          UTF-8
        </div>

        {/* Prettier Status */}
        <div
          className={`flex items-center gap-1 hover:bg-[#1f8ad2] px-2 py-0.5 rounded transition-colors cursor-pointer ${prettierStatus === 'formatting' ? 'text-yellow-300' : ''}`}
          onClick={handlePrettierClick}
        >
          {prettierStatus === 'formatting' ? (
            <CheckCircle2 size={12} className="animate-pulse" />
          ) : (
            <CheckCircle2 size={12} className="text-white" />
          )}
          <span>{prettierStatus === 'formatting' ? 'Formatting...' : 'Prettier'}</span>
        </div>

        {/* Connection Status */}
        <div
          className="flex items-center gap-1 hover:bg-[#1f8ad2] px-2 py-0.5 rounded transition-colors cursor-pointer"
          onClick={() => setIsConnected(!isConnected)}
        >
          <Wifi size={12} className={!isConnected ? 'text-red-300' : ''} />
          <span>{isConnected ? 'Go Live' : 'Offline'}</span>
        </div>

        {/* Notifications */}
        <div className="hover:bg-[#1f8ad2] px-2 py-0.5 rounded transition-colors cursor-pointer relative group">
          <Bell size={12} className="group-hover:animate-swing" />
          <span className="absolute top-0 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-[#007acc]"></span>
        </div>
      </div>

    </div>
  );
};

export default StatusBar;
