import { observable, makeObservable, action } from "mobx";

class AudioMainStore {
    audioObject = null;
    audioFile = "https://feeds.soundcloud.com/stream/1394982667-steve-anderau-naturesoundappaudiomain.mp3";

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
