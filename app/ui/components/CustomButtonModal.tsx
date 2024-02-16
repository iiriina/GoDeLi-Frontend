import React from "react";
import { Button } from "react-native-paper";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { FontFamily } from "../GlobalStyles";

interface CustomButtonProps {
  text: string;
  onPress: () => void;
  isPressed: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onPress, isPressed, buttonStyle }) => {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      style={[
        buttonStyle,
        {
          borderRadius: 8, // Redondeado del borde
          overflow: "hidden", // Para que el redondeado del borde sea visible
          backgroundColor: isPressed ? "rgba(232,68,67,1)" : "#FFFFFF", // Fondo rojo si está presionado, blanco si no
          borderWidth: 1, // Grosor del borde
          borderColor: isPressed ? "rgba(232,68,67,1)" : "rgba(175, 175, 175, 1)", // Borde rojo si está presionado, gris si no
        },
        isPressed ? styles.pressedButton : null, // Aplicar estilos cuando está presionado
      ]}
      labelStyle={[styles.buttonText, isPressed ? { color: "#FFFFFF" } : null]} // Aplicar el estilo del texto aquí
    >
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  pressedButton: {
    backgroundColor: "rgba(232,68,67,1)", // Color de fondo cuando está presionado
  },
  buttonText: {
    fontFamily: FontFamily.poppinsBold,
    fontSize: 14,
    color: "#333333", // Color de texto por defecto (negro)
  },
});

export default CustomButton;
