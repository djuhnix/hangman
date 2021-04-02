"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodes_1 = require("../utils/nodes");
class Score extends nodes_1.TreeNode {
    constructor(sessionId, points) {
        super(sessionId);
        this._points = points;
    }
    get points() {
        return this._points;
    }
    addPoints(points) {
        this._points += points;
    }
    equal(target) {
        return this.points == target.points;
    }
    isGreaterThan(target) {
        return this.points > target.points;
    }
    isLessThan(target) {
        return this.points < target.points;
    }
}
exports.default = Score;
