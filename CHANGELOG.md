# Changelog

All notable changes to this project are documented here.

---

## v0.5.0 (In Progress)

### Architecture
- Replaced generic option selector with dedicated frame, camera, and countdown controllers.
- Introduced CAMERA_MODES as the foundation for camera behavior.
- Added getCurrentCameraMode() helper.
- Migrated frame selection to APP_STATE-driven architecture.

### Internal
- Retired initializeOptionCards().
- Simplified selector responsibilities using the Single Responsibility Principle.
- Prepared the codebase for the upcoming Aspect Ratio Engine.

--

## v0.4.2 - Architecture Cleanup

### Added

- Project architecture documentation
- Coding standards documentation
- Development workflow guide

### Changed

- Refactored application initialization
- Introduced APP_STATE
- Improved project organization
- Simplified DOMContentLoaded initialization

--

## v0.4.1 – Dynamic Frame System

### Added
- Added Landscape (16:9) frame support.
- Introduced FRAME_PRESETS architecture.
- Added dynamic preview aspect ratio switching.
- Added dynamic overlay management.
- Improved Developer Preview behavior.

### Improved
- Refactored overlay system to support unlimited frame presets.
- Preview now accurately matches selected frame dimensions.
- Improved code organization for future capture and export features.

--

## v0.3.1 - Camera Foundation

Status: 🟢 Stable

### Added

- Live camera preview
- Camera permission request
- Front and rear camera support
- Camera screen navigation
- Back button

---

## v0.3.0

### Added

- Camera screen

---

## v0.2.0

### Added

- User setup screen
- Camera selection
- Frame selection

---

## v0.1.0

### Added

- Welcome screen
- Company branding
- Privacy notice

---

## Withdrawn Release

### v0.4.0

Status: 🔴 Withdrawn

Reason:

The first implementation of the live frame overlay caused camera initialization issues on mobile devices.

Action Taken:

- Reset to v0.3.1
- Created dedicated feature branch
- Overlay will be redesigned using a layered architecture.

--