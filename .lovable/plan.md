

# CODED Bootcamp Onboarding Checklist

## Overview
A modern, interactive onboarding journey for CODED bootcamp trainees with three tracks: Cybersecurity, Full Stack, and Data Science. Clean, motivating, step-by-step experience with smooth transitions and track-based theming.

## Flow

### 1. Landing Page (Home)
- "Welcome to CODED 👋" hero with subtitle "Your journey starts here"
- Three track cards displayed prominently:
  - 🔐 Cybersecurity Bootcamp (green accent)
  - 💻 Full Stack Bootcamp (blue accent)
  - 📊 Data Science Bootcamp (purple accent)
- Each card has a short description and a CTA button: "I'm becoming a [Track]"
- Clicking a card navigates to that track's dedicated checklist page

### 2. Track Checklist Page (per track)
- Full-page experience with track's accent color theming
- Top: Track badge with "Change" link back to home
- Sticky progress bar showing overall completion %
- Step indicator: "Step X of 5"
- Animated step-by-step sections, each containing:

**Step 1 — Confirm Your Spot**
- Toggleable checklist: Enrollment Agreement, device requirements, picture submission, Education Number

**Step 2 — Join the CODED System**
- Checklist: Download Discord, join server, rename profile, add picture
- Collapsible "Need help?" section with tutorial placeholder

**Step 3 — Environment Setup (track-specific)**
- Cybersecurity: VirtualBox, Extension Pack, Browser, Zoom, CTF account
- Full Stack: VSCode, Git, Chrome, GitHub account, GitHub local setup
- Data Science: Kaggle account, Google Colab, test notebook, confirm login

**Step 4 — Expectations**
- Review evaluation metrics, presence guide, attendance policy, performance measurement

**Step 5 — Campus Essentials**
- WiFi info display, Education Number reminder

### 3. Ready Screen 🚀
- "You're Ready 🚀" with track-specific motivational message
- Confetti animation on completion
- Button to open Trainee Presence Guide
- Education Number reminder

## Key Features
- **LocalStorage persistence** — progress saved automatically, "Continue where you left off" on return
- **Smooth animations** — fade/slide transitions between steps, checkbox animations, progress bar fills
- **Mobile responsive** — works great on all devices
- **Completion percentage** — visible at all times via progress bar
- **Confetti** on final screen using canvas-confetti
- **Reusable components** — ChecklistItem, ProgressBar, StepContainer, TrackCard

## Design
- Clean white background with soft shadows
- Rounded cards, friendly typography
- Dynamic accent colors per track (green/blue/purple)
- Subtle gamification feel with progress indicators
- Minimal and professional with slight playfulness

