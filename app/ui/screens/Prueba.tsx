import React, { useState } from 'react';
import { TextInput, View, Button, Alert } from 'react-native';

const MyTextInput = () => {
  const [text, setText] = useState('');

  const handleInputChange = (inputText: React.SetStateAction<string>) => {
    setText(inputText);
  };

  const handleSubmit = () => {
    // Aquí puedes realizar alguna acción con el texto ingresado
    Alert.alert('Texto ingresado', text);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 10 }}
        onChangeText={handleInputChange}
        value={text}
        placeholder="Ingrese su texto aquí"
      />
      <Button
        title="Enviar"
        onPress={handleSubmit}
      />
    </View>
  );
};

export default MyTextInput;