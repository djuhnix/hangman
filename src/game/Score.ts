import {TreeNode} from "../utils/nodes";

class Score extends TreeNode<number> {
    private _points: number;

    constructor(sessionId: number, points: number) {
        super(sessionId);
        this._points = points;
    }

    get points() {
        return this._points;
    }

    addPoints(points: number) {
        this._points += points;
    }

    equal(target: Score): boolean {
        return this.points == target.points;
    }

    isGreaterThan(target: Score): boolean {
        return this.points > target.points;
    }

    isLessThan(target: Score): boolean {
        return this.points < target.points;
    }
}

export default Score;