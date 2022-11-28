import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import AddNoiseSlider from "./Components/AddNoiseSlider";
import PlayPause from "./Components/PlayPause";
import Header from "./Components/Header";
import Styles from "./Components/Styles";
import DynamicBackground from "./Components/DynamicBackground";

export default function App() {
    return (
        <View>
            <DynamicBackground />
            <Header />
            <PlayPause style={Styles.playPause} />
            <AddNoiseSlider style={Styles.addNoiseSlider} />
            <StatusBar style="auto" />
        </View>
    );
}
