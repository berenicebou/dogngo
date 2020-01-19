import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import BaladesScreen from '../screens/BaladesScreen';
import CarteScreen from '../screens/CarteScreen';
import ProfilScreen from '../screens/ProfilScreen';
import MessagesScreen from '../screens/MessagesScreen';

import EventDetail from '../components/EventDetail';

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
  tabBarLabel: 'Actualité',
  tabBarIcon: ({ focused }) =>  (
    focused
    ? <Image style={{ width: 30, height: 30 }} source={require('../assets/images/icone-menu-actu2.png')} />
    : <Image style={{ width: 30, height: 30 }} source={require('../assets/images/icone-menu-actu.png')} /> 
 )
};

HomeStack.path = '';

const BaladesStack = createStackNavigator(
  {
    Balades: BaladesScreen,
  },
  config
);

BaladesStack.navigationOptions = {
  tabBarLabel: 'Balades',
  tabBarIcon: ({ focused }) =>  (
    focused
    ? <Image style={{ width: 30, height: 30 }} source={require('../assets/images/icone-menu-balade2.png')} />
    : <Image style={{ width: 30, height: 30 }} source={require('../assets/images/icone-menu-balade.png')} /> 
 ),
};

BaladesStack.path = '';

const CarteStack = createStackNavigator(
  {
    Carte: {
      screen: CarteScreen,
    },
    EventDetail: {
      screen: EventDetail,
    }
  },
  config
);

CarteStack.navigationOptions = {
  tabBarLabel: 'Carte',
  tabBarIcon: ({ focused }) =>  (
    focused
    ? <Image style={{ width: 30, height: 30 }} source={require('../assets/images/icone-menu-carte2.png')} />
    : <Image style={{ width: 30, height: 30 }} source={require('../assets/images/icone-menu-carte.png')} /> 
 )
};

CarteStack.path = '';

const ProfilStack = createStackNavigator(
  {
    Profil: ProfilScreen,
  },
  config
);

ProfilStack.navigationOptions = {
  tabBarLabel: 'Profil',
  tabBarIcon: ({ focused }) =>  (
    focused
    ? <Image style={{ width: 30, height: 30 }} source={require('../assets/images/icone-menu-profil2.png')} />
    : <Image style={{ width: 30, height: 30 }} source={require('../assets/images/icone-menu-profil.png')} /> 
 )
};

ProfilStack.path = '';

const MessagesStack = createStackNavigator(
  {
    Messages: MessagesScreen,
  },
  config
);

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) =>  (
    focused
    ? <Image style={{ width: 30, height: 30 }} source={require('../assets/images/icone-menu-messages2.png')} />
    : <Image style={{ width: 30, height: 30 }} source={require('../assets/images/icone-menu-messages.png')} /> 
 )
};

MessagesStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CarteStack,
  BaladesStack,
  ProfilStack,
  MessagesStack,
});

tabNavigator.path = '';

export default tabNavigator;
