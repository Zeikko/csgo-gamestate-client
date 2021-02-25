import reporter from 'io-ts-reporters'
export { GameState } from './gamestate'
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
