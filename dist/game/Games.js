"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = __importDefault(require("./Session"));
/**
 * Session management
 * Base game class to extend
 */
class Games {
    constructor() {
        this._session = new Session_1.default();
    }
    get session() {
        return this._session;
    }
}
