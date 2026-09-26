# BranchCast incident runbook

## Severity

**SEV-1** — authentication outage, cross-workspace data exposure, or destructive data loss.
Pause onboarding, restrict access, preserve logs, and escalate immediately to the owner.

**SEV-2** — a core workflow is unavailable for multiple users, such as content, campaigns,
player monitoring, or issue reporting. Assign an owner and publish an update within one hour.

**SEV-3** — isolated UI defect, copy issue, or non-blocking report problem. Track it for the
next correction bundle.

## Response steps

1. Record UTC time, affected URL/route, user role, workspace, and exact error text.
2. Reproduce with a disposable account; never request a customer's password or token.
3. Check the deployed commit, Supabase Auth status, database/RLS errors, Storage errors, and
   player heartbeat/alert status.
4. For suspected isolation or data-loss issues, stop the release and use the rollback SHA.
5. Communicate impact, owner, next update time, and resolution evidence.
6. Close only after the smoke test item is rerun and the incident record includes a root cause.

## Security boundary

Do not put service-role keys, access tokens, private URLs, or customer audio in tickets,
screenshots, chat, or Git history.
