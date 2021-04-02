import Data from "../data/Data";
import Player from "./Player";
import {charPos, GameState} from "../utils/utils";
import {GameDetails} from "../utils/interfaces";

class Hangman {
    private readonly _data: Data
    private readonly _sessionId: number;
    /**
     * Game stat :
     *  - 1 =  not started
     * @private
     * @see GameState enum
     */
    private _gameState: GameState = GameState.NOT_STARTED;
    private _lastPlayer: Player | undefined;

    constructor(sessionId: number, word: string, playerNumber: number) {
        this._data = new Data(word, playerNumber);
        this._sessionId = sessionId;
    }

    get sessionId(): number {
        return this._sessionId;
    }

    get data(): Data {
        return this._data;
    }

    /**
     * Add a player and return his id
     * @param pseudo
     */
    addPlayer(pseudo: string) {
        let player = new Player(pseudo);
        this.data.addPlayer(player);
        return player.id;
    }

    init () {
        if (this.data.players.size() == 0) {
            throw new Error("Init player first.");
        }
        this._gameState = GameState.ONGOING;
        this.data.start();
        return this.getDetails();
    }

    endGame() {
        this.data.updateDuration();
        this._gameState = GameState.GAME_OVER;
        return this.getDetails();
    }

    guessLetter (letter: string): boolean {
        const hangmanWord = this.data.word;
        if (!hangmanWord.includes(letter)) {
            if (!this.data.isLetterAlreadyMissed(letter)) {
                this.data.addMissedLetter(letter);
                this.data.chances--;
            }

            if (this.data.chances <= 0) {
                this.data.progress = hangmanWord.split('');
            }

            return false;
        } else {
            const indicesFound = charPos(hangmanWord, letter)
            let self = this;
            indicesFound.forEach(function (index) {
                if (index) {
                    self.data.progress[index] = letter;

                    if (!self.data.isLetterAlreadyGuessed(letter)) {
                        self.data.addGuessedLetter(letter);
                    }
                }
            })

            return true;
        }
    }

    nextTurn (letter: string) {
        const singleAlphaRegex = /^[a-zA-Z]$/;

        if (!singleAlphaRegex.test(letter)) {
            return this.getDetails();
        }

        if (this.guessLetter(letter) && this.data.players) {
            let player = this.data.getNextPlayer();
            if (this._lastPlayer && this._lastPlayer.equal(player)) {
                player.saveScore(this.sessionId, 2);
            } else {
                player.saveScore(this.sessionId, 1);
            }
            if (this.getGameState() == GameState.WIN) {
                player.saveScore(this.sessionId, 2);
            }
            this._lastPlayer = player;
        }
        return this.getDetails();
    }

    getGameState (): GameState {
        const chances = this.data.chances;
        const progress = this.data.progress;
        if (progress.indexOf('_') <= -1 && chances >= 0) {
            this._gameState = GameState.WIN;
            this.data.updateDuration();
        }
        if (chances <= 0) {
            this._gameState = GameState.GAME_OVER;
        }

        return this._gameState;
    }

    /**
     * without result file
     */
    getDetails (): GameDetails {
        return {
            progress: this.data.progress,
            hangmanWord: this.data.word,
            gameState: this.getGameState(),
            guessed: this.data.guessed,
            missed: this.data.missed,
            chances: this.data.chances,
            duration: this.data.duration,
            resultFile: undefined,
        }
    }
}

export default Hangman;