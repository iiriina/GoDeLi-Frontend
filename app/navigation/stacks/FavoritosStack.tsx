import { createStackNavigator } from '@react-navigation/stack';
import Favoritos from '../../ui/screens/Favoritos';
import RecetaIndividual from '../../ui/screens/RecetaIndividual';


const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Favs" component={Favoritos} />
        <Stack.Screen name="Receta Individual" component={RecetaIndividual} />
      </Stack.Navigator>
    );
  };

  export default StackNavigator;