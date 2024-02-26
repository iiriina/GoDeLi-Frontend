
import { createStackNavigator } from '@react-navigation/stack';
import Recetas from '../../ui/screens/Recetas';
import RecetaIndividual from '../../ui/screens/RecetaIndividual';
import { TouchableOpacity, Text, Image } from 'react-native';
import ICONS from '../../ui/assets/icons/index';
import {store} from '../../redux/store'
import { Color, FontFamily, FontSize, Padding, Border } from '../../ui/GlobalStyles';


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
      <Stack.Navigator>
        <Stack.Screen name="GoDeLi" component={Recetas}
        options={{
          headerStyle: {
            backgroundColor: '#FFF', 
          },
          cardStyle: { backgroundColor: '#fff' },
          headerTintColor: '#303030', 
          headerTitle: '¡Bienvenido a GoDeLi!',
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
          cardStyle: { backgroundColor: '#fff' },
          headerTintColor: '#303030', 
          headerTitle: 'Detalle de la Receta',
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