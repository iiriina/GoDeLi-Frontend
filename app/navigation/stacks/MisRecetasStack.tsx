
import { createStackNavigator } from '@react-navigation/stack';
import MisRecetasContainer from '../../ui/components/MisRecetasContainer';
import RecetaIndividual from '../../ui/screens/RecetaIndividual';
import EditatReceta from '../../ui/screens/EditatReceta';
import MisRecetas from '../../ui/screens/MisRecetas';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Mis Recetas" component={MisRecetas} />
        <Stack.Screen name="Receta Individual" component={RecetaIndividual} />
        <Stack.Screen name="Editar Receta" component={EditatReceta} />
      </Stack.Navigator>
    );
  };

  export default StackNavigator;