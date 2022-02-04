import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SplashScreen} from './pages';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <SplashScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
