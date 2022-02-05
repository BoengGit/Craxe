import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BowlIcon, HatIcon, Logo} from './assets';
import {StackActions} from '@react-navigation/native';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Home'));
    }, 2500);
  }

  render() {
    return (
      <View style={styles.container}>
        <HatIcon style={styles.hatIcon} />
        <View style={styles.div}>
          <Logo />
          <Text style={styles.text1}>Dining and Delivery</Text>
          <Text style={styles.text2}>Restaurant App</Text>
        </View>
        <BowlIcon style={styles.bowlIcon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  div: {
    width: 307,
    height: 164,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    marginTop: 40,
    fontSize: 28,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    color: 'rgba(0,0,0,0.8)',
  },
  text2: {
    marginTop: -12,
    fontSize: 28,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    color: 'rgba(0,0,0,0.8)',
  },
  hatIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bowlIcon: {
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
});
