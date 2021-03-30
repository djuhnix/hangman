import Data from "../data/Data";
import Player from "./Player";
import {charPos} from "../utils/utils";

class Hangman {
    private readonly _data: Data
    private readonly _sessionId: number;
    private _gameState: number = -1;
    constructor(sessionId: number, word: string) {
        this._data = new Data(word);
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

            return false
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

            return true
        }
    }

    nextTurn (playerId: number, letter: string) {
        const singleAlphaRegex = /^[a-zA-Z]$/

        if (!singleAlphaRegex.test(letter)) {
            return this.getDetails()
        }

        if (this.guessLetter(letter)) {
            if (this.data.players)
                this.data.players[playerId].saveScore(this.sessionId, 1);
        }
        return this.getDetails()
    }

    getGameState () {
        const chances = this.data.chances;
        const progress = this.data.progress;
        if (progress.indexOf('_') <= -1 && chances >= 0) {
            this._gameState = 1
            this.data.duration = Date.now() - this.data.startTime
        }
        if (chances <= 0) {
            this._gameState = 0
        }

        return this._gameState
    }

    getDetails () {
        return {
            progress: this.data.progress,
            hangmanWord: this.data.word,
            gameState: this.getGameState(),
            guessed: this.data.guessed,
            missed: this.data.missed,
            chances: this.data.chances,
            duration: this.data.duration,
            //resultFile: this.resultFile, //TODO resultFile
        }
    }
}

export default Hangman;