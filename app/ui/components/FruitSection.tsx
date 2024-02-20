import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import Ingrediente from "./Ingrediente";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type FruitSectionType = {
  /** Style props */
  propMarginTop?: number | string;
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FruitSection = ({ propMarginTop, propTop }: FruitSectionType) => {
  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.groupParent, frameView2Style]}>
      <View style={styles.groupWrapper}>
        <View style={[styles.rectangleWrapper, styles.manzanas200GrPosition]}>
          <Ingrediente />
        </View>
      </View>
      <View
        style={[
          styles.manzanas200GrWrapper,
          styles.manzanas200Layout,
          groupViewStyle,
        ]}
      >
        <Text style={[styles.manzanas200Gr, styles.manzanas200Layout]}>
          Manzanas, 200 gr
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  manzanas200GrPosition: {
    left: 0,
    top: 0,
  },
  manzanas200Layout: {
    height: 16,
    width: 327,
    position: "absolute",
  },
  rectangleWrapper: {
    width: 364,
    position: "absolute",
    top: 0,
    height: 44,
  },
  groupWrapper: {
    zIndex: 0,
    height: 44,
    alignSelf: "stretch",
  },
  manzanas200Gr: {
    fontSize: FontSize.size_sm,
    lineHeight: 26,
    fontWeight: "500",
    
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    left: 0,
    top: 0,
  },
  manzanas200GrWrapper: {
    top: 14,
    left: 14,
    zIndex: 1,
  },
  groupParent: {
    alignSelf: "stretch",
  },
});

export default FruitSection;
