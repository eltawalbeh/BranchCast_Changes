# Phase 01 — App Shell & Navigation Foundation

## Overview
This phase establishes the core layout, navigation, design tokens, and foundational screen structure for BranchCast (In-Store Audio OS for multi-branch businesses).

## Included Components & Pages
- `src/types/navigation.ts`: Types for navigation tabs, languages (AR/EN), branches, and metrics.
- `src/components/icons/PhosphorIcons.tsx`: Phosphor SVG icon set.
- `src/components/layout/Sidebar.tsx`: Collapsible dark sidebar with active branch info and navigation tabs.
- `src/components/layout/Header.tsx`: Top bar with branch selector (Irbid & Amman branches), RTL/LTR toggle, and notifications.
- `src/components/layout/AppShell.tsx`: Main layout wrapper managing view state and RTL direction.
- `src/pages/OverviewPage.tsx`: Central dashboard with live broadcast metrics and branch status.
- `src/pages/LocationsPage.tsx`: Branches in Irbid & Amman with audio zone indicators.
- `src/pages/LiveMonitoringPage.tsx`: Real-time streaming status across branches.
- `src/pages/PlaylistsPage.tsx`: Curated commercial playlists.
- `src/pages/CampaignsPage.tsx`: Audio ad campaigns and voice promo announcements.
- `src/pages/SchedulePage.tsx`: Weekly dayparting matrix.
- `src/pages/ReportsPage.tsx`: Broadcast uptime and playback hours audit.
- `src/pages/SettingsPage.tsx`: Organization and commercial licensing settings.
- `src/App.tsx`: Root component rendering AppShell.

## Instructions for Figma Make
Upload the files in this folder preserving their original paths to Figma Make, then test the interactive navigation and RTL/LTR switching.
