import {TreeNode} from "../utils/nodes";

class Score extends TreeNode<number> {
    private readonly _sessionId: number;

    constructor(sessionId: number, points: number) {
        super(points);
        this._sessionId = sessionId;
    }

    get sessionId() {
        return this._sessionId;
    }

    addPoints(points: number) {
        this.value += points;
    }

    equal(target: TreeNode<number>): boolean {
        return this.value == target.value;
    }

    isGreaterThan(target: TreeNode<number>): boolean {
        return this.value > target.value;
    }

    isLessThan(target: TreeNode<number>): boolean {
        return this.value < target.value;
    }
}

export default Score;