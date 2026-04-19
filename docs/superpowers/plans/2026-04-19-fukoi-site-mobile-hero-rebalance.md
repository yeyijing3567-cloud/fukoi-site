# Fukoi Site Mobile Hero Rebalance Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebalance the v3 homepage hero on mobile so the first screen reads clearly instead of stacking too many overlays on top of the background art.

**Architecture:** Keep the desktop hero unchanged, then add mobile-only CSS overrides inside `index.html` to reduce information layers, move the content out of the busiest part of the background, and compress type/button spacing for small screens.

**Tech Stack:** Static HTML with inline CSS, local Python HTTP server, local Playwright screenshot verification.

---

### Task 1: Reduce Mobile Hero Information Density

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Hide non-essential mobile hero layers such as the featured chip and hero marquee**
- [ ] **Step 2: Remove secondary mobile-only clutter from the hero heading area**
- [ ] **Step 3: Keep only the main narrative block and CTA set visible in the first screen**

### Task 2: Reflow Mobile Hero Layout

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Change the mobile hero from bottom-aligned to top-to-middle flow**
- [ ] **Step 2: Reduce mobile title, subtitle, and button spacing**
- [ ] **Step 3: Adjust mobile background positioning and overlay strength so text sits on a calmer area**

### Task 3: Verify And Publish

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Capture mobile hero screenshots locally**
- [ ] **Step 2: Confirm desktop hero remains unaffected**
- [ ] **Step 3: Commit and push the mobile-only fix**
