# Correction — Phase 7–9 Auth and Supabase

This is a standalone correction folder for the Phase 7–9 bundle that was already uploaded.

Apply these files to the existing project:

- `src/providers/AuthProvider.tsx` → project `src/providers/AuthProvider.tsx`
- `package.json` → project root `package.json`
- `pnpm-lock.yaml` → project root `pnpm-lock.yaml`

The correction restores the Supabase AuthProvider and adds the required `@supabase/supabase-js` dependency. It is intentionally separate from the original Phase 7–9 bundle.
