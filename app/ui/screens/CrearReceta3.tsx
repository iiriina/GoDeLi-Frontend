import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontSize, FontFamily, Padding, Border, Color } from "../GlobalStyles";
import NutritionalInformationCard from "../components/NutritionalInformationCard";

const Frame = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.frameWrapper}>
        <View>
          <Text style={styles.heading}>Tags</Text>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
        <Pressable style={styles.sampleButtonWrapper}>
          <Text style={[styles.sampleButton, styles.sampleTypo]}>Vegano</Text>
        </Pressable>
        <Pressable
          style={[styles.sampleButtonContainer, styles.sampleSpaceBlock]}
        >
          <Text style={[styles.sampleButton, styles.sampleTypo]}>
            Vegetariano
          </Text>
        </Pressable>
        <Pressable
          style={[styles.sampleButtonContainer, styles.sampleSpaceBlock]}
        >
          <Text style={[styles.sampleButton, styles.sampleTypo]}>
            Rápida preparación
          </Text>
        </Pressable>
        <Pressable
          style={[styles.sampleButtonContainer, styles.sampleSpaceBlock]}
        >
          <Text style={[styles.sampleButton, styles.sampleTypo]}>
            Apto Celíacos
          </Text>
        </Pressable>
        <Pressable
          style={[styles.sampleButtonWrapper1, styles.sampleSpaceBlock]}
        >
          <Text style={[styles.sampleButton4, styles.sampleTypo]}>
            Estimula el Sist. Inmune
          </Text>
        </Pressable>
        <Pressable
          style={[styles.sampleButtonWrapper1, styles.sampleSpaceBlock]}
        >
          <Text style={[styles.sampleButton4, styles.sampleTypo]}>
            Antiinflamatorio
          </Text>
        </Pressable>
        <Pressable
          style={[styles.sampleButtonContainer, styles.sampleSpaceBlock]}
        >
          <Text style={[styles.sampleButton, styles.sampleTypo]}>
            Bajo en Sodio
          </Text>
        </Pressable>
        <View style={[styles.sampleButtonWrapper1, styles.sampleSpaceBlock]}>
          <Text style={[styles.sampleButton4, styles.sampleTypo]}>
            Bajo en Calorías
          </Text>
        </View>
        <Pressable
          style={[styles.sampleButtonContainer, styles.sampleSpaceBlock]}
        >
          <Text style={[styles.sampleButton, styles.sampleTypo]}>
            Promueve Flora Intestinal
          </Text>
        </Pressable>
      </View>
      <View style={styles.frameContainer}>
        <View>
          <Text style={[styles.heading1, styles.headingTypo]}>Tiempo</Text>
          <View style={styles.emailDisabled}>
            <TextInput
              style={styles.formDefault}
              placeholder="Minutos"
              placeholderTextColor="#4c4c4c"
            />
          </View>
        </View>
        <View style={styles.headingGroup}>
          <Text style={[styles.heading1, styles.headingTypo]}>Platos</Text>
          <View style={styles.emailDisabled1}>
            <TextInput
              style={styles.formDefault}
              placeholder="Cantidad"
              placeholderTextColor="#4c4c4c"
            />
          </View>
        </View>
      </View>
      <Text style={[styles.heading3, styles.headingTypo]}>
        Información Nutricional
      </Text>
      
      <View style={styles.amenties}>
        <NutritionalInformationCard
          iconImageUrl={require("../assets/wifi.png")}
          nutritionInfo="Calorías"
          caloriesAndProteins="Kcal"
        />
        <NutritionalInformationCard
          iconImageUrl={require("../assets/wifi1.png")}
          nutritionInfo="Proteínas"
          labelText="default"
          caloriesAndProteins="gr."
          propMarginLeft={14}
          propWidth={57}
        />
        <NutritionalInformationCard
          iconImageUrl={require("../assets/wifi2.png")}
          nutritionInfo="Grasas"
          caloriesAndProteins="gr."
          propMarginLeft={14}
          propWidth={57}
        />
      </View>







      <View style={[styles.emailDisabledParent, styles.emailFlexBox]}>
        <View style={[styles.emailDisabled5, styles.emailLayout]}>
          <Pressable style={[styles.formDefault5, styles.formSpaceBlock]}>
            <Text style={[styles.placeholder, styles.placeholderTypo]}>
              Paso 3/3
            </Text>
          </Pressable>
        </View>
        <View style={[styles.emailDisabledGroup, styles.emailFlexBox]}>
          <View style={styles.emailLayout}>
            <Pressable style={[styles.formDefault5, styles.formSpaceBlock]}>
              <Text style={[styles.placeholder, styles.placeholderTypo]}>
                Anterior
              </Text>
            </Pressable>
          </View>
          <Pressable style={[styles.formDefault7, styles.formSpaceBlock]}>
            <Text style={[styles.placeholder2, styles.placeholderTypo]}>
              Crear
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameGroupFlexBox: {
    flexWrap: "wrap",
    marginTop: 12,
    alignSelf: "stretch",
  },
  sampleTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
  },
  sampleSpaceBlock: {
    marginLeft: 12,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
  },
  headingTypo: {
    height: 34,
    textAlign: "left",
    color: Color.gray1,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
    lineHeight: 25,
    fontSize: FontSize.headingH2_size,
  },
  frameParent1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameParentFlexBox: {
    marginLeft: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  wifiSpaceBlock: {
    backgroundColor: "transparent",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
  },
  emailFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  emailLayout: {
    height: 44,
    width: 86,
    justifyContent: "center",
  },
  formSpaceBlock: {
    paddingHorizontal: Padding.p_5xs,
    overflow: "hidden",
    borderRadius: Border.br_7xs,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  placeholderTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
  },
  heading: {
    textAlign: "left",
    color: Color.gray1,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
    lineHeight: 25,
    fontSize: FontSize.headingH2_size,
  },
  frameWrapper: {
    alignSelf: "stretch",
  },
  sampleButton: {
    color: Color.colorBlack,
  },
  sampleButtonWrapper: {
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
  },
  sampleButtonContainer: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray,
    marginLeft: 12,
    backgroundColor: Color.colorWhite,
  },
  sampleButton4: {
    color: Color.colorWhite,
  },
  sampleButtonWrapper1: {
    backgroundColor: Color.button1Text,
  },
  frameGroup: {
    marginTop: 12,
    flexDirection: "row",
  },
  heading1: {
    width: 90,
  },
  formDefault: {
    paddingHorizontal: Padding.p_lg,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    overflow: "hidden",
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
  },
  emailDisabled: {
    marginTop: 6,
  },
  emailDisabled1: {
    marginTop: 5,
  },
  headingGroup: {
    marginLeft: 15,
  },
  frameContainer: {
    marginTop: 12,
    flexDirection: "row",
  },
  heading3: {
    width: 236,
    marginTop: 12,
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
    marginTop: 6,
    textAlign: "left",
  },
  emailDisabled2: {
    marginTop: 10,
  },
  frameParent1: {
    width: 92,
  },
  wifiContainer: {
    width: 88,
  },
  frameParent3: {
    width: 92,
  },
  amenties: {
    alignItems: "flex-end",
    marginTop: 12,
    flexDirection: "row",
  },
  placeholder: {
    color: Color.colorGray,
  },
  formDefault5: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xs,
    backgroundColor: Color.colorWhite,
    alignSelf: "stretch",
  },
  emailDisabled5: {
    alignItems: "center",
    height: 44,
    width: 86,
  },
  placeholder2: {
    color: Color.colorWhite,
  },
  formDefault7: {
    borderColor: Color.button1Text,
    backgroundColor: Color.button1Text,
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_5xs,
  },
  emailDisabledGroup: {
    width: 152,
  },
  emailDisabledParent: {
    marginTop: 12,
    flexWrap: "wrap",
    alignSelf: "stretch",
  },
  frameParent: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
  },
});

export default Frame;