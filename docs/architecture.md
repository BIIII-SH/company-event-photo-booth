# Company Event Photo Booth

## Architecture Guide

Architecture Revision: v0.4.2
Last Updated: July 2026

---

# Purpose

This document describes the architecture of the Company Event Photo Booth application.

It explains how the application is organized, how data flows through the system, and the design decisions used throughout development.

This document is intended for future development and maintenance rather than end users.

---

# Project Structure

```
CompanyEventPhotoBooth/

├── assets/
│
├── css/
│
├── docs/
│   ├── architecture.md
│   ├── coding-standards.md
│   └── workflow.md
│
├── js/
│   └── script.js
│
├── CHANGELOG.md
├── README.md
├── ROADMAP.md
└── index.html
```

---

# Application Startup

Application initialization begins after the DOM has finished loading.

```
DOMContentLoaded
        │
        ▼
initializeOptionCards()
        │
        ▼
initializeEventListeners()
        │
        ▼
Application Ready
```

Only initialization logic should exist directly inside the DOMContentLoaded callback.

All feature logic should be delegated to dedicated functions.

---

# Application Architecture

The application follows a lightweight modular architecture.

Configuration
↓

Application State
↓

Constants

↓

DOM Elements

↓

Initialization

↓

Core Functions

↓

Utility Functions

This separation keeps responsibilities clear and simplifies future expansion.

---

# Configuration

Application-wide settings are stored inside APP_CONFIG.

Examples include:

- Developer Mode
- Default Camera
- Default Frame
- Default Countdown

Configuration values should never be hardcoded elsewhere in the application.

---

# Application State

Runtime information is stored inside APP_STATE.

Examples include:

- Active camera stream
- Selected frame
- Selected camera
- Selected countdown

APP_STATE represents the current condition of the application and may change while the application is running.

---

# Core Functions

Core Functions perform the primary behavior of the application.

Examples:

- startCamera()
- stopCamera()
- capturePhoto()

These functions directly affect application behavior.

---

# Utility Functions

Utility Functions support the Core Functions.

Examples:

- showScreen()
- updateFrameOverlay()

Utility Functions should remain reusable and independent whenever possible.

---

# Frame System

The application supports multiple frame presets.

Each preset defines:

- Aspect Ratio
- Overlay Asset
- Preview Size

Frame presets are centrally managed using FRAME_PRESETS.

Future frame additions should only require extending this configuration object.

---

# Design Principles

The project follows several architectural principles.

• Single Responsibility

Each function should perform one clearly defined task.

• Configuration over Hardcoding

Values that may change should exist inside configuration objects.

• Centralized State

Application state should exist in one location.

• Readability First

Code should prioritize clarity over cleverness.

• Incremental Development

Features should be developed in small, testable milestones.

• Refactor Before Complexity

Improve architecture before adding significant new functionality.

---

# Future Architecture

As the project evolves, additional modules may include:

- Camera Capture Pipeline
- Image Processing
- Download Manager
- Sharing Module
- Template Management

The current architecture is intentionally designed to accommodate future expansion without major restructuring.