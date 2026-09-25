# Phase 19 — Billing & Subscription Foundation

This bundle follows Phase 18 and adds the first business-ready billing layer for BranchCast.

## Included

- **Plans & billing page** at `/settings/billing`, with Trial, Starter, Growth, and Enterprise states.
- **Supabase billing foundation** for organization plan/status, provider customer references, billing periods, and idempotent provider events.
- **App routing** for the billing page.
- Provider checkout, invoices, and webhook execution are intentionally left for the provider integration phase.

## Upload

Upload each file to the exact project-relative path in `TheBranchCast` after Phase 18. The migration belongs under `supabase/migrations`; run it only after reviewing the existing organization/member RLS policies in Supabase.

## Acceptance checks

- Workspace members can view their organization billing status.
- Billing events are isolated by organization through RLS.
- The UI makes Trial state explicit and does not imply that payment is already connected.
- TypeScript validation passes.
