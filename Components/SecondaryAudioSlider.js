import React, { Component } from "react";
import Slider from "@react-native-community/slider";
import { Image, View } from "react-native";
import Styles from "./Styles";
import { secondarySliderStore } from "../Store/SecondarySliderStore";
import { playPauseStore } from "../Store/PlayPauseStore";
import { Observer } from "mobx-react";
import PlayPauseSecondaryCommand from "../Commands/PlayPauseSecondaryCommand";
import SetSecondaryVolumeCommand from "../Commands/SetSecondaryVolumeCommand";
import CommandManager from "../Commands/CommandManager";

// SecondaryAudioSlider is a component that holds the 
// Secondary audio slider and the secondary audio icon
class SecondaryAudioSlider extends Component {
    manager = new CommandManager();
    render() {
        console.log('SecondaryAudioSlider component rendered')
        return (
            <View style={Styles.sliderView}>
                <Image
                    style={Styles.addNoiseIcon}
                    source={require("../assets/AddNoiseIcon.png")}
                />
                <Observer>
                    {() => (
                        <Slider
                            style={Styles.slider}
                            step={0.02}
                            minimumValue={0}
                            maximumValue={1}
                            value={secondarySliderStore.volumeLevel}
                            onValueChange={(value) => {
                                secondarySliderStore.setVolumeLevel(value);
                                this.manager.execute(
                                    new PlayPauseSecondaryCommand()
                                );
                                this.manager.execute(
                                    new SetSecondaryVolumeCommand()
                                );
                            }}
                            disabled={!playPauseStore.playPauseState}
                            maximumTrackTintColor="white"
                            minimumTrackTintColor="white"
                            thumbTintColor="#0c54f9"
                        />
                    )}
                </Observer>
            </View>
        );
    }
}

export default SecondaryAudioSlider;
