"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const QueueCollection_1 = __importDefault(require("./QueueCollection"));
const StackCollection_1 = __importDefault(require("./StackCollection"));
class BinarySearchTree {
    constructor() {
        this._root = undefined;
    }
    get root() {
        return this._root;
    }
    set root(v) {
        this._root = v;
    }
    addNode(newNode) {
        // Create a new node
        //const newNode = new TreeNode(value);
        // If tree is empty, set new node as root
        if (this._root == null) {
            this._root = newNode;
            return true;
        }
        else {
            // If tree is not empty, find the right spot for the new node
            let currentNode = this._root;
            let traversing = true;
            while (traversing) {
                if (currentNode.equal(newNode)) {
                    //Assumption: Duplicates are not accepted.
                    traversing = false;
                    return false;
                }
                else if (newNode.isLessThan(currentNode)) {
                    // Traverse left of the node
                    if (currentNode.left == null) {
                        //Add to the left of the current node
                        currentNode.left = newNode;
                        traversing = false;
                        return true;
                    }
                    else {
                        //Traverse the left of the current node
                        currentNode = currentNode.left;
                    }
                }
                else if (newNode.isGreaterThan(currentNode)) {
                    // Traverse right of the node
                    if (currentNode.right == null) {
                        //Add to the right of the current node
                        currentNode.right = newNode;
                        traversing = false;
                        return true;
                    }
                    else {
                        //Traverse the left of the current node
                        currentNode = currentNode.right;
                    }
                }
            }
            return true;
        }
    }
    breadthFirstSearch() {
        if (this.root) { // if root is defined
            // Create a queue to keep track of the nodes we have to visit
            let queue = new QueueCollection_1.default();
            // Create an array to store the visited node values
            let visited = new Array();
            // Start traversing from the root node
            queue.enqueue(this.root);
            // While the queue is not empty
            while (queue.size() !== 0) {
                // Dequeue an element from the queue
                let current = queue.dequeue();
                if (current) {
                    let { left, right, value } = current;
                    // Add the node value to the visited array
                    visited.push(value);
                    // If current node has left child, add it to the queue to be visited for
                    if (left)
                        queue.enqueue(left);
                    // If current node has right child, add it to the queue to be visited for
                    if (right)
                        queue.enqueue(right);
                }
            }
            // Return the visited array
            return visited;
        }
        return [];
    }
    depthFirstSearchPreOrder_iter() {
        // stack to keep track of the node we visited
        let stack = new StackCollection_1.default();
        // array to return the data
        let dfsData = new Array();
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
    depthFirstSearchPreOrder_rec() {
        let visited = new Array();
        function _traverse(node) {
            visited.push(node.value);
            if (node.left)
                _traverse(node.left);
            if (node.right)
                _traverse(node.right);
        }
        if (this.root)
            _traverse(this.root);
        return visited;
    }
    getHeight() {
        let height = 0;
        if (this.root != null) {
            height += this.root.height();
        }
        return height;
    }
    getSize() {
        let size = 0;
        if (this.root != null) {
            size += this.root.size();
        }
        return size;
    }
    getMinimum() {
        return this.root ? this.root.minimum() : undefined;
    }
    getMaximum() {
        return this.root ? this.root.maximum() : undefined;
    }
    /*
    updateValue(value: T, propertyName: string, newValue: any) {
        let node = this.search(
            data => {
                if (data.value === value)
                    return 0;
                else if ()
            }
        )
    }*/
    /**
     *
     * @param comparator a callback that compare node and set search condition,
     *        1 -> greater than
     *        0 -> equal
     *        -1 -> less than
     * @param nodeStart
     */
    search(comparator, nodeStart = null) {
        let current = nodeStart === null ? this.root : nodeStart;
        if (current) {
            switch (comparator(current)) {
                case 1:
                    if (!current.right)
                        return undefined;
                    return this.search(comparator, current.right);
                case 0:
                    return current;
                case -1:
                    if (!current.left)
                        return undefined;
                    return this.search(comparator, current.left);
            }
        }
        return current;
    }
}
exports.default = BinarySearchTree;
