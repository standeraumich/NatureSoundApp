import Command from "./Command";
import { playPauseStore } from "../Store/PlayPauseStore";
import { audioMainStore } from "../Store/AudioMainStore";
import audioManager from "../Services/AudioManager";

// PlayPauseMainCommand will pause or play the main 
// audio based on the main audio store
export default function PlayPauseMainCommand() {
    return new Command(() => {
        console.log('PlayPause command executed')
        if (!playPauseStore.playPauseState) {
            audioManager.playSound(audioMainStore, playPauseStore);
        } else {
            audioManager.pauseSound(audioMainStore, playPauseStore);
        }
    });
}
