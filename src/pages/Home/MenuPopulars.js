import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StartCircle} from './assets';

const Header = () => {
  return (
    <View>
      <StartCircle />
    </View>
  );
};

export default class MenuPopulars extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 218,
    marginTop: 23,
  },
});
