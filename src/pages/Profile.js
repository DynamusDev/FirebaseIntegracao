import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

import {Icon, Button, Container, Header, Content, Left} from 'native-base';

// import { Container } from './styles';

export default class Profile extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon
        name="person"
        style={{fontSize: 24, fontFamily: 'Blood-Regular', color: tintColor}}
      />
    ),
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Header
          style={{
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: '#fff',
          }}>
          <Icon
            name="menu"
            onPress={() => this.props.navigation.openDrawer()}
          />
        </Header>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontFamily: 'Blood-Regular'}}>Profile Screen</Text>
        </View>
      </View>
    );
  }
}
