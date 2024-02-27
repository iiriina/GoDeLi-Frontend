import {useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
import Prueba from '../../ui/screens/Prueba';
import Perfilvfinal from '../../ui/screens/Perfilvfinal';
import { CommonActions } from '@react-navigation/native';
import {store} from '../../redux/store'
import { TouchableOpacity, Text, Image } from 'react-native';

const Tab = createBottomTabNavigator();


   


const TabNavigator = ({navigation}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const openModal = () => {
      setIsModalVisible(true);
    };
  
    const closeModal = () => {
      setIsModalVisible(false);
    };

    const photoUri = store.getState().auth.user.photo;
    const imageSource = photoUri ? { uri: photoUri } : undefined;

    const handlerHome = () => {

        navigation.reset({
          index: 0,
          routes: [{ name: 'MainApp' }],
        });
      }
    
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
                    <Image source={ICONS.CUBIERTOS}
                    style={{height: 24, width: 24}}
                    
                    />
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
                    <Image source={ICONS.CHEF}
                    style={{height: 24, width: 24}}
                    />
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
                    <Image source={ICONS.MAS}
                    style={{height: 24, width: 24}}
                    />
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
                    <Image source={ICONS.CORAZON}
                    style={{height: 24, width: 24}}
                    />
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
                    <Image source={ICONS.PERFIL}
                    style={{height: 24, width: 24}}
                    />
                    ),
                tabBarLabel: () => null,
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#FFF', 
                  },
                  headerTintColor: '#303030', 
                  headerTitle: 'Mi perfil',
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
                  </TouchableOpacity>)
            }}
        />


    </Tab.Navigator>
    
    );
};    


export default TabNavigator;