import React from 'react';
import { Image } from 'react-native';
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
import ICONS from '../ui/assets/icons/index';
import SCREENS from '../ui/screens/index';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const LoginStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={TabNavigator}
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

const TabNavigator = () => {
    return(
     <Tab.Navigator initialRouteName={SCREENS.B}>
        <Tab.Screen 
            name = {SCREENS.B} 
            component={Recetas}
            options = {{
                title: '',
                tabBarIcon: ({focused}) => (
                    <Image source={ICONS.CUBIERTOS} />
                    ),
                tabBarLabel: () => null,
            }}
        />


        <Tab.Screen 
            name = {SCREENS.H} 
            component={MisRecetasContainer}
            options = {{
                title: '',
                tabBarIcon: ({focused}) => (
                    <Image source={ICONS.CHEF} />
                    ),
                tabBarLabel: () => null,
            }}
        />


        <Tab.Screen 
            name = {SCREENS.E} 
            component={FormDefault}
            options = {{
                title: '',
                tabBarIcon: ({focused}) => (
                    <Image source={ICONS.MAS} />
                    ),
                tabBarLabel: () => null,    
            }}
        />


        <Tab.Screen 
            name = {SCREENS.D} 
            component={RecetaIndividual}
            options = {{
                title: '',
                tabBarIcon: ({focused}) => (
                    <Image source={ICONS.CORAZON} />
                    ),
                tabBarLabel: () => null,
            }}
        />


        <Tab.Screen 
            name = {SCREENS.C} 
            component={Perfil}
            options = {{
                title: '',
                tabBarIcon: ({focused}) => (
                    <Image source={ICONS.PERFIL} />
                    ),
                tabBarLabel: () => null,
            }}
        />


    </Tab.Navigator>
    );
};    

export default LoginStack;
