import { observable, makeObservable, action } from "mobx";

class AudioSecondaryStore {
    audioObject = null;
    audioFile = "https://feeds.soundcloud.com/stream/1394989690-steve-anderau-naturesoundappaudiosecondaryfinal.mp3"

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
