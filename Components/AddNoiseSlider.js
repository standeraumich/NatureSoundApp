import React, { Component } from "react";
import Slider from "@react-native-community/slider";
import { Image, View } from "react-native";
import Styles from "./Styles";

class AddNoiseSlider extends Component {
    render() {
        return (
            <View style={Styles.sliderView}>
                <Image
                    style={Styles.icon}
                    source={require("../assets/AddNoiseIcon.png")}
                />
                <Slider style={Styles.slider} />
            </View>
        );
    }
}

export default AddNoiseSlider;
