import React, { Component } from "react";
import { Pressable, Image, View } from "react-native";
import Styles from "./Styles";
import PlayPauseCommand from "../Commands/PlayPauseCommand";
import { playPauseStateStore } from "../Store/PlayPauseState";
import CommandManager from "../Commands/CommandManager";
import { Observer } from "mobx-react";

class PlayPause extends Component {
    manager = new CommandManager();

    render() {
        return (
            <View style={Styles.playPauseView}>
                <Observer>
                    {() => (
                        <Pressable
                            style={Styles.playPausePressable}
                            onPress={() => {
                                this.manager.execute(
                                    new PlayPauseCommand(
                                        playPauseStateStore.PPState
                                    )
                                );
                            }}
                        >
                            <View>
                                <Image
                                    style={Styles.playPauseIcon}
                                    source={playPauseStateStore.PPImage}
                                />
                            </View>
                        </Pressable>
                    )}
                </Observer>
            </View>
        );
    }
}

export default PlayPause;
