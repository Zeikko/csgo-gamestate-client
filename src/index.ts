import reporter from 'io-ts-reporters'
export { GameState } from './gamestate'
import { GameState, GameStateCodec } from './gamestate'
export { getTeams, Teams, Team } from './teams'
export { Player, MatchStats, PlayerState, getActivePlayer, ActivePlayer } from './player'
export { Weapons } from './weapons'

export const parseGameState = (newGameState: string): GameState => {
  const parsed: GameState = JSON.parse(newGameState)
  return decodeGameState(parsed)
}

export const decodeGameState = (newGameState: GameState): GameState => {
  const result = GameStateCodec.decode(newGameState)
  const error = reporter.report(result)
  if (error.length) {
    throw new Error(error.join(', '))
  }
  return newGameState
}
