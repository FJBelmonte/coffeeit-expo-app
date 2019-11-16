import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import React, { useEffect, useState } from "react";

import Colors from "../constants/Colors";
import GithubAPI from "../services/github";
import Header from "../components/Header";
import LottieView from "lottie-react-native";
import fingerSlides from "../assets/lottie/fingerSlides.json";

const Platform_OS = Platform.OS;

export default function About() {
  const [dev, setDev] = useState({ loaded: false });
  const [dev2, setDev2] = useState({ loaded: false });
  const [animation, setAnimation] = useState(true);
  useEffect(() => {
    getDev("/FJBelmonte").then(response => {
      setDev({ ...response, loaded: true });
    });
    getDev("/carolcotton").then(response => {
      setDev2({ ...response, loaded: true });
    });
  }, []);

  async function getDev(dev) {
    try {
      const response = await GithubAPI.get(dev);
      return response.data;
    } catch (err) {
      return console.log(err);
    }
  }
  function renderCard(user) {
    if (user.loaded) {
      return (
        <View style={styles.card}>
          <Image
            source={{
              uri: user.avatar_url
            }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.bio} numberOfLines={3}>
            {user.bio}
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.card}>
        <Text style={styles.loading}>Carregando</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.about}>
        Somos apaixonados por Design, Tecnologia e Café! A Coffeeit envolve toda
        a parte de desenvolvimento da sua imagem, desde a parte gráfica até a
        web e mobile.
      </Text>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center"
        }}
        horizontal
        onScroll={() => setAnimation(false)}
        pagingEnabled={Platform_OS === "web" ? false : true}>
        {renderCard(dev)}
        {renderCard(dev2)}
      </ScrollView>
      {Platform_OS !== "web" && animation && (
        <View style={styles.fingerSlides}>
          <LottieView
            autoPlay={animation}
            autoSize
            loop
            resizeMode='contain'
            source={fingerSlides}
          />
        </View>
      )}
    </ScrollView>
  );
}

About.navigationOptions = {
  header: <Header>Sobre nós</Header>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.color2
  },
  card: {
    width: 350,
    height: 350,
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: "#fff",
    marginVertical: 30
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.color3
  },
  bio: {
    fontSize: 14,
    color: Colors.color4,
    marginTop: 2,
    lineHeight: 20,
    textAlign: "center",
    width: 300
  },
  loading: {
    fontFamily: "rainy-hearts",
    fontSize: 36
  },
  fingerSlides: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  about: {
    color: Colors.color4,
    textAlign: "center"
  }
});
