/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
const WelcomePage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 'auto', marginBottom: 60}}>
        <Button text={'SIGN UP'} bgColor={'#53B176'} textColor={'white'} />
        <Text style={styles.text}>
          Sudah punya akun ? Silahkan{' '}
          <Text
            style={[styles.text, {color: '#53B176', fontFamily: 'Inter-Bold'}]}
            onPress={() => navigation.push('LogIn')}>
            Log In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: {
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
});
