import Command from "./Command";
import { playPauseStateStore } from "../Store/PlayPauseState";

export default function PlayPauseCommand(PPState){
    return new Command(() => {
        playPauseStateStore.setState(!PPState)
        console.log('Inside Play pause command ' + playPauseStateStore.PPState);
    });
}