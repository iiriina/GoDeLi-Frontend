import React from 'react';
import { Image } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from '../../ui/screens/LoginScreen';
import SignUpScreen from '../../ui/screens/SignUpScreen';
import IniciarSesin from '../../ui/screens/IniciarSesin';
import Perfil from '../../ui/screens/Perfil';
import MisRecetasContainer from '../../ui/screens/MisRecetasContainer';
import Recetas from '../../ui/screens/Recetas';
import RecetaIndividual from '../../ui/screens/RecetaIndividual';
import FormDefault from '../../ui/screens/FormDefault';
import Prueba from '../../ui/screens/Prueba';
import ICONS from '../../ui/assets/icons/index';
import SCREENS from '../../ui/screens/index';

import EditProfileScreen from '../../ui/screens/EditProfileScreen';
import CrearReceta1 from '../../ui/screens/CrearReceta1';
import CrearReceta2 from '../../ui/screens/CrearReceta2';
import CrearReceta3 from '../../ui/screens/CrearReceta3';
import Iniciov2 from '../../ui/screens/Iniciov2';
import TabStack from './TabStack'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const LoginStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{ headerShown: false }}
        
        >
            <Stack.Screen
                name="Login"
                component={Iniciov2}
                options={{ title: 'Login' }}
            />
            <Stack.Screen
                name="MainApp"
                component={TabStack}
                options={{ title: 'Sign Up' }}
            />
        </Stack.Navigator>
    );
};


export default LoginStack;
