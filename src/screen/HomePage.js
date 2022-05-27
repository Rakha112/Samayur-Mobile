import {
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const HomePage = () => {
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    if (!focus) {
      setFocus(true);
    } else {
      console.log('FOCUS');
    }
  }, [focus]);

  return (
    <SafeAreaView style={styles.container}>
      {/* <BottomNav /> */}

      <Text>HomePage</Text>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'white',
  },
});
