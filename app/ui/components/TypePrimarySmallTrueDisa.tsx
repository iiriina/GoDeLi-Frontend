import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type TypePrimarySmallTrueDisaType = {
  label?: string;

  /** Style props */
  typePrimarySmallTrueDisaPosition?: string;
  typePrimarySmallTrueDisaMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypePrimarySmallTrueDisa = ({
  label = "Button",
  typePrimarySmallTrueDisaPosition,
  typePrimarySmallTrueDisaMarginLeft,
}: TypePrimarySmallTrueDisaType) => {
  const typePrimarySmallTrueDisaStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typePrimarySmallTrueDisaPosition),
      ...getStyleValue("marginLeft", typePrimarySmallTrueDisaMarginLeft),
    };
  }, [typePrimarySmallTrueDisaPosition, typePrimarySmallTrueDisaMarginLeft]);

  return (
    <View
      style={[styles.typeprimarySmalltrueDisa, typePrimarySmallTrueDisaStyle]}
    >
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.neutralWhite,
    textAlign: "center",
  },
  typeprimarySmalltrueDisa: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.icons,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
  },
});

export default TypePrimarySmallTrueDisa;
