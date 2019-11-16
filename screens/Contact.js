import * as WebBrowser from "expo-web-browser";

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "../constants/Colors";
import Header from "../components/Header";
import { Linking } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const size = 80;

export default function Contact() {
  const [result, setResult] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity
          onPress={() =>
            _handlePressButtonAsync(
              "https://www.facebook.com/fernando.belmonte.98"
            )
          }>
          <MaterialCommunityIcons
            name={"facebook"}
            size={size}
            style={{ marginBottom: -3 }}
            color={Colors.color4}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("mailto: fernando.belmonte@live.com");
          }}>
          <MaterialCommunityIcons
            name={"email"}
            size={size}
            style={{ marginBottom: -3 }}
            color={Colors.color4}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            _handlePressButtonAsync(
              "https://www.linkedin.com/in/fernando-belmonte-bb3a68159/"
            )
          }>
          <MaterialCommunityIcons
            name={"linkedin"}
            size={size}
            style={{ marginBottom: -3 }}
            color={Colors.color4}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text>{result && JSON.stringify(result)}</Text>
      </View>
    </View>
  );
}

async function _handlePressButtonAsync(link) {
  let result = await WebBrowser.openBrowserAsync(link);
  setResult(result);
}

Contact.navigationOptions = {
  header: <Header>Contato</Header>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.color2
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
