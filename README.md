# 3D Services

A responsive, buildless service page for four reality capture offerings:

1. 360° Site Documentation
2. Mobile Mapping for Revit
3. GNSS & Photogrammetry
4. Survey-Controlled LiDAR

## Run locally

Open `index.html` directly in a browser, or run `python3 -m http.server 8000` from this directory and visit http://localhost:8000.

No package installation, build step, API key, account, or external asset service is required. All paths are relative, including on GitHub project Pages sites.

## Add to GitHub

Extract the ZIP and place the contents of `four-services/` at your repository root. Commit `index.html`, `styles.css`, `app.js`, `assets/`, `.nojekyll`, and this README.

To publish with GitHub Pages, select the repository branch and its root folder as the Pages source in repository settings. This package does not create a repository or publish anything automatically.

## Customize

- `index.html`: service copy, branding, navigation, and comparison content.
- `styles.css`: colors, typography, responsive layouts, and print styles.
- `app.js`: service switching and Markdown brief generation. Keep the `services` object aligned with changes to page copy.
- `assets/*.svg`: original, editable schematic illustrations. These are concept graphics, not project data or instrument accuracy diagrams.

## Behavior

- Choose any of the four services to inspect its details.
- Add services to the brief; selection is additive.
- Enter a decision and download a Markdown brief.
- Inputs exist only in the current page and are lost on reload. No data is transmitted, logged or persisted by this page.
- Without JavaScript, all service descriptions remain visible. Brief generation requires JavaScript.
- Print styles expose every service, including panels hidden on screen.
- No analytics, cookies, external fonts, tracking, framework, or backend.

## Before using as an organization’s public site

Replace the generic identity with approved branding and review service names, capabilities, deliverables and accuracy language with the responsible team. No company affiliation, pricing, numeric accuracy promise or professional certification is implied by this concept.

## Verification

Verified in a desktop browser: all four service panels switch, local illustrations load, additive brief selection works, and submitting a completed brief reports a download. JavaScript syntax and local asset references were also checked. Responsive CSS is included; a separate mobile-browser session was not tested.
