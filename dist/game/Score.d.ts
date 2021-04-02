import { TreeNode } from "../utils/nodes";
declare class Score extends TreeNode<number> {
    private _points;
    constructor(sessionId: number, points: number);
    get points(): number;
    addPoints(points: number): void;
    equal(target: Score): boolean;
    isGreaterThan(target: Score): boolean;
    isLessThan(target: Score): boolean;
}
export default Score;
//# sourceMappingURL=Score.d.ts.map