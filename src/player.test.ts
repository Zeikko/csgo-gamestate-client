import { parseGameState } from './index'
import { getActivePlayer } from './player'
import { playingGameState } from './fixtures/gamestate'

describe('getActivePlayer', () => {
  it('returns active player', () => {
    const parsed = parseGameState(playingGameState)
    expect(getActivePlayer(parsed)).toMatchSnapshot()
  })
})
