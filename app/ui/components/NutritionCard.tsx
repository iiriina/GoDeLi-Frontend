import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageSourcePropType,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type NutritionCardType = {
  wifi?: ImageSourcePropType;
  caloras?: string;
  formDefaultKeyboardType?: string;
  formDefaultPlaceholder?: string;

  /** Style props */
  propWidth?: number | string;
  propMarginLeft?: number | string;
  propWidth1?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NutritionCard = ({
  wifi,
  caloras,
  formDefaultKeyboardType,
  formDefaultPlaceholder,
  propWidth,
  propMarginLeft,
  propWidth1,
}: NutritionCardType) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propWidth, propMarginLeft]);

  const frameLinearGradientStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  return (
    <View style={[styles.frameParent, styles.parentFlexBox, frameView1Style]}>
      <LinearGradient
        style={[
          styles.wifiParent,
          styles.parentFlexBox,
          frameLinearGradientStyle,
        ]}
        locations={[0, 1]}
        colors={["rgba(23, 111, 242, 0.05)", "rgba(25, 110, 238, 0.05)"]}
        useAngle={true}
        angle={-89.23}
      >
        <Image style={styles.wifiIcon} resizeMode="cover" source={wifi} />
        <Text style={styles.caloras}>{caloras}</Text>
      </LinearGradient>
      <View style={[styles.emailDisabled, styles.parentFlexBox]}>
        <TextInput
          style={[styles.formDefault, styles.parentFlexBox]}
          placeholder={formDefaultPlaceholder}
          placeholderTextColor="#4c4c4c"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  wifiIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  caloras: {
    fontSize: FontSize.size_3xs,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: Color.lines,
    textAlign: "left",
    marginTop: 6,
  },
  wifiParent: {
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    backgroundColor: "transparent",
  },
  formDefault: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_3xs,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    overflow: "hidden",
  },
  emailDisabled: {
    marginTop: 10,
  },
  frameParent: {
    width: 92,
  },
});

export default NutritionCard;
