import { GameState, GameStateTeam, GameStateTeamString } from "./gamestate"
import { improvePlayer, Player } from "./player"

export interface Teams {
  leftPlayers: Player[]
  rightPlayers: Player[]
  leftTeam?: Team
  rightTeam?: Team
}

export interface Team extends GameStateTeam {
  team: GameStateTeamString
}

export function getTeams(gameState: GameState): Teams {
  let leftPlayers
  let rightPlayers
  let leftTeam
  let rightTeam
  const allPlayers = Object.values(gameState.allplayers)
  const improvedPlayers = allPlayers.map(improvePlayer)
  const CTPlayers = improvedPlayers.filter((player) => player.team === 'CT')
  const TPlayers = improvedPlayers.filter((player) => player.team === 'T')
  const CTTeam = gameState.map.team_ct
  const TTeam = gameState.map.team_t
  const playerWithObserverSlot1 = improvedPlayers.find((player) => player.observerSlot === 1)
  if (!playerWithObserverSlot1) {
    return {
      leftPlayers: [],
      rightPlayers: [],
      leftTeam: undefined,
      rightTeam: undefined,
    }
  }
  const leftTeamSide = playerWithObserverSlot1.team
  if (leftTeamSide === 'CT') {
    leftPlayers = CTPlayers
    rightPlayers = TPlayers
    leftTeam = { ...CTTeam, team: 'CT' as GameStateTeamString }
    rightTeam = { ...TTeam, team: 'T' as GameStateTeamString }
  } else {
    leftPlayers = TPlayers
    rightPlayers = CTPlayers
    leftTeam = { ...TTeam, team: 'T' as GameStateTeamString }
    rightTeam = { ...CTTeam, team: 'CT' as GameStateTeamString }
  }
  return {
    leftPlayers,
    rightPlayers,
    leftTeam,
    rightTeam,
  }
}
