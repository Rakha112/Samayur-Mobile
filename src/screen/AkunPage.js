import {StyleSheet, Text, View, Platform, StatusBar} from 'react-native';
import React from 'react';

const AkunPage = () => {
  return (
    <View style={styles.container}>
      <Text>AkunPage</Text>
    </View>
  );
};

export default AkunPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'white',
  },
});
