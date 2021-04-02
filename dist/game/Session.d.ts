import LinkedList from "../data/structures/LinkedList";
import Hangman from "./Hangman";
import { GameDetails } from "../utils/interfaces";
import Player from "./Player";
declare class Session {
    private static number;
    private readonly _id;
    private readonly _hangmanSessions;
    private readonly _resultFilePath;
    constructor();
    get id(): number;
    get hangmanSessions(): LinkedList<Hangman>;
    startNewGame(word: string, playerNumber: number): Hangman | undefined;
    getBestPlayer(): [Player | undefined, number];
    endSession(): GameDetails | undefined;
    /**
     * this method include resultFile in its result if current game is active
     */
    getCurrentGameDetails(): GameDetails | undefined;
    getCurrentGame(): Hangman | undefined;
    static getSessionById(id: number): Session | undefined;
    save(): void;
    fetch(): Session | undefined;
}
export default Session;
//# sourceMappingURL=Session.d.ts.map