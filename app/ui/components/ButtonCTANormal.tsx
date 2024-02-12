import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type ButtonCTANormalType = {
  buttonText?: string;

  /** Style props */
  buttonCTANormalBorderRadius?: number;
  baseBackgroundHeight?: number | string;
  baseBackgroundWidth?: number | string;
  baseBackgroundTop?: number | string;
  baseBackgroundRight?: number | string;
  baseBackgroundBottom?: number | string;
  baseBackgroundLeft?: number | string;
  baseBackgroundBackgroundColor?: string;
  baseBackgroundBorderStyle?: string;
  baseBackgroundBorderColor?: string;
  baseBackgroundBorderWidth?: number;
  sampleButtonTop?: number | string;
  sampleButtonLeft?: number | string;
  sampleButtonFontWeight?: string;
  sampleButtonFontFamily?: string;
  sampleButtonColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonCTANormal = ({
  buttonText,
  buttonCTANormalBorderRadius,
  baseBackgroundHeight,
  baseBackgroundWidth,
  baseBackgroundTop,
  baseBackgroundRight,
  baseBackgroundBottom,
  baseBackgroundLeft,
  baseBackgroundBackgroundColor,
  baseBackgroundBorderStyle,
  baseBackgroundBorderColor,
  baseBackgroundBorderWidth,
  sampleButtonTop,
  sampleButtonLeft,
  sampleButtonFontWeight,
  sampleButtonFontFamily,
  sampleButtonColor,
}: ButtonCTANormalType) => {
  const buttonCTANormalStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", buttonCTANormalBorderRadius),
    };
  }, [buttonCTANormalBorderRadius]);

  const baseBackgroundStyle = useMemo(() => {
    return {
      ...getStyleValue("height", baseBackgroundHeight),
      ...getStyleValue("width", baseBackgroundWidth),
      ...getStyleValue("top", baseBackgroundTop),
      ...getStyleValue("right", baseBackgroundRight),
      ...getStyleValue("bottom", baseBackgroundBottom),
      ...getStyleValue("left", baseBackgroundLeft),
      ...getStyleValue("backgroundColor", baseBackgroundBackgroundColor),
      ...getStyleValue("borderStyle", baseBackgroundBorderStyle),
      ...getStyleValue("borderColor", baseBackgroundBorderColor),
      ...getStyleValue("borderWidth", baseBackgroundBorderWidth),
    };
  }, [
    baseBackgroundHeight,
    baseBackgroundWidth,
    baseBackgroundTop,
    baseBackgroundRight,
    baseBackgroundBottom,
    baseBackgroundLeft,
    baseBackgroundBackgroundColor,
    baseBackgroundBorderStyle,
    baseBackgroundBorderColor,
    baseBackgroundBorderWidth,
  ]);

  const sampleButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("top", sampleButtonTop),
      ...getStyleValue("left", sampleButtonLeft),
      ...getStyleValue("fontWeight", sampleButtonFontWeight),
      ...getStyleValue("fontFamily", sampleButtonFontFamily),
      ...getStyleValue("color", sampleButtonColor),
    };
  }, [
    sampleButtonTop,
    sampleButtonLeft,
    sampleButtonFontWeight,
    sampleButtonFontFamily,
    sampleButtonColor,
  ]);

  return (
    <View style={[styles.buttonCtaNormal, buttonCTANormalStyle]}>
      <View style={[styles.baseBackground, baseBackgroundStyle]} />
      <Text style={[styles.sampleButton, sampleButtonStyle]}>{buttonText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  baseBackground: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primaryRed,
    position: "absolute",
  },
  sampleButton: {
    top: "28.57%",
    left: "43.44%",
    fontSize: FontSize.bodyNormalRegular_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.buttonNormalMedium,
    color: Color.neutralWhite,
    textAlign: "center",
    position: "absolute",
  },
  buttonCtaNormal: {
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    alignSelf: "stretch",
    flex: 1,
  },
});

export default ButtonCTANormal;
