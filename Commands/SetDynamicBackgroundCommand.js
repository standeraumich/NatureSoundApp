import { sunStore } from "../Store/SunStore";
import { playPauseStore } from "../Store/PlayPauseStore";
import { userDataStore } from "../Store/UserDataStore";
import Command from "./Command";

// SetDynamicBackground changes the color styling based 
// on the time specific store data
export default function SetDynamicBackground() {
    return new Command(() => {
        console.log('SetDynamicBackground command executed')
        function setDynamicBackground() {
            // Need to fix the logic here. Think of before midnight and after midnight logic
            datetime = new Date();
            sunriseAfterMidnight = userDataStore.userSunrise
            sunsetEndBeforeMidnight = userDataStore.userSunsetEnd
            sunriseBeforeMidnight = new Date(sunriseAfterMidnight.getTime() + 86400000)
            sunsetEndAfterMidnight = new Date(sunsetEndBeforeMidnight.getTime() - 86400000)
            //Night time before midnight
            if (
                datetime > sunsetEndBeforeMidnight &&
                datetime <= sunriseBeforeMidnight &&
                (playPauseStore.isDay === true || playPauseStore.isDay === null)
            ) {
                sunStore.setBackgroundColor(sunStore.nightimeColor);
                sunStore.setHeaderColor("white")
                playPauseStore.setIsDay(false);
                playPauseStore.setPlayPauseState(playPauseStore.playPauseState);
                console.log("It is currently nighttime");
            } // Night time after midnight
            else if (
                datetime > sunsetEndAfterMidnight &&
                datetime <= sunriseAfterMidnight &&
                (playPauseStore.isDay === true || playPauseStore.isDay === null)
            ) {
                sunStore.setBackgroundColor(sunStore.nightimeColor);
                sunStore.setHeaderColor("white")
                playPauseStore.setIsDay(false);
                playPauseStore.setPlayPauseState(playPauseStore.playPauseState);
                console.log("It is currently nighttime");
            }// Day time
            else if (
                datetime > userDataStore.userSunriseEnd &&
                datetime <= userDataStore.userSunset &&
                (playPauseStore.isDay === false || playPauseStore.isDay === null)
            ){
                sunStore.setBackgroundColor(sunStore.daytimeColor);
                sunStore.setHeaderColor("black")
                playPauseStore.setIsDay(true);
                playPauseStore.setPlayPauseState(playPauseStore.playPauseState);
                console.log("It is currently daytime");
            }
        }
        setDynamicBackground();
    });
}
