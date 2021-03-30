import BinarySearchTree from "../data/structures/BinarySearchTree";
import Score from "./Score";

class Player {
    private static number: number = 0;
    private readonly _id: number;
    private _pseudo: string;
    private score: BinarySearchTree<number>

    constructor(pseudo: string) {
        this._pseudo = pseudo;
        this._id = ++Player.number;
        this.score = new BinarySearchTree<number>();
    }

    get id(): number {
        return this._id;
    }

    get pseudo(): string {
        return this._pseudo;
    }

    set pseudo(value: string) {
        this._pseudo = value;
    }

    getHighScore(): number | undefined {
        return this.score.getMaximum();
    }

    saveScore(sessionId: number, points: number) {
        let score = this.score.search(
            data => {
                if (data.value === sessionId)
                    return 0;
                else if (data.value < sessionId)
                    return -1;
                else if (data.value > sessionId)
                    return 1;
                else
                    throw new Error("Invalid data argument in comparator");
            }
        )
        if (score instanceof Score) {
            score.addPoints(points)
        } else {
            this.score.addNode(new Score(sessionId, points));
        }
    }
}

export default Player;