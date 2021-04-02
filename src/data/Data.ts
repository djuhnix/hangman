import Player from "../game/Player";
import {initialiseHangmanWordSlot} from "../utils/utils";
import QueueCollection from "./structures/QueueCollection";

class Data {
    private readonly _word: string;
    private readonly _playerNumber: number;
    private readonly _players: QueueCollection<Player>;
    private readonly _missed: string[];
    private _chances: number;
    private _progress: string[];
    private _guessed: string[];
    private _duration: number = 0;
    private _startTime: number | undefined;

    constructor(word: string, playerNumber: number, chances: number = 6) {
        this._word = word;
        this._playerNumber = playerNumber;
        this._players = new QueueCollection<Player>(playerNumber)
        this._missed = new Array<string>();
        this._guessed = new Array<string>();
        this._chances = chances;
        this._progress = initialiseHangmanWordSlot(word.length, '_');
    }

    start() {
        this._startTime = Date.now();
    }

    get playerNumber(): number {
        return this._playerNumber;
    }

    get startTime(): number | undefined {
        return this._startTime;
    }

    get duration(): number {
        return this._duration;
    }

    set duration(value: number) {
        this._duration = value;
    }

    get guessed(): string[] {
        return this._guessed;
    }

    set guessed(value: string[]) {
        this._guessed = value;
    }

    get progress(): string[] {
        return this._progress;
    }

    set progress(value: string[]) {
        this._progress = value;
    }

    get chances(): number {
        return this._chances;
    }

    set chances(value: number) {
        this._chances = value;
    }

    get missed(): string[] {
        return this._missed;
    }

    get word(): string {
        return this._word;
    }

    get players(): QueueCollection<Player> {
        return this._players;
    }

    isLetterAlreadyMissed(letter: string): boolean {
        return this.missed.indexOf(letter) > -1;
    }

    isLetterAlreadyGuessed(letter: string): boolean {
        return this.guessed.indexOf(letter) > -1;
    }

    addMissedLetter(letter: string) {
        this.missed.push(letter);
    }

    addGuessedLetter(letter: string) {
        this.guessed.push(letter);
    }

    addPlayer(player: Player) {
        this.players.enqueue(player);
    }

    getNextPlayer(): Player {
        const player = this.players.dequeue();
        if (!player) throw new Error("Before beginning, add player first.");
        else this.players.enqueue(player);
        return  player;
    }

    updateDuration() {
        if (!this.startTime) throw new Error("Game has not start yet.");
        this.duration = Date.now() - this.startTime;
    }
}

export default Data;