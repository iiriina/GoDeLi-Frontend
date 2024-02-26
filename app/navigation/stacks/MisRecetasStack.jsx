
import { createStackNavigator } from '@react-navigation/stack';
import MisRecetasContainer from '../../ui/components/MisRecetasContainer';
import RecetaIndividual from '../../ui/screens/RecetaIndividual';
import EditatReceta from '../../ui/screens/EditatReceta';
import MisRecetas from '../../ui/screens/MisRecetas';
import {store} from '../../redux/store'
import { TouchableOpacity, Text, Image } from 'react-native';




const Stack = createStackNavigator();

const StackNavigator = () => {

    const photoUri = store.getState().auth.user.photo;
    const imageSource = photoUri ? { uri: photoUri } : undefined;



    return (
      <Stack.Navigator 
      
      
      >
        <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#FFF', 
          },
          headerTintColor: '#303030', 
          headerTitle: 'Mis recetas',
          headerTitleAlign: 'center', 
          headerLeft: () => (
            <Image 
                source={imageSource}
                style={{ width: 30, height: 30, marginLeft: 15,borderRadius:100, }}
            />
          ),
          headerRight: () => (
              <Image 
                source={require("../../ui/assets/icons/logo3.png")}
                style={{ width: 30, height: 30, marginRight: 15 }}
              />
          ),
        }}
        name="Mis Recetas" 
        component={MisRecetas} />
        <Stack.Screen name="Receta Individual" component={RecetaIndividual} 

        options={{
          headerStyle: {
            backgroundColor: '#FFF', 
          },
          headerTintColor: '#303030', 
          headerTitle: 'Detalle de la receta',
          headerTitleAlign: 'center', 
          headerRight: () => (
              <Image 
                source={require("../../ui/assets/icons/logo3.png")}
                style={{ width: 30, height: 30, marginRight: 15 }}
              />
          ),
        }}
        
        
        />
        <Stack.Screen name="Editar Receta" component={EditatReceta} 

        options={{
          headerStyle: {
            backgroundColor: '#FFF', 
          },
          headerTintColor: '#303030', 
          headerTitle: 'Editar receta',
          headerTitleAlign: 'center', 
          headerRight: () => (
              <Image 
                source={require("../../ui/assets/icons/logo3.png")}
                style={{ width: 30, height: 30, marginRight: 15 }}
              />
          ),
        }}
        
        />
      </Stack.Navigator>
    );
  };

  export default StackNavigator;