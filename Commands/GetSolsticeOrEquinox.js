import { sunStore } from "../Store/SunStore";
import Command from "./Command";

// GetSolsticeOrEquinox read in sun data store and 
// calculate if the current day is in an equinox or 
// solstice when called
export default function GetSolsticeOrEquinox() {
    return new Command(() => {
        console.log('GetSolticeOrEquinox command executed')
        marchEq = sunStore.equinoxMarch
        juneSol = sunStore.solsticeJune
        septEq = sunStore.equinoxSept
        decSol = sunStore.solsticeDec

        function getSolsticeOrEquinox() {
            date = new Date();
            year = date.getFullYear();
            marchEq.setFullYear(year);
            juneSol.setFullYear(year);
            septEq.setFullYear(year);
            decSol.setFullYear(year);

            // March Equinox (03 to 06)
            if (
                date >= marchEq &&
                date < juneSol
            ) {
                sunStore.setSolsticeOrEquinox('equinox')
            } // June Solstice (06 to 09)
            else if (
                date >= juneSol &&
                date < septEq
            ){
                sunStore.setSolsticeOrEquinox('solstice')
            }// September Equinox (09 to 12)
            else if (
                date >= septEq &&
                date < decSol
            ){
                sunStore.setSolsticeOrEquinox('equinox')
            }// December Solstice (12, 01, 02)
            else{
                sunStore.setSolsticeOrEquinox('solstice')
            }

        }
        getSolsticeOrEquinox();
    });
}
