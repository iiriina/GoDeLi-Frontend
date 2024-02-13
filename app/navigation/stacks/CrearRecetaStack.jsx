import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ModalScreen1 from './ModalScreen1';
import ModalScreen2 from './ModalScreen2';
import ModalScreen3 from './ModalScreen3';
import { NavigationContainer } from '@react-navigation/native';

const ModalStack = createStackNavigator();

const CrearRecetaStack = () => {
  return (
      <ModalStack.Navigator initialRouteName="ModalScreen1">
        <ModalStack.Screen name="ModalScreen1" component={ModalScreen1} />
        <ModalStack.Screen name="ModalScreen2" component={ModalScreen2} />
        <ModalStack.Screen name="ModalScreen3" component={ModalScreen3} />
      </ModalStack.Navigator>
  );
};

export default CrearRecetaStack;