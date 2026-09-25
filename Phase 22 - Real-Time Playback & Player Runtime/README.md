# Phase 22 — Real-Time Playback & Player Runtime

This bundle follows Phase 21 and introduces the playback control surface for connected BranchCast players.

## Included

- **Now playing** page at `/players/playback`.
- Player selector backed by the existing players table.
- Online/offline state and safe command affordances.
- Play, pause, skip, volume, empty, loading, and offline states.
- App route wiring and TypeScript-safe cumulative App file.

## Runtime completion

The UI intentionally disables commands until a player is online. The next implementation step is the device agent, heartbeat writer, realtime subscription, command queue, and actual audio engine. No fake playback state is shown.
