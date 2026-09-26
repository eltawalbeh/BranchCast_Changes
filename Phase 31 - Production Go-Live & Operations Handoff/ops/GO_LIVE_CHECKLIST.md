# BranchCast production go-live checklist

Complete each item and record the evidence link in the release ticket.

## Release identity

- [ ] Deployed `TheBranchCast` commit SHA: ____________________
- [ ] Supabase project ref: ____________________
- [ ] Public URL and custom domain checked: ____________________
- [ ] Previous known-good rollback SHA: ____________________
- [ ] Launch owner and backup confirmed: ____________________

## Before opening access

- [ ] Phase 30 smoke test is fully green or every exception has an owner and due date.
- [ ] Supabase Auth redirect URLs match the production domain.
- [ ] RLS is enabled on all workspace tables; Storage bucket `audio-assets` is private.
- [ ] No service-role key or test credentials exist in the deployed bundle.
- [ ] Error monitoring, browser console review, and network-error review are clean.
- [ ] Disposable test account and test workspace are removed or clearly labelled.
- [ ] Support contact and escalation channel are shared with managers.

## Launch window

- [ ] Open the public landing page and login from a private browser.
- [ ] Verify one owner login, one operations-manager view, and one branch-manager view.
- [ ] Verify a player status update and an issue-report confirmation.
- [ ] Confirm Arabic RTL and English LTR on the public and authenticated entry points.
- [ ] Capture timestamped screenshots of the successful checks.

## First 24 hours

- [ ] Review Auth failures, 4xx/5xx responses, Storage failures, and offline-player alerts.
- [ ] Review issue reports and assign each one to an accountable person.
- [ ] Confirm no cross-workspace data access was reported.
- [ ] Record the first-day summary and decide whether to continue, pause, or roll back.

## Rollback trigger

Pause new onboarding and roll back to the known-good SHA if authentication is unavailable,
workspace isolation is suspect, or a release causes repeated data-loss or playback failures.
