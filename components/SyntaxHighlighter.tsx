
import React, { useState, useEffect } from 'react';
import { FileType } from '../types';

interface Props {
  content: string;
  type: FileType;
}

const SyntaxHighlighter: React.FC<Props> = ({ content, type }) => {
  const [displayedContent, setDisplayedContent] = useState('');

  useEffect(() => {
    setDisplayedContent('');
    let currentIndex = 0;
    const totalLength = content.length;
    // Calculate chunk size to ensure animation takes roughly the same time (e.g., 0.5s - 1s) regardless of length
    // Minimum 1 char, but for long text, move faster.
    const chunkSize = Math.max(1, Math.ceil(totalLength / 100)); // Aim for ~100 frames

    const interval = setInterval(() => {
      if (currentIndex >= totalLength) {
        setDisplayedContent(content);
        clearInterval(interval);
        return;
      }

      const nextIndex = Math.min(currentIndex + chunkSize, totalLength);
      setDisplayedContent(content.slice(0, nextIndex));
      currentIndex = nextIndex;
    }, 5);

    return () => clearInterval(interval);
  }, [content]);

  const lines = displayedContent.split('\n');

  const highlightJSON = (line: string) => {
    return line.split(/(".*?"|[:\[\]{},])/).map((part, i) => {
      if (part.startsWith('"')) return <span key={i} className="text-orange-300">{part}</span>;
      if ([':', '[', ']', '{', '}', ','].includes(part)) return <span key={i} className="text-gray-400">{part}</span>;
      return <span key={part + i}>{part}</span>;
    });
  };

  const highlightTS = (line: string) => {
    const keywords = ['export', 'const', 'interface', 'string', 'items', 'category'];
    return line.split(/(\s+|,|;|:)/).map((part, i) => {
      if (keywords.includes(part.trim())) return <span key={i} className="text-purple-400 font-semibold">{part}</span>;
      if (part.startsWith('"')) return <span key={i} className="text-green-300">{part}</span>;
      return <span key={part + i}>{part}</span>;
    });
  };

  const highlightMD = (line: string) => {
    if (line.startsWith('#')) return <span className="text-blue-400 font-bold">{line}</span>;
    if (line.startsWith('-')) return <span className="text-yellow-200">{line}</span>;
    return <span>{line}</span>;
  };

  const highlightLog = (line: string) => {
    if (line.includes('INFO')) return <span className="text-blue-300">{line}</span>;
    if (line.includes('DEBUG')) return <span className="text-gray-400 italic">{line}</span>;
    if (line.includes('WARN')) return <span className="text-yellow-400 font-bold">{line}</span>;
    return <span>{line}</span>;
  };

  const renderLine = (line: string, index: number) => {
    let highlighted: React.ReactNode;
    switch (type) {
      case 'json': highlighted = highlightJSON(line); break;
      case 'typescript': highlighted = highlightTS(line); break;
      case 'markdown': highlighted = highlightMD(line); break;
      case 'log': highlighted = highlightLog(line); break;
      default: highlighted = line;
    }

    return (
      <div key={index} className="flex hover:bg-[#2a2d2e] transition-colors">
        <span className="w-12 text-right pr-4 text-gray-600 select-none text-sm leading-6">
          {index + 1}
        </span>
        <pre className="text-sm leading-6 whitespace-pre">{highlighted}</pre>
      </div>
    );
  };

  return (
    <div className="py-4 font-mono">
      {lines.map((line, i) => renderLine(line, i))}
    </div>
  );
};

export default SyntaxHighlighter;
