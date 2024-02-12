import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from '../ui/screens/LoginScreen';
import SignUpScreen from '../ui/screens/SignUpScreen';
import IniciarSesin from '../ui/screens/IniciarSesin';
import Perfil from '../ui/screens/Perfil';
import MisRecetasContainer from '../ui/screens/MisRecetasContainer';
import Recetas from '../ui/screens/Recetas';
import RecetaIndividual from '../ui/screens/RecetaIndividual';
import FormDefault from '../ui/screens/FormDefault';
import Prueba from '../ui/screens/Prueba';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const LoginStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Prueba}
                options={{ title: 'Login',headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ title: 'Sign Up' }}
            />
        </Stack.Navigator>
    );
};
{/*
const TabNavigator = () => {
    return <TabNavigator>
        <Tab.Screen 
            name = {SCREENS.B} 
            component={Recetas}
            options = {{
                title: 'Iniciar Sesión',
                tabBarIcon: {{focused}} => <Image source={ICONS.}
            
            }}

    </TabNavigator>
}    */}

export default LoginStack;
