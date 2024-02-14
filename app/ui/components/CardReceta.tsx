import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={[styles.frameParent, styles.frameParentShadowBox]}>
      <View style={styles.unsplashjpkfc5DDiParent}>
        <Image
          style={styles.unsplashjpkfc5DDiIcon}
          resizeMode="cover"
          source={require("../assets/unsplashjpkfc5-ddi.png")}
        />
        <View style={styles.frameWrapper}>
          <View style={styles.frameGroup}>
            <View style={[styles.frameContainer, styles.avatarParentFlexBox]}>
              <View style={styles.frameView}>
                <View
                  style={[
                    styles.pollitoConArrozWrapper,
                    styles.avatarParentFlexBox,
                  ]}
                >
                  <Text style={[styles.pollitoConArroz, styles.textTypo]}>
                    Pollito Con Arroz
                  </Text>
                </View>
                <View style={styles.groupParent}>
                  <View style={styles.groupWrapper}>
                    <View style={styles.textPosition}>
                      <Text style={[styles.text, styles.textPosition]}>
                        4.3
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={[styles.fill1Icon, styles.minsLayout]}
                    resizeMode="cover"
                    source={require("../assets/fill-1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.frameParent1}>
              <View>
                <View style={styles.wrapperSpaceBlock}>
                  <Text style={[styles.vegano, styles.veganoTypo]}>Vegano</Text>
                </View>
              </View>
              <View style={styles.frameWrapper2}>
                <View style={styles.wrapperSpaceBlock}>
                  <Text style={[styles.vegano, styles.veganoTypo]}>
                    Vegetariano
                  </Text>
                </View>
              </View>
              <View style={styles.frameWrapper2}>
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

            <View style={styles.aux}/>

            <View style={styles.vectorWrapper}>
              <Image
                style={[styles.frameChild, styles.framePosition]}
                resizeMode="cover"
                source={require("../assets/vector-4.png")}
              />
            </View>
            <View style={styles.groupView}>
              <View style={[styles.frameWrapper4, styles.framePosition]}>
                <View style={[styles.avatarParent, styles.avatarParentFlexBox]}>
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
        </View>
        <Image
          style={styles.frameItem}
          resizeMode="cover"
          source={require("../assets/group-18.png")}
        />
        <View style={[styles.groupContainer, styles.frameParentShadowBox]}>
          <View style={styles.agricultureParent}>
            <Image
              style={[styles.agricultureIcon, styles.framePosition]}
              resizeMode="cover"
              source={require("../assets/agriculture.png")}
            />
            <Text style={[styles.mins, styles.minsLayout]}>25 min.</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
  },
  avatarParentFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  textPosition: {
    right: 0,
    width: 33,
    top: 0,
    position: "absolute",
    height: 21,
  },
  minsLayout: {
    height: 15,
    position: "absolute",
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
    alignItems: "center",
    flexDirection: "row",
  },
  framePosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  unsplashjpkfc5DDiIcon: {
    maxWidth: "100%",
    height: 219,
    width: "100%",
    zIndex: 0,
    borderRadius: Border.br_7xs,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  pollitoConArroz: {
    fontSize: 23,
    textAlign: "left",
    color: Color.text,
    flex: 1,
    alignSelf: "stretch",
  },
  pollitoConArrozWrapper: {
    alignItems: "center",
    flex: 1,
    flexWrap: "wrap",
  },
  text: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupWrapper: {
    right: 18,
    width: 33,
    top: 0,
    position: "absolute",
    height: 21,
  },
  fill1Icon: {
    top: 3,
    left: 33,
    width: 18,
  },
  groupParent: {
    width: 51,
    marginLeft: 71,
    height: 21,
  },
  frameView: {
    alignItems: "center",
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  frameContainer: {
    flexWrap: "wrap",
    alignSelf: "stretch",
    alignItems: "flex-end",
  },
  vegano: {
    lineHeight: 17,
    color: Color.white,
    textAlign: "left",
  },
  frameWrapper2: {
    marginLeft: 6,
    
    
  },
  bajaEnCalorasWrapper: {
    width: 104,
    height: 21,
    
  },
  frameParent1: {
    marginTop: 6,
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    alignSelf: "stretch",
    

    
  },
  frameChild: {
    width: 360,
    height: 0,
    opacity: 0.4,
    zIndex: 0,
  },
  vectorWrapper: {
    paddingHorizontal: 40,
    paddingVertical: Padding.p_3xs,
    marginTop: 6,
    flexDirection: "row",
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
    marginLeft: 6,
    textAlign: "center",
  },
  avatarParent: {
    alignItems: "center",
  },
  frameWrapper4: {
    flexDirection: "row",
  },
  groupView: {
    height: 24,
    width: 104,
    marginTop: -10,
  },
  frameGroup: {
    flex: 1,
  },
  frameWrapper: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    zIndex: 1,
    marginTop: 12,
    flexWrap: "wrap",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameItem: {
    top: 12,
    right: 17,
    width: 34,
    height: 34,
    zIndex: 2,
    position: "absolute",
  },
  agricultureIcon: {
    width: 17,
    height: 18,
    overflow: "hidden",
  },
  mins: {
    top: 1,
    left: 19,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 36,
    textAlign: "center",
    color: Color.text,
  },
  agricultureParent: {
    width: 55,
    height: 18,
  },
  groupContainer: {
    top: 184,
    right: 12,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 20,
    elevation: 20,
    height: 22,
    paddingHorizontal: 4,
    paddingVertical: 3,
    minWidth: 63,
    minHeight: 22,
    maxHeight: 22,
    zIndex: 3,
    position: "absolute",
    alignItems: "center",
    borderRadius: Border.br_7xs,
  },
  unsplashjpkfc5DDiParent: {
    paddingBottom: 15,
    alignSelf: "stretch",
    alignItems: "flex-end",
    overflow: "hidden",
    backgroundColor: Color.white,
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
    alignItems: "center",
    overflow: "hidden",
    borderRadius: Border.br_5xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    
    
  },

  aux: {
    borderBottomWidth: 0.3, // This sets the thickness of the top border
    borderBottomColor: 'black',

    paddingBottom: 20,
  }
});

export default Frame;