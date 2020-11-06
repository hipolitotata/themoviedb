import React from 'react';
import itemsMenu from './items';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import {Tabs, Tab, TextTab} from './styles';

export default function TabBar(props) {
  const {routes, index} = props.tabs.state;

  function changeRoute(route) {
    const {navigation} = props.tabs;
    navigation.navigate(route.name);
  }

  return (
    <Tabs>
      {(routes || []).map((routeTab, key) => {
        const item = itemsMenu[routeTab.name] || {};
        return (
          <Tab key={key} onPress={() => changeRoute(routeTab)}>
            <Icon
              color={key == index ? '#fff' : '#777'}
              name={item.icon}
              size={25}
            />
            <TextTab color={key == index && '#fff'}>{item.label}</TextTab>
          </Tab>
        );
      })}
    </Tabs>
  );
}
