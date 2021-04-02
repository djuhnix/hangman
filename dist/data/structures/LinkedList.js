"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodes_1 = require("../../utils/nodes");
class LinkedList {
    constructor() {
        this.head = null;
    }
    insertAtEnd(data) {
        const node = new nodes_1.DoubleNode(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            const getLast = (node) => {
                return node.next ? getLast(node.next) : node;
            };
            const lastNode = getLast(this.head);
            node.prev = lastNode;
            lastNode.next = node;
        }
        return node;
    }
    insertInBegin(data) {
        const node = new nodes_1.DoubleNode(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        return node;
    }
    deleteNode(node) {
        if (!node.prev) {
            this.head = node.next;
        }
        else {
            const prevNode = node.prev;
            prevNode.next = node.next;
        }
    }
    getFirst() {
        return this.head?.data;
    }
    getLast() {
        const array = this.traverse();
        return array[array.length - 1];
    }
    /**
     * Return the first occurrence of the node that validate the comparator search condition
     * @param comparator callback function that return a boolean
     */
    search(comparator) {
        const checkNext = (node) => {
            if (comparator(node.data)) {
                return node;
            }
            return node.next ? checkNext(node.next) : null;
        };
        return this.head ? checkNext(this.head) : null;
    }
    traverse() {
        const array = [];
        if (!this.head) {
            return array;
        }
        const addToArray = (node) => {
            array.push(node.data);
            return node.next ? addToArray(node.next) : array;
        };
        return addToArray(this.head);
    }
    size() {
        return this.traverse().length;
    }
}
exports.default = LinkedList;
