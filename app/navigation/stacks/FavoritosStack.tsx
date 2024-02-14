import { createStackNavigator } from '@react-navigation/stack';
import Favoritos from '../../ui/screens/Favoritos';
import RecetaIndividual from '../../ui/screens/RecetaIndividual';
import ModalTester from '../../ui/screens/Modal';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Favs" component={ModalTester} />
        <Stack.Screen name="Receta Individual" component={RecetaIndividual} />
      </Stack.Navigator>
    );
  };

  export default StackNavigator;