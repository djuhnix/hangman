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
        //TODO search for session score in BST
        this.score.addNode(new Score(sessionId, points));
    }
}

export default Player;