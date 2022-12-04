import { userDataStore } from "../Store/UserDataStore";
import { sunStore } from "../Store/SunStore";
import Command from "./Command";

// GetSunTimes command will fetch sunrise and sunset 
// data from api.sunrise-sunset.org and save it to 
// sun store data when its called
export default function GetSunTimes() {
    return new Command(() => {
        function convertToRad(deg){
            return (Math.PI / 180) * deg;
        }

        async function getSunTimes() {
            today = new Date().toLocaleDateString('sv')
            console.log(today)
            await fetch(
                `https://api.sunrise-sunset.org/json?lat=${userDataStore.userLat}&lng=${userDataStore.userLong}&date=${today}&formatted=0`
            )
                .then((res) => res.json())
                .then((data) => {
                    userDataStore.setUserSunrise(data.results.sunrise);
                    userDataStore.setUserSunset(data.results.sunset);
                    userDataStore.setUserSolarNoon(data.results.solar_noon);
                    console.log(data);
                })
                .catch((err) => console.log(err));
            // Sunrise/set durations calculated from
            // https://astronomy.stackexchange.com/questions/12824/how-long-does-a-sunrise-or-sunset-take#:~:text=As%20noted%20in%20http%3A%2F%2F,*latitude%20at%20the%20solstices
            if (sunStore.solsticeOrEquinox === 'solstice'){
                seconds = parseInt(128 / Math.cos(convertToRad(userDataStore.userLat)))
                userDataStore.setUserSunriseEnd(seconds)
                userDataStore.setUserSunsetEnd(seconds)
            } else if (sunStore.solsticeOrEquinox === 'equinox'){
                seconds = parseInt(142 / Math.cos(1.14*convertToRad(userDataStore.userLat)))
                userDataStore.setUserSunriseEnd(seconds)
                userDataStore.setUserSunsetEnd(seconds)
            }
        }
        getSunTimes()
    });
}
