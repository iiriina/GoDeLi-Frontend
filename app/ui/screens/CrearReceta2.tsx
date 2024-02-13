import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.frameGroup}>
        <View>
          <Text style={styles.headingTypo}>Ingredientes</Text>
        </View>
        <View style={styles.frameContainer}>
          <View style={[styles.formDefaultWrapper, styles.formFlexBox]}>
            <View style={[styles.formDefault, styles.formBorder]}>
              <View style={styles.placeholderParent}>
                <TextInput
                  style={styles.placeholderTypo1}
                  placeholder="Nuevo Ingrediente..."
                  placeholderTextColor="#737373"
                />
                <Pressable style={styles.emailDisabled}>
                  <View style={styles.formDefaultContainer}>
                    <View style={[styles.formDefault1, styles.formPosition]}>
                      <Image
                        style={styles.plusMathIcon}
                        resizeMode="cover"
                        source={require("../assets/plus-math.png")}
                      />
                    </View>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={[styles.formDefaultFrame, styles.heading1SpaceBlock]}>
            <View style={[styles.formDefault, styles.formBorder]}>
              <View style={styles.placeholderParent}>
                <Text style={[styles.placeholder1, styles.placeholderTypo]}>
                  1 cda. de Sal
                </Text>
                <Pressable style={styles.emailDisabled}>
                  <View style={styles.formDefaultContainer}>
                    <View style={[styles.formDefault3, styles.formPosition]}>
                      <Image
                        style={styles.minusIcon}
                        resizeMode="cover"
                        source={require("../assets/minus.png")}
                      />
                    </View>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={[styles.formDefaultFrame, styles.heading1SpaceBlock]}>
            <View style={[styles.formDefault, styles.formBorder]}>
              <View style={styles.placeholderParent}>
                <Text style={[styles.placeholder1, styles.placeholderTypo]}>
                  1 cda. de Sal
                </Text>
                <Pressable style={styles.emailDisabled}>
                  <View style={styles.formDefaultContainer}>
                    <View style={[styles.formDefault3, styles.formPosition]}>
                      <Image
                        style={styles.minusIcon}
                        resizeMode="cover"
                        source={require("../assets/minus.png")}
                      />
                    </View>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.heading1, styles.heading1SpaceBlock]}>Pasos</Text>
      <View style={[styles.formDefaultFrame, styles.heading1SpaceBlock]}>
        <TextInput
          style={[styles.formDefault6, styles.placeholderTypo1]}
          placeholder="Descripción de la receta asjflasfklasfjaksfalsdjaskfajeflawnmiofwmaofamsfkasfmaoiwfmawfafiaowmgioawgijaiogjaoigwawg"
          multiline={true}
          placeholderTextColor="#4c4c4c"
          scrollEnabled
        />
      </View>
      <View style={[styles.emailDisabledParent, styles.emailFlexBox]}>
        <View style={styles.emailDisabled4}>
          <Pressable style={[styles.formDefault7, styles.formSpaceBlock]}>
            <Text style={[styles.placeholder3, styles.placeholderTypo]}>
              Paso 2/3
            </Text>
          </Pressable>
        </View>
        <View style={[styles.emailDisabledGroup, styles.emailFlexBox]}>
          <View style={styles.emailDisabled4}>
            <Pressable style={[styles.formDefault7, styles.formSpaceBlock]}>
              <Text style={[styles.placeholder3, styles.placeholderTypo]}>
                Anterior
              </Text>
            </Pressable>
          </View>
          <Pressable style={[styles.formDefault9, styles.formSpaceBlock]}>
            <Text style={[styles.placeholder5, styles.placeholderTypo]}>
              Siguiente
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formFlexBox: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  formBorder: {
    overflow: "hidden",
    borderColor: Color.colorDarkgray,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
  },
  formPosition: {
    paddingBottom: Padding.p_4xs,
    paddingRight: Padding.p_2xs,
    paddingTop: Padding.p_4xs,
    paddingLeft: Padding.p_xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    right: 0,
    top: 0,
    position: "absolute",
    height: 33,
    width: 33,
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
  },
  heading1SpaceBlock: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  placeholderTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  placeholderTypo1: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    flex: 1,
  },
  emailFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  formSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xs,
    overflow: "hidden",
    borderRadius: Border.br_7xs,
    flexDirection: "row",
  },
  headingTypo: {
    textAlign: "left",
    color: Color.gray1,
    lineHeight: 25,
    fontSize: FontSize.headingH2_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
  },
  plusMathIcon: {
    width: 20,
    height: 20,
  },
  formDefault1: {
    backgroundColor: Color.button1Text,
  },
  formDefaultContainer: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 33,
    width: 33,
  },
  emailDisabled: {
    marginLeft: 10,
    height: 33,
    width: 33,
  },
  placeholderParent: {
    alignItems: "center",
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  formDefault: {
    paddingVertical: Padding.p_2xs,
    flex: 1,
    overflow: "hidden",
    borderColor: Color.colorDarkgray,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xs,
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_mini,
  },
  formDefaultWrapper: {
    flexWrap: "wrap",
    alignSelf: "stretch",
  },
  placeholder1: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 24,
    flex: 1,
  },
  minusIcon: {
    width: 14,
    height: 14,
  },
  formDefault3: {
    backgroundColor: Color.colorLavenderblush,
    borderColor: Color.colorLightgray,
    borderWidth: 0.6,
    borderStyle: "solid",
    paddingBottom: Padding.p_4xs,
    paddingRight: Padding.p_2xs,
    paddingTop: Padding.p_4xs,
    paddingLeft: Padding.p_xs,
    borderRadius: Border.br_5xs,
  },
  formDefaultFrame: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  frameContainer: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  heading1: {
    textAlign: "left",
    color: Color.gray1,
    lineHeight: 25,
    fontSize: FontSize.headingH2_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
  },
  formDefault6: {
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_xs,
    minHeight: 144,
    overflow: "hidden",
    borderColor: Color.colorDarkgray,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
  },
  placeholder3: {
    color: Color.colorGray,
    lineHeight: 24,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
  },
  formDefault7: {
    left: 0,
    justifyContent: "center",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xs,
    top: 0,
    position: "absolute",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  emailDisabled4: {
    width: 86,
    height: 44,
  },
  placeholder5: {
    color: Color.colorWhite,
    lineHeight: 24,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
  },
  formDefault9: {
    borderColor: Color.button1Text,
    backgroundColor: Color.button1Text,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  emailDisabledGroup: {
    width: 187,
  },
  emailDisabledParent: {
    marginTop: 12,
    alignSelf: "stretch",
    flexWrap: "wrap",
  },
  frameParent: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
  },
});

export default Frame;