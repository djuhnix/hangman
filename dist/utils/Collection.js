"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Collection {
    constructor() {
        this.storage = [];
    }
    size() {
        return this.storage.length;
    }
    [Symbol.iterator]() {
        return this.storage[Symbol.iterator]();
    }
}
exports.default = Collection;
