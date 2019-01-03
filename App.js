import React, {Component} from 'react';
import { 
  StyleSheet,
  View
} from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

export default class App extends Component{
  render() {
    return (
      <View style={{ flex : 1 }}>
        <Header title="Albums" />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
