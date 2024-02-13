import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const Frame = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>

    <View style={styles.frameParent}>
      <View style={styles.frameGroup}>
        <View>
          <Text style={styles.headingTypo}>Título</Text>
        </View>
        <View style={[styles.emailDisabled, styles.emailDisabledFlexBox]}>
          <TextInput
            style={[styles.formDefault, styles.formBorder]}
            placeholder="Descripción de la receta"
            multiline={false}
            placeholderTextColor="#4c4c4c"
            scrollEnabled
          />
        </View>
      </View>
      <View style={styles.parentSpaceBlock}>
        <View style={styles.headingLayout}>
          <Text style={[styles.heading1, styles.headingLayout]}>Fotos</Text>
        </View>
        <Pressable style={styles.emailDisabled1}>
          <View style={styles.formDefault1}>
            <View style={styles.formPosition} />
            <Text style={styles.placeholder}>Subir Imágenes</Text>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
          </View>
        </Pressable>
        <View style={[styles.image28Parent, styles.parentSpaceBlock]}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/image-28.png")}
          />
          <Image
            style={[styles.image29Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/image-29.png")}
          />
          <Image
            style={[styles.image29Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/image-30.png")}
          />
        </View>
      </View>
      <Text style={[styles.heading2, styles.parentSpaceBlock]}>Video</Text>
      <View style={[styles.image28Parent, styles.parentSpaceBlock]}>
        <TextInput
          style={[styles.formDefault, styles.formBorder]}
          placeholder="Descripción de la receta"
          multiline={false}
          placeholderTextColor="#4c4c4c"
          scrollEnabled
        />
      </View>
      <Text style={[styles.heading2, styles.parentSpaceBlock]}>
        Descripción
      </Text>
      <View style={[styles.image28Parent, styles.parentSpaceBlock]}>
        <TextInput
          style={[styles.formDefault3, styles.formBorder]}
          placeholder="Descripción de la receta"
          multiline={true}
          placeholderTextColor="#4c4c4c"
          scrollEnabled
        />
      </View>
      <View style={[styles.emailDisabledParent, styles.parentSpaceBlock]}>
        <View style={styles.formDefault4Layout}>
          <Pressable style={[styles.formDefault4, styles.formDefault4Layout]}>
            <View style={styles.form1} />
            <Text style={[styles.placeholder1, styles.placeholderTypo]}>
              Paso 1/3
            </Text>
          </Pressable>
        </View>
        <Pressable style={styles.formDefault5}>
          <View style={[styles.form2, styles.formPosition]} />
          <Text style={[styles.placeholder2, styles.placeholderTypo]}>
            Siguiente
          </Text>
        </Pressable>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: Padding.p_mini,
  },

  emailDisabledFlexBox: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
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
  },
  headingLayout: {
    height: 25,
    alignSelf: "stretch",
  },
  parentSpaceBlock: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 110,
    width: 110,
    borderRadius: Border.br_3xs,
  },
  formDefault4Layout: {
    width: 81,
    height: 44,
  },
  placeholderTypo: {
    left: 8,
    lineHeight: 24,
    top: 10,
    position: "absolute",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
  },
  formPosition: {
    backgroundColor: Color.button1Text,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: Border.br_7xs,
  },
  headingTypo: {
    textAlign: "left",
    color: Color.gray1,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
    lineHeight: 25,
    fontSize: FontSize.headingH2_size,
  },
  formDefault: {
    width: "346%",
    alignItems: "center",
    paddingVertical: Padding.p_base,
  },
  emailDisabled: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  heading1: {
    textAlign: "left",
    color: Color.gray1,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
    lineHeight: 25,
    fontSize: FontSize.headingH2_size,
  },
  placeholder: {
    left: 38,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorWhite,
    lineHeight: 24,
    top: 10,
    position: "absolute",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  vectorIcon: {
    height: "38.64%",
    width: "9.77%",
    top: "31.82%",
    right: "82.76%",
    bottom: "29.55%",
    left: "7.47%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  formDefault1: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
    height: 44,
    width: 174,
    backgroundColor: Color.colorWhite,
  },
  emailDisabled1: {
    height: 44,
    width: 174,
    marginTop: 12,
  },
  image29Icon: {
    marginLeft: 8,
  },
  image28Parent: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  heading2: {
    textAlign: "left",
    color: Color.gray1,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
    lineHeight: 25,
    fontSize: FontSize.headingH2_size,
  },
  formDefault3: {
    paddingVertical: 12,
    minHeight: 144,
  },
  form1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xs,
  },
  placeholder1: {
    color: "#8f8f8f",
  },
  formDefault4: {
    left: 0,
    top: 0,
    width: 81,
    position: "absolute",
  },
  form2: {
    borderColor: Color.button1Text,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.button1Text,
  },
  placeholder2: {
    color: Color.colorWhite,
  },
  formDefault5: {
    width: 93,
    height: 44,
  },
  emailDisabledParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 12,
  },
  frameParent: {
    paddingHorizontal: 15,
    paddingVertical: 0,
  },
});

export default Frame;
