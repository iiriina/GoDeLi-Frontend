
import { createStackNavigator } from '@react-navigation/stack';
import Recetas from '../../ui/screens/Recetas';
import RecetaIndividual from '../../ui/screens/RecetaIndividual';
import { TouchableOpacity, Text, Image } from 'react-native';
import ICONS from '../../ui/assets/icons/index';


const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFF', 
        },
        headerTintColor: '#303030', 
        headerTitle: '¡Bienvenido a GoDeLi!',
        headerTitleAlign: 'center', 
        headerLeft: () => (
          <Image 
              source={require("../../ui/assets/image-39-2.png")}
              style={{ width: 30, height: 30, marginLeft: 15 }}
          />
        ),
        headerRight: () => (
          
            <Image 
              source={require("../../ui/assets/icons/logo3.png")}
              style={{ width: 30, height: 30, marginRight: 15 }}
            />
          
        ),
      }}
      
      >
        <Stack.Screen name="GoDeLi" component={Recetas} />
        <Stack.Screen name="Receta Individual" component={RecetaIndividual} />
      </Stack.Navigator>
    );
  };

  export default StackNavigator;