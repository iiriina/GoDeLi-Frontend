import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Ingrediente = () => {
  return <View style={styles.groupChild} />;
};

const styles = StyleSheet.create({
  groupChild: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorAliceblue,
    width: 364,
    height: 44,
  },
});

export default Ingrediente;
