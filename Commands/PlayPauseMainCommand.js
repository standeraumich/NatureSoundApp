import Command from "./Command";
import { playPauseStore } from "../Store/PlayPauseStore";
import { audioMainStore } from "../Store/AudioMainStore";
import audioManager from "../Services/AudioManager";

export default function PlayPauseMainCommand() {
    return new Command(() => {
        playPauseStore.setPlayPauseState(!playPauseStore.playPauseState);
        if (playPauseStore.playPauseState) {
            audioManager.playSound(audioMainStore);
        }else{
            audioManager.pauseSound(audioMainStore);
        }
    });
}
