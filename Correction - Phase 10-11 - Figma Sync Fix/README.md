# Correction — Phase 10 & 11 Figma Sync Fix

This correction bundle repairs the failed Figma Make sync for Phase 10 and Phase 11.

Upload the files while preserving these project-relative paths:

- src/App.tsx
- src/pages/ContentLibraryPage.tsx
- src/pages/CampaignsPage.tsx
- src/types/database.ts
- supabase/migrations/20260925160000_branchcast_content_library.sql
- supabase/migrations/20260925161000_branchcast_campaigns.sql

Important: these are real source files. Do not upload the previous files that contain the literal `fatal: path ... exists on disk, but not in HEAD` message.

After upload, verify:
- /content renders ContentLibraryPage
- /campaigns renders CampaignsPage
- /campaigns/new opens the campaign creation UI
- no PlaceholderPage is used for these routes
