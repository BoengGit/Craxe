import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {SplashScreen, Home} from './pages';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <SplashScreen /> */}
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
