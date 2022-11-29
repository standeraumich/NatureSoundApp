import React, { Component } from "react";
import Slider from "@react-native-community/slider";
import { Image, View } from "react-native";
import Styles from "./Styles";
import { addNoiseStateStore } from "../Store/AddNoiseState";
import { Observer } from "mobx-react";

class AddNoiseSlider extends Component {
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
                            value={addNoiseStateStore.NoiseLevel}
                            onValueChange={(value) =>
                                addNoiseStateStore.setNoiseLevel(value)
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

export default AddNoiseSlider;
