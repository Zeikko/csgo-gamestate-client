import { getGamestate, setGamestate } from './index'

describe('index.ts', () => {
  it('sets gamestate and gets gamestate', () => {
    setGamestate('test')
    expect(getGamestate()).toEqual('test')
  })
})