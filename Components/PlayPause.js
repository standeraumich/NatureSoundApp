import React, { Component } from "react";
import { Pressable, Image, View } from "react-native";
import Styles from "./Styles";
import PlayPauseMainCommand from "../Commands/PlayPauseMainCommand";
import PlayPauseSecondaryCommand from "../Commands/PlayPauseSecondaryCommand";
import CommandManager from "../Commands/CommandManager";
import { playPauseStore } from "../Store/PlayPauseStore";
import { Observer } from "mobx-react";

// PlayPause is a component that holds the pressable 
// play pause button
class PlayPause extends Component {
    manager = new CommandManager();

    render() {
        console.log('PlayPause component rendered')
        return (
            <View style={Styles.playPauseView}>
                <Observer>
                    {() => (
                        <Pressable
                            style={Styles.playPausePressable}
                            onPress={() => {
                                {
                                this.manager.execute(
                                    new PlayPauseMainCommand()
                                );
                                this.manager.execute(
                                    new PlayPauseSecondaryCommand()
                                );
                                }
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
