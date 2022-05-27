/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import HomePage from './src/screen/HomePage';
import WelcomePage from './src/screen/WelcomePage';
import SignUpPage from './src/screen/SignUpPage';
import LogInPage from './src/screen/LogInPage';
import FavoritPage from './src/screen/FavoritPage';
import KeranjangPage from './src/screen/KeranjangPage';
import AkunPage from './src/screen/AkunPage';
import HomeIcon from './src/assets/svg/HomeIcon.svg';
import FavoritIcon from './src/assets/svg/FavoriteIcon.svg';
import CartIcon from './src/assets/svg/CartIcon.svg';
import AkunIcon from './src/assets/svg/AkunIcon.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
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
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          <Stack.Screen name="Home" component={Tab1} />
          <Stack.Screen name="Welcome" component={WelcomePage} />
          <Stack.Screen name="SignUp" component={SignUpPage} />
          <Stack.Screen name="LogIn" component={LogInPage} />
          {/* <Stack.Screen name="Favorit" component={FavoritPage} />
          <Stack.Screen name="Keranjang" component={KeranjangPage} />
          <Stack.Screen name="Akun" component={AkunPage} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

export const Tab1 = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          paddingBottom: 10,
          height: 70,
        },
        headerShown: false,
        tabBarActiveTintColor: '#53B176',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: 'Inter-Regular',
        },
        tabBarButton: props => (
          <TouchableOpacity
            containerStyle={{flex: 1}}
            activeOpacity={0.95}
            {...props}
          />
        ),
      }}>
      <Tab.Screen
        name="Beranda"
        component={HomePage}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon
              width={30}
              height={30}
              fill={focused ? '#53B176' : 'white'}
              stroke={focused ? '#53B176' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorit"
        component={FavoritPage}
        options={{
          tabBarIcon: ({focused}) => (
            <FavoritIcon
              width={28}
              height={28}
              fill={focused ? '#53B176' : 'white'}
              stroke={focused ? '#53B176' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Keranjang"
        component={KeranjangPage}
        options={{
          tabBarIcon: ({focused}) => (
            <CartIcon
              width={28}
              height={28}
              fill={focused ? '#53B176' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Akun"
        component={AkunPage}
        options={{
          tabBarIcon: ({focused}) => (
            <AkunIcon
              width={28}
              height={28}
              stroke={focused ? '#53B176' : 'black'}
              fill={focused ? '#53B176' : 'white'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({});
