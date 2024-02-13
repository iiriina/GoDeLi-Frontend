import React, { useState } from 'react';
import { View, Modal, Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const ModalScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Pantalla 2 del Modal</Text>
        <Button title="Siguiente" onPress={() => navigation.navigate('ModalScreen3')} />
      </View>
    );
  };

  export default ModalScreen;