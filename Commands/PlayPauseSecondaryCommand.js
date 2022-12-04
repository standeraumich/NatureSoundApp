import Command from "./Command";
import { secondarySliderStore } from "../Store/SecondarySliderStore";
import { audioSecondaryStore } from "../Store/AudioSecondaryStore";
import { playPauseStore } from "../Store/PlayPauseStore";
import audioManager from "../Services/AudioManager";

// PlayPauseSecondaryCommand will pause or play the secondary 
// audio based on the secondary audio store
export default function PlayPauseSecondaryCommand() {
    return new Command(() => {
        if (
            secondarySliderStore.volumeLevel != 0.0 &&
            playPauseStore.playPauseState
        ) {
            audioManager.playSound(audioSecondaryStore, secondarySliderStore);
        } else if (
            secondarySliderStore.volumeLevel == 0.0 ||
            !playPauseStore.playPauseState
        ) {
            audioManager.pauseSound(audioSecondaryStore, secondarySliderStore);
        }
    });
}
