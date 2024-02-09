import React from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../components/Header';

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
