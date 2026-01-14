
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, User, Loader2 } from 'lucide-react';
import { GeminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const aiService = new GeminiService();

interface Props {
  onClose: () => void;
}

const ChatSidebar: React.FC<Props> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', text: "Hello! I'm Cortex. How can I help you today?", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({ role: m.role, text: m.text }));
    const response = await aiService.chat(input, history);

    const aiMsg: ChatMessage = { role: 'assistant', text: response, timestamp: new Date() };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <div className="w-full h-full bg-[#252526] flex flex-col border-l border-[#1e1e1e]">
      <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-[#1e1e1e]">
        <div className="flex items-center gap-2">
          <Bot size={18} className="text-blue-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#cccccc]">GitHub Copilot</span>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-white">
          <X size={16} />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 ${
              msg.role === 'assistant' ? 'bg-blue-600' : 'bg-gray-700'
            }`}>
              {msg.role === 'assistant' ? <Bot size={16} className="text-white" /> : <User size={16} className="text-white" />}
            </div>
            <div className={`max-w-[85%] p-3 rounded-md text-sm leading-relaxed ${
              msg.role === 'assistant' ? 'bg-[#1e1e1e] text-gray-300' : 'bg-blue-900/30 text-blue-100 border border-blue-800'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center shrink-0">
              <Bot size={16} className="text-white" />
            </div>
            <div className="bg-[#1e1e1e] p-3 rounded-md flex items-center gap-2 text-gray-400 text-sm">
              <Loader2 size={16} className="animate-spin" />
              Thinking...
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-[#1e1e1e]">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask Cortex about Atharva skills..."
            className="w-full bg-[#1e1e1e] border border-[#333333] rounded-md p-3 pr-10 text-sm text-gray-300 focus:outline-none focus:border-blue-500 resize-none min-h-[100px]"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-3 bottom-3 text-gray-500 hover:text-blue-400 disabled:opacity-50 transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
