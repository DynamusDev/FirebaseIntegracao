import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerItems,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import Home from './pages/Home';
import Config from './pages/Config';
import Profile from './pages/Profile';
import Login from './pages/Login';
// import { Container } from './styles';

const {width} = Dimensions.get('window');

export default class Routes extends Component {
  render() {
    return <MyApp />;
  }
}

const loginOrHome = createSwitchNavigator(
  {
    Home: Home,
    Auth: Login,
  },
  {
    initialRouteName: 'Home',
  },
);

const CustomDrawerComponent = props => (
  <SafeAreaView style={{flex: 1}}>
    <View
      style={{
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('./img/icon.png')}
        style={{width: 60, height: 90}}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const MyApp = createDrawerNavigator(
  {
    Home: Home,
    Config: Config,
    Profile: Profile,
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerWidth: 300,
    contentOptions: {
      activeTintColor: 'blue',
    },
  },
);
