import CommandManager from "../Commands/CommandManager";
import SetDynamicBackground from "../Commands/SetDynamicBackgroundCommand";
import GetCoarseLocation from "../Commands/GetCoarseLocationCommand";
import GetSolsticeOrEquinox from "../Commands/GetSolsticeOrEquinox";
import GetSunTimes from "../Commands/GetSunTimesCommand";
import { userDataStore } from "../Store/UserDataStore";


// Interval Service runs startInterval() every 20 seconds
// Runs commands pertaining to time specific data / style
class IntervalService {
    manager = new CommandManager();
    intervalWaitTime = 4000;
    datesAreTheSame(first, second) {
        return (
            first.getFullYear() === second.getFullYear() &&
            first.getMonth() === second.getMonth() &&
            first.getDate() === second.getDate()
        );
    }

    async startInterval() {
        console.log("interval service started");
        const interval = await setInterval(() => {
            date = new Date();
            currentSunrise = userDataStore.userSunrise;
            console.log(date.toString());
            // Check if a new day has happened, if so run sun api call
            if (!this.datesAreTheSame(date, currentSunrise)) {
                this.manager.execute(new GetSolsticeOrEquinox());
                this.manager.execute(new GetCoarseLocation());
                this.manager.execute(new GetSunTimes());
            }
            this.manager.execute(new SetDynamicBackground());
        }, this.intervalWaitTime);

        return () => clearInterval(interval);
    }
}
const intervalService = new IntervalService();
export default intervalService;
