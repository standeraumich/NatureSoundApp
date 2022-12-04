import { observable, makeObservable, action } from "mobx";

// SunStore holds all dgata pertaining to equinox/solstice and time specific styling
class SunStore{
    
    // Setting approximate equinox and solstice dates for sunset and sunrise duration calculation
    // 2022 year put in as place holder, only month and day will be used
    equinoxMarch = new Date("2022-03-20T00:00:00+00:00")
    equinoxSept = new Date("2022-09-20T00:00:00+00:00")
    solsticeJune = new Date("2022-06-20T00:00:00+00:00")
    solsticeDec = new Date("2022-12-20T00:00:00+00:00")
    solsticeOrEquinox = ''
    sunriseColors = ['#776E99', '#DA7F7D', '#EBB58A', '#FFF2BD']
    sunsetColors = ['#FFF0BA', '#F0938B', '#A86F9D', '#4C4066']
    daytimeColor = '#568CD8';
    nightimeColor = '#2A233D';
    backgroundColor = this.nightimeColor
    headerColor = 'white'

    constructor() {
        makeObservable(this, {
            solsticeOrEquinox:observable,
            backgroundColor:observable,
            headerColor:observable,
            setSolsticeOrEquinox:action,
            setBackgroundColor:action,
            setHeaderColor:action,
        });
    }
    setSolsticeOrEquinox(astro){
        this.solsticeOrEquinox = astro
    }

    setBackgroundColor(color){
        this.backgroundColor = color
    }

    setHeaderColor(color){
        this.headerColor = color
    }
}

export const sunStore = new SunStore();
