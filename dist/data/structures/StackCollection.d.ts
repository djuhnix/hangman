import { IStack } from "../../utils/interfaces";
import Collection from "../../utils/Collection";
declare class StackCollection<T> extends Collection<T> implements IStack<T> {
    private capacity;
    constructor(capacity?: number);
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
    isFull(): boolean;
}
export default StackCollection;
//# sourceMappingURL=StackCollection.d.ts.map