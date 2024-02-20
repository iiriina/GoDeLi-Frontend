import {useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from 'react-native';
import HomeStack from './HomeStack';
import MisRecetasStack from './MisRecetasStack';
import ModalScreen1 from './ModalScreen1';
import FavoritosStack from './FavoritosStack';
import CrearReceta1 from '../../ui/screens/CrearReceta1';
import CrearRecetaStack from './CrearRecetaStack';
import Perfil from '../../ui/screens/Perfil';
import SCREENS from '../../ui/screens/index';
import ICONS from "../../ui/assets/icons";
import Modal from '../../ui/components/Modal';
import Perfilvfinal from '../../ui/screens/Perfilvfinal';


const Tab = createBottomTabNavigator();


   


const TabNavigator = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const openModal = () => {
      setIsModalVisible(true);
    };
  
    const closeModal = () => {
      setIsModalVisible(false);
    };


    return(

     <Tab.Navigator initialRouteName={SCREENS.B} screenOptions={{
        headerShown: false,
      }}>
        <Tab.Screen 
            name = {SCREENS.B} 
            component={HomeStack}
            options = {{
                title: '',
                tabBarIcon: ({focused}) => (
                    <Image source={ICONS.CUBIERTOS} />
                    ),
                tabBarLabel: () => null,
            }}
        />


        <Tab.Screen 
            name = {SCREENS.H} 
            component={MisRecetasStack}
            options = {{
                title: '',
                tabBarIcon: ({focused}) => (
                    <Image source={ICONS.CHEF} />
                    ),
                tabBarLabel: () => null,
            }}
        />


        <Tab.Screen 
            name = {SCREENS.E} 
            component={CrearRecetaStack}
            options = {{
                title: '',
                tabBarIcon: ({focused}) => (
                    <Image source={ICONS.MAS} />
                    ),
                tabBarLabel: () => null,
                tabBarStyle: { display: "none" },

            }}
        />

        


        <Tab.Screen 
            name = {SCREENS.D} 
            component={FavoritosStack}
            options = {{
                title: '',
                tabBarIcon: ({focused}) => (
                    <Image source={ICONS.CORAZON} />
                    ),
                tabBarLabel: () => null,
            }}
        />


        <Tab.Screen 
            name = {SCREENS.C} 
            component={Perfilvfinal}
            options = {{
                title: 'Perfil',
                tabBarIcon: ({focused}) => (
                    <Image source={ICONS.PERFIL} />
                    ),
                tabBarLabel: () => null,
                headerShown: true,
            }}
        />


    </Tab.Navigator>
    
    );
};    


export default TabNavigator;