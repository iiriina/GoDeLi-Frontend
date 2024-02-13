import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginStack from './LoginStack';
import Routes from './Routes';
import Header from '../ui/components/Header';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={Routes.LoginStack}
                screenOptions={{ headerShown: false }}
 
            >

                <Stack.Screen
                    name={Routes.LoginStack}
                    component={LoginStack}
                    
                />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
