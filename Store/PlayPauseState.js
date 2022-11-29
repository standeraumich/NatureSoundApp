import { observable, makeObservable, action } from "mobx";

class PlayPauseState {
    PPState = false;

    constructor() {
        makeObservable(this, {
            PPState: observable,
            setPlayState: action,
            setPauseState: action,
        });
    }

    setPlayState() {
        this.PPState = true;
    }

    setPauseState() {
        this.PPState = false;
    }
}
export const playPauseStateStore = new PlayPauseState();
