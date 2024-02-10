import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";
import { Badge } from 'react-native-paper';
import  NotificationComponent  from '../components/NotificationComponent';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';


const Recetas = () => {
  return (
    <View style={[styles.frameParent, styles.parentShadowBox]}>
      <View style={[styles.frameGroup, styles.frameFlexBox]}>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={[styles.foodAesthetic1Wrapper, styles.frameFlexBox]}>
            <Image
              style={[styles.foodAesthetic1, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/food-aesthetic-1.png")}
            />
          </View>
          <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
            <View style={styles.frameView}>
              <View style={styles.frameWrapper1}>
                <View style={styles.frameParent1}>
                  <View style={styles.pollitoConArrozWrapper}>
                    <Text style={styles.pollitoConArroz}>
                      Pollito Con Arroz
                    </Text>
                  </View>
                  <View style={styles.parent}>
                    <Badge style={[styles.badge, styles.badgePosition]} />
                    <Image
                      style={styles.fill1Icon}
                      resizeMode="cover"
                      source={require("../assets/fill-1.png")}
                    />
                  </View>
                </View>
              </View>
              <View
                style={[styles.frameParent2, styles.frameWrapperSpaceBlock]}
              >
                <View>
                  <View style={styles.wrapperSpaceBlock}>
                    <Text style={[styles.vegano, styles.veganoTypo]}>
                      Vegano
                    </Text>
                  </View>
                </View>
                <View style={styles.frameWrapper3}>
                  <View style={styles.wrapperSpaceBlock}>
                    <Text style={[styles.vegano, styles.veganoTypo]}>
                      Vegetariano
                    </Text>
                  </View>
                </View>
                <View style={styles.frameWrapper3}>
                  <View
                    style={[
                      styles.bajaEnCalorasWrapper,
                      styles.wrapperSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.vegano, styles.veganoTypo]}>
                      Baja en Calorías
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.vectorWrapper, styles.frameWrapperSpaceBlock]}
              >
                <Image
                  style={[styles.frameChild, styles.badgePosition]}
                  resizeMode="cover"
                  source={require("../assets/vector-4.png")}
                />
              </View>
              <View style={styles.frameWrapperSpaceBlock}>
                <View style={styles.avatarParent}>
                  <Image
                    style={styles.avatarIcon}
                    resizeMode="cover"
                    source={require("../assets/avatar.png")}
                  />
                  <Text style={[styles.abigailPerez, styles.veganoTypo]}>
                    Abigail, Perez
                  </Text>
                  
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.frameItem, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-17.png")}
          />
          <Image
            style={[styles.frameInner, styles.framePosition]}
            resizeMode="cover"
            source={require("../assets/group-18.png")}
          />
        </View>
        <View style={[styles.agricultureParent, styles.frameWrapperPosition]}>
          <Image
            style={styles.agricultureIcon}
            resizeMode="cover"
            source={require("../assets/agriculture.png")}
          />
          <Text style={styles.mins}>25 mins</Text>
          
        </View>
        
        
      </View>
      
    </View>



    
    


                    
                    
                    
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
  frameFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  frameChildLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameWrapperPosition: {
    zIndex: 1,
    flexDirection: "row",
  },
  badgePosition: {
    top: 0,
    position: "absolute",
  },
  frameWrapperSpaceBlock: {
    marginTop: 6,
    flexDirection: "row",
  },
  veganoTypo: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_7xs,
    backgroundColor: Color.button1Text,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  framePosition: {
    height: 34,
    width: 34,
    right: 17,
    top: 12,
    position: "absolute",
  },
  foodAesthetic1: {
    height: 314,
    width: "100%",
    alignSelf: "stretch",
  },
  foodAesthetic1Wrapper: {
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    zIndex: 0,
  },
  pollitoConArroz: {
    fontSize: 23,
    textAlign: "left",
    color: Color.text,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    flex: 1,
    alignSelf: "stretch",
  },
  pollitoConArrozWrapper: {
    height: 35,
    justifyContent: "center",
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    right: 18,
  },
  fill1Icon: {
    top: 3,
    left: 33,
    width: 18,
    height: 15,
    position: "absolute",
  },
  parent: {
    width: 51,
    marginLeft: 71,
    height: 21,
  },
  frameParent1: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
  frameWrapper1: {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "flex-end",
  },
  vegano: {
    lineHeight: 17,
    color: Color.white,
    textAlign: "left",
  },
  frameWrapper3: {
    marginLeft: 6,
  },
  bajaEnCalorasWrapper: {
    width: 104,
    height: 21,
  },
  frameParent2: {
    flexWrap: "wrap",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameChild: {
    left: 0,
    height: 0,
    opacity: 0.4,
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    zIndex: 0,
  },
  vectorWrapper: {
    paddingHorizontal: 40,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
  },
  avatarIcon: {
    borderRadius: 240,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  abigailPerez: {
    color: Color.sec,
    textAlign: "center",
    marginLeft: 6,
  },
  avatarParent: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameView: {
    flex: 1,
  },
  frameWrapper: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    marginTop: 12,
    flexWrap: "wrap",
    alignSelf: "stretch",
    alignItems: "flex-end",
  },
  frameItem: {
    zIndex: 2,
  },
  frameInner: {
    zIndex: 3,
  },
  frameContainer: {
    height: 344,
    paddingBottom: 15,
    zIndex: 0,
    borderRadius: Border.br_5xl,
  },
  agricultureIcon: {
    width: 17,
    height: 18,
    overflow: "hidden",
  },
  mins: {
    fontSize: 9,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    display: "flex",
    width: 36,
    marginLeft: 2,
    textAlign: "center",
    height: 15,
    color: Color.text,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  agricultureParent: {
    top: 184,
    right: 12,
    borderRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 20,
    elevation: 20,
    width: 63,
    height: 22,
    paddingHorizontal: 4,
    paddingVertical: 3,
    minWidth: 63,
    minHeight: 22,
    maxHeight: 22,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
  },
  frameGroup: {
    borderRadius: Border.br_5xl,
  },
  frameParent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "#cfcfcf",
    borderWidth: 1,
    width: 383,
    alignItems: "flex-end",
    overflow: "hidden",
    borderRadius: Border.br_5xl,
  },
});

export default Recetas;
