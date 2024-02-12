import React, { useMemo } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type CardWithTextInputType = {
  dishName?: string;
  cookingTime?: string;

  /** Style props */
  propMarginLeft?: number | string;
  propWidth?: number | string;
  propMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardWithTextInput = ({
  dishName,
  cookingTime,
  propMarginLeft,
  propWidth,
  propMarginTop,
}: CardWithTextInputType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  const emailDisabledStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propWidth, propMarginTop]);

  return (
    <View>
      <Text style={styles.heading}>{dishName}</Text>
      <View style={[styles.emailDisabled, emailDisabledStyle]}>
        <TextInput
          style={styles.formDefault}
          placeholder={cookingTime}
          placeholderTextColor="#4c4c4c"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: FontSize.headingH2_size,
    lineHeight: 25,
    fontWeight: "600",
    fontFamily: FontFamily.headingH2,
    color: Color.gray1,
    textAlign: "left",
    width: 90,
    height: 34,
  },
  formDefault: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.neutralWhite,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_3xs,
    fontFamily: FontFamily.bodyNormalRegular,
    fontSize: FontSize.bodyNormalRegular_size,
  },
  emailDisabled: {
    width: 99,
    height: 44,
    marginTop: 6,
  },
});

export default CardWithTextInput;
