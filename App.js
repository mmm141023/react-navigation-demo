import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/drawerscreen/Home';
import About from './screens/drawerscreen/About';
import Article from './screens/drawerscreen/Acticle';
import Setting from './screens/drawerscreen/Setting';

import HomeStack from './screens/stackscreen/Home';
import DetailsStack from './screens/stackscreen/Details';

import Bottom1 from './screens/bottomscreen/Bottom1';
import Bottom2 from './screens/bottomscreen/Bottom2';
import Bottom3 from './screens/bottomscreen/Bottom3';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {color} from 'react-native-reanimated';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createMaterialBottomTabNavigator();

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Bottom1} />
      <Tab.Screen name="Settings" component={Bottom3} />
    </Tab.Navigator>
  );
}
function bottomTab() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Bottom1" component={Bottom1} />
      <BottomTab.Screen name={'Bottom2'} component={Bottom2} />
      <BottomTab.Screen name="Bottom3" component={Bottom3} />
    </BottomTab.Navigator>
  );
}

function stack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeStack} />
      <Stack.Screen name="Details" component={DetailsStack} />
      <Stack.Screen name="BottomTab" component={MyTabs} />
    </Stack.Navigator>
  );
}

export default function() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={stack} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Article" component={Article} />
        <Drawer.Screen name="Setting" component={Setting} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
