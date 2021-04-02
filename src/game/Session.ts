'use strict'
import * as fs from 'fs';
import {PathLike} from 'fs';
import * as path from 'path';
import LinkedList from "../data/structures/LinkedList";
import Hangman from "./Hangman";
import {GameDetails} from "../utils/interfaces";
import {GameState} from "../utils/utils";
import Player from "./Player";

class Session {
    private static number: number = 0;
    private readonly _id: number;
    private readonly _hangmanSessions: LinkedList<Hangman>;
    private readonly _resultFilePath: PathLike;


    constructor() {
        this._id = ++Session.number;
        this._resultFilePath = path.join(__dirname, `../../session/session_${this._id}.json`)
        this._hangmanSessions = new LinkedList<Hangman>();
    }

    get id(): number {
        return this._id
    }

    get hangmanSessions(): LinkedList<Hangman> {
        return this._hangmanSessions;
    }

    startNewGame(word: string, playerNumber: number): Hangman | undefined {
        const current = this.getCurrentGame();
        let newGame: Hangman|undefined = undefined;
        if (current ) {
            let gameState = current.getGameState();
            if (gameState == GameState.ONGOING)
                throw new Error("End the current game before starting a new one.");
            else if (gameState == GameState.WIN || gameState == GameState.GAME_OVER)
                newGame = this._hangmanSessions.insertInBegin(new Hangman(this.id, word, playerNumber)).data;
            else if (gameState == GameState.NOT_STARTED)
                throw new Error("Start and end the current game before starting a new one.");
        } else {
            newGame = this._hangmanSessions.insertInBegin(new Hangman(this.id, word, playerNumber)).data;
        }
        return newGame;
    }

    getBestPlayer():[Player|undefined, number] {
        let maxScore: [Player|undefined, number] = [undefined, 0];
        this.hangmanSessions
            .traverse()
            .forEach(
                data => {
                    for (let player of data.data.players) {
                        let highScore = player.getHighScore();
                        if ( highScore && highScore > maxScore[1]) {
                            maxScore = [player, highScore];
                        }
                    }
                });
        return maxScore;
    }

    endSession(): GameDetails | undefined {
        let current = this.getCurrentGame();
        current?.endGame();
        return this.getCurrentGameDetails();
    }

    /**
     * this method include resultFile in its result if current game is active
     */
    getCurrentGameDetails(): GameDetails | undefined {
        let details = this.getCurrentGame()?.getDetails();
        if (details) {
            details.resultFile = this._resultFilePath;
        }
        return details;
    }

    getCurrentGame(): Hangman | undefined {
        return this.hangmanSessions.getFirst()
    }

    static getSessionById(id: number): Session | undefined {
        try {
            const sessionJson = fs.readFileSync(
                path.join(__dirname, `../../session/session_${id}.json`)
            ).toString()
            return JSON.parse(sessionJson);
        } catch (err) {
            console.error('File exception : ' + err)
            return undefined;
        }
    }

    save() {
        try {
            fs.writeFileSync(this._resultFilePath, JSON.stringify(this), 'utf8')
        } catch (err) {
            console.error('File exception : ' + err)
        }
    }

    fetch (): Session | undefined {
        try {
            const sessionJson = fs.readFileSync(this._resultFilePath).toString()
            return JSON.parse(sessionJson);
        } catch (err) {
            console.error('File exception : ' + err)
            return undefined;
        }
    }
}

export default Session;
