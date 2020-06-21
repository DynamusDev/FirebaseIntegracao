import React, { Component } from "react";

import { Provider } from "react-redux";

import Routes from "./Routes";
import { StatusBar, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import Login from "./pages/Login";

const Application = createStackNavigator(
  {
    Home: { screen: Login },
    Routes: { screen: Routes }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Application />
      </View>
    );
  }
}
