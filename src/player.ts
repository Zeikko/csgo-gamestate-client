import { GameStateAllPlayer } from "./gamestate";
import { classifyWeapons, Weapons } from "./weapons";

type TeamString = 'CT' | 'T'
interface PlayerState {
  health: number
  armor: number
  helmet: boolean
  defusekit: boolean
  flashed: number
  burning: number
  money: number
  roundKills: number
  roundHeadshotsKills: number
  roundTotalDamage: number
  equipmentValue: number
}
interface MatchStats {
  kills: number
  assists: number
  deaths: number
  mvps: number
  score: number
}

export interface Player {
  name: string
  observerSlot: number
  team: TeamString
  state: PlayerState
  matchStats: MatchStats
  weapons: Weapons
}


export const improvePlayer = (player: GameStateAllPlayer): Player => {
  return {
    name: player.name,
    observerSlot: player.observer_slot,
    team: player.team,
    state: {
      health: player.state.health,
      armor: player.state.armor,
      helmet: player.state.helmet,
      defusekit: player.state?.defusekit || false,
      flashed: player.state.flashed,
      burning: player.state.burning,
      money: player.state.money,
      roundKills: player.state.round_kills,
      roundHeadshotsKills: player.state.round_killhs,
      roundTotalDamage: player.state.round_totaldmg,
      equipmentValue: player.state.equip_value,
    },
    matchStats: player.match_stats,
    weapons: classifyWeapons(player.weapons)
  }
}