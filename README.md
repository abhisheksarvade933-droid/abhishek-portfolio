# Abhishek Sarvade – Developer Portfolio

A responsive React + CSS portfolio with dark/light theme switching.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Open the terminal and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Before publishing — personalize these items

- Add your own profile photo if you want one. The current hero uses an AS monogram, not another person's photo.
- Add your latest resume as `public/resume.pdf`. The View Resume button links to this file.
- Add verified GitHub repository links and screenshots to the project cards.
- Confirm your education institution, graduation year and internship dates.
- Review the Infopedia project description and only state the work you personally completed.
- Confirm the listed technologies reflect your current skill level.
- Check your contact links and email.

## Build for production

```bash
npm run build
```

The production site is generated in `dist/`.

## Deploy to Vercel

Push this project to GitHub, import the repository in Vercel, and use:
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
