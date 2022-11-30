import { observable, makeObservable, action } from "mobx";

class PlayPauseState {
    PPState = true;
    PPImage = require('../assets/play-button-arrowhead.png')

    constructor() {
        makeObservable(this, {
            PPState: observable,
            PPImage: observable,
            setState: action,
        });
    }

    setState(stateBool) {
        console.log('inside setState ' + stateBool)
        this.PPImage = stateBool ? require('../assets/pause.png') : require('../assets/play-button-arrowhead.png');
        this.PPState = stateBool;
    }

}
export const playPauseStateStore = new PlayPauseState();
