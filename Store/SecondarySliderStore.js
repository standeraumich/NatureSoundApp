import { observable, makeObservable, action } from "mobx";

// SecondarySliderStore holds state data specific to the secondary audio slider
class SecondarySliderStore {
    volumeLevel = 0;
    playPauseState = false;

    constructor() {
        makeObservable(this, {
            volumeLevel: observable,
            playPauseState: observable,
            setVolumeLevel: action,
        });
    }

    setVolumeLevel(level) {
        this.volumeLevel = level;
    }

    setPlayPauseState(stateBool) {
        this.playPauseState = stateBool;
    }
}
export const secondarySliderStore = new SecondarySliderStore();
