# Phase 31 — Production Go-Live & Operations Handoff

This bundle turns the verified BranchCast build into a controlled production release.
It defines the launch owner, monitoring cadence, support handoff, rollback trigger, and
the evidence required after the Phase 30 smoke test.

## Apply

1. Upload this folder after Phase 30.
2. Complete `ops/GO_LIVE_CHECKLIST.md` before opening access to real teams.
3. Keep `ops/INCIDENT_RUNBOOK.md` available to the person on duty.
4. Store evidence outside the repository; never commit credentials, tokens, or customer data.

## Exit criteria

- A named owner is responsible for launch and a named backup is on call.
- The deployed commit, Supabase project ref, domain, and rollback version are recorded.
- Auth, RLS, Storage, player monitoring, and issue-report checks are green.
- A support path and incident severity rules are communicated to managers.
- The first 24-hour monitoring review is scheduled.

This phase adds operational documentation only. It does not alter production data, RLS, or
payment configuration.
