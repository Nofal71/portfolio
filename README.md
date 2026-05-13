# Portfolio — nofalhassaan.vercel.app

Personal portfolio for Nofal Hassaan. Next.js 15 (App Router), TypeScript, no UI library.

## Deploy in 10 minutes

### 1. Create the GitHub repo

1. Go to https://github.com/new
2. Repository name: `portfolio`
3. Set to **Public**
4. **Do NOT** initialize with README, .gitignore, or license
5. Click "Create repository"
6. Copy the URL it shows (e.g. `https://github.com/Nofal71/portfolio.git`)

### 2. Push this code

From this folder, in your terminal:

```bash
git init
git add .
git commit -m "initial portfolio"
git branch -M main
git remote add origin https://github.com/Nofal71/portfolio.git
git push -u origin main
```

### 3. Deploy on Vercel

1. Go to https://vercel.com/new
2. Sign in with your GitHub account (link Nofal71 if you haven't)
3. Find the `portfolio` repo in the list → click **Import**
4. Leave all settings as default
5. Click **Deploy**
6. Wait ~60 seconds

Your site will be live at `https://portfolio-<random>.vercel.app`.

### 4. Get the clean URL `nofalhassaan.vercel.app`

1. In the Vercel dashboard, open your `portfolio` project
2. Go to **Settings → Domains**
3. Add `nofalhassaan.vercel.app` (you can pick any available `*.vercel.app` subdomain in your account)
4. Save

Done. Update your CV, LinkedIn, and GitHub bio with the new URL.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Editing content

Everything lives in `app/page.tsx`. Edit the strings directly — case studies, about copy, stack, contact info. CSS variables for the theme are at the top of `app/globals.css`.

## Tech

- Next.js 15.0.3 (App Router)
- TypeScript 5
- React 19
- Google Fonts: Instrument Serif (display), Geist (body), JetBrains Mono (code/labels)
- No Tailwind, no UI library — raw CSS for full design control
"# portfolio" 
