import Command from "./Command";

// UnloadAudioCommand will unload the secondary or 
// main audio when it is called
export default function UnloadAudioCommand(audioStore) {
    return new Command(() => {
        return audioStore.audioObject
            ? () => {
                  console.log("Unloading Sound");
                  audioStore.audioObject.unloadAsync();
              }
            : undefined;
    });
}
