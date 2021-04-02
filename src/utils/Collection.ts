abstract class Collection<T> implements Iterable<T>{
    protected storage: T[] = [];



    size(): number {
        return this.storage.length;
    }
    abstract isFull(): boolean;

    [Symbol.iterator](): Iterator<T> {
        return this.storage[Symbol.iterator]();
    }
}

export default Collection;