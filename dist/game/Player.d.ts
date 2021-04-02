declare class Player {
    private static number;
    private readonly _id;
    private _pseudo;
    private score;
    constructor(pseudo: string);
    get id(): number;
    get pseudo(): string;
    set pseudo(value: string);
    getHighScore(): number | undefined;
    equal(player: Player): boolean;
    saveScore(sessionId: number, points: number): void;
}
export default Player;
//# sourceMappingURL=Player.d.ts.map