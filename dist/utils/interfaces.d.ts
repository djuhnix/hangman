/// <reference types="node" />
import { DoubleNode } from "./nodes";
import { PathLike } from "fs";
import { GameState } from "./utils";
interface GameDetails {
    progress: string[];
    hangmanWord: string;
    gameState: GameState;
    guessed: string[];
    missed: string[];
    chances: number;
    duration: number;
    resultFile: PathLike | undefined;
}
interface ILinkedList<T> {
    insertInBegin(data: T): DoubleNode<T>;
    insertAtEnd(data: T): DoubleNode<T>;
    deleteNode(node: DoubleNode<T>): void;
    traverse(): T[];
    size(): number;
    search(comparator: (data: T) => boolean): DoubleNode<T> | null;
}
interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    size(): number;
}
interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}
interface ICompare<T> {
    isLessThan(target: T): boolean;
    isGreaterThan(target: T): boolean;
    equal(target: T): boolean;
}
export { ILinkedList, IQueue, IStack, ICompare, GameDetails };
//# sourceMappingURL=interfaces.d.ts.map