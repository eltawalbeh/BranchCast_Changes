# Phase 20 — Invoices & Billing Operations

This bundle follows Phase 19 and adds the operational invoice surface for workspace owners.

## Included

- **Invoices page** at `/settings/billing/invoices`.
- Clear empty state until a paid plan and billing provider are connected.
- Back navigation to Plans & Billing.
- Disabled export affordance reserved for generated invoice documents.
- App route wiring and TypeScript-safe cumulative App file.

## Upload

Upload the files to the exact project-relative paths in `TheBranchCast` after Phase 19. This phase intentionally does not fake payment data or invoice records; it is ready for provider-backed invoice data in the next integration step.

## Acceptance checks

- Workspace context is represented in the page.
- Empty, not-yet-connected billing state is explicit.
- No payment or invoice status is presented as real before provider integration.
