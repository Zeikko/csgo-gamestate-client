# csgo-gamestate-client

A client to parse an interpret the data received from [CS:GO Game State Integration](https://developer.valvesoftware.com/wiki/Counter-Strike:_Global_Offensive_Game_State_Integration)

## API

#### function parseGameState(newGameState: string): GameState

Parses the given game state string. Returns the parsed GameState object.

**newGameState: string** This is the string that the CS:GO client sends as a HTTP POST message.

## Example

An example to create an endpoint to receive the CS:GO Game State Integration data and an endpoint the respond with the parsed data.

```typescript
import express from 'express'
import { parseGameState, GameState } from 'csgo-gamestate-client'

let gameState = null
const app = express()
app.post('/gamestate', (req) => (gameState = parseGameState(req.body)))
app.get('/gamestate', (req, res) => res.json(gameState))
app.listen(3000)
```
