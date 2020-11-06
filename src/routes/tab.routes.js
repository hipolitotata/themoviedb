import * as React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabBar from '../components/tab-bar';

import Movies from '../pages/movies';
import Seasons from '../pages/seasons';
import SearchMovies from '../pages/search-movies';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator tabBar={(content) => <TabBar tabs={content} />}>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Seasons" component={Seasons} />
      <Tab.Screen name="SearchMovies" component={SearchMovies} />
    </Tab.Navigator>
  );
}
