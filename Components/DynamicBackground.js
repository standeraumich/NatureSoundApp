import React, { Component } from "react";
import { Pressable, Image, View, ImageBackground } from "react-native";
import Styles from "./Styles";

class DynamicBackground extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <ImageBackground
                    resizeMode='cover'
                    source={require('../assets/DynamicBackgroundForeground.png')}
                />
                
            </View>
        );
    }
}

export default DynamicBackground;