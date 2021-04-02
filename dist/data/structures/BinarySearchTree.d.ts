import { TreeNode } from "../../utils/nodes";
declare class BinarySearchTree<T> {
    private _root;
    get root(): TreeNode<T> | undefined;
    set root(v: TreeNode<T> | undefined);
    constructor();
    addNode(newNode: TreeNode<T>): boolean;
    breadthFirstSearch(): T[];
    depthFirstSearchPreOrder_iter(): T[];
    depthFirstSearchPreOrder_rec(): T[];
    getHeight(): number;
    getSize(): number;
    getMinimum(): T | undefined;
    getMaximum(): T | undefined;
    /**
     *
     * @param comparator a callback that compare node and set search condition,
     *        1 -> greater than
     *        0 -> equal
     *        -1 -> less than
     * @param nodeStart
     */
    search(comparator: (data: TreeNode<T>) => 1 | 0 | -1, nodeStart?: TreeNode<T> | null): TreeNode<T> | undefined;
}
export default BinarySearchTree;
//# sourceMappingURL=BinarySearchTree.d.ts.map