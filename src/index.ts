export interface GameState {
  round: number
}

export const parseGameState = (newGameState: string): GameState => {
  return JSON.parse(newGameState) as GameState
}
