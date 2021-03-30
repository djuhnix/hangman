import LinkedList from "../data/structures/LinkedList";
import Hangman from "./Hangman";

/**
 * Session management
 */
class Game {
    private readonly _sessions: LinkedList<Hangman>

    constructor() {
        this._sessions = new LinkedList<Hangman>();
    }

    startNewSession(id: string): void {
        //this.sessions.insertAtEnd();
    }

    get sessions(): LinkedList<Hangman> {
        return this._sessions;
    }
}