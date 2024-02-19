import { View, Modal, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from "react";
import {
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import { FontSize, FontFamily, Padding, Color, Border } from "../../ui/GlobalStyles";
import NutritionalInformationCard from '../../ui/components/NutritionalInformationCard';
import CustomButton from '../../ui/components/CustomButtonModal';

const ModalScreen = ({ navigation }) => {

  const handleClose = () => {
    navigation.popToTop();
    navigation.goBack(null);  
  };


  const [buttonStates, setButtonStates] = React.useState({
    Vegano: false,
    Vegetariano: false,
    'Rápida preparación': false,
    'Apto Celíacos': false,
    'Estimula el Sist. Inmune': false,
    Antiinflamatorio: false,
    'Bajo en Sodio': false,
    'Bajo en Calorías': false,
    'Promueve Flora Intestinal': false,
  });

  const handleButtonPress = (buttonText) => {
    setButtonStates((prevButtonStates) => ({
      ...prevButtonStates,
      [buttonText]: !prevButtonStates[buttonText],
    }));
  };

  const onPress = () => {

  }


  return (

    <ScrollView contentContainerStyle={styles.scrollViewContent}>

    <View style={styles.frameParent}>
      <View style={styles.frameWrapper}>
        <View>
          <Text style={styles.heading}>Tags</Text>
        </View>
      </View>
      <View style={styles.emailDisabled}>

      <View style={styles.WrapBotones}>
                {Object.keys(buttonStates).map((buttonText, index) => (
                  <CustomButton
                    key={index}
                    text={buttonText}
                    onPress={() => handleButtonPress(buttonText)}
                    isPressed={buttonStates[buttonText]}
                  />
                ))}
              </View>


      </View>

      <View style={styles.frameContainer}>
        <View>
          <Text style={[styles.heading1, styles.headingTypo]}>Tiempo</Text>
          <View style={[styles.emailDisabled1, styles.emailDisabledFlexBox]}>
          <TextInput
            style={[styles.formDefault, styles.formBorder]}
            placeholder="Min."
            multiline={false}
            placeholderTextColor="#4c4c4c"
            scrollEnabled
            keyboardType="numeric" // Establecer el teclado numérico

          />
        </View>
        </View>
        <View style={styles.headingGroup}>
          <Text style={[styles.heading1, styles.headingTypo]}>Platos</Text>
        <View style={[styles.emailDisabled1, styles.emailDisabledFlexBox]}>
          <TextInput
            style={[styles.formDefault, styles.formBorder]}
            placeholder="Cant."
            multiline={false}
            placeholderTextColor="#4c4c4c"
            scrollEnabled
            keyboardType="numeric" // Establecer el teclado numérico

          />
        </View>

        </View>
      </View>
      <Text style={[styles.heading3, styles.headingTypo]}>
        Información Nutricional
      </Text>
      
      <View style={styles.amenties}>
        <NutritionalInformationCard
          iconImageUrl={require("../../ui/assets/wifi.png")}
          nutritionInfo="Calorías"
          caloriesAndProteins="Kcal"
        />
        <NutritionalInformationCard
          iconImageUrl={require("../../ui/assets/wifi1.png")}
          nutritionInfo="Proteínas"
          labelText="default"
          caloriesAndProteins="gr."
          propMarginLeft={14}
          propWidth={57}
        />
        <NutritionalInformationCard
          iconImageUrl={require("../../ui/assets/wifi2.png")}
          nutritionInfo="Grasas"
          caloriesAndProteins="gr."
          propMarginLeft={14}
          propWidth={57}
        />
        



        
      </View>



      <View style={[styles.emailDisabledParent2, styles.emailSpaceBlock2]}>
        <View style={styles.emailDisabled22}>
          <Pressable style={[styles.formDefault32, styles.formFlexBox2]}>
            <Text style={styles.placeholder12}>Paso 3/3</Text>
          </Pressable>
        </View>

        <View style={[styles.emailDisabledGroup, styles.emailFlexBox]}>

          <Button
            style={[styles.formDefault42, styles.formBorder2]}
            mode="contained"
            labelStyle={styles.formDefault6Btn2}
            contentStyle={styles.formDefault6Btn12}
          >
            Anterior
          </Button>
          <Button
            style={[styles.formDefault42, styles.formBorder2]}
            mode="contained"
            labelStyle={styles.formDefault6Btn2}
            contentStyle={styles.formDefault6Btn12}
          >
            Siguiente
          </Button>
        </View>
        </View>






      </View>


      <Button title="Ir atrás" onPress={() => navigation.goBack()} />
      <Button title="Cerrar" onPress={handleClose} />

      </ScrollView>

  );
};
const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: Padding.p_mini,
  },
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
    widht: "100%"
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





  formDefault2: {
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_xs,
    minHeight: 144,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    borderColor: Color.colorDarkgray,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xs,
    flex: 1,
  },
  emailDisabled12: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  placeholder12: {
    lineHeight: 24,
    color: "#8f8f8f",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
  },
  formDefault32: {
    left: 0,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 10,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
  },
  emailDisabled22: {
    width: 86,
    height: 44,
  },
  formDefault42: {
    borderColor: Color.button1Text,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    margin: "1%",
  },
  emailDisabledParent2: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
    paddingTop: "15%",
    width: "83%",
  },

  frameParent: {
    width: "100%",
    height: "100%",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    flex: 1,
  },  
  WrapBotones: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    flexWrap: "wrap", // Agrega la propiedad flexWrap para permitir el envoltorio de elementos
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

  emailDisabledFlexBox: {
    flexWrap: "wrap",
    flexDirection: "row",
  },


});

export default ModalScreen;