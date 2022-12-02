import Command from "./Command";
import { secondarySliderStore } from "../Store/SecondarySliderStore";
import { audioSecondaryStore } from "../Store/AudioSecondaryStore";
import { playPauseStore } from "../Store/PlayPauseStore";
import audioManager from "../Services/AudioManager";

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
