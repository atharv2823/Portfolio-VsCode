import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

interface Props {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number;
}

const Notification: React.FC<Props> = ({ message, type, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircle size={18} className="text-green-400" />,
    error: <AlertCircle size={18} className="text-red-400" />,
    info: <Info size={18} className="text-blue-400" />
  };

  const colors = {
    success: 'border-green-400/30 bg-green-900/20',
    error: 'border-red-400/30 bg-red-900/20',
    info: 'border-blue-400/30 bg-blue-900/20'
  };

  return (
    <div className={`fixed top-12 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-md border ${colors[type]} backdrop-blur-sm shadow-lg animate-in slide-in-from-top-5 max-w-md`}>
      {icons[type]}
      <span className="text-sm text-white flex-1">{message}</span>
      <button onClick={onClose} className="text-gray-400 hover:text-white">
        <X size={16} />
      </button>
    </div>
  );
};

export default Notification;
