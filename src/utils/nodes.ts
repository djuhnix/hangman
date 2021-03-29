import {ICompare} from "./interfaces";

class DoubleNode<T> {
    public next: DoubleNode<T> | null = null;
    public prev: DoubleNode<T> | null = null;
    constructor(public data: T) {}
}

abstract class TreeNode<T> implements ICompare<TreeNode<T>> {
    private _left: TreeNode<T> | undefined;
    private _right: TreeNode<T> | undefined;
    private _value: T;

    get value(): T {
        return this._value;
    }
    set value(value: T) {
        this._value = value;
    }
    //protected level: number | undefined;

    protected constructor (value: T) {
        this._value = value;
        this._left = undefined;
        this._right = undefined;
        //this.level = undefined;
    }
    /*
    public static create(value: T): TreeNode<T> {
        return ;
    }*/
    get right(): TreeNode<T> | undefined {
        return this._right;
    }

    set right(value: TreeNode<T> | undefined) {
        this._right = value;
    }
    get left(): TreeNode<T> | undefined {
        return this._left;
    }
    set left(value: TreeNode<T> | undefined) {
        this._left = value;
    }

    height(): number {
        let left = 0;
        if(this.left != null) {
            left += this.left.height();
        }
        let right = 0;
        if(this.right != null) {
            right += this.right.height();
        }
        return 1 + Math.max(left, right);
    }

    size(): number {
        let left = 0;
        if(this.left != null){
            left += this.left.size();
        }
        let right = 0;
        if(this.right != null){
            right += this.right.size();
        }

        return 1 + left + right;
    }

    minimum(): T {
        let minimum = this.value;
        if(this.left != null) {
            minimum = this.left.minimum();
        }

        return minimum;
    }

    maximum(): T {
        let maximum = this.value;
        if(this.right != null){
            maximum = this.right.maximum();
        }

        return maximum;
    }

    abstract equal(target: TreeNode<T>): boolean;
    abstract isGreaterThan(target: TreeNode<T>): boolean;
    abstract isLessThan(target: TreeNode<T>): boolean;
}

export {
    DoubleNode,
    TreeNode
}