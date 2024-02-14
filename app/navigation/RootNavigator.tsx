import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginStack from './stacks/LoginStack';
import TabStack from './stacks/TabStack';

import Iniciov2 from '../ui/screens/Iniciov2'

import Routes from './Routes';
import Header from '../ui/components/Header';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
