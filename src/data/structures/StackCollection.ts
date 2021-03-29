import {IStack} from "../../utils/interfaces";
import Collection from "../../utils/Collection";

class StackCollection<T> extends Collection<T> implements IStack<T> {

    constructor(private capacity: number = Infinity) {
        super();
    }

    push(item: T): void {
        if (this.isFull()) {
            throw Error("StackCollection has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }

    pop(): T | undefined {
        return this.storage.pop();
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    size(): number {
        return this.storage.length;
    }

    // Implementation of the abstract method
    isFull(): boolean {
        return this.capacity === this.size();
    }
}

export default StackCollection;
