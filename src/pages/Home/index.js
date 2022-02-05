import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {DownArrow, LocationIcon} from './assets';
import SearchBar from './SearchBar';
import Banner from './Banner';
import MenuPopulars from './MenuPopulars';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
          <View style={styles.containerCurent}>
            <View style={styles.curentLocation}>
              <LocationIcon />
              <View style={styles.curentLocationText}>
                <Text style={styles.text1}>
                  AP Block <DownArrow />{' '}
                </Text>
                <Text style={styles.text2}>Kolkata</Text>
              </View>
            </View>
            <Image
              source={require('../../assets/img/ProfileImage.png')}
              style={{width: 32, height: 32}}
            />
          </View>
          <SearchBar />
          <Banner />
          <MenuPopulars />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9FF',
  },
  scrollview: {
    flex: 1,
  },
  containerCurent: {
    width: 357,
    height: 33.01,
    alignSelf: 'center',
    marginTop: 43,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  curentLocation: {
    flexDirection: 'row',
    width: 122.73,
    height: 33.01,
  },
  text1: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  curentLocationText: {
    marginLeft: 21.97,
  },
  text2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginTop: -9,
  },
});
