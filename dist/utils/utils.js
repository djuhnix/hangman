"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = exports.formatTime = exports.charPos = exports.initialiseHangmanWordSlot = void 0;
var GameState;
(function (GameState) {
    GameState[GameState["NOT_STARTED"] = 0] = "NOT_STARTED";
    GameState[GameState["ONGOING"] = 1] = "ONGOING";
    GameState[GameState["GAME_OVER"] = 2] = "GAME_OVER";
    GameState[GameState["WIN"] = 3] = "WIN";
})(GameState || (GameState = {}));
exports.GameState = GameState;
function initialiseHangmanWordSlot(size, value) {
    let array = [];
    while (size--)
        array[size] = value;
    return array;
}
exports.initialiseHangmanWordSlot = initialiseHangmanWordSlot;
/**
 * Find the position of char in str and return an array of index
 * @param str
 * @param char
 */
function charPos(str, char) {
    return str
        .split('')
        .map(function (c, i) {
        if (c === char)
            return i;
    })
        .filter(function (v) {
        return v ? v >= 0 : false;
    });
}
exports.charPos = charPos;
function formatTime(ms) {
    let x = ms / 1000;
    let seconds = Math.floor(x % 60);
    x /= 60;
    let minutes = Math.floor(x % 60);
    x /= 60;
    let hours = Math.floor(x % 24);
    return hours + 'h, ' + minutes + 'm, ' + seconds + 's';
}
exports.formatTime = formatTime;
