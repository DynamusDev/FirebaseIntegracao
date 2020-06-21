import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  StatusBar,
} from 'react-native';

// import { Container } from './styles';

export default class DB extends Component {
  state = {
    data: [],
  };

  fetchData = async () => {
    const response = await fetch('http://192.168.2.137:1348/users');
    const users = await response.json();
    this.setState({data: users});
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar hidden />
        <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          Welcome
        </Text>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                backgroundColor: '#abc123',
                textAlign: 'center',
                padding: 10,
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>
                {item.nome}
              </Text>
              <Text style={{color: 'white'}}>{item.email}</Text>
              <Text style={{color: 'white'}}>{item.senha}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
