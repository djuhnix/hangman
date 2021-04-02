import Player from "../game/Player";
import QueueCollection from "./structures/QueueCollection";
declare class Data {
    private readonly _word;
    private readonly _playerNumber;
    private readonly _players;
    private readonly _missed;
    private _chances;
    private _progress;
    private _guessed;
    private _duration;
    private _startTime;
    constructor(word: string, playerNumber: number, chances?: number);
    start(): void;
    get playerNumber(): number;
    get startTime(): number | undefined;
    get duration(): number;
    set duration(value: number);
    get guessed(): string[];
    set guessed(value: string[]);
    get progress(): string[];
    set progress(value: string[]);
    get chances(): number;
    set chances(value: number);
    get missed(): string[];
    get word(): string;
    get players(): QueueCollection<Player>;
    isLetterAlreadyMissed(letter: string): boolean;
    isLetterAlreadyGuessed(letter: string): boolean;
    addMissedLetter(letter: string): void;
    addGuessedLetter(letter: string): void;
    addPlayer(player: Player): void;
    getNextPlayer(): Player;
    updateDuration(): void;
}
export default Data;
//# sourceMappingURL=Data.d.ts.map