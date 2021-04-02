'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const LinkedList_1 = __importDefault(require("../data/structures/LinkedList"));
const Hangman_1 = __importDefault(require("./Hangman"));
const utils_1 = require("../utils/utils");
class Session {
    constructor() {
        this._id = ++Session.number;
        this._resultFilePath = path.join(__dirname, `../../session/session_${this._id}.json`);
        this._hangmanSessions = new LinkedList_1.default();
    }
    get id() {
        return this._id;
    }
    get hangmanSessions() {
        return this._hangmanSessions;
    }
    startNewGame(word, playerNumber) {
        const current = this.getCurrentGame();
        let newGame = undefined;
        if (current) {
            let gameState = current.getGameState();
            if (gameState == utils_1.GameState.ONGOING)
                throw new Error("End the current game before starting a new one.");
            else if (gameState == utils_1.GameState.WIN || gameState == utils_1.GameState.GAME_OVER)
                newGame = this._hangmanSessions.insertInBegin(new Hangman_1.default(this.id, word, playerNumber)).data;
            else if (gameState == utils_1.GameState.NOT_STARTED)
                throw new Error("Start and end the current game before starting a new one.");
        }
        else {
            newGame = this._hangmanSessions.insertInBegin(new Hangman_1.default(this.id, word, playerNumber)).data;
        }
        return newGame;
    }
    getBestPlayer() {
        let maxScore = [undefined, 0];
        this.hangmanSessions
            .traverse()
            .forEach(data => {
            for (let player of data.data.players) {
                let highScore = player.getHighScore();
                if (highScore && highScore > maxScore[1]) {
                    maxScore = [player, highScore];
                }
            }
        });
        return maxScore;
    }
    endSession() {
        let current = this.getCurrentGame();
        current?.endGame();
        return this.getCurrentGameDetails();
    }
    /**
     * this method include resultFile in its result if current game is active
     */
    getCurrentGameDetails() {
        let details = this.getCurrentGame()?.getDetails();
        if (details) {
            details.resultFile = this._resultFilePath;
        }
        return details;
    }
    getCurrentGame() {
        return this.hangmanSessions.getFirst();
    }
    static getSessionById(id) {
        try {
            const sessionJson = fs.readFileSync(path.join(__dirname, `../../session/session_${id}.json`)).toString();
            return JSON.parse(sessionJson);
        }
        catch (err) {
            console.error('File exception : ' + err);
            return undefined;
        }
    }
    save() {
        try {
            fs.writeFileSync(this._resultFilePath, JSON.stringify(this), 'utf8');
        }
        catch (err) {
            console.error('File exception : ' + err);
        }
    }
    fetch() {
        try {
            const sessionJson = fs.readFileSync(this._resultFilePath).toString();
            return JSON.parse(sessionJson);
        }
        catch (err) {
            console.error('File exception : ' + err);
            return undefined;
        }
    }
}
Session.number = 0;
exports.default = Session;
