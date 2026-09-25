# Correction — Phase 28 Supabase Configuration

The latest `TheBranchCast` sync contains hardcoded Supabase fallback values in `src/lib/supabase.ts`. This correction removes those values and requires deployment environment variables instead.

## Apply

Replace the project file at:

`src/lib/supabase.ts`

with the file in this correction folder.

## Required environment variables

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY` (or the legacy `VITE_SUPABASE_ANON_KEY`)

Do not put service-role keys in the browser or in Figma Make source files. If the variables are missing, the client remains safely unconfigured instead of connecting to an unintended project.

