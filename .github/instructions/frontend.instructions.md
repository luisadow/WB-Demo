---
description: "Use when: frontend work for the Wozniak-Bau landing page (Astro + Tailwind + GSAP)"
applyTo: "src/**"
---

# Frontend instructions

## Goal and scope
- Build a one-page landing site (digital business card).
- Content sections: short company overview, services, contact form, impressum.
- Use the logo and business card data for the impressum.
- No team photos or extra sections unless requested later.

## Stack
- Astro + Tailwind + GSAP.
- Keep JS minimal; use client JS only for animations and form handling.
- Prefer Astro components for structure; avoid heavy client frameworks unless asked.

## Visual direction
- Modern, high-end, clean layout with strong typography.
- On page load: a bold color splash animation.
- Add tasteful section reveals and subtle motion; do not over-animate.
- Must look great on mobile and desktop.

## Contact form
- Must work without a backend for now (mailto or external form service).
- Ask before adding any backend or third-party service.

## Deploy notes
- If deploying as a GitHub Pages project site, set `site` and `base` in `astro.config.mjs`.
- Use relative asset paths and verify all assets load under `/REPO/`.

## Assets
- Logo: [LOGO.pdf](../../LOGO.pdf)
- Business card data: [Visitenkarte Vorderseite.pdf](../../Visitenkarte%20Vorderseite.pdf), [Visitenkarte Rueckseite.pdf](../../Visitenkarte%20Rueckseite.pdf)
