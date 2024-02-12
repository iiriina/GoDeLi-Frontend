import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  Image,
  TextInput,
  ScrollView
} from "react-native";
import CardWithTextInput from "../components/CardWithTextInput";
import NutritionalInformationCard from "../components/NutritionalInformationCard";
import Form from "../components/Form"
import ButtonCTANormal from "../components/ButtonCTANormal";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const Frame = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>

    <View style={styles.headingParent}>
      <Text style={styles.heading}>Imágenes</Text>
      <View style={styles.emailDisabledParent}>
        <Pressable style={styles.emailDisabled}>
          <View style={styles.formDefault}>
            <View style={styles.form} />
            <Text style={styles.placeholder}>Subir Imágenes</Text>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
          </View>
        </Pressable>
        <View style={[styles.image28Parent, styles.image28ParentFlexBox]}>
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
          <Image
            style={[styles.image29Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/image-30.png")}
          />
          <Image
            style={[styles.image29Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/image-30.png")}
          />
          <Image
            style={[styles.image29Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/image-30.png")}
          />
        </View>
      </View>
      <Text style={styles.heading1}>Título</Text>
      <View style={[styles.emailDisabled1, styles.image28ParentFlexBox]}>
        <TextInput
          style={[styles.formDefault1, styles.formBorder]}
          placeholder="Descripción de la receta"
          multiline={false}
          placeholderTextColor="#4c4c4c"
          scrollEnabled
        />
      </View>
      <Text style={[styles.heading2, styles.headingTypo]}>Descripción</Text>
      <View style={[styles.emailDisabled1, styles.image28ParentFlexBox]}>
        <TextInput
          style={[styles.formDefault2, styles.formBorder]}
          placeholder="Descripción de la receta"
          multiline={true}
          placeholderTextColor="#4c4c4c"
          scrollEnabled
        />
      </View>
      <Text style={[styles.heading2, styles.headingTypo]}>Tags</Text>
      <View style={[styles.emailDisabled1, styles.image28ParentFlexBox]}>
        <View style={styles.sampleButtonWrapper}>
          <Text style={[styles.sampleButton, styles.sampleTypo]}>Vegano</Text>
        </View>
        <View style={[styles.sampleButtonContainer, styles.sampleSpaceBlock]}>
          <Text style={[styles.sampleButton, styles.sampleTypo]}>
            Vegetariano
          </Text>
        </View>
        <View style={[styles.sampleButtonContainer, styles.sampleSpaceBlock]}>
          <Text style={[styles.sampleButton, styles.sampleTypo]}>
            Rápida preparación
          </Text>
        </View>
        <View style={[styles.sampleButtonContainer, styles.sampleSpaceBlock]}>
          <Text style={[styles.sampleButton, styles.sampleTypo]}>
            Apto Celíacos
          </Text>
        </View>
        <View style={[styles.sampleButtonWrapper1, styles.sampleSpaceBlock]}>
          <Text style={[styles.sampleButton4, styles.sampleTypo]}>
            Estimula el Sist. Inmune
          </Text>
        </View>
        <View style={[styles.sampleButtonWrapper1, styles.sampleSpaceBlock]}>
          <Text style={[styles.sampleButton4, styles.sampleTypo]}>
            Antiinflamatorio
          </Text>
        </View>
        <View style={[styles.sampleButtonContainer, styles.sampleSpaceBlock]}>
          <Text style={[styles.sampleButton, styles.sampleTypo]}>
            Bajo en Sodio
          </Text>
        </View>
        <View style={[styles.sampleButtonWrapper1, styles.sampleSpaceBlock]}>
          <Text style={[styles.sampleButton4, styles.sampleTypo]}>
            Bajo en Calorías
          </Text>
        </View>
        <View style={[styles.sampleButtonContainer, styles.sampleSpaceBlock]}>
          <Text style={[styles.sampleButton, styles.sampleTypo]}>
            Promueve Flora Intestinal
          </Text>
        </View>
      </View>
      <View style={styles.frameGroup}>
        <CardWithTextInput dishName="Tiempo" cookingTime="Minutos" />
        <CardWithTextInput
          dishName="Platos"
          cookingTime="Cantidad"
          propMarginLeft={22}
          propWidth={50}
          propMarginTop={5}
        />
      </View>
      <Text style={[styles.heading4, styles.headingTypo]}>
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
      <Text style={[styles.heading4, styles.headingTypo]}>Ingredientes</Text>
      <View style={styles.emailDisabledParent}>
        <View style={styles.emailDisabled3}>
          <View style={[styles.formDefault3, styles.formPosition]}>
            <TextInput
              style={[styles.formDefaultChild, styles.formBorder]}
              placeholder="Nuevo Ingrediente..."
              placeholderTextColor="#737373"
            />
          </View>
        </View>
        <Form ingredientLabel="1/2 kg. de Brocoli" />
        <Form ingredientLabel="1 cda. de Sal" />
      </View>
      <Text style={[styles.heading6, styles.headingTypo]}>Pasos</Text>
      <View style={[styles.emailDisabled1, styles.image28ParentFlexBox]}>
        <TextInput
          style={[styles.formDefault2, styles.formBorder]}
          placeholder={`1- Paso 1...
2- Paso 2...
3- Paso 3.asdasdasdasdasdasdasdasdasdasdasd..`}
          multiline={true}
          placeholderTextColor="#4c4c4c"
        />
      </View>
      <Text style={[styles.heading6, styles.headingTypo]}>Video</Text>
      <View style={styles.emailDisabled5}>
        <View style={[styles.formDefault3, styles.formPosition]}>
          <TextInput
            style={[styles.formDefaultChild, styles.formBorder]}
            placeholder="Nuevo Ingrediente..."
            placeholderTextColor="#737373"
          />
        </View>
      </View>
      <View style={styles.formParent}>
        <Pressable style={styles.formFlexBox}>
          <View style={styles.buttonCtaNormal}>
            <View style={styles.baseBackground} />
            <Text style={styles.sampleButton9}>Guardar cambios</Text>
          </View>
        </Pressable>
        <View style={styles.frameChild} />
        <Text style={[styles.heading6, styles.headingTypo]}>
          Eliminar receta
        </Text>
        <Pressable style={[styles.form2, styles.formFlexBox]}>
          <ButtonCTANormal
            buttonText="Eliminar"
            buttonCTANormalBorderRadius={40}
            baseBackgroundHeight="101.55%"
            baseBackgroundWidth="100.29%"
            baseBackgroundTop="-0.77%"
            baseBackgroundRight="-0.14%"
            baseBackgroundBottom="-0.77%"
            baseBackgroundLeft="-0.14%"
            baseBackgroundBackgroundColor="#fff"
            baseBackgroundBorderStyle="solid"
            baseBackgroundBorderColor="#e84443"
            baseBackgroundBorderWidth={1}
            sampleButtonTop="28.64%"
            sampleButtonLeft="40.55%"
            sampleButtonFontWeight="600"
            sampleButtonFontFamily="Poppins-SemiBold"
            sampleButtonColor="#e84443"
          />
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
  image28ParentFlexBox: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 110,
    width: 110,
    borderRadius: Border.br_3xs,
  },
  formBorder: {
    fontFamily: FontFamily.bodyNormalRegular,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    flexDirection: "row",
    overflow: "hidden",
    fontSize: FontSize.bodyNormalRegular_size,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.neutralWhite,
  },
  headingTypo: {
    height: 34,
    color: Color.gray1,
    textAlign: "left",
    marginTop: 17,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
    lineHeight: 25,
    fontSize: FontSize.headingH2_size,
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
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
  },
  formPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    width: 346,
  },
  formFlexBox: {
    height: 65,
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  heading: {
    color: Color.neutralGray1,
    textAlign: "center",
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
    lineHeight: 25,
    fontSize: FontSize.headingH2_size,
  },
  form: {
    backgroundColor: Color.colorCrimson,
    borderRadius: Border.br_7xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  placeholder: {
    top: 10,
    left: 38,
    fontWeight: "500",
    fontFamily: FontFamily.buttonNormalMedium,
    textAlign: "left",
    color: Color.neutralWhite,
    lineHeight: 24,
    fontSize: FontSize.bodyNormalRegular_size,
    position: "absolute",
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
    overflow: "hidden",
    position: "absolute",
  },
  formDefault: {
    backgroundColor: Color.neutralWhite,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
    height: 44,
    width: 174,
  },
  emailDisabled: {
    height: 44,
    width: 174,
  },
  image29Icon: {
    marginLeft: 8,
  },
  image28Parent: {
    marginTop: 18,
  },
  emailDisabledParent: {
    marginTop: 17,
    alignSelf: "stretch",
  },
  heading1: {
    height: 27,
    color: Color.gray1,
    textAlign: "left",
    marginTop: 17,
    alignSelf: "stretch",
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
    lineHeight: 25,
    fontSize: FontSize.headingH2_size,
  },
  formDefault1: {
    width: "346%",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_smi,
    fontFamily: FontFamily.bodyNormalRegular,
    flex: 1,
  },
  emailDisabled1: {
    marginTop: 17,
  },
  heading2: {
    alignSelf: "stretch",
  },
  formDefault2: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_smi,
    fontFamily: FontFamily.bodyNormalRegular,
    flex: 1,
  },
  sampleButton: {
    color: Color.colorBlack,
  },
  sampleButtonWrapper: {
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    flexDirection: "row",
    backgroundColor: Color.neutralWhite,
    paddingHorizontal: Padding.p_mini,
  },
  sampleButtonContainer: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    marginLeft: 12,
    borderStyle: "solid",
    backgroundColor: Color.neutralWhite,
  },
  sampleButton4: {
    color: Color.neutralWhite,
  },
  sampleButtonWrapper1: {
    backgroundColor: Color.colorCrimson,
  },
  frameGroup: {
    alignItems: "flex-end",
    flexDirection: "row",
    marginTop: 17,
  },
  heading4: {
    width: 236,
  },
  amenties: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 17,
  },
  formDefaultChild: {
    padding: Padding.p_base,
    width: 346,
    left: 0,
    top: 0,
    position: "absolute",
  },
  formDefault3: {
    width: 346,
    height: 56,
  },
  emailDisabled3: {
    height: 56,
    alignSelf: "stretch",
  },
  heading6: {
    width: 338,
  },
  emailDisabled5: {
    width: 346,
    height: 56,
    marginTop: 17,
  },
  baseBackground: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorCrimson,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  sampleButton9: {
    width: "42.89%",
    top: "28.64%",
    left: "28.93%",
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.neutralWhite,
    lineHeight: 24,
    fontSize: FontSize.bodyNormalRegular_size,
    position: "absolute",
    textAlign: "center",
  },
  buttonCtaNormal: {
    borderRadius: Border.br_21xl,
    shadowColor: "rgba(236, 95, 95, 0.25)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    flex: 1,
    alignSelf: "stretch",
  },
  frameChild: {
    borderColor: Color.colorBlack,
    borderTopWidth: 0.3,
    height: 0,
    borderStyle: "solid",
    marginTop: 17,
    alignSelf: "stretch",
  },
  form2: {
    marginTop: 17,
  },
  formParent: {
    alignItems: "center",
    marginTop: 17,
    alignSelf: "stretch",
  },
  headingParent: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
  },
});

export default Frame;