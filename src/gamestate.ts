import * as t from 'io-ts'

const GameStateProviderCodec = t.type({
  name: t.string,
  appid: t.number,
  version: t.number,
  steamid: t.string,
  timestamp: t.number,
})
export type GameStateProvider = t.TypeOf<typeof GameStateProviderCodec>

const GameStateTeamCodec = t.type({
  score: t.number,
  name: t.string,
  flag: t.string,
  consecutive_round_losses: t.number,
  timeouts_remaining: t.number,
  matches_won_this_series: t.number,
})
export type GameStateTeam = t.TypeOf<typeof GameStateTeamCodec>

const GameStateModeCodec = t.union([t.literal('casual'), t.literal('competitive')])
export type GameStateMode = t.TypeOf<typeof GameStateModeCodec>

const GameStateMapPhaseCodec = t.union([
  t.literal('live'),
  t.literal('intermission'),
  t.literal('gameover'),
  t.literal('warmup'),
])
export type GameStateMapPhase = t.TypeOf<typeof GameStateMapPhaseCodec>

const GameStateMapCodec = t.type({
  mode: GameStateModeCodec,
  name: t.string,
  phase: GameStateMapPhaseCodec,
  round: t.number,
  team_ct: GameStateTeamCodec,
  team_t: GameStateTeamCodec,
  num_matches_to_win_series: t.number,
  current_spectators: t.number,
  souvenirs_total: t.number,
})
export type GameStateMap = t.TypeOf<typeof GameStateMapCodec>

const GameStateRoundPhaseCodec = t.union([t.literal('live'), t.literal('freezetime'), t.literal('over')])
export type GameStateRoundPhase = t.TypeOf<typeof GameStateRoundPhaseCodec>

const GameStateRoundType = t.type({
  phase: GameStateRoundPhaseCodec,
})
const GameStateRoundStatePartial = t.partial({
  bomb: t.string,
})
const GameStateRoundCodec = t.intersection([GameStateRoundType, GameStateRoundStatePartial])
export type GameStateRound = t.TypeOf<typeof GameStateRoundCodec>

const GameStateTeamStringCodec = t.union([t.literal('T'), t.literal('CT')])
export type GameStateTeamString = t.TypeOf<typeof GameStateTeamStringCodec>

const GameStateActivityCodec = t.union([
  t.literal('playing'),
  t.literal('free'),
  t.literal('textinput'),
  t.literal('menu'),
])
export type GameStateActivity = t.TypeOf<typeof GameStateActivityCodec>

const GameStatePlayerStateType = t.type({
  health: t.number,
  armor: t.number,
  helmet: t.boolean,
  flashed: t.number,
  burning: t.number,
  smoked: t.number,
  money: t.number,
  round_kills: t.number,
  round_killhs: t.number,
  round_totaldmg: t.number,
  equip_value: t.number,
})
const GameStatePlayerStatePartial = t.partial({
  defusekit: t.boolean,
})
const GameStatePlayerStateCodec = t.intersection([GameStatePlayerStateType, GameStatePlayerStatePartial])
export type GameStatePlayerState = t.TypeOf<typeof GameStatePlayerStateCodec>

const GameStatePlayerCodec = t.type({
  steamid: t.string,
  name: t.string,
  activity: GameStateActivityCodec,
  state: GameStatePlayerStateCodec,
})
export type GameStatePlayer = t.TypeOf<typeof GameStatePlayerCodec>

const GameStateAllPlayerStateType = t.type({
  health: t.number,
  armor: t.number,
  helmet: t.boolean,
  flashed: t.number,
  burning: t.number,
  money: t.number,
  round_kills: t.number,
  round_killhs: t.number,
  round_totaldmg: t.number,
  equip_value: t.number,
})
const GameStateAllPlayerStatePartial = t.partial({
  defusekit: t.boolean,
})
const GameStateAllPlayerStateCodec = t.intersection([GameStateAllPlayerStateType, GameStateAllPlayerStatePartial])
export type GameStateAllPlayerState = t.TypeOf<typeof GameStateAllPlayerStateCodec>

const GameStateAllPlayerMatchStatsCodec = t.type({
  kills: t.number,
  assists: t.number,
  deaths: t.number,
  mvps: t.number,
  score: t.number,
})
export type GameStateAllPlayerMatchStats = t.TypeOf<typeof GameStateAllPlayerMatchStatsCodec>

const GameStateWeaponStateCodec = t.union([t.literal('active'), t.literal('holstered')])
export type GameStateWeaponState = t.TypeOf<typeof GameStateWeaponStateCodec>

const GameStateWeaponType = t.type({
  name: t.string,
  paintkit: t.string,
  type: t.string,
  state: GameStateWeaponStateCodec,
})
const GameStateWeaponPartial = t.partial({
  ammo_clip: t.number,
  ammo_clip_max: t.number,
  ammo_reserve: t.number,
})
const GameStateWeaponCodec = t.intersection([GameStateWeaponType, GameStateWeaponPartial])
export type GameStateWeapon = t.TypeOf<typeof GameStateWeaponCodec>

const GameStateAllPlayerWeaponsCodec = t.partial({
  weapon_0: GameStateWeaponCodec,
  weapon_1: GameStateWeaponCodec,
  weapon_2: GameStateWeaponCodec,
  weapon_3: GameStateWeaponCodec,
  weapon_4: GameStateWeaponCodec,
  weapon_5: GameStateWeaponCodec,
  weapon_6: GameStateWeaponCodec,
})
export type GameStateAllPlayerWeapons = t.TypeOf<typeof GameStateAllPlayerWeaponsCodec>

const GameStateAllPlayerCodec = t.type({
  name: t.string,
  observer_slot: t.number,
  team: GameStateTeamStringCodec,
  state: GameStateAllPlayerStateCodec,
  match_stats: GameStateAllPlayerMatchStatsCodec,
  weapons: GameStateAllPlayerWeaponsCodec,
  position: t.string,
  forward: t.string,
})
export type GameStateAllPlayer = t.TypeOf<typeof GameStateAllPlayerCodec>

const GameStatePhaseCodec = t.union([
  t.literal('freezetime'),
  t.literal('bomb'),
  t.literal('live'),
  t.literal('over'),
  t.literal('defuse'),
  t.literal('paused'),
  t.literal('timeout_ct'),
  t.literal('timeout_t'),
])
export type GameStatePhase = t.TypeOf<typeof GameStatePhaseCodec>

const GameStatePhaseCountdownCodec = t.type({
  phase: GameStatePhaseCodec,
  phase_ends_in: t.string,
})
export type GameStatePhaseCountdown = t.TypeOf<typeof GameStatePhaseCountdownCodec>

const GameStateGrenadeNameCodec = t.union([
  t.literal('weapon_smokegrenade'),
  t.literal('weapon_decoy'),
  t.literal('weapon_hegrenade'),
  t.literal('weapon_incgrenade'),
  t.literal('weapon_molotov'),
])
export type GameStateGrenadeName = t.TypeOf<typeof GameStateGrenadeNameCodec>

const GameStateGrenadeType = t.type({
  owner: t.number,
  lifetime: t.string,
  type: t.string,
})
const GameStateGrenadePartial = t.partial({
  effecttime: t.string,
  position: t.string,
  velocity: t.string,
})
const GameStateGrenadeCodec = t.intersection([GameStateGrenadeType, GameStateGrenadePartial])
export type GameStateGrenade = t.TypeOf<typeof GameStateGrenadeCodec>

export const GameStateCodec = t.type({
  provider: GameStateProviderCodec,
  map: GameStateMapCodec,
  round: GameStateRoundCodec,
  player: GameStatePlayerCodec,
  allplayers: t.record(t.string, GameStateAllPlayerCodec),
  phase_countdowns: GameStatePhaseCountdownCodec,
  grenades: t.record(t.string, GameStateGrenadeCodec),
})
export type GameState = t.TypeOf<typeof GameStateCodec>
