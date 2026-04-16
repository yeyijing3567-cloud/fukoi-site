# Fukoi Site CSS Direction Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the site visual system so `fukoi.co` reads as a polished game company website instead of a generic dark SaaS landing page.

**Architecture:** Keep the current HTML structure mostly intact, but replace the current visual token system with a more restrained editorial system inspired by RunwayML, Vercel, and Ferrari. Focus on fewer accents, one coherent typography system, sharper surfaces, cleaner CTA treatment, and more intentional section hierarchy.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, local Playwright CLI screenshots for verification.

---

### Task 1: Redefine The Visual Token System

**Files:**
- Modify: `index.css`

- [ ] **Step 1: Replace the current color, typography, radius, and shadow tokens**
- [ ] **Step 2: Remove multi-accent behavior and collapse emphasis to one restrained warm accent**
- [ ] **Step 3: Reduce card radius and shadow intensity site-wide**
- [ ] **Step 4: Rebalance base body and heading typography for JP/EN mixed content**

### Task 2: Rework Navigation And Hero Tone

**Files:**
- Modify: `index.css`
- Modify: `index.html`
- Modify: `studio.html`

- [ ] **Step 1: Tighten navigation styling to feel more premium and less app-template-like**
- [ ] **Step 2: Rework hero spacing, labels, and CTA styling to reduce marketing-template feel**
- [ ] **Step 3: Improve featured project card composition without changing content hierarchy**

### Task 3: Rebuild Section And Card Language

**Files:**
- Modify: `index.css`
- Modify: `index.html`
- Modify: `studio.html`

- [ ] **Step 1: Give sections a more editorial hierarchy with cleaner spacing and separators**
- [ ] **Step 2: Redesign capability, project, and company info cards with a sharper surface system**
- [ ] **Step 3: Refine project image framing so both tactical and goblin content sit naturally in the layout**

### Task 4: Finish Responsive Polish And Footer

**Files:**
- Modify: `index.css`

- [ ] **Step 1: Rebalance tablet/mobile spacing and card density**
- [ ] **Step 2: Ensure action areas remain touch-safe without looking oversized**
- [ ] **Step 3: Simplify footer styling so the bottom of the site matches the new visual system**

### Task 5: Verify Locally And Publish

**Files:**
- Modify: `index.css`
- Modify: `index.html`
- Modify: `studio.html`

- [ ] **Step 1: Run JS parse verification**
- [ ] **Step 2: Capture desktop and mobile screenshots for `index.html` and `studio.html`**
- [ ] **Step 3: Check browser console output for errors**
- [ ] **Step 4: Commit and push once the direction is visually coherent**
