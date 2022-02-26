import { parseOriginalGameState } from './index'
import { playingGameState } from './fixtures/gamestate'

describe('parseOriginalGameState', () => {
  it('returns parse gamestate', () => {
    expect(parseOriginalGameState(playingGameState)).toMatchSnapshot()
  })

  it('fails', () => {
    expect(() => parseOriginalGameState('{ "bad": "input" }')).toThrowErrorMatchingSnapshot()
  })
})
