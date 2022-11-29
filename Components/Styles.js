import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#43a1c9",
        justifyContent: "center",
        alignContent: "flex-end",
    },
    dynamicBackgroundImage: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    headerView: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },

    playPauseView: {
        flex: 2,
        alignContent: "center",
        justifyContent: "center",
    },
    sliderView: {
        flex: 2.5,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        padding: 20,
    },
    header: {
        fontSize: 28,
        textAlign: "center",
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
        padding: 10,
        flex: 1,
        width: 40,
        height: 40,
        resizeMode: "contain",
    },
    slider: {
        alignSelf: "center",
        padding: 10,
        flex: 3,
    },
});
