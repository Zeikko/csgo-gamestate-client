interface Gamestate {

}

let gamestate: Gamestate | null = null

export const setGamestate = (newGamestate: string) => {
  gamestate = newGamestate
}

export const getGamestate = (): Gamestate => {
  if (gamestate === null) {
    throw new Error('Gamestate has not been set yet. Please call "setGamestate" before "getGamestate"')
  }
  return gamestate
}