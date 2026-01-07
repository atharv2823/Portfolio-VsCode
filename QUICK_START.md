# Quick Start Guide

## 🚀 Getting Started in 3 Minutes

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Get Your Gemini API Key

1. Visit https://aistudio.google.com/
2. Sign in with your Google account
3. Click "Get API Key"
4. Copy your API key

### Step 3: Configure Environment

Open `.env.local` and replace `your_gemini_api_key_here` with your actual API key:

```env
GEMINI_API_KEY=AIza...your_actual_key
```

### Step 4: Start the App

```bash
npm run dev
```

The app will open at: http://localhost:3000

---

## ⌨️ Keyboard Shortcuts

| Shortcut             | Action           |
| -------------------- | ---------------- |
| `Ctrl + B`           | Toggle sidebar   |
| `Ctrl + J`           | Toggle terminal  |
| `Ctrl + \``          | Focus terminal   |
| `Ctrl + W`           | Close active tab |
| `Ctrl + Tab`         | Next tab         |
| `Ctrl + Shift + Tab` | Previous tab     |

---

## 🎨 Customization Tips

### Change Portfolio Content

Edit `constants.tsx` to update:

- Your name and bio (about.md)
- Projects list (projects.json)
- Skills (skills.ts)
- Experience timeline (experience.log)

### Add New Files

In `constants.tsx`, add new file objects to the `FILES` array:

```typescript
{
  id: 'contact.md',
  name: 'contact.md',
  type: 'markdown',
  icon: 'md',
  content: `# Contact\nEmail: your@email.com`
}
```

### Modify Themes

Edit CSS custom properties in `index.html` under each `[data-theme]` selector.

---

## 🐛 Troubleshooting

### Problem: "API key not found" error

**Solution:** Make sure `.env.local` exists and contains `GEMINI_API_KEY=your_key`

### Problem: Changes not reflecting

**Solution:** Stop the dev server (`Ctrl + C`) and restart with `npm run dev`

### Problem: Port 3000 in use

**Solution:** Kill the process or change port in `vite.config.ts`:

```typescript
server: {
  port: 3001, // Change to any available port
}
```

---

## 📦 Deployment

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

```bash
npm run build
# Drag & drop the 'dist' folder to Netlify
```

**Important:** Add `GEMINI_API_KEY` to your hosting platform's environment variables!

---

## 🎯 Next Steps

1. Replace placeholder data with your actual information
2. Add your real projects with live demo links
3. Customize colors and themes to match your brand
4. Add a custom domain
5. Share your portfolio URL!

---

## 📚 Helpful Resources

- [Full Documentation](./CODEBASE_DOCUMENTATION.md)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Docs](https://react.dev/)
- [Gemini API](https://ai.google.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
