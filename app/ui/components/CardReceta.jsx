import React, { useState, } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View,TouchableOpacity,Animated, Easing } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import { store } from '../../redux/store';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateFavs } from '../../redux/slices/AuthSlice';


const Frame = ({ data, index }) => {
  

  const [recetas, setRecetas] = useState([]); 
  const navigation = useNavigation();

  const handleCardPress = (recipeId) => {
    navigation.navigate('Receta Individual', { recipeId });
  };
  const [isSelected, setIsSelected] = useState(store.getState().auth.favs.includes(data._id));

  const dispatch = useDispatch();


  const scaleValue = new Animated.Value(1);

  const toggleHeart = () => {
    store.dispatch(updateFavs(data._id));
    setIsSelected(!isSelected);
    patchFavorite(recipeId); 

    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ]).start();
  };

  const [recipeId, setRecipeId] = useState(data._id);
  
  const patchFavorite = async (recipeId) => {
    try {
      const userId = store.getState().auth.user.id;
      const response = await axios.patch(`https://godeli-production.up.railway.app/users/${userId}/favorites`, {
        recipeId: recipeId // Envía el ID de la receta al servidor
      });

    } catch (error) {
      console.error('Error al actualizar el estado del favorito:', error);
    }
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }]
  };

  return (
    <TouchableOpacity onPress={() => handleCardPress(recipeId)}>
    <View style={[styles.frameParent, styles.frameParentShadowBox]}>
      
      <View style={styles.unsplashjpkfc5DDiParent}>
      {data.images[0] && (
        <Image
          style={styles.unsplashjpkfc5DDiIcon}
          resizeMode="cover"
          source={{ uri: data.images[0].secure_url }}
        />
        )}
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
                    {data.title}
                  </Text>
                </View>
                <View style={styles.groupParent}>
                  <View style={styles.groupWrapper}>
                    <View style={styles.textPosition}>
                      {data.rateAvg ?
                      <Text style={[styles.text, styles.textPosition]}>
                        {Math.round(Number(data.rateAvg) * 10) / 10}
                      </Text>
                      :
                      <Text style={[styles.text, styles.textPosition]}>
                        N/A
                      </Text>}
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
            {data.tags.map((tag, index) => (
              <View style={[styles.wrapperSpaceBlock, styles.frameWrapper2]} key= {index}> 
              <Text style={[styles.vegano, styles.veganoTypo]} key= {index}>
                {tag}
              </Text>
            </View>
          ))}
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
                    src={data.owner.photo}
                    onError={(error) => console.log("Error al cargar la imagen:", error)}
                  />
                  <Text style={[styles.abigailPerez, styles.veganoTypo]}>
                    {data.owner.name}
                  </Text>
                </View>
              </View>
              
            </View>
            
          </View>
          
        </View>
        <TouchableOpacity
          style= {styles.frameItem}
          onPress = {toggleHeart}> 
          
          <Animated.Image
        style={[styles.heartIcon, animatedStyle]}
        resizeMode="cover"
        source={isSelected ? require("../assets/group-27.png") : require("../assets/group-18.png")}
          />

        </TouchableOpacity>
        
        <View style={[styles.groupContainer, styles.frameParentShadowBox]}>
          <View style={styles.agricultureParent}>
            <Image
              style={[styles.agricultureIcon, styles.framePosition]}
              resizeMode="cover"
              source={require("../assets/agriculture.png")}
            />
            <Text style={[styles.mins, styles.minsLayout]}>{data.time + " Min"}</Text>
          </View>
        </View>
      </View>
    </View>
    </TouchableOpacity>
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
    margin: 5
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
    marginLeft: -1,
    
    
  },
  bajaEnCalorasWrapper: {
    width: 104,
    height: 21,
    
  },
  frameParent1: {
    marginTop: 6,
    marginLeft: -5,
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    alignSelf: "stretch",
    paddingHorizontal: 8,
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
    top: 8,
    right: 9,
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
    
    backgroundColor: Color.white,
    borderRadius: Border.br_5xl,
  },
  frameParent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "#cfcfcf",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: 383,
    alignItems: "center",
    overflow: "hidden",
  
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: "100%",
    backgroundColor: Color.white,
    
  },

  aux: {
    borderBottomWidth: 0.3, // This sets the thickness of the top border
    borderBottomColor: 'black',

    paddingBottom: 20,
  }
});

export default Frame;