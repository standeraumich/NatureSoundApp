import { observable, makeObservable, action } from "mobx";

class AudioSecondaryStore {
    audioObject = null;
    audioFile = require("../Tracks/addNoiseTrack.wav");

    constructor() {
        makeObservable(this, {
            audioObject: observable,
        });
    }

    setAudioObject(audio) {
        this.audioObject = audio;
    }

}
export const audioSecondaryStore = new AudioSecondaryStore();
