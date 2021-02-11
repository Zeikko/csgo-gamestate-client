import reporter from 'io-ts-reporters'
import { GameState, GameStateCodec } from './gamestate'

export const parseGameState = (newGameState: string): GameState => {
  const parsed: GameState = JSON.parse(newGameState)
  const result = GameStateCodec.decode(parsed)
  const error = reporter.report(result)
  if (error.length) {
    throw new Error(error.join(', '))
  }
  return parsed
}
