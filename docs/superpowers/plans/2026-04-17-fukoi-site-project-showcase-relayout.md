# Fukoi Site Project Showcase Relayout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the homepage project showcase so the two featured projects read as a single editorially composed portfolio section instead of two imbalanced stacked cards.

**Architecture:** Replace the current stacked-card structure with two alternating project rows on desktop, collapse them into equal-weight vertical project units on smaller screens, and retune the tactical project image crop so the tank no longer dominates the frame. Keep shared text in `content.js`, markup in `index.html`, and all layout logic in `index.css`.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, local Python HTTP server, local Playwright verification.

---

### Task 1: Update Shared Project Copy Hooks

**Files:**
- Modify: `content.js`

- [ ] **Step 1: Keep the current project-section headings but confirm they support a portfolio-style section**
- [ ] **Step 2: Keep both project titles and actions aligned with the new alternating layout**
- [ ] **Step 3: Preserve the visual meta labels used as image captions so they can move into the new frame system**

### Task 2: Rebuild Project Section Markup

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace the stacked `.project-card` structure with two alternating editorial project rows**
- [ ] **Step 2: Keep each project row self-contained, with one visual block and one copy block**
- [ ] **Step 3: Put Tactical first with image-left / copy-right, and Goblin second with copy-left / image-right**
- [ ] **Step 4: Preserve existing project text, status badges, and CTA links**

### Task 3: Redesign Project Section Styling

**Files:**
- Modify: `index.css`

- [ ] **Step 1: Remove the old stacked-card proportion system that created the “one large, one small” effect**
- [ ] **Step 2: Add a unified editorial row layout with matched frame language, spacing, and border treatment**
- [ ] **Step 3: Retune the tactical image crop using a more balanced `object-position` and scale**
- [ ] **Step 4: Keep Goblin in the same visual system so it reads as an equal second project**
- [ ] **Step 5: Add responsive rules so mobile and tablet collapse into equal-weight vertical project modules**

### Task 4: Validate Visual Output

**Files:**
- Modify: `index.html`
- Modify: `index.css`
- Modify: `content.js`

- [ ] **Step 1: Run JS parse verification**
- [ ] **Step 2: Serve the site locally and inspect the homepage in desktop and mobile viewports**
- [ ] **Step 3: Capture screenshots of the project section after scroll positioning**
- [ ] **Step 4: Confirm the tactical image no longer feels over-zoomed and the two projects feel equally weighted**

### Task 5: Publish The Relayout

**Files:**
- Modify: `index.html`
- Modify: `index.css`
- Modify: `content.js`

- [ ] **Step 1: Review final diff for homepage-only scope**
- [ ] **Step 2: Commit with a project-showcase relayout message**
- [ ] **Step 3: Push `main` to GitHub**
