import { IQueue } from "../../utils/interfaces";
import Collection from "../../utils/Collection";
declare class QueueCollection<T> extends Collection<T> implements IQueue<T> {
    private capacity;
    constructor(capacity?: number);
    enqueue(item: T): void;
    dequeue(): T | undefined;
    size(): number;
    isFull(): boolean;
}
export default QueueCollection;
//# sourceMappingURL=QueueCollection.d.ts.map