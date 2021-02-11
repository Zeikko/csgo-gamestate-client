import { parseGameState } from './index'
import { playingGameState } from './fixtures/gamestate'

describe('parseGameState', () => {
  it('parses gamestate and gets gamestate', () => {
    expect(parseGameState(playingGameState)).toMatchSnapshot()
  })
})
