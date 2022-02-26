export * from './original-gamestate'
import { OriginalGameState, OriginalGameStateSchema } from './original-gamestate'

export const parseOriginalGameState = (newGameState: string): OriginalGameState => {
  const json: OriginalGameState = JSON.parse(newGameState)
  return OriginalGameStateSchema.parse(json)
}

export const parseGameState = (newGameState: string): GameState => {
  const originalGameState = parseOriginalGameState(newGameState)
  return OriginalGameStateSchema.parse(json)
}
