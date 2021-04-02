declare abstract class Collection<T> implements Iterable<T> {
    protected storage: T[];
    size(): number;
    abstract isFull(): boolean;
    [Symbol.iterator](): Iterator<T>;
}
export default Collection;
//# sourceMappingURL=Collection.d.ts.map