import { parseGameState } from './index'
import { playingGameState } from './fixtures/gamestate'

describe('parseGameState', () => {
  it('returns parse gamestate', () => {
    expect(parseGameState(playingGameState)).toMatchSnapshot()
  })

  it('fails', () => {
    expect(() => parseGameState('{ "bad": "input" }')).toThrow(
      'Expecting { name: string, appid: number, version: number, steamid: string, timestamp: number } at provider but instead got: undefined',
    )
  })
})
