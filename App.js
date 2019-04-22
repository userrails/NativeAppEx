import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './HelloWorld';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>React Native App !!</Text>
        <HelloWorld />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
