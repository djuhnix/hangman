"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Collection_1 = __importDefault(require("../../utils/Collection"));
class QueueCollection extends Collection_1.default {
    constructor(capacity = Infinity) {
        super();
        this.capacity = capacity;
    }
    enqueue(item) {
        if (this.size() === this.capacity) {
            throw Error("QueueCollection has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }
    dequeue() {
        return this.storage.shift();
    }
    size() {
        return this.storage.length;
    }
    // Implementation of the abstract method
    isFull() {
        return this.capacity === this.size();
    }
}
exports.default = QueueCollection;
