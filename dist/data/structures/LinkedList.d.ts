import { DoubleNode } from "../../utils/nodes";
import { ILinkedList } from "../../utils/interfaces";
declare class LinkedList<T> implements ILinkedList<T> {
    private head;
    insertAtEnd(data: T): DoubleNode<T>;
    insertInBegin(data: T): DoubleNode<T>;
    deleteNode(node: DoubleNode<T>): void;
    getFirst(): T | undefined;
    getLast(): T;
    /**
     * Return the first occurrence of the node that validate the comparator search condition
     * @param comparator callback function that return a boolean
     */
    search(comparator: (data: T) => boolean): DoubleNode<T> | null;
    traverse(): T[];
    size(): number;
}
export default LinkedList;
//# sourceMappingURL=LinkedList.d.ts.map