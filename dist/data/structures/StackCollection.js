"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Collection_1 = __importDefault(require("../../utils/Collection"));
class StackCollection extends Collection_1.default {
    constructor(capacity = Infinity) {
        super();
        this.capacity = capacity;
    }
    push(item) {
        if (this.isFull()) {
            throw Error("StackCollection has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }
    pop() {
        return this.storage.pop();
    }
    peek() {
        return this.storage[this.size() - 1];
    }
    size() {
        return this.storage.length;
    }
    // Implementation of the abstract method
    isFull() {
        return this.capacity === this.size();
    }
}
exports.default = StackCollection;
