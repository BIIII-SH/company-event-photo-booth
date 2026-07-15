# Company Event Photo Booth

## Development Workflow

Document Revision: v0.4.2

Last Updated: July 2026

---

# Purpose

This document defines the standard development workflow for the Company Event Photo Booth project.

Following a consistent workflow helps maintain code quality, preserve project history, and ensure that every release is stable and well documented.

---

# Development Lifecycle

Every new feature follows the same lifecycle.

Idea

↓

Planning

↓

Feature Branch

↓

Development

↓

Testing

↓

Documentation

↓

Commit

↓

Push

↓

Tag Release

↓

Merge to Main

---

# Branch Strategy

The project follows a feature branch workflow.

Main Branch

- Always contains stable releases.
- Every commit should be deployable.

Feature Branches

Examples:

feature/frame-overlay

feature/photo-capture

feature/architecture-cleanup

Each feature should be developed independently before being merged into main.

---

# Versioning Strategy

The project follows semantic-style versioning.

Major Version

Large milestones or major architectural changes.

Example:

v1.0.0

Minor Version

New features.

Examples:

v0.5.0

v0.6.0

Patch Version

Bug fixes, cleanup, documentation, or small improvements.

Examples:

v0.4.1

v0.4.2

---

# Development Process

For every feature:

1. Create a new feature branch.

2. Implement the feature.

3. Test functionality locally.

4. Update documentation.

5. Commit changes.

6. Push to GitHub.

7. Tag the release when appropriate.

8. Merge into main.

---

# Documentation Checklist

Before completing a release, review:

README.md

CHANGELOG.md

ROADMAP.md

Relevant documents inside docs/

Documentation should remain synchronized with the implementation.

---

# Testing Checklist

Before merging into main:

✓ Feature works as expected.

✓ Existing functionality remains operational.

✓ Developer Preview behaves correctly.

✓ Camera and frame selection remain functional.

✓ Console contains no unexpected errors.

---

# Git Commit Guidelines

Prefer descriptive commits.

Examples:

v0.4.2 Architecture Cleanup

v0.5.0 Camera Capture Pipeline

Avoid:

update

fix

changes

---

# Release Checklist

Before creating a release:

✓ Code reviewed

✓ Documentation updated

✓ Changelog completed

✓ Roadmap updated

✓ Version committed

✓ Tag created

✓ Branch merged into main

✓ GitHub synchronized

---

# Future Workflow

As the project grows, additional practices may include:

- Automated testing
- GitHub Releases
- Issue tracking
- Pull request reviews
- Continuous deployment

The current workflow is intentionally lightweight while remaining scalable for future development.