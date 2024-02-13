import React, { useMemo } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type CardWithTextInputType = {
  dishName?: string;
  cookingTime?: string;

  /** Style props */
  propMarginLeft?: number | string;
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
  propMarginTop,
}: CardWithTextInputType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  const emailDisabledStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View>
      <Text style={styles.heading2}>{dishName}</Text>
      <View style={[styles.emailDisabled2, emailDisabledStyle]}>
        <TextInput
          style={styles.formDefault2}
          placeholder={cookingTime}
          placeholderTextColor="#4c4c4c"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading2: {
    fontSize: FontSize.headingH2_size,
    lineHeight: 25,
    fontWeight: "600",
    fontFamily: FontFamily.headingH2,
    color: Color.gray1,
    textAlign: "left",
    width: 90,
    height: 34,
  },
  formDefault2: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_3xs,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
  },
  emailDisabled2: {
    marginTop: 6,
  },
});

export default CardWithTextInput;