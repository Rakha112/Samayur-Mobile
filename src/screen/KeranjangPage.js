import {StyleSheet, Text, View, Platform, StatusBar} from 'react-native';
import React from 'react';

const KeranjangPage = () => {
  return (
    <View style={styles.container}>
      <Text>KeranjangPage</Text>
    </View>
  );
};

export default KeranjangPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'white',
  },
});
