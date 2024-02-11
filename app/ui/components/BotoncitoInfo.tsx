import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type BotoncitoInfoType = {
  vector?: ImageSourcePropType;
  placeholder?: string;

  /** Style props */
  frameViewMarginLeft?: number | string;
  vectorIconWidth?: number | string;
  vectorIconHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BotoncitoInfo = ({
  frameViewMarginLeft,
  vector,
  vectorIconWidth,
  vectorIconHeight,
  placeholder,
}: BotoncitoInfoType) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", frameViewMarginLeft),
    };
  }, [frameViewMarginLeft]);

  const vectorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", vectorIconWidth),
      ...getStyleValue("height", vectorIconHeight),
    };
  }, [vectorIconWidth, vectorIconHeight]);

  return (
    <View style={[styles.vectorParent, frameView1Style]}>
      <Image
        style={[styles.vectorIcon, vectorIconStyle]}
        resizeMode="cover"
        source={vector}
      />
      <Text style={styles.placeholder}>{placeholder}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 24,
    height: 22,
  },
  placeholder: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.icons,
    textAlign: "left",
    marginLeft: 7,
  },
  vectorParent: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorAliceblue,
    height: 43,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    marginLeft: 15,
  },
});

export default BotoncitoInfo;
