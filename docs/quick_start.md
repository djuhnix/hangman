# Quick Start

This module is inspired from [@argonlaser/hangman-game](https://github.com/argonlaser/hangman-game/)

## Installation

Require node-js and npm.
```shell
npm install @djuhnix/hangman
```

## Create a Game

- One `Game` instance is one `Session`
- A session can have multiple hangman game.
- The Session class have multiple game management.

```typescript
import Game from "@djuhnix/hangman/game/Game"
let game = new Game();
```
