import { observable, makeObservable, action } from "mobx";

// PlayPauseStore holds state data for the play pause button 
class PlayPauseStore {
    playPauseState = false;
    playPauseImage = require("../assets/playButtonWhite.png");
    isDay = false;

    constructor() {
        makeObservable(this, {
            playPauseState: observable,
            playPauseImage: observable,
            setPlayPauseState: action,
            setIsDay:action,
        });
    }

    setPlayPauseState(stateBool) {
        if (this.isDay) {
            this.playPauseImage = stateBool
                ? require("../assets/pauseButtonBlack.png")
                : require("../assets/playButtonBlack.png");
        } else {
            this.playPauseImage = stateBool
                ? require("../assets/pauseButtonWhite.png")
                : require("../assets/playButtonWhite.png");
        }
        this.playPauseState = stateBool;
    }

    setIsDay(isDayBool){
        this.isDay = isDayBool;
    }
}
export const playPauseStore = new PlayPauseStore();
