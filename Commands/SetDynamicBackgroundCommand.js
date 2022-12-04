import { sunStore } from "../Store/SunStore";
import { playPauseStore } from "../Store/PlayPauseStore";
import { userDataStore } from "../Store/UserDataStore";
import Command from "./Command";

// SetDynamicBackground changes the color styling based 
// on the time specific store data
export default function SetDynamicBackground() {
    return new Command(() => {
        function setDynamicBackground() {
            // Need to fix the logic here. Think of before midnight and after midnight logic
            console.log("in setdynamic background");
            console.log(playPauseStore.isDay)
            datetime = new Date();
            console.log(datetime.toString())
            sunriseAfterMidnight = userDataStore.userSunrise
            sunsetEndBeforeMidnight = userDataStore.userSunsetEnd
            sunriseBeforeMidnight = new Date(sunriseAfterMidnight.getTime() + 86400000)
            console.log(sunriseBeforeMidnight.toString())
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
                console.log("its nightime before midnight");
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
                console.log("its nightime after midnight");
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
                console.log("its daytime");
            }
        }
        setDynamicBackground();
    });
}
