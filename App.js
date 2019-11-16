import * as Font from "expo-font";

import { Platform, StatusBar, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import { AppLoading } from "expo";
import AppNavigator from "./routes/AppNavigator";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle='default' />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([require("./assets/logo.png")]),
    Font.loadAsync({
      ...Ionicons.font,
      "rainy-hearts": require("./assets/fonts/rainyhearts.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747"
  }
});
