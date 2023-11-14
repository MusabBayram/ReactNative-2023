import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/pages/HomeScreen';
import DataScreen from './src/pages/DataScreen';
import StudioScreen from './src/pages/StudioScreen';
import AnotherStackScreen from './src/pages/AnotherStackScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false}}>
        <Tab.Screen name="Ana sayfa" component={HomeScreen} />
        <Tab.Screen name="Ölçümler" component={DataScreen} />
        <Tab.Screen name="Stüdyo" component={StudioScreen} />
        <Tab.Screen name="Diğer" component={AnotherStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
