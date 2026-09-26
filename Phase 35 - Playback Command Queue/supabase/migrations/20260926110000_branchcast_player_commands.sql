create table if not exists public.player_commands (
  id uuid primary key default gen_random_uuid(),
  player_id uuid not null references public.players(id) on delete cascade,
  requested_by uuid not null references auth.users(id) on delete restrict,
  command text not null check (command in ('play','pause','skip')),
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'pending' check (status in ('pending','acknowledged','failed','expired')),
  error_message text,
  created_at timestamptz not null default now(),
  acknowledged_at timestamptz
);

alter table public.player_commands enable row level security;

create policy "workspace members can read player commands" on public.player_commands
for select to authenticated using (exists (
  select 1 from public.players p
  join public.audio_zones z on z.id = p.zone_id
  join public.locations l on l.id = z.location_id
  join public.organization_members m on m.organization_id = l.organization_id
  where p.id = player_commands.player_id and m.user_id = auth.uid()
));

create policy "workspace members can create player commands" on public.player_commands
for insert to authenticated with check (requested_by = auth.uid() and exists (
  select 1 from public.players p
  join public.audio_zones z on z.id = p.zone_id
  join public.locations l on l.id = z.location_id
  join public.organization_members m on m.organization_id = l.organization_id
  where p.id = player_commands.player_id and m.user_id = auth.uid()
));

grant select, insert on public.player_commands to authenticated;
