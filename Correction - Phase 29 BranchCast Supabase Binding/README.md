# Correction — Phase 29 BranchCast Supabase Binding

Use this correction when Figma Make does not accept environment files. It points the browser client to the verified BranchCast Supabase project using the public publishable key only.

## Apply

Replace:

`src/lib/supabase.ts`

with the file in this folder.

This file contains no service-role or secret key. The publishable key is intended for browser clients and remains protected by Supabase RLS policies.

Verified project:

- `https://ushplpeghxebhdjcktbp.supabase.co`

