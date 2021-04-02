"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils/utils");
const QueueCollection_1 = __importDefault(require("./structures/QueueCollection"));
class Data {
    constructor(word, playerNumber, chances = 6) {
        this._duration = 0;
        this._word = word;
        this._playerNumber = playerNumber;
        this._players = new QueueCollection_1.default(playerNumber);
        this._missed = new Array();
        this._guessed = new Array();
        this._chances = chances;
        this._progress = utils_1.initialiseHangmanWordSlot(word.length, '_');
    }
    start() {
        this._startTime = Date.now();
    }
    get playerNumber() {
        return this._playerNumber;
    }
    get startTime() {
        return this._startTime;
    }
    get duration() {
        return this._duration;
    }
    set duration(value) {
        this._duration = value;
    }
    get guessed() {
        return this._guessed;
    }
    set guessed(value) {
        this._guessed = value;
    }
    get progress() {
        return this._progress;
    }
    set progress(value) {
        this._progress = value;
    }
    get chances() {
        return this._chances;
    }
    set chances(value) {
        this._chances = value;
    }
    get missed() {
        return this._missed;
    }
    get word() {
        return this._word;
    }
    get players() {
        return this._players;
    }
    isLetterAlreadyMissed(letter) {
        return this.missed.indexOf(letter) > -1;
    }
    isLetterAlreadyGuessed(letter) {
        return this.guessed.indexOf(letter) > -1;
    }
    addMissedLetter(letter) {
        this.missed.push(letter);
    }
    addGuessedLetter(letter) {
        this.guessed.push(letter);
    }
    addPlayer(player) {
        this.players.enqueue(player);
    }
    getNextPlayer() {
        const player = this.players.dequeue();
        if (!player)
            throw new Error("Before beginning, add player first.");
        else
            this.players.enqueue(player);
        return player;
    }
    updateDuration() {
        if (!this.startTime)
            throw new Error("Game has not start yet.");
        this.duration = Date.now() - this.startTime;
    }
}
exports.default = Data;
