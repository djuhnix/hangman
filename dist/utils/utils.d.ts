declare enum GameState {
    NOT_STARTED = 0,
    ONGOING = 1,
    GAME_OVER = 2,
    WIN = 3
}
declare function initialiseHangmanWordSlot(size: number, value: string): string[];
/**
 * Find the position of char in str and return an array of index
 * @param str
 * @param char
 */
declare function charPos(str: string, char: string): (number | undefined)[];
declare function formatTime(ms: number): string;
export { initialiseHangmanWordSlot, charPos, formatTime, GameState };
//# sourceMappingURL=utils.d.ts.map