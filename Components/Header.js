import React, { Component } from "react";
import { View, Text } from "react-native";
import Styles from "./Styles";
import { Observer } from "mobx-react";
import { sunStore } from "../Store/SunStore";

// Header holds the header text component in 
// the application
class Header extends Component {
    render() {
        return (
            <View style={Styles.headerView}>
                <Observer>
                    {() => (
                        <Text
                            style={{
                                fontSize: 40,
                                fontFamily: "Roboto",
                                fontWeight: "bold",
                                textAlign: "center",
                                color: sunStore.headerColor,
                            }}
                        >
                            Nature Sound App
                        </Text>
                    )}
                </Observer>
            </View>
        );
    }
}
export default Header;
