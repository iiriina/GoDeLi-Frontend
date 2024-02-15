import React, { useState } from 'react';
import { View, Modal, Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const ModalScreen = ({ navigation }) => {

  const handleClose = () => {
    navigation.popToTop();
    navigation.goBack(null);  
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla 3 del Modal</Text>
      <Button title="Ir atrás" onPress={() => navigation.goBack()} />
      <Button title="Cerrar" onPress={handleClose} />
    </View>
  );
};

export default ModalScreen;