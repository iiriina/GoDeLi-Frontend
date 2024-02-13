import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import ButtonCTASmall from "../components/ButtonCTASmall";
import { FontSize, Border, FontFamily, Color } from "../GlobalStyles";

export type FrameComponentType = {
  onClose?: () => void;
};

const FrameComponent = ({ onClose }: FrameComponentType) => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.frameWrapper}>
        <View style={[styles.downBarParent, styles.downBarParentFlexBox]}>
          <View style={styles.downBar} />
          <View style={styles.header}>
            <View style={styles.text}>
              <View style={styles.textInner}>
                <View style={styles.textInner}>
                  <Text style={[styles.heading, styles.headingFlexBox]}>
                    Tipo de Comida
                  </Text>
                  <Text
                    style={[styles.subtitle, styles.subtitleLayout]}
                  >{`Elegí tus preferencias          `}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.formFlexBox}>
            <ButtonCTASmall
              categoryFilter="Vegano"
              buttonCTASmallWidth={88}
              buttonCTASmallHeight={44}
              buttonCTASmallBorderRadius={4}
              buttonCTASmallBorderStyle="solid"
              buttonCTASmallBorderColor="#b9b9b9"
              buttonCTASmallBorderWidth={1}
              buttonCTASmallMarginLeft="unset"
              buttonCTASmallBackgroundColor="unset"
              frameViewBackgroundColor="#fff"
              sampleButtonFontWeight="600"
              sampleButtonFontFamily="Poppins-SemiBold"
              sampleButtonColor="#000"
            />
            <ButtonCTASmall
              categoryFilter="Vegetariano"
              buttonCTASmallWidth={121}
              buttonCTASmallHeight={44}
              buttonCTASmallBorderRadius={4}
              buttonCTASmallBorderStyle="solid"
              buttonCTASmallBorderColor="#b9b9b9"
              buttonCTASmallBorderWidth={1}
              buttonCTASmallMarginLeft={12}
              buttonCTASmallBackgroundColor="unset"
              frameViewBackgroundColor="#fff"
              sampleButtonFontWeight="600"
              sampleButtonFontFamily="Poppins-SemiBold"
              sampleButtonColor="#000"
            />
            <ButtonCTASmall
              categoryFilter="Rápida preparación"
              buttonCTASmallWidth={176}
              buttonCTASmallHeight={44}
              buttonCTASmallBorderRadius={4}
              buttonCTASmallBorderStyle="solid"
              buttonCTASmallBorderColor="#b9b9b9"
              buttonCTASmallBorderWidth={1}
              buttonCTASmallMarginLeft={12}
              buttonCTASmallBackgroundColor="unset"
              frameViewBackgroundColor="#fff"
              sampleButtonFontWeight="600"
              sampleButtonFontFamily="Poppins-SemiBold"
              sampleButtonColor="#000"
            />
            <ButtonCTASmall
              categoryFilter="Apto Celíacos"
              buttonCTASmallWidth={136}
              buttonCTASmallHeight={44}
              buttonCTASmallBorderRadius={4}
              buttonCTASmallBorderStyle="solid"
              buttonCTASmallBorderColor="#b9b9b9"
              buttonCTASmallBorderWidth={1}
              buttonCTASmallMarginLeft={12}
              buttonCTASmallBackgroundColor="unset"
              frameViewBackgroundColor="#fff"
              sampleButtonFontWeight="600"
              sampleButtonFontFamily="Poppins-SemiBold"
              sampleButtonColor="#000"
            />
            <ButtonCTASmall
              categoryFilter="Estimula el Sist. Inmune"
              buttonCTASmallWidth={198}
              buttonCTASmallHeight={41}
              buttonCTASmallBorderRadius={4}
              buttonCTASmallBorderStyle="unset"
              buttonCTASmallBorderColor="unset"
              buttonCTASmallMarginLeft={12}
              buttonCTASmallBackgroundColor="#fff"
              frameViewBackgroundColor="#e84443"
              sampleButtonFontWeight="600"
              sampleButtonFontFamily="Poppins-SemiBold"
              sampleButtonColor="#fff"
            />
            <ButtonCTASmall
              categoryFilter="Antiinflamatorio"
              buttonCTASmallWidth={144}
              buttonCTASmallHeight={41}
              buttonCTASmallBorderRadius={4}
              buttonCTASmallBorderStyle="unset"
              buttonCTASmallBorderColor="unset"
              buttonCTASmallMarginLeft={12}
              buttonCTASmallBackgroundColor="#fff"
              frameViewBackgroundColor="#e84443"
              sampleButtonFontWeight="600"
              sampleButtonFontFamily="Poppins-SemiBold"
              sampleButtonColor="#fff"
            />
            <ButtonCTASmall
              categoryFilter="Bajo en Sodio"
              buttonCTASmallWidth={128}
              buttonCTASmallHeight={44}
              buttonCTASmallBorderRadius={4}
              buttonCTASmallBorderStyle="solid"
              buttonCTASmallBorderColor="#b9b9b9"
              buttonCTASmallBorderWidth={1}
              buttonCTASmallMarginLeft={12}
              buttonCTASmallBackgroundColor="unset"
              frameViewBackgroundColor="#fff"
              sampleButtonFontWeight="600"
              sampleButtonFontFamily="Poppins-SemiBold"
              sampleButtonColor="#000"
            />
            <ButtonCTASmall
              categoryFilter="Bajo en Calorías"
              buttonCTASmallWidth={146}
              buttonCTASmallHeight={42}
              buttonCTASmallBorderRadius={4}
              buttonCTASmallBorderStyle="unset"
              buttonCTASmallBorderColor="unset"
              buttonCTASmallMarginLeft={12}
              buttonCTASmallBackgroundColor="unset"
              frameViewBackgroundColor="#e84443"
              sampleButtonFontWeight="600"
              sampleButtonFontFamily="Poppins-SemiBold"
              sampleButtonColor="#fff"
            />
            <ButtonCTASmall
              categoryFilter="Promueve Flora Intestinal"
              buttonCTASmallWidth={214}
              buttonCTASmallHeight={44}
              buttonCTASmallBorderRadius={4}
              buttonCTASmallBorderStyle="solid"
              buttonCTASmallBorderColor="#b9b9b9"
              buttonCTASmallBorderWidth={1}
              buttonCTASmallMarginLeft={12}
              buttonCTASmallBackgroundColor="unset"
              frameViewBackgroundColor="#fff"
              sampleButtonFontWeight="600"
              sampleButtonFontFamily="Poppins-SemiBold"
              sampleButtonColor="#000"
            />
          </View>
          <View style={[styles.form, styles.formFlexBox]}>
            <View style={[styles.buttonCtaNormal, styles.downBarParentFlexBox]}>
              <View style={styles.baseBackground} />
              <Text style={[styles.sampleButton, styles.subtitleLayout]}>
                Buscar
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  downBarParentFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  headingFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  subtitleLayout: {
    lineHeight: 24,
    fontSize: FontSize.bodyNormalRegular_size,
  },
  formFlexBox: {
    flexWrap: "wrap",
    marginTop: 25,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  downBar: {
    backgroundColor: "#c4c4c4",
    width: 88,
    height: 11,
    borderRadius: Border.br_21xl,
  },
  heading: {
    fontSize: FontSize.headingH2_size,
    lineHeight: 25,
    fontWeight: "600",
    fontFamily: FontFamily.headingH2,
    color: Color.gray1,
    height: 34,
  },
  subtitle: {
    fontFamily: FontFamily.bodyNormalRegular,
    color: Color.neutralGray2,
    height: 32,
    marginTop: 6,
    textAlign: "left",
    alignSelf: "stretch",
  },
  textInner: {
    alignSelf: "stretch",
  },
  text: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  header: {
    marginTop: 25,
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  baseBackground: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.button1Text,
    position: "absolute",
  },
  sampleButton: {
    top: "28.64%",
    left: "41.66%",
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
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
    borderRadius: Border.br_21xl,
  },
  form: {
    height: 65,
    justifyContent: "center",
  },
  downBarParent: {
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 0,
  },
  frameWrapper: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent: {
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    backgroundColor: Color.neutralWhite,
    width: 412,
    height: 582,
    paddingHorizontal: 29,
    paddingVertical: 22,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default FrameComponent;