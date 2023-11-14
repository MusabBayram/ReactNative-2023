import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DataScreen from './DataScreen';

const AnotherStack = createNativeStackNavigator();

export default function AnotherStackScreen() {
  return (
    <AnotherStack.Navigator>
      <AnotherStack.Screen name="Ana sayfa" component={HomeScreen} />
      <AnotherStack.Screen name="Ölçümler" component={DataScreen} />
    </AnotherStack.Navigator>
  );
}