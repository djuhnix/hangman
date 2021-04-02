import Session from "./Session";

/**
 * Session management
 * Base game class to extend
 */
class Games {
    private readonly _session: Session;

    constructor() {
        this._session = new Session();
    }

    get session(): Session {
        return this._session;
    }
}