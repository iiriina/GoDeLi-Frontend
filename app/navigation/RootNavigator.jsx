import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginStack from './stacks/LoginStack';
import TabStack from './stacks/TabStack';

import Iniciov2 from '../ui/screens/Iniciov2'

import Routes from './Routes';
import Header from '../ui/components/Header';
import { useSelector } from 'react-redux';
import {store} from '../redux/store'
import {setInicialToken} from '../networking/api/Api'

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  
    const isLoggedIn = useSelector(state => !!state.auth.session.refreshToken);

    if (isLoggedIn) {
      setInicialToken();
    }

    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="MainApp" component={TabStack} />
          </>
        ) : (
          <>
            <Stack.Screen name="Loginn" component={LoginStack} />
          </>
        )}
      </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
