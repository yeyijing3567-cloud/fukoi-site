# Fukoi Site Company Refresh Design

**Date:** 2026-04-16

## Goal

Refresh the current static site so it still feels like a premium game studio site, while clearly presenting `株式会社富鯉` as a real operating company suitable for external audiences.

## Core Decisions

- Keep the site visually cinematic, dark, and project-led.
- Move from a single-page landing page to a two-page static structure:
  - `index.html` for Home / projects
  - `studio.html` for `STUDIO / COMPANY`
- Use `株式会社富鯉` as the only fixed company identity for now.
- Do not lock the public-facing brand name to `FURI STUDIO` or `FUKOI STUDIO`.
- Use the tactical pixel-art project as the primary visual anchor.
- Keep `PROJECT: GOBLIN` as a secondary featured project.

## Information Architecture

### Home

- Hero with company-led identification and tactical-project-first visual direction
- `ABOUT FUKOI`
- `FEATURED TITLES`
- `COMPANY INFO`
- enhanced footer

### Studio / Company

- page hero
- company / studio narrative
- `CURRENT INITIATIVES`
- `COMPANY INFO`
- shared footer

## Copy Constraints

- Use the provided legal/company information exactly.
- Keep AI wording strong and matter-of-fact.
- Avoid explaining company structure, size excuses, or references to Baili.
- Avoid turning the homepage into a traditional corporate page.

## Implementation Notes

- Replace inline translation logic with shared `content.js`.
- Upgrade `index.js` into a shared site script for both pages.
- Keep a single shared stylesheet for the two-page static site.
