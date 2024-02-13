import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginStack from './stacks/LoginStack';
import TabStack from './stacks/TabStack';

import Routes from './Routes';
import Header from '../ui/components/Header';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <NavigationContainer>
        <Stack.Navigator>
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
