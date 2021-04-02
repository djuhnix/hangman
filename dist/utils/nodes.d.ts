import { ICompare } from "./interfaces";
declare class DoubleNode<T> {
    data: T;
    next: DoubleNode<T> | null;
    prev: DoubleNode<T> | null;
    constructor(data: T);
}
declare abstract class TreeNode<T> implements ICompare<TreeNode<T>> {
    private _left;
    private _right;
    private _value;
    get value(): T;
    set value(value: T);
    protected constructor(value: T);
    get right(): TreeNode<T> | undefined;
    set right(value: TreeNode<T> | undefined);
    get left(): TreeNode<T> | undefined;
    set left(value: TreeNode<T> | undefined);
    height(): number;
    size(): number;
    minimum(): T;
    maximum(): T;
    abstract equal(target: TreeNode<T>): boolean;
    abstract isGreaterThan(target: TreeNode<T>): boolean;
    abstract isLessThan(target: TreeNode<T>): boolean;
}
export { DoubleNode, TreeNode };
//# sourceMappingURL=nodes.d.ts.map