import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ModalScreen1 from './ModalScreen1';
import ModalScreen2 from './ModalScreen2';
import ModalScreen3 from './ModalScreen3';
import { NavigationContainer } from '@react-navigation/native';
import { Button , TouchableOpacity,StyleSheet, Text, Image} from 'react-native';
import { useDispatch } from 'react-redux'; 
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

  const handleVolver3 =() => {
    dispatch(eliminarDatosCreacion());
    

    navigation.navigate('GoDeLi');
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainApp' }],
      });
  }
  

  return (
    <ModalStack.Navigator initialRouteName="ModalScreen1" screenOptions={{ presentation: 'modal' }}>
      <ModalStack.Screen
        name="ModalScreen1"
        component={ModalScreen1}
        options={{
          tabBarStyle: { display: "none" },
          headerTitle: 'Crear receta',
          headerTitleAlign: 'center', 
          headerLeft: () => (
            <TouchableOpacity onPress={handleVolver3} style={styles.button}>
              <Image
                  source={require('../../ui/assets/clear.png')} // Reemplaza con la ruta a tu imagen
                  style={{ width: 25, height: 25 }} // Ajusta el tamaño según necesites
                />
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
          headerTitleAlign: 'center', 
          headerLeft: () => (
            <TouchableOpacity onPress={handleVolver3} style={styles.button}>
            <Image
                source={require('../../ui/assets/clear.png')} // Reemplaza con la ruta a tu imagen
                style={{ width: 25, height: 25 }} // Ajusta el tamaño según necesites
              />
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
          headerTitleAlign: 'center', 
          headerLeft: () => (
            <TouchableOpacity onPress={handleVolver3} style={styles.button}>
              <Image
                  source={require('../../ui/assets/clear.png')} // Reemplaza con la ruta a tu imagen
                  style={{ width: 25, height: 25 }} // Ajusta el tamaño según necesites
                />
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