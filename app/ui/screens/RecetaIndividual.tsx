import * as React from "react";
import { useState, useEffect} from "react";
import Carousel from 'react-native-reanimated-carousel';
import { Image, StyleSheet, Text, View, ImageBackground,ScrollView,Dimensions, Alert,Button } from "react-native";
import TagsComida from "../components/TagsComida";
import BotoncitoInfo from "../components/BotoncitoInfo";
import FruitSection from "../components/FruitSection";
import Ingrediente from "../components/Ingrediente";
import TagInfoNutri from "../components/TagInfoNutri";
import FormElementsAvatar from "../components/FormElementsAvatar";
import Rating from "../components/Rating";
import TypePrimarySmallTrueDisa from "../components/TypePrimarySmallTrueDisa";
import { Border, Padding, FontSize, FontFamily, Color } from "../GlobalStyles";
import YoutubePlayer from 'react-native-youtube-iframe';
import axios from 'axios'; 
import recipeWS from '../../networking/api/endpoints/recipeWS';
import { RouteProp, useRoute } from '@react-navigation/native';



const RecetaIndividual = () => {
  const handlerHealth3 = async () => {
    try {
    
      const response = await recipeWS.getRecipeInd(recipeId); 

      setReceta(response.data.data)
      
  
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    handlerHealth3();
  }, []);

  const [receta, setReceta] = useState<Receta | undefined>();
  const route = useRoute();
  const { recipeId } = route.params as { recipeId: any };
  if (!receta) {
    return null; // O puedes renderizar un indicador de carga u otra cosa
  }

  
  interface Receta {
    title: string;
    time: string,
    images: [
    {
      public_id: string,
      secure_url: string
    }
  ],
  rates: string,
  ratesAmount: string,
  rateAvg : string,
  owner: {
    name: string,
    googleId: string,
    email: string,
    photo: string
  },
  tags: [string],
  ingredients: [string],
  description: string,
   video : string,
  dishes: string,
  steps: string,
  nutritionalInfo: {
    calories: string,
    proteins: string,
    fats: string
  }
    // Otras propiedades de receta...
  }
  
const urls: String[]= []
receta.images.forEach((image, index) => (
  urls.push(image.secure_url)
))

  return (
    
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
    <View style={styles.frameParent}>
      <View style={styles.frameGroup}>
        
      <View>
  <View
    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/2.8 }}
  >
  {urls.length === 1 ? (
    <Image
      style={[styles.fixedImage]}
      resizeMode="cover"
      source={{uri: urls[0].toString() }}
    />
  ) : (
    <Carousel
      width={Dimensions.get('window').width/1.08}
      height={Dimensions.get('window').height/2.75}
      data={urls}
      renderItem={({ item }) => (
        <Image
          style={[styles.carouselImage]}
          resizeMode="cover"
          source={{ uri: item.toString() }} 
        />
      )}
    />
  )}
  </View>
  
</View>
         
        <View style={[styles.frameContainer, styles.ratingParentSpaceBlock]}>
          <View style={[styles.frameView, styles.frameViewFlexBox]}>
            <View style={styles.titleWrapper}>
            <Text style={styles.title}>
                {receta && receta.title}
            </Text>
            </View>
            <View style={[styles.groupParent, styles.groupLayout]}>
              <View style={[styles.groupWrapper, styles.groupLayout]}>
                <View style={styles.groupContainerPosition}>
                  <View style={styles.groupContainerPosition}>
                    <View
                      style={[
                        styles.baseBackground,
                        styles.groupContainerPosition,
                      ]}
                    />
                  </View>
                </View>
              </View>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
            </View>
          </View>
          <View style={[styles.tag, styles.tagFlexBox]}>
            
            {receta.tags.map((tag, index) => (
              <TagsComida vegetariana={tag} key ={index}/>
          ))}
            <TagsComida vegetariana="Vegetariana" />
            <TagsComida frameViewMarginLeft={9} vegetariana="Vegana" />
            <TagsComida
              frameViewMarginLeft={9}
              vegetariana="Baja en Calorías"
            />
            <TagsComida
              frameViewMarginLeft={9}
              vegetariana="Promueve la Flora Intestinal"
            />
            
          </View>
        </View>
        
        <View style={[styles.ratingParent, styles.ratingParentSpaceBlock]}>
          <View style={styles.rating}>
            <Image
              style={styles.starIconLayout}
              resizeMode="cover"
              source={require("../assets/star.png")}
            />
            <Image
              style={[styles.starIcon1, styles.starIconLayout]}
              resizeMode="cover"
              source={require("../assets/star.png")}
            />
            <Image
              style={[styles.starIcon1, styles.starIconLayout]}
              resizeMode="cover"
              source={require("../assets/star.png")}
            />
            <Image
              style={[styles.starIcon1, styles.starIconLayout]}
              resizeMode="cover"
              source={require("../assets/star.png")}
            />
            <Image
              style={[styles.starIcon1, styles.starIconLayout]}
              resizeMode="cover"
              source={require("../assets/star1.png")}
            />
          </View>
          <Text style={styles.placeholder}> {receta && receta.rateAvg} </Text>
        </View>
      </View>
      <View style={styles.frameParent1}>
        <View style={styles.rating}>
          <BotoncitoInfo
            frameViewMarginLeft="unset"
            vector={require("../assets/timer.png")}
            vectorIconWidth={21}
            vectorIconHeight={24}
            placeholder={`${receta && receta.time}min.`} 
          />
          <BotoncitoInfo
            vector={require("../assets/vector1.png")}
            placeholder={`${receta && receta.dishes} platos`} 
          />
        </View>
        <View style={[styles.titleFrame, styles.titleLayout]}>
          <Text style={[styles.title2, styles.titleLayout]}>
            Descripcion
          </Text>
        </View>
      
        <Text style={[styles.laDescripcinDe, styles.placeholder1Typo]}>
          {receta && receta.description}
        </Text>
        <View style={[styles.titleContainer, styles.titleLayout]}>
          <Text style={[styles.title1, styles.title1Position]}>
            Ingredientes
          </Text>
        </View>
        <View style={styles.frameParent3}>
          <FruitSection />
          
          <FruitSection propMarginTop={7} propTop={13} />
        </View>
        <View style={[styles.titleFrame, styles.titleLayout]}>
          <Text style={[styles.title2, styles.titleLayout]}>Pasos</Text>
        </View>
        <Text
          style={[styles.laDescripcinDe, styles.placeholder1Typo]}
        >{receta && receta.steps}</Text>
        <View style={styles.amenties}>
          <TagInfoNutri caloras="Calorías" placeholder={receta && receta.nutritionalInfo.calories} />
          <View style={[styles.amentiesInner, styles.wifiParentFlexBox]}>
            <View style={[styles.wifiParent, styles.wifiParentFlexBox]}>
              <Image
                style={styles.wifiIcon}
                resizeMode="cover"
                source={require("../assets/wifi1.png")}
              />
              <Text style={[styles.protenas, styles.protenasSpaceBlock]}>
                Proteínas
              </Text>
              <Text style={[styles.placeholder1, styles.protenasSpaceBlock]}>
              {receta && receta.nutritionalInfo.proteins}
              </Text>
            </View>
          </View>
          <TagInfoNutri
            frameViewHeight="unset"
            frameViewWidth={107}
            frameViewMarginLeft={14}
            frameViewHeight1="unset"
            wifiIconWidth={36}
            caloras="Grasas"
            placeholder={receta && receta.nutritionalInfo.fats}
          />
        </View>
        <ImageBackground
          style={[styles.youtubeuiWrapper, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/frame1000003621.png")}
        >
          <View style={styles.youtubeui}>
            <Image
              style={styles.surfaceIcon}
              resizeMode="cover"
              source={require("../assets/surface.png")}
            />
          </View>
        </ImageBackground>
        <View style={[styles.bio, styles.bioFlexBox]}>
          <View>
            <Image
              src={receta && receta.owner.photo}
              style={{width: 41, height: 42}}
            />
            <View style={[styles.name, styles.tagFlexBox]}>
              <Text style={[styles.title3, styles.titleTypo]}>{receta && receta.owner.name}</Text>
            </View>
          </View>
        </View>

        <View style={styles.frameParent3}>
          <Text style={styles.calificarReceta}>Calificar Receta</Text>
        </View>
        <View style={styles.ratingGroup}>
          <Rating
            star={require("../assets/star2.png")}
            star1={require("../assets/star2.png")}
            star2={require("../assets/star2.png")}
            star3={require("../assets/star2.png")}
            star4={require("../assets/star3.png")}
            rating4Position="unset"
          />
          <TypePrimarySmallTrueDisa
            label="Enviar"
            typePrimarySmallTrueDisaPosition="unset"
            typePrimarySmallTrueDisaMarginLeft={15}
          />
          
        </View>
        

        
             


      </View>

      
        
                   
      
                      
    </View>
                      
    
    </ScrollView>
     
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 236,
    borderRadius: Border.br_5xl,
    overflow: "hidden",
  },
  ratingParentSpaceBlock: {
    marginTop: 17,
    paddingHorizontal: Padding.p_10xs,
    alignSelf: "stretch",
    paddingVertical: 0,
  },
  frameViewFlexBox: {
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  groupLayout: {
    height: 27,
    width: 27,
  },
  groupContainerPosition: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 27,
    width: 27,
  },
  tagFlexBox: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  starIconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  placeholder1Typo: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
  },
  titleLayout: {
    height: 23,
    width: 104,
  },
  title1Position: {
    left: 0,
    top: 0,
    textAlign: "left",
  },
  manzanas200Layout: {
    height: 16,
    width: 327,
    position: "absolute",
  },
  protenasTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  wifiParentFlexBox: {
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
  },
  protenasSpaceBlock: {
    marginTop: 6,
    textAlign: "left",
  },
  bioFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleTypo: {
    lineHeight: 24,
    fontSize: FontSize.bodyNormalSemibold_size,
    color: Color.neutralGray1,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  frameChild: {
    width: 364,
    overflow: "hidden",
  },
  title: {
    flex: 1,
    fontSize: FontSize.headingH1_size,
    lineHeight: 34,
    textAlign: "left",
    color: Color.neutralGray1,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  titleWrapper: {
    width: 323,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  baseBackground: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.neutralGray6,
  },
  groupWrapper: {
    zIndex: 0,
  },
  vectorIcon: {
    top: 5,
    right: 5,
    width: 17,
    height: 17,
    zIndex: 1,
    position: "absolute",
  },
  groupParent: {
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  fixedImage:{
    width:"93%",
    height:"100%"
  },
  frameView: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  tag: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  frameContainer: {
    justifyContent: "flex-end",
  },
  starIcon1: {
    marginLeft: 8,
  },
  rating: {
    flexDirection: "row",
  },
  placeholder: {
    marginLeft: 10,
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 24,
    fontSize: FontSize.bodyNormalSemibold_size,
    textAlign: "left",
  },
  ratingParent: {
    flexDirection: "row",
  },
  frameGroup: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  laDescripcinDe: {
    color: Color.colorDimgray,
    marginTop: 15,
    textAlign: "left",
    alignSelf: "stretch",
  },
  title1: {
    height: 23,
    width: 104,
    lineHeight: 24,
    fontSize: FontSize.bodyNormalSemibold_size,
    color: Color.neutralGray1,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  titleContainer: {
    marginTop: 15,
  },
  rectangleWrapper: {
    height: 44,
    zIndex: 0,
    alignSelf: "stretch",
  },
  manzanas200Gr: {
    lineHeight: 26,
    color: Color.colorDarkslategray_100,
    display: "flex",
    height: 16,
    width: 327,
    position: "absolute",
    left: 0,
    top: 0,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    alignItems: "center",
  },
  manzanas200GrWrapper: {
    top: 14,
    left: 14,
    zIndex: 1,
  },
  groupParent1: {
    marginTop: 7,
    alignSelf: "stretch",
  },
  frameParent3: {
    marginTop: 15,
    alignSelf: "stretch",
  },
  title2: {
    lineHeight: 24,
    fontSize: FontSize.bodyNormalSemibold_size,
    color: Color.neutralGray1,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  titleFrame: {
    marginTop: 15,
  },
  wifiIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  protenas: {
    color: Color.icons,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyNormalSemibold_size,
    marginTop: 6,
  },
  placeholder1: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_100,
  },
  wifiParent: {
    backgroundColor: Color.colorGray_200,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
  },
  amentiesInner: {
    backgroundColor: Color.colorAliceblue,
    marginLeft: 14,
  },
  amenties: {
    marginTop: 15,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  surfaceIcon: {
    width: 96,
    height: 67,
    overflow: "hidden",
  },
  youtubeui: {
    marginTop: -25,
    marginLeft: -48,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  youtubeuiWrapper: {
    marginTop: 15,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  title3: {
    width: 179,
    textAlign: "left",
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
},
  name: {
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  bio: {
    marginTop: 15,
    justifyContent: "center",
    flexDirection: "row",
  },
  calificarReceta: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: FontFamily.robotoBold,
    color: Color.icons,
    textAlign: "left",
    fontWeight: "600",
    alignSelf: "stretch",
  },
  ratingGroup: {
    marginTop: 15,
    flexDirection: "row",
  },
  frameParent1: {
    height: 986,
    marginTop: 12,
    alignSelf: "stretch",
  },
  frameParent: {
    height: 1451,
    paddingHorizontal: 15,
    paddingVertical: 0,
    alignItems: "center",
  },
  textfield: {
    maxHeight:120,
    minHeight: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default RecetaIndividual;
