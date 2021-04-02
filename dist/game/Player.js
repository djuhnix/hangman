"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinarySearchTree_1 = __importDefault(require("../data/structures/BinarySearchTree"));
const Score_1 = __importDefault(require("./Score"));
class Player {
    constructor(pseudo) {
        this._pseudo = pseudo;
        this._id = ++Player.number;
        this.score = new BinarySearchTree_1.default();
    }
    get id() {
        return this._id;
    }
    get pseudo() {
        return this._pseudo;
    }
    set pseudo(value) {
        this._pseudo = value;
    }
    getHighScore() {
        return this.score.getMaximum();
    }
    equal(player) {
        return this.id === player.id && this.pseudo === player.pseudo;
    }
    saveScore(sessionId, points) {
        let score = this.score.search(data => {
            if (data.value === sessionId)
                return 0;
            else if (data.value < sessionId)
                return -1;
            else if (data.value > sessionId)
                return 1;
            else
                throw new Error("Invalid data argument in comparator");
        });
        if (score instanceof Score_1.default) {
            score.addPoints(points);
        }
        else {
            this.score.addNode(new Score_1.default(sessionId, points));
        }
    }
}
Player.number = 0;
exports.default = Player;
