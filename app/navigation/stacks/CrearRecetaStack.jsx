import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ModalScreen1 from './ModalScreen1';
import ModalScreen2 from './ModalScreen2';
import ModalScreen3 from './ModalScreen3';
import { NavigationContainer } from '@react-navigation/native';
import { Button , TouchableOpacity,StyleSheet, Text} from 'react-native';
import { useDispatch } from 'react-redux'; // Importa useDispatch
import {eliminarDatosCreacion} from '../../redux/slices/CrearRecetaSlice'

const ModalStack = createStackNavigator();


const CrearRecetaStack = ({ navigation }) => {



  const dispatch = useDispatch();

  const handleVolver =() => {
    dispatch(eliminarDatosCreacion());
    navigation.popToTop();
    navigation.goBack(null);
    
  }

  const handleVolver2 =() => {
    dispatch(eliminarDatosCreacion());
    navigation.goBack(null);
    
  }
  

  return (
    <ModalStack.Navigator initialRouteName="ModalScreen1" screenOptions={{ presentation: 'modal' }}>
      <ModalStack.Screen
        name="ModalScreen1"
        component={ModalScreen1}
        options={{
          tabBarStyle: { display: "none" },
          title: "Crear Receta",
          headerLeft: () => (
            <TouchableOpacity onPress={handleVolver2} style={styles.button}>
              <Text style={styles.text}>X</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <ModalStack.Screen
        name="ModalScreen2"
        component={ModalScreen2}
        options={{
          tabBarStyle: { display: "none" },
          title: "Crear Receta",
          headerLeft: () => (
            <TouchableOpacity onPress={handleVolver} style={styles.button}>
              <Text style={styles.text}>X</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <ModalStack.Screen
        name="ModalScreen3"
        component={ModalScreen3}
        options={{
          tabBarStyle: { display: "none" },
          title: "Crear Receta",
          headerLeft: () => (
            <TouchableOpacity onPress={handleVolver} style={styles.button}>
              <Text style={styles.text}>X</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </ModalStack.Navigator>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white', // Fondo blanco
    // Opciones adicionales para eliminar el recuadro visual o sombras
    elevation: 0, // Para Android
    shadowOpacity: 0, // Para iOS
    paddingLeft: "20%",
  },
  buttonText: {
    color: '#000', // Texto negro
  }
  
});

export default CrearRecetaStack;