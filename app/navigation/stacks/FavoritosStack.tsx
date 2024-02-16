import { createStackNavigator } from '@react-navigation/stack';
import Favoritos from '../../ui/screens/Favoritos';
import RecetaIndividual from '../../ui/screens/RecetaIndividual';
import ModalTester from '../../ui/components/Modal';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Mis Favoritos" component={Favoritos} />
        <Stack.Screen name="Receta Individual" component={RecetaIndividual} />
      </Stack.Navigator>
    );
  };

  export default StackNavigator;