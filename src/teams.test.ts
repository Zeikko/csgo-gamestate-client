import { parseGameState } from './index'
import { getTeams } from './teams'
import { playingGameState } from './fixtures/gamestate'

describe('getTeams', () => {
  it('returns teams', () => {
    const parsed = parseGameState(playingGameState)
    expect(getTeams(parsed)).toMatchSnapshot()
  })
})
