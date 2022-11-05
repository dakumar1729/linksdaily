import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signin from '../../screens/Signin';
import Signup from '../../screens/Signup';
import Home from '../../screens/Home';
import Account from '../../screens/Account';
import { AuthContext } from '../../context/auth';
import HeaderTabs from './HeaderTabs';
import Posts from '../../screens/Posts';
import Links from '../../screens/Links';
const Stack = createNativeStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    background: '#fff',
    primary: '#fff'
  },
};
export default function ScreensNav() {
  const [state, setState] = useContext(AuthContext)

  const authenticated = state.data && state.data.token !== "" && state.data.token !== undefined && state.data.userID !== null;
  console.log("state===>", state)
  console.log("authenticated===>", authenticated)


  return (
    <Stack.Navigator initialRouteName="Home" >
      {authenticated ? (
        <>
          <Stack.Screen name="Home" component={Home} options={{
          title: 'Snapingan',
          headerRight: () => <HeaderTabs />
        }} />

        <Stack.Screen name="Posts" component={Posts} options={{
          title : 'Snapingan',
          headerRight : () => <HeaderTabs />
        
        }}/>
        <Stack.Screen name="Links" component={Links} options={{
          title : 'Snapingan',
          headerRight : () => <HeaderTabs />
        
        }}/>
        <Stack.Screen name="Account" component={Account} options={{
          title : 'Snapingan',
          headerRight : () => <HeaderTabs />
        
        }}/>
        </>
      ) : (
        <>
          <Stack.Screen name="Signin" component={Signin} Options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} Options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
  )
}