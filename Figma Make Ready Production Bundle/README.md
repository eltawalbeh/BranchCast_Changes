# BranchCast — Figma Make Ready Production Bundle

This folder is the complete runnable BranchCast implementation: the RTL visual system, manager dashboard, browser player, Supabase client wiring, Edge Functions, migrations, and player-agent runtime.

## Run in Figma Make

Use the contents of this folder as the project root. The package is Vite + React and includes the existing Figma Make-compatible vite.config.ts.

- npm install or pnpm install
- npm run dev
- npm run build

The browser client points to the live BranchCast Supabase project through the existing publishable client configuration. Server-only keys are used only by Supabase Edge Functions and the player agent; they are never required in the browser bundle.

## Runtime included

- Auth, workspace routing, roles, onboarding, dashboard pages, billing, notifications, incidents, reports, content, campaigns, schedule, locations, players, and playback.
- Browser-player pairing, audio unlock, heartbeat, polling, scheduled autoplay, command acknowledgement, play/pause/stop/skip.
- Supabase Edge Functions for workspace creation, pairing, heartbeat, browser runtime, manager control, player runtime, billing webhook, and legacy player support.
- Ordered database migrations through the playback stop command.

## Release checks

Run the build before publishing. Apply the migrations in supabase/migrations to the BranchCast project before testing writes. The supplied client uses only the public publishable key; service-role credentials belong in Supabase Function secrets.
