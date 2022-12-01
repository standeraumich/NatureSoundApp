import { observable, makeObservable, action } from "mobx";

class AudioMainStore {
    audioObject = null;
    audioFile = require("../Tracks/track.wav");

    constructor() {
        makeObservable(this, {
            audioObject: observable,
        });
    }

    setAudioObject(audio) {
        this.audioObject = audio;
    }

}
export const audioMainStore = new AudioMainStore();
