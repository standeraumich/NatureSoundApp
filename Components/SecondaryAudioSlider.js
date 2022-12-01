import React, { Component } from "react";
import Slider from "@react-native-community/slider";
import { Image, View } from "react-native";
import Styles from "./Styles";
import { secondarySliderStore } from "../Store/SecondarySliderStore";
import { Observer } from "mobx-react";

class SecondaryAudioSlider extends Component {
    render() {
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
                            minimumValue={0}
                            maximumValue={100}
                            step={1}
                            value={secondarySliderStore.volumeLevel}
                            onValueChange={(value) =>
                                secondarySliderStore.setVolumeLevel(value)
                            }
                            maximumTrackTintColor="white"
                            minimumTrackTintColor="white"
                            thumbTintColor="white"
                        />
                    )}
                </Observer>
            </View>
        );
    }
}

export default SecondaryAudioSlider;
