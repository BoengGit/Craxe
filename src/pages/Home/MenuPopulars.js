import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {StartCircle} from './assets';

const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <StartCircle />
      <Text style={styles.textHeaderPop}>Popular categories</Text>
      <TouchableOpacity style={styles.btnSeeAll}>
        <Text style={styles.textHeaderSee}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

const Food = () => {
  const Biryani = () => {
    return (
      <TouchableOpacity>
        <View style={styles.food}>
          <Image
            source={require('../../assets/img/Biryani.png')}
            style={{width: 84.62, height: 88}}
          />
          <View>
            <Text style={styles.textFood}>Biryani</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.containerFood}>
      <ScrollView horizontal={true}>
        <Biryani />
        <Biryani />
        <Biryani />
        <Biryani />
        <Biryani />
        <Biryani />
      </ScrollView>
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
        <Food />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 218,
    marginTop: 23,
  },
  containerHeader: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 46.38,
    width: 355,
    alignItems: 'center',
  },
  textHeaderPop: {
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    color: '#1B1B1B',
    marginLeft: 8,
  },
  btnSeeAll: {
    marginLeft: 28,
    marginBottom: 3,
  },
  textHeaderSee: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.65)',
    textDecorationLine: 'underline',
  },
  containerFood: {
    height: 149.79,
    marginTop: 27.83,
    alignSelf: 'center',
    marginLeft: 39,
  },
  textFood: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    marginTop: 19,
    textAlign: 'center',
  },
  food: {
    paddingHorizontal: 12,
  },
});
