# Hangman Node Module

This is the Hangman paper and pencil guessing game in a node-js module that can be used in JavaScript or TypeScript projects.

You just have to install it via `npm` or `yarn`.

```shell
npm install hangman-game
```

## Organisation

### Data folder

Contains :
- The data class with all data to save
- Different data structures use in the project

### Use of data structures

- StackCollection

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

- QueueCollection

```typescript

const queue = new QueueCollection<string>();

queue.enqueue("A");
queue.enqueue("B");

queue.size();    // Output: 2
queue.dequeue(); // Output: "A"
queue.size();    // Output: 1
```