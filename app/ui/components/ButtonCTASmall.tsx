import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type ButtonCTASmallType = {
  categoryFilter?: string;

  /** Style props */
  buttonCTASmallElevation?: number | string;
  buttonCTASmallWidth?: number | string;
  buttonCTASmallHeight?: number | string;
  buttonCTASmallBorderRadius?: number;
  buttonCTASmallBorderStyle?: string;
  buttonCTASmallBorderColor?: string;
  buttonCTASmallBorderWidth?: number;
  buttonCTASmallMarginLeft?: number | string;
  buttonCTASmallBackgroundColor?: string;
  frameViewBackgroundColor?: string;
  sampleButtonFontWeight?: string;
  sampleButtonFontFamily?: string;
  sampleButtonColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonCTASmall = ({
  categoryFilter,
  buttonCTASmallElevation,
  buttonCTASmallWidth,
  buttonCTASmallHeight,
  buttonCTASmallBorderRadius,
  buttonCTASmallBorderStyle,
  buttonCTASmallBorderColor,
  buttonCTASmallBorderWidth,
  buttonCTASmallMarginLeft,
  buttonCTASmallBackgroundColor,
  frameViewBackgroundColor,
  sampleButtonFontWeight,
  sampleButtonFontFamily,
  sampleButtonColor,
}: ButtonCTASmallType) => {
  const buttonCTASmallStyle = useMemo(() => {
    return {
      ...getStyleValue("elevation", buttonCTASmallElevation),
      ...getStyleValue("width", buttonCTASmallWidth),
      ...getStyleValue("height", buttonCTASmallHeight),
      ...getStyleValue("borderRadius", buttonCTASmallBorderRadius),
      ...getStyleValue("borderStyle", buttonCTASmallBorderStyle),
      ...getStyleValue("borderColor", buttonCTASmallBorderColor),
      ...getStyleValue("borderWidth", buttonCTASmallBorderWidth),
      ...getStyleValue("marginLeft", buttonCTASmallMarginLeft),
      ...getStyleValue("backgroundColor", buttonCTASmallBackgroundColor),
    };
  }, [
    buttonCTASmallElevation,
    buttonCTASmallWidth,
    buttonCTASmallHeight,
    buttonCTASmallBorderRadius,
    buttonCTASmallBorderStyle,
    buttonCTASmallBorderColor,
    buttonCTASmallBorderWidth,
    buttonCTASmallMarginLeft,
    buttonCTASmallBackgroundColor,
  ]);

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", frameViewBackgroundColor),
    };
  }, [frameViewBackgroundColor]);

  const sampleButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", sampleButtonFontWeight),
      ...getStyleValue("fontFamily", sampleButtonFontFamily),
      ...getStyleValue("color", sampleButtonColor),
    };
  }, [sampleButtonFontWeight, sampleButtonFontFamily, sampleButtonColor]);

  return (
    <View style={[styles.buttonCtaSmall, buttonCTASmallStyle]}>
      <View style={[styles.sampleButtonWrapper, frameViewStyle]}>
        <Text style={[styles.sampleButton, sampleButtonStyle]}>
          {categoryFilter}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sampleButton: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.neutralWhite,
    textAlign: "left",
  },
  sampleButtonWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primaryRed,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
  },
  buttonCtaSmall: {
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    width: 48,
    height: 41,
    marginBottom: 10
  },
});

export default ButtonCTASmall;
