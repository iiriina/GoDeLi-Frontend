
import { createStackNavigator } from '@react-navigation/stack';
import Recetas from '../../ui/screens/Recetas';
import RecetaIndividual from '../../ui/screens/RecetaIndividual';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Recetass" component={Recetas} />
        <Stack.Screen name="Receta Individual" component={RecetaIndividual} />
      </Stack.Navigator>
    );
  };

  export default StackNavigator;