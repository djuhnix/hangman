# Organisations

## Docs

Project documentations.

## SRC folder

Contains all typescript source code.

## Dist folder

Typescript build in JavaScript es2020.

## Data folder

Contains :
- The data class with all data to save
- Different data structures use in the project

### Use of data structures

Thanks to generics, each data structures can save any type of data.

#### StackCollection

Used in BST search algorithm.

Example of use :
```typescript
const stack = new StackCollection<string>();
stack.push("A");
stack.push("B");

stack.size(); // Output: 2
stack.peek(); // Output: "B"
stack.size(); // Output: 2
stack.pop();  // Output: "B"
stack.size(); // Output: 1
```

#### QueueCollection

Used for player order.

Example of use :
```typescript

const queue = new QueueCollection<string>();

queue.enqueue("A");
queue.enqueue("B");

queue.size();    // Output: 2
queue.dequeue(); // Output: "A"
queue.size();    // Output: 1
```

#### LinkedList

Used in `Session` class to handle multiple game.

Example of use :
```typescript
const  data = new LinkedList<number>();

data.insertAtEnd(4);
data.insertAtEnd(3);

data.traverse() // return [3, 4]

data.getFirst() // return 3
data.getLast() // return 4
```

#### BinarySearchTree

Used to save players high score by session.
You must create a `nodes` class that extends `TreeNode` before to create a BST, as that class has methods to be comparable.

Example of use :

```typescript
import BinarySearchTree from "./BinarySearchTree";

class MyNode extends TreeNode<number> {
    //field
    equal(target: Score): boolean {
        // return comparison
    }

    isGreaterThan(target: Score): boolean {
        // return comparison
    }

    isLessThan(target: Score): boolean {
        // return comparison
    }
}

let tree = new BinarySearchTree<number>();
tree.addNode(new MyNode());
tree.search(comparatorCallback)
```