import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function MainScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>main!</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}
function StudioScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Studio!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
    </View>
  );
}

const AnotherStack = createNativeStackNavigator();

function AnotherStackScreen() {
  return (
    <AnotherStack.Navigator>
      <AnotherStack.Screen name="Home" component={HomeScreen} />
      <AnotherStack.Screen name="Details" component={DetailsScreen} />
    </AnotherStack.Navigator>
  );
}

function DataScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ölçümler screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false}}>
        <Tab.Screen name="Ana sayfa" component={MainScreen} />
        <Tab.Screen name="Ölçümler" component={DataScreen} />
        <Tab.Screen name="Stüdyo" component={DetailsScreen} />
        <Tab.Screen name="Diğer" component={AnotherStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
