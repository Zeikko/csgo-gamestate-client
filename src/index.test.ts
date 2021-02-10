import { CSGOGamestateClient } from './index'

describe('setGamestate', () => {
  it('sets gamestate and gets gamestate', () => {
    const client = new CSGOGamestateClient()
    client.setGamestate('{ "test": "test" }')
    expect(client.getGamestate()).toEqual({ test: 'test' })
  })
})

describe('getGamestate', () => {
  it('throws error when calling getGamestate before setGamestate', () => {
    const client = new CSGOGamestateClient()
    expect(() => client.getGamestate()).toThrow(
      'Gamestate has not been set yet. Please call "setGamestate" before "getGamestate"',
    )
  })
})
