import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabBar from './tab.routes';
import SplashScreen from '../pages/splash-screen';
import Details from '../pages/details';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      headerMode="none"
      tabBar={(content) => <TabBar tabs={content} />}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="TabBar" component={TabBar} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
