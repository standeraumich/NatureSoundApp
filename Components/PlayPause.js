import React, { Component } from "react";
import { Pressable, Image, View } from "react-native";
import Styles from "./Styles";

class PlayPause extends Component {
    pressablePressed() {
        console.log("pressable pressed");
    }

    render() {
        return (
            <View style={Styles.playPauseView}>
                <Pressable
                    style={Styles.playPausePressable}
                    onPress={() => {
                        this.pressablePressed();
                    }}
                >
                    <View>
                        <Image
                            style={Styles.playPauseIcon}
                            source={require("../assets/play-button-arrowhead.png")}
                        />
                    </View>
                </Pressable>
            </View>
        );
    }
}

export default PlayPause;
