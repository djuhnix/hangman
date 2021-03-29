abstract class Collection<T> {
    protected storage: T[] = [];

    size(): number {
        return this.storage.length;
    }
    abstract isFull(): boolean;
}

export default Collection;