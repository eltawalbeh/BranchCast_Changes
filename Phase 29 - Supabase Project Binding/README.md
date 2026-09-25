# Phase 29 — Supabase Project Binding

This is the first executable production step after the UI and configuration corrections. It binds BranchCast to the correct Supabase project and verifies that the existing schema is safe to use.

## Current blocker

The connected Supabase account does not currently expose a project named `BranchCast`, and the legacy project ref found in the old client configuration is not accessible. Do not run migrations against that ref.

## Required handoff

Provide or connect the correct BranchCast Supabase project so its project ref can be verified. Then set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in the deployment environment.

## Execution order

1. Confirm the project ref and project URL.
2. Run `supabase/VALIDATION_QUERY.sql` in that project.
3. Apply only the migrations that are missing and review RLS before enabling production traffic.
4. Generate fresh database types and run the release smoke test.

## Definition of done

- The project is visible to the authorized Supabase connection.
- The client environment points to the verified project.
- Required BranchCast tables, enums, helper functions, Storage bucket, and RLS policies pass validation.
- No legacy hardcoded project values remain.

