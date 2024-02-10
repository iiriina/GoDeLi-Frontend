import React from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../components/Header';


const recipeInfo = {
    name: 'Pollito Con Arroz',
    duration: '25 mins',
    rating: '4.3',
    tags: ['Vegano', 'Vegetariano', 'Baja en Calorías'],
  };

const LoginScreen = ({ navigation }) => {
    const handleSignUp = () => {
        navigation.navigate('SignUp');
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
                <Text>Login Screen</Text>
                <Button title="Sign Up" onPress={handleSignUp} />
            </View>
        </View>
    );
};

export default LoginScreen;
