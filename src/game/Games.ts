import LinkedList from "../data/structures/LinkedList";
import Hangman from "./Hangman";
import Session from "./Session";
import {GameDetails} from "../utils/interfaces";

/**
 * Session management
 *
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