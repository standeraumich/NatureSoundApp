import { observable, makeObservable, action } from "mobx";

class PlayPauseStore {
    playPauseState = false;
    playPauseImage = require("../assets/play-button-arrowhead.png");

    constructor() {
        makeObservable(this, {
            playPauseState: observable,
            playPauseImage: observable,
            setPlayPauseState:action

        });
    }

    setPlayPauseState(stateBool) {
        this.playPauseImage = stateBool
            ? require("../assets/pause.png")
            : require("../assets/play-button-arrowhead.png");
        this.playPauseState = stateBool;
    }
}
export const playPauseStore = new PlayPauseStore();
