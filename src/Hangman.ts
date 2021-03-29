class Hangman {
    private readonly _data: Data

    constructor() {
        this._data = new Data()
    }
    get data(): Data {
        return this._data;
    }
}