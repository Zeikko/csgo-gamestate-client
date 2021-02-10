interface Gamestate {
  round: number
}

export class CSGOGamestateClient {
  gamestate: Gamestate | null

  constructor() {
    this.gamestate = null
  }

  setGamestate = (newGamestate: string): void => {
    this.gamestate = JSON.parse(newGamestate) as Gamestate
  }

  getGamestate = (): Gamestate => {
    if (this.gamestate === null) {
      throw new Error('Gamestate has not been set yet. Please call "setGamestate" before "getGamestate"')
    }
    return this.gamestate
  }
}
