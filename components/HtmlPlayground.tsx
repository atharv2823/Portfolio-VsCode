import React, { useState } from 'react';
import { Play, Code, Layout, RefreshCw, X } from 'lucide-react';

const SAMPLE_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Developer Profile</title>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #0f172a;
            --card-bg: rgba(30, 41, 59, 0.7);
            --accent: #38bdf8;
            --text: #e2e8f0;
            --text-muted: #94a3b8;
        }

        body {
            margin: 0;
            padding: 0;
            height: 100vh;
            background-color: var(--bg);
            background-image: 
                radial-gradient(at 0% 0%, rgba(56, 189, 248, 0.15) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(139, 92, 246, 0.15) 0px, transparent 50%);
            font-family: 'JetBrains Mono', monospace;
            color: var(--text);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .container {
            perspective: 1000px;
        }

        .card {
            background: var(--card-bg);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 3rem;
            width: 350px;
            text-align: center;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            transform-style: preserve-3d;
            animation: float 6s ease-in-out infinite;
            transition: transform 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px) rotateX(5deg) rotateY(5deg);
        }

        .profile-img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 0 auto 1.5rem;
            background: linear-gradient(45deg, #38bdf8, #8b5cf6);
            padding: 4px;
            position: relative;
        }

        .profile-img img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--bg);
            background: #1e293b;
        }

        .status-dot {
            position: absolute;
            bottom: 5px;
            right: 5px;
            width: 16px;
            height: 16px;
            background: #22c55e;
            border: 3px solid var(--bg);
            border-radius: 50%;
            animation: pulse 2s infinite;
        }

        h1 {
            margin: 0;
            font-size: 1.5rem;
            background: linear-gradient(to right, #38bdf8, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .role {
            color: var(--accent);
            font-size: 0.875rem;
            margin-top: 0.5rem;
            display: inline-block;
            padding: 0.25rem 0.75rem;
            background: rgba(56, 189, 248, 0.1);
            border-radius: 9999px;
            border: 1px solid rgba(56, 189, 248, 0.2);
        }

        p {
            color: var(--text-muted);
            line-height: 1.6;
            margin: 1.5rem 0;
            font-size: 0.9rem;
        }

        .tech-stack {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-bottom: 2rem;
        }

        .tech-icon {
            width: 32px;
            height: 32px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.2s;
            cursor: default;
        }

        .tech-icon:hover {
            background: var(--accent);
            color: var(--bg);
            transform: translateY(-3px);
        }

        .btn {
            background: linear-gradient(45deg, #38bdf8, #8b5cf6);
            color: white;
            border: none;
            padding: 12px 28px;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: bold;
            font-family: inherit;
            cursor: pointer;
            transition: all 0.3s;
            text-shadow: 0 1px 2px rgba(0,0,0,0.2);
            box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3);
            width: 100%;
        }

        .btn:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 8px 25px rgba(56, 189, 248, 0.4);
        }

        .btn:active {
            transform: translateY(0);
        }

        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }

        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
            100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }

        .code-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0.03;
            pointer-events: none;
            z-index: -1;
            font-size: 1.2rem;
            overflow: hidden;
            white-space: pre-wrap;
            padding: 2rem;
        }
    </style>
</head>
<body>
    <div class="code-bg">
function dev() {
    const skills = ['React', 'Node'];
    return skills.map(s => s.code());
}
    </div>

    <div class="container">
        <div class="card">
            <div class="profile-img">
                <img src="./public/boy.png" alt="Profile">
                <div class="status-dot"></div>
            </div>
            
            <h1>Atharva Neware</h1>
            <span class="role">&lt;FullStack /&gt;</span>
            
            <p>
                Building scalable web applications with aesthetic UI and robust backend systems.
            </p>

            <div class="tech-stack">
                <div class="tech-icon" title="React">⚛️</div>
                <div class="tech-icon" title="TypeScript">TS</div>
                <div class="tech-icon" title="Next.js">▲</div>
                <div class="tech-icon" title="Node.js">JS</div>
            </div>

            <button class="btn" onclick="alert('Thanks for checking out my portfolio!')">
                View Projects
            </button>
        </div>
    </div>
</body>
</html>`;

const HtmlPlayground: React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const [code, setCode] = useState('');

    if (!isActive) {
        return (
            <div className="h-full w-full flex flex-col items-center justify-center bg-[var(--bg-editor)] relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
                    <Code size={400} />
                </div>

                <div className="flex flex-col items-center gap-6 p-8 animate-in fade-in duration-500 z-10">
                    <div className="w-24 h-24 bg-[#e34c26] rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20 mb-4 transform hover:rotate-12 transition-transform duration-300">
                        <Code size={48} className="text-white" />
                    </div>

                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold text-[var(--text-main)]">HTML Playground</h2>
                        <p className="text-[var(--text-muted)] text-center max-w-md">
                            Build, test, and preview HTML snippets instantly.
                        </p>
                    </div>

                    <button
                        onClick={() => setIsActive(true)}
                        className="group relative flex items-center gap-3 bg-[var(--accent)] hover:bg-[#006bb3] text-white px-8 py-3 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-xl shadow-blue-500/20 mt-4"
                    >
                        <Play size={20} className="fill-current" />
                        Code Html
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col bg-[var(--bg-editor)] animate-in slide-in-from-bottom-5 duration-300">
            <div className="flex-1 flex overflow-hidden">
                {/* Editor Section */}
                <div className="w-1/2 border-r border-[var(--border)] flex flex-col relative group">
                    <div className="h-9 flex items-center px-4 bg-[var(--bg-sidebar)] border-b border-[var(--border)] justify-between select-none">
                        <div className="flex items-center gap-2">
                            <Code size={14} className="text-[#e34c26]" />
                            <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">HTML Editor</span>
                        </div>
                    </div>
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="<!-- Write your HTML code here... -->"
                        className="flex-1 w-full bg-[#1e1e1e] text-[#d4d4d4] p-4 font-mono text-sm resize-none focus:outline-none leading-relaxed selection:bg-[#264f78]"
                        spellCheck={false}
                        autoFocus
                    />
                </div>

                {/* Preview Section */}
                <div className="w-1/2 flex flex-col bg-white border-l border-[var(--border)]">
                    <div className="h-9 flex items-center px-4 bg-[#f0f0f0] border-b border-[#e0e0e0] gap-2 select-none">
                        <Layout size={14} className="text-gray-600" />
                        <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Live Preview</span>
                    </div>
                    <iframe
                        srcDoc={code}
                        className="flex-1 w-full h-full border-none bg-white"
                        title="Preview"
                        sandbox="allow-scripts allow-modals"
                    />
                </div>
            </div>

            {/* Footer Toolbar */}
            <div className="h-12 bg-[var(--bg-sidebar)] border-t border-[var(--border)] flex items-center px-6 justify-between flex-shrink-0 z-20">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setCode(SAMPLE_CODE)}
                        className="flex items-center gap-2 text-xs font-medium text-[var(--text-main)] hover:text-white px-4 py-2 rounded hover:bg-[var(--bg-activity)] transition-colors border border-[var(--border)] hover:border-[var(--accent)]"
                    >
                        <RefreshCw size={14} />
                        Sample Code
                    </button>
                </div>

                <button
                    onClick={() => {
                        setIsActive(false);
                        setCode('');
                    }}
                    className="flex items-center gap-2 text-xs text-[var(--text-muted)] hover:text-white px-3 py-1.5 rounded hover:bg-red-500/20 hover:text-red-400 transition-colors"
                >
                    <X size={14} />
                    Close
                </button>
            </div>
        </div>
    );
};

export default HtmlPlayground;
