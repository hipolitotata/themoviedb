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

import {LogBox} from "react-native"
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
