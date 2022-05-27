import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';

const SignUpPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SignUpPage</Text>
    </SafeAreaView>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'white',
  },
});
