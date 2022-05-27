/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import HomeIcon from '../assets/svg/HomeIcon.svg';
import FavoritIcon from '../assets/svg/FavoriteIcon.svg';
import CartIcon from '../assets/svg/CartIcon.svg';
import AkunIcon from '../assets/svg/AkunIcon.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
const BottomNav = () => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width: width}]}>
      <TouchableOpacity
        style={styles.button}
        containerStyle={{flex: 1}}
        onPress={() => navigation.navigate('Home')}>
        <HomeIcon width={30} height={30} fill={'white'} stroke={'black'} />
        <Text style={styles.text}>Beranda</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        containerStyle={{flex: 1}}
        onPress={() => navigation.navigate('Favorit')}>
        <FavoritIcon width={28} height={28} fill={'white'} stroke={'black'} />
        <Text style={styles.text}>Favorit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        containerStyle={{flex: 1}}
        onPress={() => navigation.navigate('Keranjang')}>
        <CartIcon width={28} height={28} fill={'black'} />
        <Text style={styles.text}>Keranjang</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        containerStyle={{flex: 1}}
        onPress={() => navigation.navigate('Akun')}>
        <AkunIcon width={28} height={28} stroke={'black'} fill={'white'} />
        <Text style={styles.text}>Akun</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    // backgroundColor: 'orange',
    height: 80,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Inter-Regular',
    color: 'black',
  },
});
