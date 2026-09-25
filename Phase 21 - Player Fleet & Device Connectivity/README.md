# Phase 21 — Player Fleet & Device Connectivity

This bundle follows Phase 20 and adds the operational fleet view for BranchCast players.

## Included

- **Players & devices page** at `/players`.
- Registered, online, and needs-attention metrics.
- Player list with state, zone, last heartbeat, loading, empty, error, and refresh states.
- App route wiring using the existing `players` Supabase table.

## Upload

Upload each file to the exact project-relative path in `TheBranchCast` after Phase 20. The page is read-only and does not invent device records or claim that a player is online without data.

## Production follow-up

The device agent/heartbeat writer, pairing flow, remote commands, and realtime subscriptions should be connected before production rollout.
