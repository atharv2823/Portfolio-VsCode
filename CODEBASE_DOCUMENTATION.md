# DevCode Portfolio - Complete Codebase Documentation

## 📋 Project Overview

**Project Name:** DevCode Portfolio  
**Type:** Interactive VS Code-themed Portfolio Website  
**Tech Stack:** React 19, TypeScript, Vite, TailwindCSS, Google Gemini AI  
**Purpose:** A high-end, interactive software developer portfolio that mimics the VS Code interface

---

## 🏗️ Architecture Overview

This is a **Single Page Application (SPA)** built with React that simulates a VS Code editor interface. It features:

- File explorer sidebar
- Tabbed code editor with syntax highlighting
- Integrated terminal display
- AI-powered chat assistant (GitHub Copilot-style)
- Theme switcher (Dark, Light, Monokai)
- Project preview mode for JSON files

---

## 📁 Project Structure

```
devcode/
├── index.html              # Main HTML entry point with Tailwind CDN
├── index.tsx              # React app entry point
├── App.tsx                # Main application component
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── metadata.json          # Project metadata
├── README.md              # Project documentation
├── types.ts               # TypeScript type definitions
├── constants.tsx          # Portfolio data and file constants
├── components/
│   ├── ActivityBar.tsx    # Left sidebar navigation icons
│   ├── ChatSidebar.tsx    # AI Copilot chat interface
│   ├── ProjectPreview.tsx # Project cards preview mode
│   ├── SettingsMenu.tsx   # Theme settings dropdown
│   ├── Sidebar.tsx        # File explorer panel
│   ├── StatusBar.tsx      # Bottom status bar
│   ├── SyntaxHighlighter.tsx # Code syntax highlighting
│   └── Terminal.tsx       # Terminal panel display
└── services/
    └── geminiService.ts   # Google Gemini AI integration
```

---

## 🔍 Detailed File Breakdown

### **1. Entry Points**

#### `index.html`

- Uses **Tailwind CDN** for styling
- Defines CSS custom properties for theming (dark, light, monokai)
- Includes **Fira Code** font for code aesthetics
- Uses **import maps** for ESM module resolution
- Mounts React app to `#root` div

#### `index.tsx`

- Creates React root and renders `<App />` component
- Wrapped in `React.StrictMode` for development warnings

---

### **2. Core Application**

#### `App.tsx` (Main Component)

**State Management:**

- `activeFileId`: Currently open file
- `openFiles`: Array of open file tabs
- `isChatOpen`: Chat sidebar visibility
- `isSidebarOpen`: File explorer visibility
- `isTerminalOpen`: Terminal panel visibility
- `activePanel`: Which activity bar item is active
- `currentTheme`: Selected theme (dark/light/monokai)
- `previewMode`: Toggle between code/preview for files

**Key Features:**

- Tab management (open, close, switch files)
- Theme switching with CSS custom properties
- Responsive sidebar/terminal toggling
- Preview/code mode toggle for markdown/JSON files

**Layout Structure:**

```
Top Menu Bar
├── Activity Bar (left)
├── Sidebar (file explorer)
├── Main Editor Area
│   ├── Tab Bar
│   ├── Content Area (code or preview)
│   └── Terminal Panel
├── Chat Sidebar (right)
└── Status Bar (bottom)
```

---

### **3. Constants & Types**

#### `types.ts`

Defines TypeScript interfaces:

- `PortfolioFile`: File structure (id, name, type, content, icon)
- `ChatMessage`: Chat message structure
- `Project`: Project data structure
- `Skill`: Skill category structure
- `FileType`: Literal types for file types

#### `constants.tsx`

Contains portfolio data:

- **THEMES**: Available color themes
- **FILES**: Portfolio content (about.md, projects.json, skills.ts, experience.log)
- **FileIconMap**: Maps file types to Lucide React icons

**Portfolio Content:**

- About: Bio for "Alex Rivera"
- Projects: 3 sample projects (CloudScale AI, EtherFlow, NexusOS)
- Skills: Frontend, Backend, Infrastructure categories
- Experience: Log-style career timeline

---

### **4. Components**

#### `ActivityBar.tsx`

- Vertical left sidebar with icons
- Navigation items: Explorer, Search, Git, Run, Extensions
- Bottom items: Chat, User, Settings
- Highlights active panel

#### `Sidebar.tsx`

- File explorer panel
- Expandable "Portfolio_V1" folder
- Lists all portfolio files with icons
- Highlights active file

#### `ChatSidebar.tsx`

- AI chat interface (GitHub Copilot style)
- Uses Google Gemini AI via `geminiService`
- Features:
  - Message history with user/assistant bubbles
  - Typing indicator with loading spinner
  - Send button and Enter key support
  - Auto-scrolls to latest message

#### `SyntaxHighlighter.tsx`

- Custom code highlighting for different file types
- Supports: JSON, TypeScript, Markdown, Log files
- Line numbers on the left
- Color-coded syntax based on file type

#### `ProjectPreview.tsx`

- Card-based grid layout for projects
- Parses `projects.json` content
- Displays: project name, description, tech stack, status badge
- Action buttons: Live Demo, Video Walkthrough

#### `Terminal.tsx`

- Static terminal display
- Tabs: Problems, Output, Terminal, Debug Console
- Shows mock build output
- Animated cursor

#### `StatusBar.tsx`

- Bottom status bar (VS Code style)
- Shows: Git branch, sync status, encoding, formatter, connection
- Blue background with white text

#### `SettingsMenu.tsx`

- Floating dropdown for theme selection
- Shows theme name and color preview
- Closes on selection

---

### **5. Services**

#### `geminiService.ts`

- Integrates **Google Gemini AI** (gemini-3-flash-preview model)
- Provides context-aware chat about portfolio
- Uses system instruction with portfolio data as context
- Handles API errors gracefully

**API Key:** Expects `GEMINI_API_KEY` in environment

---

### **6. Configuration Files**

#### `package.json`

**Dependencies:**

- `react` & `react-dom` (v19.2.3)
- `lucide-react` (icons)
- `@google/genai` (AI integration)

**Dev Dependencies:**

- `vite` (build tool)
- `@vitejs/plugin-react` (React support)
- `typescript` (type checking)

**Scripts:**

- `npm run dev`: Start development server (port 3000)
- `npm run build`: Production build
- `npm run preview`: Preview production build

#### `vite.config.ts`

- Development server on port 3000
- Environment variable injection (`GEMINI_API_KEY`)
- Path alias: `@` points to project root

#### `tsconfig.json`

- Target: ES2022
- Module: ESNext
- JSX: react-jsx
- Path alias support
- No emit (Vite handles bundling)

---

## 🚀 How to Run This Project

### Prerequisites

- **Node.js** (v16+ recommended)
- **npm** or **yarn**

### Step-by-Step Instructions

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   Create a `.env.local` file in the root directory:

   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

   Get your API key from: https://aistudio.google.com/

3. **Start Development Server**

   ```bash
   npm run dev
   ```

   The app will run on: `http://localhost:3000`

4. **Build for Production**

   ```bash
   npm run build
   ```

   Output will be in the `dist/` folder

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

---

## 🎨 Features & Functionality

### 1. **File Management**

- Click files in sidebar to open them
- Multiple files can be open as tabs
- Close tabs with X button
- Active tab highlighted with accent color

### 2. **Code Viewing**

- Custom syntax highlighting for each file type
- Line numbers on the left
- Hover effects on lines

### 3. **Preview Mode**

- Available for JSON and Markdown files
- Toggle with Eye/Code icon in tab bar
- Projects JSON shows beautiful card layout
- Markdown would render formatted text

### 4. **AI Copilot**

- Click message icon in activity bar
- Ask questions about Alex's portfolio
- Context-aware responses using Gemini AI
- Chat history maintained during session

### 5. **Themes**

- Click settings icon in activity bar
- Choose from Dark, Light, or Monokai
- Smooth transitions between themes
- Persists during session

### 6. **Responsive Design**

- Sidebar auto-hides on mobile (<1024px)
- Chat sidebar slides in/out
- Terminal can be toggled

---

## 🔧 Key Technologies Explained

### **React 19**

- Latest React version with concurrent features
- Function components with hooks
- State management via `useState`
- Side effects with `useEffect`

### **TypeScript**

- Type safety for props and state
- Interface definitions in `types.ts`
- Compile-time error checking

### **Vite**

- Fast development server with HMR
- Optimized production builds
- Environment variable support

### **Tailwind CSS**

- Utility-first CSS via CDN
- Custom properties for theming
- Responsive classes

### **Lucide React**

- Modern icon library
- Tree-shakeable
- Consistent design

### **Google Gemini AI**

- LLM-powered chat assistant
- Context-aware responses
- Multi-turn conversations

---

## 🎯 User Journey

1. User lands on page → sees VS Code interface
2. File explorer shows portfolio files
3. First file (`about.md`) is open by default
4. User can:
   - Browse different files
   - View code with syntax highlighting
   - Toggle preview mode for projects
   - Open AI chat to ask questions
   - Change theme
   - View simulated terminal output

---

## 🐛 Potential Issues & Solutions

### Issue: "AI not responding"

**Cause:** Missing or invalid `GEMINI_API_KEY`
**Solution:** Ensure `.env.local` has valid API key

### Issue: "App not loading"

**Cause:** Dependencies not installed
**Solution:** Run `npm install`

### Issue: "Port 3000 already in use"

**Cause:** Another app using the port
**Solution:** Kill the process or change port in `vite.config.ts`

---

## 🚀 Possible Improvements

1. **Backend Integration**

   - Save chat history to database
   - Dynamic portfolio content from CMS
   - Contact form submission

2. **Enhanced Features**

   - File search functionality
   - Git integration (real commits)
   - Real terminal (execute commands)
   - File editing capability
   - More file types support

3. **Performance**

   - Code splitting
   - Lazy loading components
   - Service worker for offline support

4. **SEO & Meta**

   - Server-side rendering
   - Dynamic meta tags
   - sitemap.xml

5. **Animations**
   - Page transitions
   - Micro-interactions
   - Loading states

---

## 📊 Component Dependency Graph

```
App.tsx
├── ActivityBar
├── Sidebar
├── ChatSidebar
│   └── GeminiService
├── SettingsMenu
├── StatusBar
├── Terminal
├── SyntaxHighlighter
└── ProjectPreview
```

---

## 🔐 Environment Variables

| Variable         | Description                       | Required |
| ---------------- | --------------------------------- | -------- |
| `GEMINI_API_KEY` | Google Gemini API key for AI chat | Yes      |

---

## 📝 Code Conventions

- **Components:** PascalCase, functional components with TypeScript
- **Files:** camelCase for TypeScript, PascalCase for components
- **Styling:** Tailwind utility classes + CSS custom properties
- **State:** React hooks (useState, useEffect, useRef)
- **Props:** Explicit TypeScript interfaces

---

## 🎓 Learning Points

This codebase demonstrates:

1. **Component composition** in React
2. **State management** without external libraries
3. **TypeScript** integration with React
4. **CSS custom properties** for theming
5. **Third-party API** integration (Google Gemini)
6. **Responsive design** patterns
7. **Code organization** and file structure
8. **Vite** configuration and usage

---

## 📞 Support & Resources

- **Vite Docs:** https://vitejs.dev/
- **React Docs:** https://react.dev/
- **Tailwind CSS:** https://tailwindcss.com/
- **Lucide Icons:** https://lucide.dev/
- **Google Gemini:** https://ai.google.dev/

---

**Last Updated:** January 2026  
**Maintained By:** Development Team
