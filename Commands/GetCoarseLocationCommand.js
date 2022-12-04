import { userDataStore } from "../Store/UserDataStore";
import Command from "./Command";
import * as Location from 'expo-location'

// GetCoarseLocation request user location permission 
// and saves it to userDataStore data if granted
export default function GetCoarseLocation() {
    return new Command(() => {
        async function getUserLocation() {
            let {status} = await Location.requestForegroundPermissionsAsync()
            if(status == 'granted'){
                console.log('Permission successful!')
            }else{
                console.log('Permission not granted')
            }

            const loc = await Location.getCurrentPositionAsync()
            console.log(loc)
            userDataStore.setUserLat(loc.coords.latitude)
            userDataStore.setUserLong(loc.coords.longitude)
          }
        getUserLocation();
    });
}