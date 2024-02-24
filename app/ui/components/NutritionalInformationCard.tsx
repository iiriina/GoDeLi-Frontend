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

export type NutritionalInformationCardType = {
  iconImageUrl?: ImageSourcePropType;
  nutritionInfo?: string;
  labelText?: string;
  caloriesAndProteins?: string;
  isFieldEmpty?: boolean; // Nuevo
  submitted?: boolean; // Nuevo: Si el formulario se ha enviado

  /** Style props */
  propMarginLeft?: number | string;
  propWidth?: number | string;
  onTextChange?: (text: string) => void; // Nuevo

};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const NutritionalInformationCard = ({
  iconImageUrl,
  nutritionInfo,
  labelText,
  caloriesAndProteins,
  propMarginLeft,
  propWidth,
  onTextChange, // Nuevo
  isFieldEmpty, // Nuevo
  submitted
}: NutritionalInformationCardType) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  const emailDisabled1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  

  return (
    <View style={[styles.parentFlexBox, frameView1Style]}>
      
      <LinearGradient
        style={[styles.wifiParent, styles.parentFlexBox]}
        locations={[0, 1]}
        colors={["rgba(23, 111, 242, 0.05)", "rgba(25, 110, 238, 0.05)"]}
        useAngle={true}
        angle={-89.23}
      >
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={iconImageUrl}
        />
        <Text style={styles.caloras}>{nutritionInfo}</Text>
      </LinearGradient>
      <View style={[styles.emailDisabled, emailDisabled1Style]}>
        <TextInput
          style={[
            styles.formDefault,
            styles.formBorder,
            isFieldEmpty && submitted && styles.redBorder, // Nuevo
          ]}
          placeholder={caloriesAndProteins}
          placeholderTextColor="#4c4c4c"
          keyboardType="numeric"
          onChangeText={onTextChange} // Nuevo
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: "1.9%"
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
    paddingVertical: Padding.p_xs,
    paddingHorizontal: "2%",
    backgroundColor: "transparent",
    width: "100%",


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
    flexDirection: "row",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_3xs,
    fontFamily: FontFamily.bodyNormalRegular,
    fontSize: FontSize.bodyNormalRegular_size,
    overflow: "hidden",
    paddingTop: 18,
    paddingBottom: 16,
    
    width: "100%",
    justifyContent: "center",
    
  },
  emailDisabled: {
    height: 44,
    marginTop: 10,
    width: 90,

  },
  redBorder: { // Nuevo
    borderColor: 'red', // Nuevo
  }, // Nuevo
  formBorder: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    paddingHorizontal: Padding.p_smi,
    overflow: "hidden",
    borderColor: Color.colorDarkgray,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xs,
    flex: 1,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default NutritionalInformationCard;
