import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import HomePage from './screen/HomePage';
const App = () => {
  const Stack = createStackNavigator();
  const initialState = {
    lat: 0,
  };
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LAT':
        return {
          ...state,
          lat: action.payload,
        };
      default:
        return state;
    }
  };
  const store = configureStore({reducer: rootReducer});
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
