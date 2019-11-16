import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";
import React from "react";

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.fontStyle}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    backgroundColor: Colors.color4
  },
  fontStyle: {
    fontFamily: "rainy-hearts",
    fontSize: 24,
    color: Colors.color2
  }
});
