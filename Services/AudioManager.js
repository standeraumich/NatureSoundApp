import { Audio } from "expo-av";

class AudioManager {
    async playSound(audioStore) {
        if (audioStore.audioObject == null) {
            console.log("Loading Sound");
            const { sound } = await Audio.Sound.createAsync(
                audioStore.audioFile,
                {
                    shouldPlay: true,
                    isLooping: true,
                }
            );
            audioStore.setAudioObject(sound);
        }
        console.log("playing sound");
        await audioStore.audioObject.playAsync();
    }

    async pauseSound(audioStore) {
        if (audioStore.audioObject != null) {
            console.log("Pausing Sound");
            await audioStore.audioObject.pauseAsync();
        }
    }
}
const audioManager = new AudioManager();
export default audioManager;
