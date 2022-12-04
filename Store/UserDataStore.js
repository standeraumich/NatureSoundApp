import { observable, makeObservable, action } from "mobx";

// UserDataStore holds location and sun information specific to the user
class UserDataStore {
    // Setting default long and lat to NYC
    userLong = -73.935242;
    userLat = 40.73061;
    today = new Date()
    userSunrise = this.today.setHours(7, 0, 0);
    userSunset = this.today.setHours(19, 0, 0);
    userSolarNoon = this.today.setHours(12, 0, 0);
    userSunriseEnd = this.today.setHours(7, 4, 0);
    userSunsetEnd = this.today.setHours(19, 4, 0);

    constructor() {
        makeObservable(this, {
            userLong: observable,
            userLat: observable,
            userSunrise: observable,
            userSunset: observable,
            userSolarNoon: observable,
            userSunriseEnd: observable,
            userSunsetEnd: observable,
            setUserLong: action,
            setUserLat: action,
            setUserSunrise: action,
            setUserSunset: action,
            setUserSolarNoon: action,
            setUserSunriseEnd: action,
            setUserSunsetEnd: action,
        });
    }

    setUserLong(long) {
        this.userLong = long;
    }

    setUserLat(lat) {
        this.userLat = lat;
    }

    setUserSunrise(time) {
        this.userSunrise = new Date(time);
        console.log(this.userSunrise.toString());
    }

    setUserSunset(time) {
        this.userSunset = new Date(time);
        console.log(this.userSunset.toString());
    }

    setUserSolarNoon(time) {
        this.userSolarNoon = new Date(time);
        console.log(this.userSolarNoon.toString());
    }

    setUserSunriseEnd(seconds){
        this.userSunriseEnd = new Date(this.userSunrise.getTime() + seconds*1000)
    }
    setUserSunsetEnd(seconds){
        this.userSunsetEnd = new Date(this.userSunset.getTime() + seconds*1000)
    }
}

export const userDataStore = new UserDataStore();
