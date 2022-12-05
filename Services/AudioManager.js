import { Audio } from "expo-av";

// AudioManager handles all audio loading, playing and pausing
class AudioManager {
    async playSound(audioStore, objectStateStore) {
        if (audioStore.audioObject == null) {
            audioStore.setAudioObject({});
            console.log("Loading Sound");
            const { sound } = await Audio.Sound.createAsync(
                {
                    uri: audioStore.audioFile,
                },
                {
                    shouldPlay: true,
                    isLooping: true,
                }
            );

            audioStore.setAudioObject(sound);
            objectStateStore.setPlayPauseState(true);
        } else if (
            !objectStateStore.playPauseState &&
            audioStore.audioObject != null &&
            Object.keys(audioStore.audioObject).length != 0
        ) {
            objectStateStore.setPlayPauseState(true);
            console.log("Playing Sound");
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
