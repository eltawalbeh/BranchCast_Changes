# Phase 30 — Release Smoke Test & Production Verification

This bundle is the final verification layer after the BranchCast Supabase project binding.
It is intentionally read-only against production data: the operator creates a disposable
test account/workspace through the UI, runs the checks in the checklist, and removes the
test account after sign-off.

## Upload / implementation order

1. Upload this folder after the Phase 29 binding folder.
2. Run `qa/RELEASE_SMOKE_TEST.md` against the deployed app.
3. Apply `supabase/VALIDATION_QUERY.sql` in the Supabase SQL editor using a read-only role.
4. Record pass/fail evidence in the release ticket. Do not paste secrets or service-role keys.

## Exit criteria

- Landing page, login, signup, and sign-out work on desktop and mobile widths.
- A newly authenticated owner can create a workspace and location.
- Workspace-scoped reads and writes succeed without exposing another workspace's rows.
- Content upload uses the private `audio-assets` bucket and respects the 50 MB limit.
- Manager and branch-manager routes enforce the expected role boundaries.
- Offline-player and issue-report flows show a clear next action.
- No console errors, leaked credentials, or failing network requests remain in the smoke run.

## Scope boundary

This phase does not add a payment provider, seed production content, or change existing
RLS policies. Any failed check becomes a separate correction folder with a focused diff.
