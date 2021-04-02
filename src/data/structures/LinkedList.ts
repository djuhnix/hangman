import {DoubleNode} from "../../utils/nodes";
import {ILinkedList} from "../../utils/interfaces";

class LinkedList<T> implements ILinkedList<T> {
    private head: DoubleNode<T> | null = null;

    public insertAtEnd(data: T): DoubleNode<T> {
        const node = new DoubleNode(data);
        if (!this.head) {
            this.head = node;
        } else {
            const getLast = (node: DoubleNode<T>): DoubleNode<T> => {
                return node.next ? getLast(node.next) : node;
            };

            const lastNode = getLast(this.head);
            node.prev = lastNode;
            lastNode.next = node;
        }
        return node;
    }

    public insertInBegin(data: T): DoubleNode<T> {
        const node = new DoubleNode(data);
        if (!this.head) {
            this.head = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        return node;
    }

    public deleteNode(node: DoubleNode<T>): void {
        if (!node.prev) {
            this.head = node.next;
        } else {
            const prevNode = node.prev;
            prevNode.next = node.next;
        }
    }

    getFirst(): T | undefined {
        return this.head?.data;
    }

    getLast(): T {
        const array = this.traverse();
        return array[array.length - 1];
    }

    /**
     * Return the first occurrence of the node that validate the comparator search condition
     * @param comparator callback function that return a boolean
     */
    public search(comparator: (data: T) => boolean): DoubleNode<T> | null {
        const checkNext = (node: DoubleNode<T>): DoubleNode<T> | null => {
            if (comparator(node.data)) {
                return node;
            }
            return node.next ? checkNext(node.next) : null;
        };

        return this.head ? checkNext(this.head) : null;
    }

    public traverse(): T[] {
        const array: T[] = [];
        if (!this.head) {
            return array;
        }

        const addToArray = (node: DoubleNode<T>): T[] => {
            array.push(node.data);
            return node.next ? addToArray(node.next) : array;
        };
        return addToArray(this.head);
    }

    public size(): number {
        return this.traverse().length;
    }
}

export default LinkedList;