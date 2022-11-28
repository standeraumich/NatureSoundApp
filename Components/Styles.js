import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#43a1c9",
    },
    dynamicBackgroundImage:{
      flex:1,
      justifyContent:'center'
    },
    playPause: {
        flex: 2,
    },
    playPauseView: {
        backgroundColor: "#f0a2a2",
        width: "80%",
    },
    playPauseIcon: {
        padding: 10,
        resizeMode: "contain",
        width: 150,
        height: 150,
    },
    addNoiseSlider: {
        flex: 1,
    },
    sliderView: {
        flexDirection: "row",
        backgroundColor: "#ffffff",
        width: "80%",
    },
    icon: {
        padding: 10,
        flex: 1,
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    slider: {
        padding: 10,
        flex: 3,
        width: 300,
    },
});
