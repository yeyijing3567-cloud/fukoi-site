# Fukoi Site Company Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the static company site into a premium two-page studio/company website with stronger company presence and updated featured project hierarchy.

**Architecture:** Keep the site static and lightweight. Centralize copy in a shared translation file, reuse one shared stylesheet, and let both pages mount through one shared browser script for language switching and scroll behavior.

**Tech Stack:** HTML, CSS, vanilla JavaScript

---

### Task 1: Shared content and behavior

**Files:**
- Create: `content.js`
- Modify: `index.js`

- [ ] Define shared copy structure for `common`, `home`, and `studio`
- [ ] Replace page-local translation logic with shared runtime lookup
- [ ] Keep language persistence with `localStorage`
- [ ] Preserve smooth scrolling and nav scrolled state

### Task 2: Home page restructure

**Files:**
- Modify: `index.html`
- Modify: `index.css`

- [ ] Replace old hero with company-led tactical-project-first layout
- [ ] Add `ABOUT FUKOI`
- [ ] Rebuild featured project cards with tactical project first and Goblin second
- [ ] Add `COMPANY INFO`
- [ ] Expand footer content

### Task 3: Studio / Company page

**Files:**
- Create: `studio.html`
- Modify: `index.css`

- [ ] Add dedicated `STUDIO / COMPANY` page
- [ ] Add main narrative copy
- [ ] Add `CURRENT INITIATIVES`
- [ ] Add shared company info and footer

### Task 4: Project assets and cleanup

**Files:**
- Create: `assets/images/new-tactical-poster.png`
- Create: `assets/images/new-tactical-logo.png`
- Modify: `.gitignore`

- [ ] Bring website-safe tactical project assets into the repo
- [ ] Ignore brainstorm artifacts

### Task 5: Verification

**Files:**
- Modify: none

- [ ] Run a local static server
- [ ] Verify both pages load
- [ ] Verify language switching
- [ ] Verify anchor navigation and responsive layout basics
- [ ] Push to GitHub only after local checks pass
