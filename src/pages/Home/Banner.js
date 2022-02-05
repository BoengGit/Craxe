import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const TombolOrderNow = () => {
  return (
    <TouchableOpacity style={styles.tombolOrderNow}>
      <Text style={styles.textTombol}>ORDER NOW</Text>
    </TouchableOpacity>
  );
};

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#F60C8B', 'rgba(246,56,73,0.6)', 'rgba(245,102,6,0.23)']}
        style={styles.linearGradient}>
        <View style={styles.conIn}>
          <Text style={styles.text1}>Up to 40% OFF</Text>
          <Text style={styles.text2}>on your first order</Text>
          <TombolOrderNow />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    width: 355,
    height: 195,
    alignSelf: 'center',
    marginTop: 39,
    borderRadius: 15,
  },
  conIn: {
    marginLeft: 8,
    marginTop: 41,
    width: 200,
  },
  tombolOrderNow: {
    width: 131,
    height: 39,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 5,
  },
  textTombol: {
    color: '#F6158D',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
  text1: {
    fontSize: 28,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },
  text2: {
    marginTop: 4,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
});
