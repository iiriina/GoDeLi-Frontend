import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../ui/screens/LoginScreen';
import SignUpScreen from '../ui/screens/SignUpScreen';
import IniciarSesin from '../ui/screens/IniciarSesin';
import Perfil from '../ui/screens/Perfil';
import MisRecetasContainer from '../ui/screens/MisRecetasContainer';
import Recetas from '../ui/screens/Recetas';
import RecetaIndividual from '../ui/screens/RecetaIndividual';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Perfil}
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

export default LoginStack;
