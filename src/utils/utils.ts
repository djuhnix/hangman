enum GameState {
    NOT_STARTED,
    ONGOING,
    GAME_OVER,
    WIN
}

function initialiseHangmanWordSlot (size: number, value: string): string[] {
    let array = []
    while (size--) array[size] = value
    return array;
}

/**
 * Find the position of char in str and return an array of index
 * @param str
 * @param char
 */
function charPos(str: string, char: string) {
    return str
        .split('')
        .map(function (c, i) {
            if (c === char) return i;
        })
        .filter(function (v) {
            return v ? v >= 0 : false
        });
}

function formatTime (ms: number) {
    let x = ms / 1000
    let seconds = Math.floor(x % 60)
    x /= 60
    let minutes = Math.floor(x % 60)
    x /= 60
    let hours = Math.floor(x % 24)
    return hours + 'h, ' + minutes + 'm, ' + seconds + 's'
}

export {
    initialiseHangmanWordSlot,
    charPos,
    formatTime,
    GameState
}