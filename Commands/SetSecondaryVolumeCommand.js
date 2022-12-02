import Command from "./Command";
import { secondarySliderStore } from "../Store/SecondarySliderStore";
import { audioSecondaryStore } from "../Store/AudioSecondaryStore";

export default function SetSecondaryVolumeCommand() {
    return new Command(() => {
        if (
            audioSecondaryStore.audioObject != null &&
            Object.keys(audioSecondaryStore.audioObject).length != 0
        ) {
            audioSecondaryStore.audioObject.setVolumeAsync(
                secondarySliderStore.volumeLevel
            );
        }
    });
}
