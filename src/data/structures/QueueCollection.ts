import {IQueue} from "../../utils/interfaces";
import Collection from "../../utils/Collection";

class QueueCollection<T> extends Collection<T> implements IQueue<T> {

    constructor(private capacity: number = Infinity) {
        super();
    }

    enqueue(item: T): void {
        if (this.size() === this.capacity) {
            throw Error("QueueCollection has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }
    dequeue(): T | undefined {
        return this.storage.shift();
    }
    size(): number {
        return this.storage.length;
    }

    // Implementation of the abstract method
    isFull(): boolean {
        return this.capacity === this.size();
    }
}

export default QueueCollection;