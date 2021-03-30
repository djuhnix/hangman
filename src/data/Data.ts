import Player from "../game/Player";
import {initialiseHangmanWordSlot} from "../utils/utils";

class Data {
    private readonly _word: string;
    private _players: Player[] | undefined;
    private readonly _missed: string[];
    private _chances: number;
    private _progress: string[];
    private _guessed: string[];
    private _duration: number = 0;
    private readonly _startTime: number;

    constructor(word: string, chances: number = 6) {
        this._word = word;
        this._missed = new Array<string>();
        this._guessed = new Array<string>();
        this._chances = chances;
        this._progress = initialiseHangmanWordSlot(word.length, '_');
        this._startTime = Date.now();
    }

    get startTime() {
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

    get players(): Player[] | undefined {
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
        if (this.players) this.players.push(player);
        else {
            this._players = new Array<Player>();
            this._players.push(player);
        }
    }
}

export default Data;