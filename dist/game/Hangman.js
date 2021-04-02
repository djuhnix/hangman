"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = __importDefault(require("../data/Data"));
const Player_1 = __importDefault(require("./Player"));
const utils_1 = require("../utils/utils");
class Hangman {
    constructor(sessionId, word, playerNumber) {
        /**
         * Game stat :
         *  - 1 =  not started
         * @private
         * @see GameState enum
         */
        this._gameState = utils_1.GameState.NOT_STARTED;
        this._data = new Data_1.default(word, playerNumber);
        this._sessionId = sessionId;
    }
    get sessionId() {
        return this._sessionId;
    }
    get data() {
        return this._data;
    }
    /**
     * Add a player and return his id
     * @param pseudo
     */
    addPlayer(pseudo) {
        let player = new Player_1.default(pseudo);
        this.data.addPlayer(player);
        return player.id;
    }
    init() {
        if (this.data.players.size() == 0) {
            throw new Error("Init player first.");
        }
        this._gameState = utils_1.GameState.ONGOING;
        this.data.start();
        return this.getDetails();
    }
    endGame() {
        this.data.updateDuration();
        this._gameState = utils_1.GameState.GAME_OVER;
        return this.getDetails();
    }
    guessLetter(letter) {
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
        }
        else {
            const indicesFound = utils_1.charPos(hangmanWord, letter);
            let self = this;
            indicesFound.forEach(function (index) {
                if (index) {
                    self.data.progress[index] = letter;
                    if (!self.data.isLetterAlreadyGuessed(letter)) {
                        self.data.addGuessedLetter(letter);
                    }
                }
            });
            return true;
        }
    }
    nextTurn(letter) {
        const singleAlphaRegex = /^[a-zA-Z]$/;
        if (!singleAlphaRegex.test(letter)) {
            return this.getDetails();
        }
        if (this.guessLetter(letter) && this.data.players) {
            let player = this.data.getNextPlayer();
            if (this._lastPlayer && this._lastPlayer.equal(player)) {
                player.saveScore(this.sessionId, 2);
            }
            else {
                player.saveScore(this.sessionId, 1);
            }
            if (this.getGameState() == utils_1.GameState.WIN) {
                player.saveScore(this.sessionId, 2);
            }
            this._lastPlayer = player;
        }
        return this.getDetails();
    }
    getGameState() {
        const chances = this.data.chances;
        const progress = this.data.progress;
        if (progress.indexOf('_') <= -1 && chances >= 0) {
            this._gameState = utils_1.GameState.WIN;
            this.data.updateDuration();
        }
        if (chances <= 0) {
            this._gameState = utils_1.GameState.GAME_OVER;
        }
        return this._gameState;
    }
    /**
     * without result file
     */
    getDetails() {
        return {
            progress: this.data.progress,
            hangmanWord: this.data.word,
            gameState: this.getGameState(),
            guessed: this.data.guessed,
            missed: this.data.missed,
            chances: this.data.chances,
            duration: this.data.duration,
            resultFile: undefined,
        };
    }
}
exports.default = Hangman;
