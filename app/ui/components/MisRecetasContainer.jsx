import React, { useMemo, useState } from "react";

import { Image, StyleSheet, Text, View,TouchableOpacity, Dimensions,  } from "react-native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';

const MisRecetasContainer = ({ data , index}) => {


  const [recipeId, setRecipeId] = useState(data._id);
  
  const navigation = useNavigation();

  const handleCardPress = (recipeId) => {
    navigation.navigate('Receta Individual', { recipeId });
  };

  const handleCardEdit = (recipeId) => {
    navigation.navigate('Editar Receta', {recipeId})
    console.log('yendo')
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={[styles.frameWrapper]}>
      <TouchableOpacity
          onPress={() => handleCardPress(recipeId)}
        >
      <View style={[styles.image5Parent, styles.parentFlexBox]}>

      
        <Image
          style={styles.image5Icon}
          resizeMode="cover"
          src={data.images[0].secure_url}
        />
        <View style={[styles.groupParent, styles.parentFlexBox]}>
          <View style={styles.frameContainer}>
            <View style={styles.polloConArrozWrapper}>
              <Text style={styles.polloConArroz} numberOfLines={1} ellipsizeMode="tail">{data.title}</Text>

            </View>
          </View>
          <View style={styles.frameParent}>
            <View style={[styles.frameView, styles.textFlexBox]}>
              <View style={styles.parent}>

              {data.rateAvg ?
                      <Text style={[styles.text, styles.textTypo]}>
                        {data.rateAvg}
                      </Text>
                      :
                      <Text style={[styles.text, styles.textTypo]}>
                        N/A
                      </Text>}

                <Image
                  style={styles.fill1Icon}
                  resizeMode="cover"
                  source={require("../assets/fill-1.png")}
                />
              </View>
            </View>
            <View style={styles.groupWrapper}>
              <View style={styles.group}>

                
                {data.rateAvg ?
                      <Text style={[styles.text1, styles.textTypo]}>
                        {data.rateAvg}
                      </Text>
                      :
                      <Text style={[styles.text1, styles.textTypo]}>
                        N/A
                      </Text>}


                <Image
                  style={styles.fill1Icon1}
                  resizeMode="cover"
                  source={require("../assets/fill-11.png")}
                />
              </View>
            </View>
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
              <View style={[styles.groupChild, styles.groupChildLayout]} />
              <View
                style={[styles.agricultureParent, styles.agriculturePosition]}
              >
                <Image
                  style={[styles.agricultureIcon, styles.agriculturePosition]}
                  resizeMode="cover"
                  source={require("../assets/agriculture.png")}
                />

                <Text style={styles.mins}>{data.time + " min."}</Text>

              </View>
            </View>
          </View>
        </View>

      <TouchableOpacity style={styles.frameChild} onPress ={() => handleCardEdit(recipeId)}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/lapicito.png")}
        />
        </TouchableOpacity>
        
      

        



      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    height: 16,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupChildLayout: {
    width: 73,
    top: "50%",
    height: 26,
    position: "absolute",
  },
  agriculturePosition: {
    marginTop: -8,
    top: "50%",
    position: "absolute",
  },
  image5Icon: {
    maxWidth: "100%",
    height: 133,
    width: "100%",
    zIndex: 0,
    overflow: "hidden",
    borderRadius: Border.br_5xl,
    alignSelf: "stretch",
  },
  polloConArroz: {
    textAlign: "left",
    width: 174,
    height: 38,
    color: Color.text,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  polloConArrozWrapper: {
    width: 176,
    flexWrap: "wrap",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
    height: 28,
  },
  frameContainer: {
    height: 28,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.size_smi,
    display: "flex",
    width: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  fill1Icon: {
    height: 14,
    width: 14,
  },
  parent: {
    minWidth: 34,
    minHeight: 16,
    height: 16,
    width: 34,
    justifyContent: "center",
    flexDirection: "row",
  },
  frameView: {
    left: 134,
    width: 42,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_11xs,
    minWidth: 42,
    minHeight: 26,
    maxWidth: 43,
    maxHeight: 26,
    height: 26,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_7xs,
    alignItems: "center",
    top: 0,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.background,
  },
  text1: {
    width: 20,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
    left: 0,
    top: 0,
    position: "absolute",
  },
  fill1Icon1: {
    top: 4,
    width: 15,
    height: 15,
    right: 0,
    position: "absolute",
  },
  group: {
    height: 19,
    display: "none",
    width: 34,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupWrapper: {
    top: 1,
    left: 138,
    width: 0,
    height: 0,
    position: "absolute",
  },
  groupChild: {
    marginTop: -13,
    right: 0,
    width: 73,
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_7xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.background,
  },
  agricultureIcon: {
    right: 50,
    width: 17,
    height: 17,
    minWidth: 17,
    minHeight: 17,
    maxWidth: 17,
    maxHeight: 17,
    overflow: "hidden",
  },
  mins: {
    marginTop: -9,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 50,
    top: "50%",
    height: 15,
    right: 0,
    textAlign: "center",
    color: Color.text,
    position: "absolute",
  },
  agricultureParent: {
    right: 3,
    width: 67,
    height: 18,
  },
  rectangleParent: {
    marginTop: -12.5,
    right: 103,
  },
  frameParent: {
    height: 27,
    alignSelf: "stretch",
  },
  groupParent: {
    paddingHorizontal: Padding.p_5xs,
    paddingBottom: Padding.p_4xs,
    zIndex: 1,
    marginTop: 10,
  },
  frameChild: {
    top: 5,
    right: 7,
    width: 31,
    height: 31,
    zIndex: 2,
    position: "absolute",
  },
  image5Parent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.background,
    justifyContent: "flex-end",
    borderRadius: Border.br_5xl,
  },
  frameWrapper: {
    width: Dimensions.get('window').width * 0.46,
    height: 207,
    minWidth: 150,
    margin:"0.5%"
  },
});


export default MisRecetasContainer;


