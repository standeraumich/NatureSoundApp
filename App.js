import { StatusBar } from "expo-status-bar";
import { View, ImageBackground } from "react-native";
import AddNoiseSlider from "./Components/AddNoiseSlider";
import PlayPause from "./Components/PlayPause";
import Header from "./Components/Header";
import Styles from "./Components/Styles";

export default function App() {
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
                    <AddNoiseSlider />
                </ImageBackground>
            </View>
        </>
    );
}
