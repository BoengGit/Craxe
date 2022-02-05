import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {SearchIcon} from './assets';

export default class searchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchIcon />
        <TextInput placeholder="Type a dish or cuisine" style={styles.text} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#D4D4D4',
    backgroundColor: '#fff',
    width: 357,
    height: 40,
    marginTop: 56.99,
    borderRadius: 6,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    color: '#959595',
  },
});
