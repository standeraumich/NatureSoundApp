import { observable, makeObservable, action } from "mobx";

class AddNoiseState {
    NoiseLevel = 0;

    constructor(){
        makeObservable(this,{
            NoiseLevel:observable,
            setNoiseLevel:action,
            resetNoiseLevel:action
        })
    }

    setNoiseLevel(level) {
        this.NoiseLevel = level;
        console.log(level)
    }

    resetNoiseLevel() {
        this.NoiseLevel = 0;
    }
}
export const addNoiseStateStore = new AddNoiseState();
