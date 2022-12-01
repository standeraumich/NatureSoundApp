import React, { Component } from "react";
import { Pressable, Image, View } from "react-native";
import Styles from "./Styles";
import PlayPauseCommand from "../Commands/PlayPauseMainCommand";
import CommandManager from "../Commands/CommandManager";
import { playPauseStore } from "../Store/PlayPauseStore";
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
                                    new PlayPauseCommand()
                                );
                            }}
                        >
                            <View>
                                <Image
                                    style={Styles.playPauseIcon}
                                    source={playPauseStore.playPauseImage}
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
