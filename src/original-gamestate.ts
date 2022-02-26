import * as zod from 'zod'

const OriginalGameStateProviderSchema = zod.object({
  name: zod.string(),
  appid: zod.number(),
  version: zod.number(),
  steamid: zod.string(),
  timestamp: zod.number(),
})
export type OriginalGameStateProvider = zod.infer<typeof OriginalGameStateProviderSchema>

const OriginalGameStateTeamSchema = zod.object({
  score: zod.number(),
  name: zod.string(),
  flag: zod.string(),
  consecutive_round_losses: zod.number(),
  timeouts_remaining: zod.number(),
  matches_won_this_series: zod.number(),
})
export type OriginalGameStateTeam = zod.infer<typeof OriginalGameStateTeamSchema>

const OriginalGameStateModeSchema = zod.union([zod.literal('casual'), zod.literal('competitive')])
export type OriginalGameStateMode = zod.infer<typeof OriginalGameStateModeSchema>

const OriginalGameStateMapPhaseSchema = zod.union([
  zod.literal('live'),
  zod.literal('intermission'),
  zod.literal('gameover'),
  zod.literal('warmup'),
])
export type OriginalGameStateMapPhase = zod.infer<typeof OriginalGameStateMapPhaseSchema>

const OriginalGameStateMapSchema = zod.object({
  mode: OriginalGameStateModeSchema,
  name: zod.string(),
  phase: OriginalGameStateMapPhaseSchema,
  round: zod.number(),
  team_ct: OriginalGameStateTeamSchema,
  team_t: OriginalGameStateTeamSchema,
  num_matches_to_win_series: zod.number(),
  current_spectators: zod.number(),
  souvenirs_total: zod.number(),
})
export type OriginalGameStateMap = zod.infer<typeof OriginalGameStateMapSchema>

const OriginalGameStateRoundPhaseSchema = zod.union([
  zod.literal('live'),
  zod.literal('freezetime'),
  zod.literal('over'),
])
export type OriginalGameStateRoundPhase = zod.infer<typeof OriginalGameStateRoundPhaseSchema>

const OriginalGameStateRoundSchema = zod.object({
  phase: OriginalGameStateRoundPhaseSchema,
  bomb: zod.string(),
})
export type OriginalGameStateRound = zod.infer<typeof OriginalGameStateRoundSchema>

const OriginalGameStateTeamStringSchema = zod.union([zod.literal('T'), zod.literal('CT')])
export type OriginalGameStateTeamString = zod.infer<typeof OriginalGameStateTeamStringSchema>

const OriginalGameStateActivitySchema = zod.union([
  zod.literal('playing'),
  zod.literal('free'),
  zod.literal('textinput'),
  zod.literal('menu'),
])
export type OriginalGameStateActivity = zod.infer<typeof OriginalGameStateActivitySchema>

const OriginalGameStatePlayerState = zod.object({
  health: zod.number(),
  armor: zod.number(),
  helmet: zod.boolean(),
  flashed: zod.number(),
  smoked: zod.number(),
  burning: zod.number(),
  money: zod.number(),
  round_kills: zod.number(),
  round_killhs: zod.number(),
  round_totaldmg: zod.number(),
  equip_value: zod.number(),
})
const OriginalGameStatePlayerStatePartial = zod
  .object({
    defusekit: zod.boolean(),
  })
  .partial()
const OriginalGameStatePlayerStateSchema = OriginalGameStatePlayerState.merge(OriginalGameStatePlayerStatePartial)
export type OriginalGameStatePlayerState = zod.infer<typeof OriginalGameStatePlayerStateSchema>

const OriginalGameStatePlayerSchema = zod.object({
  steamid: zod.string(),
  name: zod.string(),
  observer_slot: zod.number(),
  team: OriginalGameStateTeamStringSchema,
  activity: OriginalGameStateActivitySchema,
  state: OriginalGameStatePlayerStateSchema,
})
export type OriginalGameStatePlayer = zod.infer<typeof OriginalGameStatePlayerSchema>

const OriginalGameStateAllPlayerState = zod.object({
  health: zod.number(),
  armor: zod.number(),
  helmet: zod.boolean(),
  flashed: zod.number(),
  burning: zod.number(),
  money: zod.number(),
  round_kills: zod.number(),
  round_killhs: zod.number(),
  round_totaldmg: zod.number(),
  equip_value: zod.number(),
})
const OriginalGameStateAllPlayerStatePartial = zod
  .object({
    defusekit: zod.boolean(),
  })
  .partial()
const OriginalGameStateAllPlayerStateSchema = OriginalGameStateAllPlayerState.merge(
  OriginalGameStateAllPlayerStatePartial,
)
export type OriginalGameStateAllPlayerState = zod.infer<typeof OriginalGameStateAllPlayerStateSchema>

const OriginalGameStateAllPlayerMatchStatsSchema = zod.object({
  kills: zod.number(),
  assists: zod.number(),
  deaths: zod.number(),
  mvps: zod.number(),
  score: zod.number(),
})
export type OriginalGameStateAllPlayerMatchStats = zod.infer<typeof OriginalGameStateAllPlayerMatchStatsSchema>

const OriginalGameStateWeaponStateSchema = zod.union([zod.literal('active'), zod.literal('holstered')])
export type OriginalGameStateWeaponState = zod.infer<typeof OriginalGameStateWeaponStateSchema>

const OriginalGameStateWeaponType = zod.object({
  name: zod.string(),
  paintkit: zod.string(),
  type: zod.string(),
  state: OriginalGameStateWeaponStateSchema,
})
const OriginalGameStateWeaponPartial = zod
  .object({
    ammo_clip: zod.number(),
    ammo_clip_max: zod.number(),
    ammo_reserve: zod.number(),
  })
  .partial()
const OriginalGameStateWeaponSchema = OriginalGameStateWeaponType.merge(OriginalGameStateWeaponPartial)
export type OriginalGameStateWeapon = zod.infer<typeof OriginalGameStateWeaponSchema>

const OriginalGameStateAllPlayerWeaponsSchema = zod
  .object({
    weapon_0: OriginalGameStateWeaponSchema,
    weapon_1: OriginalGameStateWeaponSchema,
    weapon_2: OriginalGameStateWeaponSchema,
    weapon_3: OriginalGameStateWeaponSchema,
  })
  .partial()
export type OriginalGameStateAllPlayerWeapons = zod.infer<typeof OriginalGameStateAllPlayerWeaponsSchema>

const OriginalGameStateAllPlayerSchema = zod.object({
  name: zod.string(),
  observer_slot: zod.number(),
  team: OriginalGameStateTeamStringSchema,
  state: OriginalGameStateAllPlayerStateSchema,
  match_stats: OriginalGameStateAllPlayerMatchStatsSchema,
  weapons: OriginalGameStateAllPlayerWeaponsSchema,
  position: zod.string(),
  forward: zod.string(),
})
export type OriginalGameStateAllPlayer = zod.infer<typeof OriginalGameStateAllPlayerSchema>

const OriginalGameStatePhaseSchema = zod.union([
  zod.literal('freezetime'),
  zod.literal('bomb'),
  zod.literal('live'),
  zod.literal('over'),
  zod.literal('defuse'),
  zod.literal('paused'),
  zod.literal('timeout_ct'),
  zod.literal('timeout_t'),
])
export type OriginalGameStatePhase = zod.infer<typeof OriginalGameStatePhaseSchema>

const OriginalGameStatePhaseCountdownSchema = zod.object({
  phase: OriginalGameStatePhaseSchema,
  phase_ends_in: zod.string(),
})
export type OriginalGameStatePhaseCountdown = zod.infer<typeof OriginalGameStatePhaseCountdownSchema>

const OriginalGameStateGrenadeNameSchema = zod.union([
  zod.literal('weapon_smokegrenade'),
  zod.literal('weapon_decoy'),
  zod.literal('weapon_hegrenade'),
  zod.literal('weapon_incgrenade'),
  zod.literal('weapon_molotov'),
])
export type OriginalGameStateGrenadeName = zod.infer<typeof OriginalGameStateGrenadeNameSchema>

const OriginalGameStateGrenadeSchema = zod.object({
  type: zod.literal('Grenade'),
  name: OriginalGameStateGrenadeNameSchema,
  paintkit: zod.string(),
  ammo_reserve: zod.number(),
  state: OriginalGameStateWeaponStateSchema,
})
export type OriginalGameStateGrenade = zod.infer<typeof OriginalGameStateGrenadeSchema>

export const OriginalGameStateSchema = zod.object({
  provider: OriginalGameStateProviderSchema,
  map: OriginalGameStateMapSchema,
  round: OriginalGameStateRoundSchema,
  player: OriginalGameStatePlayerSchema,
  allplayers: zod.record(OriginalGameStateAllPlayerSchema),
  phase_countdowns: OriginalGameStatePhaseCountdownSchema,
  grenades: zod.record(OriginalGameStateGrenadeSchema),
  previously: zod.any(),
})
export type OriginalGameState = zod.infer<typeof OriginalGameStateSchema>
