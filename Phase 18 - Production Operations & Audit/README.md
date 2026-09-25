# Phase 18 — Production Operations & Audit

This bundle follows Phase 17 and adds the operational layer needed after QA: a unified activity log and a real support/help experience.

## Included

- **Activity log** at /activity and /monitoring/activity, combining player events, alerts, and branch issue reports with loading, empty, error, and refresh states.
- **Help & support** at /help, with operational guidance and a direct path to report a branch issue.
- **App correction** removes the duplicate /my-location route and keeps the Branch Manager experience as the canonical route.

## Upload

Upload each file to the exact project-relative path in TheBranchCast after Phase 17. This bundle assumes the Phase 13–17 pages and Supabase foundation already exist.

## Production follow-up

Before launch, confirm Supabase RLS policies for all activity sources, verify the activity queries against production-sized data, and connect the activity feed to your alerting/observability provider.
