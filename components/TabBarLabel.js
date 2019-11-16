import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";
import React from "react";

export default function TabBarLabel(props) {
  return (
    <View style={styles.container}>
      <Text
        style={
          props.focused
            ? [styles.focused, { color: Colors.tabBarLabelFocused }]
            : [styles.unFocused, { color: Colors.tabBarLabelUnfocused }]
        }>
        <Text>{props.children}</Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  focused: {
    fontSize: 11
  },
  unFocused: {
    fontSize: 11
  }
});
