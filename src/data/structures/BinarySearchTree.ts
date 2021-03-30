import {TreeNode} from "../../utils/nodes";
import QueueCollection from "./QueueCollection";
import StackCollection from "./StackCollection";

class BinarySearchTree<T> {
    // Property to hold a reference to the root node of the tree
    private _root: TreeNode<T> | undefined;
    public get root(): TreeNode<T> | undefined {
        return this._root;
    }
    public set root(v: TreeNode<T> | undefined) {
        this._root = v;
    }

    constructor() {
        this._root = undefined;
    }

    addNode(newNode: TreeNode<T>): boolean {
        // Create a new node
        //const newNode = new TreeNode(value);

        // If tree is empty, set new node as root
        if (this._root == null) {
            this._root = newNode;
            return true;
        } else {
            // If tree is not empty, find the right spot for the new node
            let currentNode = this._root;
            let traversing = true;
            while (traversing) {
                if (currentNode.equal(newNode)) {
                    //Assumption: Duplicates are not accepted.
                    traversing = false;
                    return false;
                } else if (newNode.isLessThan(currentNode)) {
                    // Traverse left of the node
                    if (currentNode.left == null) {
                        //Add to the left of the current node
                        currentNode.left = newNode;
                        traversing = false;
                        return true;
                    } else {
                        //Traverse the left of the current node
                        currentNode = currentNode.left;
                    }
                } else if (newNode.isGreaterThan(currentNode)) {
                    // Traverse right of the node
                    if (currentNode.right == null) {
                        //Add to the right of the current node
                        currentNode.right = newNode;
                        traversing = false;
                        return true;
                    } else {
                        //Traverse the left of the current node
                        currentNode = currentNode.right;
                    }
                }
            }
            return true;
        }
    }

    breadthFirstSearch(): T[] {
        if (this.root) { // if root is defined
            // Create a queue to keep track of the nodes we have to visit
            let queue = new QueueCollection<TreeNode<T>>();
            // Create an array to store the visited node values
            let visited = new Array<T>();

            // Start traversing from the root node
            queue.enqueue(this.root);

            // While the queue is not empty
            while (queue.size() !== 0 ) {
                // Dequeue an element from the queue
                let  current = queue.dequeue();
                if (current) {
                    let {left, right, value} = current;

                    // Add the node value to the visited array
                    visited.push(value);

                    // If current node has left child, add it to the queue to be visited for
                    if (left) queue.enqueue(left);

                    // If current node has right child, add it to the queue to be visited for
                    if (right) queue.enqueue(right);
                }
            }
            // Return the visited array
            return visited;
        }
        return [];
    }

    depthFirstSearchPreOrder_iter(): T[] {
        // stack to keep track of the node we visited
        let stack = new StackCollection<TreeNode<T>>();

        // array to return the data
        let dfsData = new Array<T>();

        // temporary variable
        let currentNode = this.root;
        if (currentNode) {
            stack.push(currentNode);

            // while we still have nodes in stack to backtrack
            while (stack.size() > 0) {
                currentNode = stack.pop();

                if (currentNode) {
                    // Add the current root to the return data
                    dfsData.push(currentNode.value);

                    // Add the right node to the stack.
                    if (currentNode.right != null)
                        stack.push(currentNode.right);

                    // Add the left node to the stack. We add left child after the right child node into the stack.
                    // This is because we have to traverse left subtree before traversing right sub tree.
                    if (currentNode.left != null)
                        stack.push(currentNode.left);
                }
            }
            return dfsData;
        }
        return [];
    }

    depthFirstSearchPreOrder_rec(): T[] {
        let visited = new Array<T>();

        function _traverse(node: TreeNode<T>) {
            visited.push(node.value);
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
        }

        if(this.root) _traverse(this.root);
        return visited;
    }

    getHeight(): number {
        let height = 0;
        if(this.root != null) {
            height += this.root.height();
        }
        return height;
    }

    getSize(): number {
        let size = 0;
        if(this.root != null) {
            size += this.root.size();
        }
        return size;
    }

    getMinimum(): T | undefined {
        return this.root ? this.root.minimum() : undefined;
    }

    getMaximum(): T | undefined {
        return this.root ? this.root.maximum() : undefined;
    }

    /*TODO search in binary tree
    search(comparator: (data: T) => boolean): T {
        this.BFT();
        let queue = [this.root];
        let found: TreeNode = null;
        while (queue.length > 0) {
            let currentNode = queue.shift();
            if (currentNode.value === node) {
                found = currentNode;
                break;
            }
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return found;
    }*/
}

export default BinarySearchTree;