# 🚀 DevCode Portfolio - VS Code Themed Portfolio Website

A stunning, interactive developer portfolio that mimics the VS Code interface. Features include file explorer, code editor with syntax highlighting, integrated terminal, and AI-powered chat assistant.

[![React](https://img.shields.io/badge/React-19.2.3-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Features

- 🎨 **VS Code UI** - Authentic VS Code interface with activity bar, sidebar, and status bar
- 📁 **File Explorer** - Browse portfolio files with syntax highlighting
- 💬 **AI Copilot** - Chat with Gemini AI about the portfolio
- 🎭 **Theme Switcher** - Dark, Light, and Monokai themes
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- ⌨️ **Keyboard Shortcuts** - Ctrl+B (sidebar), Ctrl+J (terminal), Ctrl+W (close tab)
- 📋 **Copy to Clipboard** - Copy any file content with one click
- 🔄 **Live Preview** - Toggle between code and preview mode for projects
- 💾 **State Persistence** - Remembers your open files and theme preference

## 🚀 Quick Start (Windows)

### Option 1: Automated Setup (Recommended)

1. **Double-click `setup.bat`**
2. Follow the prompts
3. Get your Gemini API key from [Google AI Studio](https://aistudio.google.com/)
4. Edit `.env.local` and paste your API key
5. Done! 🎉

### Option 2: Manual Setup

```bash
# 1. Install dependencies
npm install

# 2. Create .env.local file
# Add this line with your actual API key:
# GEMINI_API_KEY=your_key_here

# 3. Start development server
npm run dev

# 4. Open browser to http://localhost:3000
```

## 📚 Documentation

- **[Complete Codebase Documentation](CODEBASE_DOCUMENTATION.md)** - Detailed architecture and file breakdown
- **[Quick Start Guide](QUICK_START.md)** - Get up and running in 3 minutes
- **[API Reference](https://ai.google.dev/)** - Google Gemini AI documentation

## 🛠️ Tech Stack

| Technology           | Purpose                           |
| -------------------- | --------------------------------- |
| **React 19**         | UI framework with latest features |
| **TypeScript**       | Type safety and better DX         |
| **Vite**             | Fast build tool and dev server    |
| **Tailwind CSS**     | Utility-first styling             |
| **Lucide React**     | Beautiful icon library            |
| **Google Gemini AI** | AI-powered chat assistant         |

## 📁 Project Structure

```
devcode/
├── components/          # React components
│   ├── ActivityBar.tsx  # Left sidebar navigation
│   ├── ChatSidebar.tsx  # AI chat interface
│   ├── ProjectPreview.tsx # Project cards view
│   ├── Sidebar.tsx      # File explorer
│   ├── Terminal.tsx     # Terminal panel
│   └── ...
├── services/
│   └── geminiService.ts # AI integration
├── App.tsx              # Main app component
├── constants.tsx        # Portfolio data
├── types.ts             # TypeScript types
└── setup.bat            # Windows setup script
```

## ⌨️ Keyboard Shortcuts

| Shortcut    | Action           |
| ----------- | ---------------- |
| `Ctrl + B`  | Toggle sidebar   |
| `Ctrl + J`  | Toggle terminal  |
| `Ctrl + W`  | Close active tab |
| `Ctrl + \`` | Focus terminal   |

## 🎨 Customization

### Update Portfolio Content

Edit [constants.tsx](constants.tsx) to change:

- Your bio and information
- Project showcase
- Skills and tech stack
- Experience timeline

### Change Themes

Modify CSS variables in [index.html](index.html) under each `[data-theme]` selector.

### Add New Files

Add file objects to the `FILES` array in [constants.tsx](constants.tsx).

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Run `npm run build`
2. Drag & drop the `dist` folder to [Netlify](https://netlify.com)

**⚠️ Important:** Add `GEMINI_API_KEY` as an environment variable in your hosting platform!

## 📝 Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start development server (port 3000) |
| `npm run build`   | Build for production                 |
| `npm run preview` | Preview production build             |

## 🐛 Troubleshooting

### "API key not found" error

- Make sure `.env.local` exists in the root directory
- Verify it contains: `GEMINI_API_KEY=your_actual_key`
- Restart the dev server after adding the key

### Port 3000 already in use

- Change the port in [vite.config.ts](vite.config.ts)
- Or kill the process using port 3000

### Changes not appearing

- Stop the server (Ctrl+C)
- Clear browser cache
- Restart with `npm run dev`

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌟 Credits

Built with ❤️ using:

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Google Gemini AI](https://ai.google.dev/)
- [Lucide Icons](https://lucide.dev/)

## 📞 Support

Need help? Check out:

- [Complete Documentation](CODEBASE_DOCUMENTATION.md)
- [Quick Start Guide](QUICK_START.md)
- [GitHub Issues](../../issues)

---

<div align="center">
Made with 💻 and ☕
</div>
