import { userDataStore } from "../Store/UserDataStore";
import Command from "./Command";
import * as Location from 'expo-location'

// GetCoarseLocation request user location permission 
// and saves it to userDataStore data if granted
export default function GetCoarseLocation() {
    return new Command(() => {
        console.log("GetCoarseLocation command executed")
        async function getUserLocation() {
            let {status} = await Location.requestForegroundPermissionsAsync()
            if(status == 'granted'){
                console.log('Location Permission Granted')
            }else{
                console.log('Location Permission not Granted')
            }

            const loc = await Location.getCurrentPositionAsync()
            userDataStore.setUserLat(loc.coords.latitude)
            userDataStore.setUserLong(loc.coords.longitude)
          }
        getUserLocation();
    });
}