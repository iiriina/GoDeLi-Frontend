import React from 'react';
import { View, Text, Button } from 'react-native';
import MisRecetasContainer from '../components/MisRecetasContainer';


const MisRecetas = () => {

    const misRecetasContainerStyle = {
        margin: 5, 
    }

    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 1,flexWrap:"wrap",flexDirection:"row",margin:"3%",width:"100%"  }}>
            
                <MisRecetasContainer/>
                <MisRecetasContainer/>
                <MisRecetasContainer/>
                <MisRecetasContainer/>
                <MisRecetasContainer/>
                <MisRecetasContainer/>
                <MisRecetasContainer/>
                <MisRecetasContainer/>
                
            </View>
        </View>
    );
};

export default MisRecetas;