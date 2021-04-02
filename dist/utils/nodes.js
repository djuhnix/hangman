"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = exports.DoubleNode = void 0;
class DoubleNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
exports.DoubleNode = DoubleNode;
class TreeNode {
    //protected level: number | undefined;
    constructor(value) {
        this._value = value;
        this._left = undefined;
        this._right = undefined;
        //this.level = undefined;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    /*
    public static create(value: T): TreeNode<T> {
        return ;
    }*/
    get right() {
        return this._right;
    }
    set right(value) {
        this._right = value;
    }
    get left() {
        return this._left;
    }
    set left(value) {
        this._left = value;
    }
    height() {
        let left = 0;
        if (this.left != null) {
            left += this.left.height();
        }
        let right = 0;
        if (this.right != null) {
            right += this.right.height();
        }
        return 1 + Math.max(left, right);
    }
    size() {
        let left = 0;
        if (this.left != null) {
            left += this.left.size();
        }
        let right = 0;
        if (this.right != null) {
            right += this.right.size();
        }
        return 1 + left + right;
    }
    minimum() {
        let minimum = this.value;
        if (this.left != null) {
            minimum = this.left.minimum();
        }
        return minimum;
    }
    maximum() {
        let maximum = this.value;
        if (this.right != null) {
            maximum = this.right.maximum();
        }
        return maximum;
    }
}
exports.TreeNode = TreeNode;
