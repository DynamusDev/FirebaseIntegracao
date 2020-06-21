import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  TextInput,
  View,
  Alert,
  Button,
  Text,
} from 'react-native';

// import { Container } from './styles';

export default class pages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserName: '',
      UserEmail: '',
      UserPassword: '',
    };
  }

  render() {
    return <View />;
  }
}
