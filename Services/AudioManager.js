import { Audio } from "expo-av";

class AudioManager {
    async playSound(audioStore, objectStateStore) {
        if (audioStore.audioObject == null) {
            audioStore.setAudioObject({});
            console.log("Loading Sound");
            const { sound } = await Audio.Sound.createAsync(
                audioStore.audioFile,
                {
                    shouldPlay: true,
                    isLooping: true,
                }
            );

            audioStore.setAudioObject(sound);
            objectStateStore.setPlayPauseState(true);
        }
        if (
            !objectStateStore.playPauseState &&
            audioStore.audioObject != null && 
            Object.keys(audioStore.audioObject).length != 0
        ) {
            objectStateStore.setPlayPauseState(true);
            console.log("playing sound");
            await audioStore.audioObject.playAsync();
        }
    }

    async pauseSound(audioStore, objectStateStore) {
        if (
            audioStore.audioObject != null &&
            objectStateStore.playPauseState === true
        ) {
            objectStateStore.setPlayPauseState(false);
            console.log("Pausing Sound");
            await audioStore.audioObject.pauseAsync();
        }
    }
}
const audioManager = new AudioManager();
export default audioManager;
