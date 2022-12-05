import Command from "./Command";
import { secondarySliderStore } from "../Store/SecondarySliderStore";
import { audioSecondaryStore } from "../Store/AudioSecondaryStore";

// SetSecondaryVolumeCommand will change the volume 
// of the secondary audio based on the volume level store
// when it is called
export default function SetSecondaryVolumeCommand() {
    return new Command(() => {
        console.log('SetSecondaryVolume command executed')
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
