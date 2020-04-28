import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import IconWithBadge from '../components/IconWithBadge';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import EventsScreen from '../screens/EventsScreen';
import BetslipScreen from '../screens/BetslipScreen';
import ExamplePageScreen from '../screens/ExamplePageScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-home'
          : 'md-home'
      }
    />
    // <IconWithBadge 
    //   focused={focused}
    //   name={
    //     Platform.OS === 'ios'
    //       ? `ios-information-circle${focused ? '' : '-outline'}`
    //       : 'md-information-circle'
    //   }
    // />
  ),
};

HomeStack.path = '';

///

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
    ExamplePage: ExamplePageScreen
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Sportsbook',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

///

const EventsStack = createStackNavigator(
  {
    Events: EventsScreen,
  },
  config
);

EventsStack.navigationOptions = {
  tabBarLabel: 'Events',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

EventsStack.path = '';

///

const BetslipStack = createStackNavigator(
  {
    Betslip: BetslipScreen,
  },
  config
);

BetslipStack.navigationOptions = {
  tabBarLabel: 'Betslip',
  tabBarIcon: ({ focused }) => (
    <IconWithBadge 
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}
    />
  ),
};

EventsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  BetslipStack
});

tabNavigator.path = '';

export default tabNavigator;
