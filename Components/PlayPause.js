import React, { Component } from "react";
import { Pressable, Image, View } from "react-native";
import Styles from "./Styles";

class PlayPause extends Component {
    render() {
        return (
            <Pressable>
                <View style={Styles.playPauseView}>
                    <Image
                        style={Styles.playPauseIcon}
                        source={require("../assets/play-button-arrowhead.png")}
                    />
                </View>
            </Pressable>
        );
    }
}

export default PlayPause;
