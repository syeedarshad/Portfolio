# Syeed Arshad — Portfolio

Personal portfolio for **Syeed Arshad** — AI Native Developer, Software Developer, and Full-Stack Developer. Built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- lucide-react (icons)

## Project Structure

```
public/
  assets/            # profile.jpg, project images, favicon
  attachments/        # resume.pdf
src/
  components/         # Navbar, Footer, Badge, SectionHeading, RevealOnScroll
  sections/           # Hero, About, Projects, Skills, Experience, Contact, etc.
  pages/              # Home (composes all sections)
  hooks/              # useScrollTo
  utils/              # cn (classnames helper)
  data/               # profile.ts, projects.ts, skills.ts, experience.ts,
                       # certifications.ts, social.ts — edit these to update content
  styles/             # index.css (Tailwind + design tokens)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

### Build

```bash
npm run build
```

Output is generated in `dist/`.

### Preview the production build locally

```bash
npm run preview
```

## Updating Content

All editable content lives in `src/data/`:

| File | Controls |
|---|---|
| `profile.ts` | Name, roles, tagline, about text, image/resume paths |
| `projects.ts` | Featured projects |
| `skills.ts` | Skill groups, "What I Build" cards, "Currently Exploring" badges |
| `experience.ts` | Work experience timeline |
| `certifications.ts` | Certification cards |
| `social.ts` | Email, LinkedIn, GitHub links |

### Replacing placeholder assets

This repo ships with generated placeholder images and a placeholder PDF so the site runs out of the box. Replace them before publishing:

- `public/assets/profile.jpg` — your photo
- `public/assets/projects/*.jpg` — project screenshots
- `public/attachments/resume.pdf` — your actual resume
- `src/data/social.ts` — your real email, LinkedIn, and GitHub URLs
- `src/sections/GithubShowcase.tsx` — update `GITHUB_USERNAME` to your GitHub username so the live repository cards pull from your account

## Deployment (Vercel)

This project is pre-configured for Vercel with `vercel.json`, `robots.txt`, and `sitemap.xml`.

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects the Vite framework preset — no configuration needed.
4. Deploy. The site will be live at your assigned `*.vercel.app` domain.

Before deploying, update `sitemap.xml` and `robots.txt` with your real production domain.

### Manual deploy via CLI

```bash
npm install -g vercel
vercel --prod
```

## License

MIT — see [LICENSE](./LICENSE).
