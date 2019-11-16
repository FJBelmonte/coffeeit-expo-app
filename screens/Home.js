import { Image, StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";
import React from "react";
import logo from "../assets/logo.png";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image style={styles.logoContainer} source={logo} />
        <View style={styles.logoLabelContainer}>
          <Text style={[styles.logoLabel, { color: Colors.color2 }]}>
            Coffee
          </Text>
          <Text style={[styles.logoLabel, { color: Colors.color1 }]}>It</Text>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.color4
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    width: 200,
    height: 200
  },
  logoLabelContainer: {
    flexDirection: "row"
  },
  logoLabel: {
    fontFamily: "rainy-hearts",
    fontSize: 58
  }
});
