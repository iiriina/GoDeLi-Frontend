import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type FormDefaultType = {
  itemLabel?: string;

  /** Style props */
  formDefaultPosition?: string;
  formDefaultWidth?: number | string;
  formDefaultTop?: number | string;
  formDefaultLeft?: number | string;
  formBackgroundColor?: string;
  formBorderStyle?: string;
  formBorderColor?: string;
  formBorderWidth?: number;
  placeholderColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormDefault = ({
  itemLabel,
  formDefaultPosition,
  formDefaultWidth,
  formDefaultTop,
  formDefaultLeft,
  formBackgroundColor,
  formBorderStyle,
  formBorderColor,
  formBorderWidth,
  placeholderColor,
}: FormDefaultType) => {
  const formDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", formDefaultPosition),
      ...getStyleValue("width", formDefaultWidth),
      ...getStyleValue("top", formDefaultTop),
      ...getStyleValue("left", formDefaultLeft),
    };
  }, [formDefaultPosition, formDefaultWidth, formDefaultTop, formDefaultLeft]);

  const formStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", formBackgroundColor),
      ...getStyleValue("borderStyle", formBorderStyle),
      ...getStyleValue("borderColor", formBorderColor),
      ...getStyleValue("borderWidth", formBorderWidth),
    };
  }, [formBackgroundColor, formBorderStyle, formBorderColor, formBorderWidth]);

  const placeholderStyle = useMemo(() => {
    return {
      ...getStyleValue("color", placeholderColor),
    };
  }, [placeholderColor]);

  return (
    <View style={[styles.formDefault, formDefaultStyle]}>
      <View style={[styles.form, formStyle]} />
      <Text style={[styles.placeholder, placeholderStyle]}>{itemLabel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.neutralGray6,
    position: "absolute",
  },
  placeholder: {
    top: 16,
    left: 16,
    fontSize: FontSize.bodyNormalRegular_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyNormalRegular,
    color: Color.neutralGray3,
    textAlign: "left",
    position: "absolute",
  },
  formDefault: {
    width: 343,
    height: 56,
  },
});

export default FormDefault;
