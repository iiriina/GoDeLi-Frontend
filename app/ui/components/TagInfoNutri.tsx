import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type TagInfoNutriType = {
  caloras?: string;
  placeholder?: string;

  /** Style props */
  frameViewHeight?: number | string;
  frameViewWidth?: number | string;
  frameViewMarginLeft?: number | string;
  frameViewHeight1?: number | string;
  wifiIconWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TagInfoNutri = ({
  frameViewHeight,
  frameViewWidth,
  frameViewMarginLeft,
  frameViewHeight1,
  wifiIconWidth,
  caloras,
  placeholder,
}: TagInfoNutriType) => {
  const frameView3Style = useMemo(() => {
    return {
      ...getStyleValue("height", frameViewHeight),
      ...getStyleValue("width", frameViewWidth),
      ...getStyleValue("marginLeft", frameViewMarginLeft),
    };
  }, [frameViewHeight, frameViewWidth, frameViewMarginLeft]);

  const frameView4Style = useMemo(() => {
    return {
      ...getStyleValue("height", frameViewHeight1),
    };
  }, [frameViewHeight1]);

  const wifiIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", wifiIconWidth),
    };
  }, [wifiIconWidth]);

  return (
    <View
      style={[styles.amentiesInner, styles.wifiParentFlexBox, frameView3Style]}
    >
      <View
        style={[styles.wifiParent, styles.wifiParentFlexBox, frameView4Style]}
      >
        <Image
          style={[styles.wifiIcon, wifiIconStyle]}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Text style={[styles.caloras, styles.calorasSpaceBlock]}>
          {caloras}
        </Text>
        <Text style={[styles.placeholder, styles.calorasSpaceBlock]}>
          {placeholder}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wifiParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_base,
  },
  calorasSpaceBlock: {
    marginTop: 6,
    textAlign: "left",
  },
  wifiIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  caloras: {
    fontSize: FontSize.bodyNormalSemibold_size,
    fontWeight: "500",
    fontFamily: FontFamily.bodyEkstraSmallMedium,
    color: Color.icons,
  },
  placeholder: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_100,
  },
  wifiParent: {
    backgroundColor: Color.colorGray_200,
    height: 108,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
  },
  amentiesInner: {
    backgroundColor: Color.colorAliceblue,
    height: 116,
  },
});

export default TagInfoNutri;
