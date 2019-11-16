import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import AboutScreen from "../screens/About";
import Colors from "../constants/Colors";
import ContactScreen from "../screens/Contact";
import HomeScreen from "../screens/Home";
import { Platform } from "react-native";
import React from "react";
import TabBarIcon from "../components/TabBarIcon";
import TabBarLabel from "../components/TabBarLabel";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel focused={focused}>Início</TabBarLabel>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-home" : "md-home"}
    />
  )
};

HomeStack.path = "";

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  config
);

AboutStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel focused={focused}>Sobre nós</TabBarLabel>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-contacts" : "md-contacts"}
    />
  )
};

AboutStack.path = "";

const ContactStack = createStackNavigator(
  {
    Contact: ContactScreen
  },
  config
);

ContactStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel focused={focused}>Contato</TabBarLabel>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-chatboxes" : "md-chatboxes"}
    />
  )
};

ContactStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    AboutStack,
    ContactStack
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: Colors.tabBar
      }
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
