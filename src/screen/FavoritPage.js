import {StyleSheet, Text, View, Platform, StatusBar} from 'react-native';
import React from 'react';

const FavoritPage = () => {
  return (
    <View style={styles.container}>
      <Text>FavoritPage</Text>
    </View>
  );
};

export default FavoritPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'white',
  },
});
