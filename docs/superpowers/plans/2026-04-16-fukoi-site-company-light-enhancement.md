# Fukoi Site Company Light Enhancement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a restrained layer of company-identity information to the current site without weakening the existing brand and project presentation.

**Architecture:** Reuse the existing Home and Studio page structure, update the shared content source for the new fixed copy, lightly adjust the markup for the hero/ABOUT/footer areas, and refine styling so the new company information reads as part of the current dark editorial interface.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, local Playwright CLI verification.

---

### Task 1: Update Shared Copy

**Files:**
- Modify: `content.js`

- [ ] **Step 1: Add hero brand-attribution copy for Home**
- [ ] **Step 2: Replace ABOUT copy with the fixed required Japanese text**
- [ ] **Step 3: Add the compact company info line for the ABOUT section**
- [ ] **Step 4: Replace Studio narrative and initiatives copy with the required text**
- [ ] **Step 5: Expand footer copy to include FURI STUDIO and company info**

### Task 2: Adjust Home Markup

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Insert the small brand-attribution line above the hero title**
- [ ] **Step 2: Simplify the ABOUT block so it becomes a narrow editorial company-introduction section**
- [ ] **Step 3: Preserve existing project sections and overall page order**

### Task 3: Adjust Studio And Footer Markup

**Files:**
- Modify: `studio.html`
- Modify: `index.html`

- [ ] **Step 1: Ensure the Studio narrative area reflects the brand + company wording**
- [ ] **Step 2: Update footer structure on both pages to include the expanded company info**
- [ ] **Step 3: Keep the layout compact and non-corporate**

### Task 4: Refine Styling

**Files:**
- Modify: `index.css`

- [ ] **Step 1: Style the hero brand-attribution line so it is visible but subordinate**
- [ ] **Step 2: Restyle the ABOUT section into a restrained editorial module**
- [ ] **Step 3: Update footer styling for the extra company information**
- [ ] **Step 4: Ensure mobile spacing and line-length remain controlled**

### Task 5: Verify And Publish

**Files:**
- Modify: `content.js`
- Modify: `index.html`
- Modify: `studio.html`
- Modify: `index.css`

- [ ] **Step 1: Run JS parse verification**
- [ ] **Step 2: Capture Home and Studio screenshots**
- [ ] **Step 3: Check console output for errors**
- [ ] **Step 4: Commit and push to `main`**
