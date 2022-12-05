import { StatusBar } from "expo-status-bar";
import { View, ImageBackground } from "react-native";
import SecondaryAudioSlider from "./Components/SecondaryAudioSlider";
import PlayPause from "./Components/PlayPause";
import Header from "./Components/Header";
import Styles from "./Components/Styles";
import { useEffect } from "react";
import { audioMainStore } from "./Store/AudioMainStore";
import { audioSecondaryStore } from "./Store/AudioSecondaryStore";
import { sunStore } from "./Store/SunStore";
import CommandManager from "./Commands/CommandManager";
import UnloadAudioCommand from "./Commands/UnloadAudioCommand";
import GetCoarseLocation from "./Commands/GetCoarseLocationCommand";
import GetSunTimes from "./Commands/GetSunTimesCommand";
import GetSolsticeOrEquinox from "./Commands/GetSolsticeOrEquinox";
import intervalService from "./Services/IntervalService";
import { Observer } from "mobx-react";

export default function App() {

    // Run the initial commands when the app is 
    // initialized
    const manager = new CommandManager();

    useEffect(() => {
        async function initialize() {
            await manager.execute(new GetCoarseLocation());
            manager.execute(new GetSunTimes());
        }
        manager.execute(new UnloadAudioCommand(audioMainStore));
        manager.execute(new UnloadAudioCommand(audioSecondaryStore));
        manager.execute(new GetSolsticeOrEquinox());
        initialize();
        intervalService.startInterval();
    }, []);

    console.log("In App main render");
    // Create main app ui
    return (
        <>
            <StatusBar style="auto" />
            <Observer>
                {() => (
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: sunStore.backgroundColor,
                            justifyContent: "center",
                            alignContent: "flex-end",
                        }}
                    >
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
                )}
            </Observer>
        </>
    );
}
