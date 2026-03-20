# Ignatius Wirawan — Developer Portfolio

A dark cinematic noir portfolio built with React, TypeScript, and Vite.
Themed around old roll film, 35mm aesthetics, and murder case pin boards.

---

## Live Site

[ignatiusworkemail@gmail.com](mailto:ignatiusworkemail@gmail.com) · [github.com/ignatiusdariel](https://github.com/ignatiusdariel) · [linkedin.com/in/ignatius-wirawan](https://www.linkedin.com/in/ignatius-wirawan/)

---

## Features

- **Film roll dashboard** — horizontally scrolling 35mm film reel showcasing projects
- **Murder case pin board** — clicking a project frame triggers a cinematic projector flash transition into a corkboard detail view with evidence cards, suspect tags, string lines, and polaroids
- **Wanted poster contact section** — animated wanted poster slides in alongside a contact form wired to EmailJS
- **Dossier about section** — classified document card with skill reel
- **Film overlay effects** — grain, vignette, scanlines, scratch lines, sprocket holes, and frame number counter throughout

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | CSS Modules + Tailwind CSS |
| UI components | shadcn-ui |
| Email | EmailJS (`@emailjs/browser`) |
| Icons | Lucide React, React Icons |

---

## Getting Started

The only requirement is Node.js & npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
```sh
# Clone the repo
git clone <YOUR_GIT_URL>

# Navigate into the project
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the dev server
npm run dev
```

---

## Environment — EmailJS

The contact form sends email via EmailJS. Add your credentials directly in `src/components/Contact.tsx`:
```ts
const EMAILJS_SERVICE_ID  = 'service_xxxxxxx';
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx';
const EMAILJS_PUBLIC_KEY  = 'xxxxxxxxxxxxxxxxxxxx';
```

To get these: sign up at [emailjs.com](https://emailjs.com) → connect an email service → create a template with variables `{{from_name}}`, `{{from_email}}`, `{{message}}` → copy the three IDs.

---

## Project Structure
```
src/
├── components/
│   ├── About.tsx          # Dossier card + skill reel
│   ├── CaseBoard.tsx      # Murder case pin board detail overlay
│   ├── Contact.tsx        # Wanted poster + EmailJS contact form
│   ├── FilmReel.tsx       # Scrolling 35mm film strip work gallery
│   ├── FilmOverlay.tsx    # Grain, scanlines, scratches, sprockets
│   ├── FilmLeader.tsx     # 3-2-1 countdown intro animation
│   ├── Hero.tsx           # Landing section
│   ├── Navbar.tsx
│   ├── Resume.tsx         # Timeline + tech arsenal grid
│   └── Footer.tsx
├── data/
│   └── index.ts           # All portfolio content — edit here
├── types/
│   └── index.ts           # TypeScript interfaces
└── styles/
    └── global.css         # CSS variables and base styles
```

---

## Customisation

All content lives in **`src/data/index.ts`**. Edit that one file to update your name, projects, experience, skills, and contact links. Each project supports a full case board with `clues`, `suspects`, `role`, `outcome`, `liveUrl`, and `repoUrl`.

---

## Deployment

To connect a custom domain: **Project → Settings → Domains → Connect Domain**.

---

## Editing Options

**Local IDE** — clone, edit, push. 

**GitHub** — edit files directly in the browser using the pencil icon.

**Codespaces** — open the repo → Code → Codespaces → New codespace.
