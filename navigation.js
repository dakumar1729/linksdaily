import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import { AuthProvider } from './context/auth';
import ScreensNav from './components/nav/ScreensNav';


const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};
export default function RootNavigation() {
  return(
    <NavigationContainer theme={MyTheme}>
      <AuthProvider>
        <ScreensNav />
      </AuthProvider>
    </NavigationContainer>
  )
 }