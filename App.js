import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import InfinityScreen from './screens/InfinityScreen';
import SaturnScreen from './screens/infinity/SaturnScreen';
import AndBeyond from './screens/AndBeyondScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Infinity" component={InfinityScreen} />
        <Stack.Screen name="Saturn" component={SaturnScreen} />
        <Stack.Screen name="AndBeyond" component={AndBeyond} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
