/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';

import {LogBox, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {Store} from './src/store';

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={Store}>
      <StatusBar backgroundColor="#242424" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
