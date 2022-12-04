import { StyleSheet } from "react-native";

// Styling for the entire application
export default StyleSheet.create({
    dynamicBackgroundImage: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    headerView: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        marginTop:20,
    },

    playPauseView: {
        flex: 2,
        alignContent: "center",
        justifyContent: "center",
        marginBottom:40,
    },
    sliderView: {
        flex: 2.5,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        padding: 20,
    },
    playPausePressable: {
        alignSelf: "center",
    },
    playPauseIcon: {
        alignSelf: "center",
        resizeMode: "contain",
        width: 115,
        height: 115,
    },

    addNoiseIcon: {
        alignSelf: "center",
        marginLeft:20,
        flex: 1,
        width: 60,
        height: 60,
        resizeMode: "contain",
    },
    slider: {
        alignSelf: "center",
        marginLeft:20,
        flex: 3,
    },
});
