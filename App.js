import { StatusBar } from "expo-status-bar";
import { View, ImageBackground, SliderComponent } from "react-native";
import SecondaryAudioSlider from "./Components/SecondaryAudioSlider";
import PlayPause from "./Components/PlayPause";
import Header from "./Components/Header";
import Styles from "./Components/Styles";
import { useEffect } from "react";
import { audioMainStore } from "./Store/AudioMainStore";

export default function App() {
    useEffect(() => {
        return audioMainStore.audioObject
            ? () => {
                  console.log("Unloading Sound");
                  audioMainStore.audioObject.unloadAsync();
              }
            : undefined;
    }, [audioMainStore.audioObject]);

    

    return (
        <>
            <StatusBar style="auto" />
            <View style={Styles.container}>
                <ImageBackground
                    resizeMode="cover"
                    source={require("./assets/DynamicBackgroundForeground.png")}
                    style={Styles.dynamicBackgroundImage}
                >
                    <Header />
                    <PlayPause />
                    <SecondaryAudioSlider />
                </ImageBackground>
            </View>
        </>
    );
}
