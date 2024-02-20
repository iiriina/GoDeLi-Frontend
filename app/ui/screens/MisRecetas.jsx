import {useState, useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import MisRecetasContainer from '../components/MisRecetasContainer';
import axios from 'axios'; 
import {store} from '../../redux/store'

import userWS from '../../networking/api/endpoints/userWS';
import {setClientToken} from  '../../networking/api/Api'



const MisRecetas = () => {

    const misRecetasContainerStyle = {
        margin: 5, 
    }


    const [recetas, setRecetas] = useState([]);

    const handlerHealth3 = async () => {
      try {

        console.log("hola1")
        setClientToken(store.getState().auth.session.accessToken)
        const response = await userWS.getMyRec(store.getState().auth.user.id);
        console.log("hola2")
        
        console.log(response.data);
        setRecetas(response.data);
        console.log(recetas[0].images[0].secure_url)

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

                  
                <MisRecetasContainer data={receta} index={index} />
              

            ))}
                
            </View>
        </View>
    );
};

export default MisRecetas;