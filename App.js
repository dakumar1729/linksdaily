import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from './screens/Signup'
import Signin from './screens/Signin';
import { AuthProvider } from './context/auth';

const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    background: '#fff',
  },
};
export default function App() {
  return(
    <NavigationContainer theme={MyTheme}>
      <AuthProvider>
      <Stack.Navigator initialRouteName="Signup" screenOptions={{headerShown:false}}>
        <Stack.Screen name = "Signup" component = {Signup} />
        <Stack.Screen name = "Signin" component = {Signin} />
      </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  )
 }