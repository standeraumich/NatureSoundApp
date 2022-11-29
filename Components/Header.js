import React, { Component } from "react";
import { View, Text } from "react-native";
import Styles from "./Styles";

class Header extends Component {
    render() {
        return (
            <View style={Styles.headerView}>
                <Text style={Styles.header}>Nature Sound App</Text>
            </View>
        );
    }
}
export default Header;
