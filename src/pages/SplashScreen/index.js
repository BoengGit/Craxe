import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BowlIcon, HatIcon, Logo} from '../../assets/';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View>
            <Logo />
            <Text style={styles.text}>Dining and Delivery Restaurant App</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 28,
    fontFamily: 'Poppins-Regular',
  },
});
