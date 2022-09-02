import { parseGameState } from './index'
import { getTeams } from './teams'
import { playingGameState } from './fixtures/gamestate'

describe('getTeams', () => {
  it('returns parse gamestate', () => {
    const parsed = parseGameState(playingGameState)
    expect(getTeams(parsed)).toMatchSnapshot()
  })
})
