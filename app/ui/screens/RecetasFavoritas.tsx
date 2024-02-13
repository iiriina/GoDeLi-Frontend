import * as React from "react";
import { StyleSheet, View } from "react-native";
import CardReceta from "../components/CardReceta"; 

const RecetasFavoritas = () => {
  return (
    <View style={styles.container}>
      <CardReceta />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RecetasFavoritas;
