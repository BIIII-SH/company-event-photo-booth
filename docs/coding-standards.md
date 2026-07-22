# Company Event Photo Booth

## Coding Standards

Document Revision: v0.4.2

Last Updated: July 2026

---

# Purpose

This document defines the coding conventions used throughout the Company Event Photo Booth project.

The objective is to keep the codebase readable, maintainable, and consistent across future versions.

---

# General Principles

- Prioritize readability over cleverness.
- Keep functions focused on a single responsibility.
- Avoid unnecessary complexity.
- Prefer descriptive names over abbreviations.
- Keep formatting consistent throughout the project.

---

# File Organization

JavaScript files should follow this structure:

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

---

# Naming Conventions

## Constants

Use UPPER_SNAKE_CASE.

Examples:

APP_CONFIG

APP_STATE

FRAME_PRESETS

---

## Variables

Use camelCase.

Examples:

cameraPreview

currentStream

selectedFrame

captureButton

---

## Functions

Use camelCase and start with a verb.

Good examples:

startCamera()

stopCamera()

showScreen()

updateFrameOverlay()

initializeOptionCards()

Bad examples:

camera()

button()

frame()

---

# Comments

Major sections should use standardized separators.

Example:

// =====================================================
// Camera Functions
// =====================================================

Avoid excessive inline comments.

Comments should explain why rather than what whenever possible.

---

# Configuration

Values that may change should belong inside APP_CONFIG.

Avoid hardcoded values throughout the application.

Example:

Developer Mode

Default Camera

Default Countdown

Frame Defaults

---

# Application State

Runtime values should belong inside APP_STATE.

Examples:

Current Stream

Selected Frame

Selected Camera

Selected Countdown

---

# Functions

Functions should ideally perform one responsibility.

Avoid functions that simultaneously:

- Update UI
- Modify state
- Process images
- Navigate screens

Instead, separate responsibilities whenever practical.

---

# Version Control

Feature development should occur on dedicated branches.

Example:

feature/frame-overlay

feature/photo-capture

feature/architecture-cleanup

---

# Commit Messages

Commit messages should describe completed work.

Preferred examples:

v0.4.2 Architecture Cleanup

v0.5.0 Camera Capture Pipeline

Avoid generic messages such as:

update

fixed stuff

changes

---

# Documentation

Significant architectural changes should update:

- CHANGELOG.md
- ROADMAP.md
- README.md (if applicable)
- Relevant documentation inside docs/

Documentation should evolve alongside the project.

---

# Future Growth

These standards are intended to evolve as the project expands.

Consistency is more important than perfection.

# Philosophy

This project values:

- Incremental progress over rushed features.
- Maintainability over shortcuts.
- Learning through versioned development.
- Clean architecture before complexity.