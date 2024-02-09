import React from 'react';
import { View, Text, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
    const handleLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Sign Up Screen</Text>
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default SignUpScreen;
