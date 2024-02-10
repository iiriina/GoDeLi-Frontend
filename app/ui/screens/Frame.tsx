import * as React from "react";
import { StyleSheet, View } from "react-native";
import MisRecetasContainer from "./MisRecetasContainer";

const Frame = () => {
  return (
    <View style={styles.frameParent}>
      <MisRecetasContainer />
      <MisRecetasContainer frameViewMarginLeft={8} />
      <MisRecetasContainer frameViewMarginLeft={8} />
      <MisRecetasContainer frameViewMarginLeft={8} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameParent: {
    width: 392,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Frame;
