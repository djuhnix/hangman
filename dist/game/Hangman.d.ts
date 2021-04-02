import Data from "../data/Data";
import { GameState } from "../utils/utils";
import { GameDetails } from "../utils/interfaces";
declare class Hangman {
    private readonly _data;
    private readonly _sessionId;
    /**
     * Game stat :
     *  - 1 =  not started
     * @private
     * @see GameState enum
     */
    private _gameState;
    private _lastPlayer;
    constructor(sessionId: number, word: string, playerNumber: number);
    get sessionId(): number;
    get data(): Data;
    /**
     * Add a player and return his id
     * @param pseudo
     */
    addPlayer(pseudo: string): number;
    init(): GameDetails;
    endGame(): GameDetails;
    guessLetter(letter: string): boolean;
    nextTurn(letter: string): GameDetails;
    getGameState(): GameState;
    /**
     * without result file
     */
    getDetails(): GameDetails;
}
export default Hangman;
//# sourceMappingURL=Hangman.d.ts.map