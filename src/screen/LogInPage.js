import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';

const LogInPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>LogInPage</Text>
    </SafeAreaView>
  );
};

export default LogInPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'white',
  },
});
