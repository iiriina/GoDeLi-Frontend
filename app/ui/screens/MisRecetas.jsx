import {useState, useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import MisRecetasContainer from '../components/MisRecetasContainer';
import axios from 'axios'; 
import {store} from '../../redux/store'
import recipeWS from '../../networking/api/endpoints/recipeWS';


const MisRecetas = () => {

    const misRecetasContainerStyle = {
        margin: 5, 
    }


    const [recetas, setRecetas] = useState([]);

    const handlerHealth3 = async () => {
      try {
        const response = await recipeWS.getMyRec(store.getState().auth.user.id);
        setRecetas(response.data.data);
      } catch (error) {
        console.log(error.response);
      }
    };
  
    useEffect(() => {
      handlerHealth3();
    }, []);

    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 1,flexWrap:"wrap",flexDirection:"row",margin:"3%",width:"100%"  }}>
                {recetas.map((receta, index) => (
                  <View key={index} style={[styles.frameParent, styles.parentShadowBox]}>
                <CardReceta data={receta} />
              </View>
            ))}
                
            </View>
        </View>
    );
};

export default MisRecetas;