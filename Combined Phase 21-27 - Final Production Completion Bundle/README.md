# Combined Phase 21–27 — Final Production Completion Bundle

This is the single consolidated delivery bundle for the remaining BranchCast work. Upload this folder after the current Phase 20 sync.

## Included tracks

### 21 — Player Fleet & Device Connectivity
Player inventory, online/offline states, heartbeat visibility, zones, and device health.

### 22 — Real-Time Playback & Player Runtime
Player selection, now-playing surface, safe playback controls, offline state, and the runtime integration boundary.

### 23 — Public Website & Authentication Completion
The cumulative App keeps the public landing, login, signup, onboarding, and role-based application routes together.

### 24 — Supabase Production Completion
Production checklist covers migrations, RLS, Storage, Realtime, Edge Functions, Cron, audit logs, secrets, and Data API access.

### 25 — Billing Provider & Invoice Integration
Plans, billing, invoice entry point, provider integration boundary, webhook, and invoice acceptance checks.

### 26 — Localization, Accessibility & Responsive Completion
RTL/LTR, mobile, keyboard, contrast, loading, empty, and error-state checks are included in the release checklist.

### 27 — Final QA, Security & Production Launch
A production-readiness gate is available at `/production-readiness`.

## Files in this bundle

- `src/App.tsx`
- `src/pages/PlayerFleetPage.tsx`
- `src/pages/PlaybackPage.tsx`
- `src/pages/BillingPage.tsx`
- `src/pages/InvoicesPage.tsx`
- `src/pages/ProductionReadinessPage.tsx`
- `supabase/PRODUCTION_CHECKLIST.md`

## Upload rule

Preserve the exact project-relative paths. This is one consolidated bundle; do not upload seven separate phase folders.

## Important

The UI does not fake live playback, payment success, invoice records, or production readiness. Connect the actual device runtime, payment provider, Supabase policies, monitoring, backups, and deployment checks before launch.
