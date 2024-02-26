import { createStackNavigator } from '@react-navigation/stack';
import Favoritos from '../../ui/screens/Favoritos';
import RecetaIndividual from '../../ui/screens/RecetaIndividual';
import ModalTester from '../../ui/components/Modal';
import {store} from '../../redux/store'
import { TouchableOpacity, Text, Image } from 'react-native';


const Stack = createStackNavigator();

const StackNavigator = ({ navigation }) => {


  const photoUri = store.getState().auth.user.photo;
  const imageSource = photoUri ? { uri: photoUri } : undefined;

  const handlerHome = () => {
    navigation.navigate('GoDeLi');
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainApp' }],
    });
  }

    return (
      <Stack.Navigator 
      
      
      >
        <Stack.Screen name="Mis Favoritos" component={Favoritos} 
        options={{
          headerStyle: {
            backgroundColor: '#FFF', 
          },
          headerTintColor: '#303030', 
          headerTitle: 'Mis favoritos',
          headerTitleAlign: 'center', 
          headerLeft: () => (
            <Image 
                source={imageSource}
                style={{ width: 30, height: 30, marginLeft: 15,borderRadius:100, }}
            />
          ),
          headerRight: () => (
            
            <TouchableOpacity onPress={handlerHome}>
            <Image 
              source={require("../../ui/assets/icons/logo3.png")}
              style={{ width: 30, height: 30, marginRight: 15 }}
            />
          </TouchableOpacity>
            
          ),
        }}
        
        
        
        />
        <Stack.Screen name="Receta Individual" component={RecetaIndividual} 
        
        
        options={{
          headerStyle: {
            backgroundColor: '#FFF', 
          },
          headerTintColor: '#303030', 
          headerTitle: 'Detalle de la receta',
          headerTitleAlign: 'center', 
          headerRight: () => (
              <TouchableOpacity onPress={handlerHome}>
                <Image 
                  source={require("../../ui/assets/icons/logo3.png")}
                  style={{ width: 30, height: 30, marginRight: 15 }}
                />
              </TouchableOpacity>
            
          ),
        }}
        
        
        
        />
      </Stack.Navigator>
    );
  };

  export default StackNavigator;