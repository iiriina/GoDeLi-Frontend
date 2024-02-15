import * as React from "react";
import { Image, StyleSheet, View, Text,ScrollView,TextInput,Pressable } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";
import { Badge } from 'react-native-paper';
import  NotificationComponent  from '../components/NotificationComponent';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import CardReceta from '../components/CardReceta'


const Recetas = () => {
  return (
    <ScrollView style={{backgroundColor: Color.white}}>

    
  <View style={[styles.formDefaultWrapper, styles.formFlexBox]}>
            <View style={[styles.formDefault, styles.formBorder]}>
              <View style={styles.placeholderParent}>
                <TextInput
                  style={styles.placeholderTypo1}
                  placeholder="Buscar comida o ingrediente..."
                  placeholderTextColor="#737373"
                />
                <Pressable style={styles.emailDisabled}>
                  <View style={styles.formDefaultContainer}>
                    <View style={[styles.formDefault1, styles.formPosition]}>
                      <Image
                        style={styles.plusMathIcon}
                        resizeMode="cover"
                        source={require("../assets/icons/filtro3.png")}
                      />
                    </View>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>





    <View style={[styles.frameParent, styles.parentShadowBox]}>
        <CardReceta/>
    </View>

    <View style={[styles.frameParent, styles.parentShadowBox]}>
        <CardReceta/>
    </View>

    <View style={[styles.frameParent, styles.parentShadowBox]}>
        <CardReceta/>
    </View>

    </ScrollView>



          
                    
                    
  );
};

const styles = StyleSheet.create({
  parentShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
  },
  
  frameParent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "#cfcfcf",
    borderWidth: 1,
    width: 383,
    alignSelf: 'center',
    overflow: "hidden",
    borderRadius: Border.br_5xl,
    marginTop: '3%',
    shadowOpacity: 3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  formFlexBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: Color.colorWhite,
  },
  formBorder: {
    overflow: "hidden",
    borderColor: Color.colorDarkgray,
    backgroundColor: Color.neutralGray6,
    borderRadius: Border.br_7xs,
    borderWidth: 0,
    borderStyle: "solid",
    flexDirection: "row",
    marginHorizontal: "5%",
    marginTop: "2%",
    height: 70,
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
    width: 30,
    height: 30,
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



});

export default Recetas;
