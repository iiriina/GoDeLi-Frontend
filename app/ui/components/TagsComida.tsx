import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type TagsComidaType = {
  vegetariana?: string;

  /** Style props */
  frameViewMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TagsComida = ({ frameViewMarginLeft, vegetariana }: TagsComidaType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", frameViewMarginLeft),
    };
  }, [frameViewMarginLeft]);

  return (
    <View style={[styles.vegetarianaWrapper, frameViewStyle]}>
      <Text style={styles.vegetariana}>{vegetariana}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vegetariana: {
    fontSize: FontSize.bodyEkstraSmallMedium_size,
    lineHeight: 15,
    fontWeight: "500",
    fontFamily: FontFamily.bodyEkstraSmallMedium,
    color: Color.neutralWhite,
    textAlign: "left",
  },
  vegetarianaWrapper: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorCrimson,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_11xs,
  },
});

export default TagsComida;
