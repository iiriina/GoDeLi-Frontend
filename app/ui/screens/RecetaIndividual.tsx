import * as React from "react";
import { useState, useEffect, useCallback} from "react";
import Carousel from 'react-native-reanimated-carousel';
import { Image, StyleSheet, Text, View, ImageBackground,ScrollView,Dimensions, Alert,Button,Modal, TouchableOpacity, Share } from "react-native";
import TagsComida from "../components/TagsComida";
import BotoncitoInfo from "../components/BotoncitoInfo";
import FruitSection from "../components/FruitSection";
import Ingrediente from "../components/Ingrediente";
import TagInfoNutri from "../components/TagInfoNutri";
import FormElementsAvatar from "../components/FormElementsAvatar";
import TypePrimarySmallTrueDisa from "../components/TypePrimarySmallTrueDisa";
import { Border, Padding, FontSize, FontFamily, Color } from "../GlobalStyles";
import YoutubePlayer from 'react-native-youtube-iframe';
import axios from 'axios'; 
import recipeWS from '../../networking/api/endpoints/recipeWS';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Toast from 'react-native-toast-message';






const RecetaIndividual = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const route = useRoute();
  const { recipeId } = route.params as { recipeId: any };
  const [pressed, setPressed] = useState(false);

  const url = `https://godeli.com.ar/${recipeId}`; 

  const shareContent = async () => {
    try {
      const result = await Share.share({
        message: 'Echa un vistazo a esta receta de ' + receta?.title + ' en ' + url,
    
      });
      
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Compartido con una actividad específica
          console.log(`Compartido con ${result.activityType}`);
        } else {
          // Compartido
          console.log('Compartido');
        }
      } else if (result.action === Share.dismissedAction) {
        // Cancelado
        console.log('Compartir cancelado');
      }
    } catch (error) {
      console.error('Error al compartir:', error);
    }
  };

  function obtenerIdVideoYoutube(url: string): string | null {
    const regex = /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
  

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

  const [receta, setReceta] = useState<Receta>();

  const [rating, setRating] = useState<Number>();
  
  
  if (!receta) {
    return null; // O puedes renderizar un indicador de carga u otra cosa
  }

  
  interface Receta {
    _id: string,
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
  

const urls: string[]= []
receta.images.forEach((image, index) => (
  urls.push(image.secure_url)
))

/* interface YouTubePlayerProps {
  videoId: receta && receta.video ? obtenerIdVideoYoutube(receta.video) : null;;
} */

const videoId = receta && receta.video ? obtenerIdVideoYoutube(receta.video) ?? '' : '';






const handleImageTap = (imageUri: string): void => {
  setSelectedImage(imageUri);
  setModalVisible(true);
};

const handleImageTap2 = (): void => {
  setSelectedImage(urls[0].toString())
  setModalVisible(true);
};





const STAR_IMAGE = require("../assets/star2.png")

const ratingCompleted = (rating: number) => {
  console.log("Rating is: " + rating);
  setRating(rating);
};

const enviarRating = async ()  => {
    try {
        setPressed(true)


        const response = await recipeWS.patchRating(rating, receta._id);
        if (response.status === 200 || response.status === 201) {
          
          Toast.show({
            type: 'success',
            text1: 'Éxito',
            text2: 'La receta se calificó con éxito',
            visibilityTime: 2000,
            onPress: () =>{
              Toast.hide()
            }

          })
        
        ;} else {

          Toast.show({
            type: 'error',
            text1: 'Lo sentimos',
            text2: 'Ocurrió un error al calificar',
            visibilityTime: 2000,
            onPress: () =>{
              Toast.hide()
            }

          })

          setPressed(false)

        }

        
    } catch (e) {

      Toast.show({
        type: 'error',
        text1: 'Lo sentimos',
        text2: 'Ocurrió un error al calificar',
        visibilityTime: 2000,
        onPress: () =>{
          Toast.hide()
        }

      })
        setPressed(false)
        console.log(e);
    }
}



  return (
  <ScrollView style={{ backgroundColor: 'white' }}>
    <View style={styles.frameGeneral}>

    
         
  <View style={[styles.frameParent, styles.parentSpaceBlock1,]}>

    <View
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height/3.3 }}
      >
      
      <>
        <Carousel
                  loop={urls.length > 1}
                  panGestureHandlerProps={{
                    activeOffsetX: [-10, 10],
                  }}
                  width={Dimensions.get('window').width / 1.1}
                  autoPlay={true}
                  autoPlayInterval={3500}
                  height={Dimensions.get('window').height / 2.2}
                  data={urls}
                  renderItem={({ item }: { item: string }) => (
                    <TouchableOpacity onPress={() => handleImageTap(item)}>
                      <Image
                        style={[styles.carouselImage]}
                        resizeMode="cover"
                        source={{ uri: item }}
                      />
                    </TouchableOpacity>
                  )}
                />
                
                <Modal
                  visible={modalVisible}
                  transparent = {false}
                  animationType="fade"
                  
                  onRequestClose={() => setModalVisible(false)}
                >
                  
                  
                  <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => setModalVisible(false)}>
                    <Image source={{ uri: selectedImage ||'' }} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                  </TouchableOpacity>
                  
                </Modal>
  </>
        
     
  </View>

        <View style={[styles.frameGroup, styles.groupFlexBox]}>




          
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{receta && receta.title}</Text>
          </View>
          <View style={[styles.groupParent, styles.groupLayout]}>
            <View style={[styles.groupWrapper, styles.groupLayout]}>
              <View style={styles.groupContainerPosition}>
                <View style={styles.groupContainerPosition}>
                  <View
                    style={[
                      styles.baseBackground,
                      styles.groupContainerPosition,
                    ]}>

        <TouchableOpacity style={styles.containerImg} onPress={shareContent}>
            <View style={styles.containerImage}>

                <Image
                  style={styles.imgStyle}
                  resizeMode="cover"
                  source={require("../assets/vector.png")}
                />
                            </View>

            </TouchableOpacity>

                    </View>

                </View>
              </View>
            </View>


          </View>
        </View>



      <View style={styles.frameParent1}>
            {receta.tags.map((tag, index) => (
              <View style={[styles.wrapperSpaceBlock, styles.frameWrapper2]} key= {index}> 
              <Text style={[styles.vegano, styles.veganoTypo]} key= {index}>
                {tag}
              </Text>
            </View>
          ))}
            </View>




      <View style={[styles.ratingParent, styles.parentSpaceBlock1]}>
        <View style={styles.rating}>
        <AirbnbRating
            count={5}
            reviews={[]}
            defaultRating={receta && Number(receta.rateAvg)}
            size={24}
            onFinishRating={ratingCompleted}
            showRating={false}
            isDisabled={true}
            selectedColor='#000'
            starImage={STAR_IMAGE}
          />
        </View>
        <Text style={styles.placeholder}>{receta && Math.round(Number(receta.rateAvg) * 10) / 10}</Text>
      </View>
      <View style={styles.frameContainer}>
        <View style={[styles.timerParent, styles.parentSpaceBlock]}>
          <Image
            style={styles.timerIcon}
            resizeMode="cover"
            source={require("../assets/timer.png")}
          />
          <Text style={[styles.placeholder1, styles.placeholderTypo]}>
            {`${receta && receta.time} min.`}
          </Text>
        </View>
        <View style={[styles.vectorParent, styles.buttonSpaceBlock]}>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <Text style={[styles.placeholder1, styles.placeholderTypo]}>
          {`${receta && receta.dishes} Platos`}
          </Text>
        </View>
      </View>
      <Text style={[styles.laDescripcinDe, styles.placeholderTypo]}>
       {receta && receta.description}
      </Text>
      <View style={[styles.group, styles.titleLayout]}>
        <Text style={[styles.title1, styles.title1Position]}>Ingredientes</Text>
      </View>
      <View style={[styles.wrapDeIngredientes, styles.ingredientesContainer]}>
        


        {receta.ingredients.map((ingredient, index) => (
        <View
          style={[styles.ingredienteFrame1, styles.ingredienteFrameFlexBox]} key ={index}>
          <Text style={[styles.manzanas200Gr, styles.labelTypo]}>
            {ingredient}
          </Text>
        </View>
        ))}

        
      </View>
      <View style={[styles.titleContainer, styles.titleLayout]}>
        <Text style={[styles.title2, styles.titleLayout]}>Pasos</Text>
      </View>
      <Text
        style={[styles.laDescripcinDe, styles.placeholderTypo]}
      >{receta && receta.steps}</Text>



      
      <View style={styles.amenties}>
        <View style={styles.calorias}>
          <View style={[styles.wifiParent, styles.wifiSpaceBlock]}>
            <Image
              style={[styles.wifiIcon, styles.wifiIconLayout]}
              resizeMode="cover"
              source={require("../assets/wifi.png")}
            />
            <Text style={[styles.caloras, styles.calorasSpaceBlock]}>
              Calorías
            </Text>
            <Text style={[styles.placeholder3, styles.calorasSpaceBlock]}>
            {receta && receta.nutritionalInfo.calories}
            </Text>
          </View>
        </View>
        <View style={styles.grasasFlexBox}>
          <View style={styles.wifiSpaceBlock}>
            <Image
              style={[styles.wifiIcon, styles.wifiIconLayout]}
              resizeMode="cover"
              source={require("../assets/wifi1.png")}
            />
            <Text style={[styles.caloras, styles.calorasSpaceBlock]}>
              Proteínas
            </Text>
            <Text style={[styles.placeholder3, styles.calorasSpaceBlock]}>
            {receta && receta.nutritionalInfo.proteins}
            </Text>
          </View>
        </View>
        <View style={[styles.grasas, styles.grasasFlexBox]}>
          <View style={styles.wifiSpaceBlock}>
            <Image
              style={[styles.wifiIcon2, styles.wifiIconLayout]}
              resizeMode="cover"
              source={require("../assets/wifi2.png")}
            />
            <Text style={[styles.caloras, styles.calorasSpaceBlock]}>
              Grasas
            </Text>
            <Text style={[styles.placeholder3, styles.calorasSpaceBlock]}>
            {receta && receta.nutritionalInfo.fats}
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginBottom:-50, marginTop: 35}}>
      
     
        <YoutubePlayer
          height={300}
          play={false}
          videoId= {videoId}
          
        />
     


    </View>
      <View style={styles.bio}>
        <View style={styles.formElementsAvatar}>
          <Image
            style={[styles.avatarIcon, styles.title1Position]}
            resizeMode="cover"
            src={receta && receta.owner.photo}
          />
        </View>
        <View style={[styles.name, styles.tagFlexBox]}>
          <Text style={[styles.title3, styles.titleTypo]}>{receta && receta.owner.name}</Text>
        </View>
      </View>
      <View style={styles.wrapDeIngredientes}>
        <Text style={styles.calificarReceta}>Calificar Receta</Text>
      </View>
      <View style={styles.ratingGroup}>
        <AirbnbRating
            count={5}
            reviews={[]}
            defaultRating={0}
            size={24}
            onFinishRating={ratingCompleted}
            showRating={false}
            selectedColor='#000'
            starImage={STAR_IMAGE}
          />
          <TouchableOpacity style={[styles.button, styles.ingredienteFrameFlexBox]} onPress={enviarRating} disabled={pressed}>
          <Text style={[styles.label, styles.labelTypo]}>Enviar</Text>
        </TouchableOpacity>
      </View>



     






      </View>






    </View>
  </ScrollView>
     
  );
};

const styles = StyleSheet.create({
  containerImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fixedImage:{
    width:"93%",
    height:"100%"
  },

  carouselImage: {
    width: '97.5%',
    height: '80%',
    resizeMode: 'cover',
    borderRadius: 20,
    backgroundColor: "white"
},
parentSpaceBlock1: {
  paddingVertical: 0,
  paddingHorizontal: Padding.p_10xs,
  alignSelf: "stretch",
},
imgStyle:{
  alignSelf: 'center',
  width: 20,
  height: 20
},
groupFlexBox: {
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
  height: 40,
  width: 40,
},
tagFlexBox: {
  flexWrap: "wrap",
  flexDirection: "row",
},
vegetarianaTypo: {
  fontFamily: FontFamily.poppinsSemiBold,
  textAlign: "left",
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
parentSpaceBlock: {
  paddingHorizontal: Padding.p_3xs,
  height: 43,
  backgroundColor: Color.colorAliceblue,
  borderRadius: Border.br_base,
  alignItems: "center",
  flexDirection: "row",
  paddingVertical: 0,
},
placeholderTypo: {
  lineHeight: 21,
  fontSize: FontSize.size_sm,
  fontFamily: FontFamily.poppinsRegular,
},
buttonSpaceBlock: {
  marginLeft: 15,
  justifyContent: "center",
},
titleLayout: {
  height: 23,
  width: 104,
},
title1Position: {
  left: 0,
  top: 0,
  position: "absolute",
},
ingredienteFrameFlexBox: {
  paddingVertical: Padding.p_7xs,
  overflow: "hidden",
  alignItems: "center",
  flexDirection: "row",
},
labelTypo: {
  fontSize: FontSize.size_sm,
  fontWeight: "500",
},
wifiSpaceBlock: {
  paddingVertical: Padding.p_xs,
  paddingHorizontal: Padding.p_xl,
  backgroundColor: Color.colorGray_200,
  borderRadius: Border.br_base,
  alignItems: "center",
  justifyContent: "center",
},
wifiIconLayout: {
  height: 32,
  overflow: "hidden",
},
calorasSpaceBlock: {
  marginTop: 6,
  textAlign: "left",
},
grasasFlexBox: {
  marginLeft: 14,
  backgroundColor: Color.colorAliceblue,
  borderRadius: Border.br_base,
  alignItems: "center",
  justifyContent: "center",
},
titleTypo: {
  lineHeight: 24,
  fontSize: FontSize.bodyNormalSemibold_size,
  textAlign: "left",
  color: Color.neutralGray1,
  //fontFamily: FontFamily.bodyNormalSemibold,
  fontWeight: "600",

},
title: {
  flex: 1,
  fontSize: FontSize.headingH1_size,
  lineHeight: 34,
  textAlign: "left",
  color: Color.neutralGray1,
  //fontFamily: FontFamily.bodyNormalSemibold,
  fontWeight: "600",

},
titleWrapper: {
  maxWidth: 323,
  justifyContent: "center",
  alignItems: "flex-end",
  flexDirection: "row",
},
baseBackground: {
  backgroundColor: Color.neutralGray6,
  borderRadius: Border.br_5xs,
},
groupWrapper: {
  zIndex: 0,
},
containerImage: {
  justifyContent: 'center', // Centra verticalmente
  alignItems: 'center', // Centra horizontalmente
  
},
groupParent: {
  justifyContent: "space-between",
  alignItems: "flex-end",
},
frameGroup: {
  flexDirection: "row",
  alignSelf: "stretch",
},
vegetariana: {
  fontSize: 12,
  lineHeight: 15,
  color: Color.neutralWhite,

},
tag: {
  marginTop: 10,
  alignSelf: "stretch",
  marginRight: "1%",
},
frameParent: {
  justifyContent: "flex-end",
},
starIcon: {
  overflow: "hidden",
  height: 24,
  width: 24,
},
starIcon1: {
  marginLeft: 8,
  overflow: "hidden",
  height: 24,
  width: 24,
},
rating: {
  flexDirection: "row",
},
placeholder: {
  marginLeft: 10,
  marginTop:"1%",
  color: Color.colorGray_100,
  fontFamily: FontFamily.poppinsRegular,
  lineHeight: 25,
  fontSize: FontSize.bodyNormalSemibold_size,
  textAlign: "left",
},
ratingParent: {
  marginTop: 12,
  flexDirection: "row",
  alignItems:"center"
},
timerIcon: {
  width: 21,
  height: 25,
},
placeholder1: {
  marginLeft: 7,
  color: Color.icons,
  textAlign: "left",
},
timerParent: {
  justifyContent: "center",
},
vectorIcon1: {
  height: 22,
  width: 24,
},
vectorParent: {
  paddingHorizontal: Padding.p_3xs,
  height: 43,
  backgroundColor: Color.colorAliceblue,
  borderRadius: Border.br_base,
  alignItems: "center",
  flexDirection: "row",
  paddingVertical: 0,
},
frameContainer: {
  marginTop: 15,
  flexDirection: "row",
},
laDescripcinDe: {
  color: Color.colorDimgray,
  marginTop: 15,
  textAlign: "left",
  alignSelf: "stretch",
},
title1: {
  height: "auto",
  width: "150%",
  lineHeight: 24,
  fontSize: FontSize.bodyNormalSemibold_size,
  textAlign: "left",
  color: Color.neutralGray1,
  fontFamily: FontFamily.poppinsMedium,
  fontWeight: "600",
},
group: {
  marginTop: "4%",
  marginBottom: "-1%"
},
manzanas200Gr: {
  lineHeight: 26,
  color: Color.colorDarkslategray_100,
  display: "flex",
  width: "auto",
  height: 31,
  fontFamily: FontFamily.poppinsRegular,
  textAlign: "left",
  alignItems: "center",
  
},
ingredienteFrame: {
  paddingHorizontal: Padding.p_base,
  borderRadius: Border.br_4xs,
  paddingVertical: Padding.p_7xs,
  backgroundColor: Color.colorAliceblue,
  flexWrap: "wrap",
  width: 364,
},
ingredienteFrame1: {
  marginTop: "2%",
  paddingHorizontal: Padding.p_base,
  borderRadius: Border.br_4xs,
  paddingVertical: Padding.p_7xs,
  backgroundColor: Color.colorAliceblue,
  flexWrap: "wrap",
  width: "100%",
  alignContent: "center",
  paddingTop: 10
},
wrapDeIngredientes: {
  alignSelf: "stretch",
},
title2: {
  lineHeight: 24,
  fontSize: FontSize.bodyNormalSemibold_size,
  textAlign: "left",
  color: Color.neutralGray1,
  fontFamily: FontFamily.poppinsMedium,
  fontWeight: "600",
},
titleContainer: {
  marginTop: "6%",
},
ingredientesContainer: {
  marginTop: "3%",

},
wifiIcon: {
  width: 32,
},
caloras: {
  color: Color.icons,
  fontSize: 13,
  marginTop: 6,
  fontFamily: FontFamily.poppinsMedium,
  fontWeight: "500",
},
placeholder3: {
  lineHeight: 21,
  fontSize: FontSize.size_sm,
  fontFamily: FontFamily.poppinsRegular,
  color: Color.colorGray_100,
},
wifiParent: {
  height: 108,
  
},
calorias: {
  height: 116,
  backgroundColor: Color.colorAliceblue,
  borderRadius: Border.br_base,
  alignItems: "center",
  justifyContent: "center",

},
wifiIcon2: {
  width: 36,
},
grasas: {
  width: 107,
},
amenties: {
  marginTop: 15,
  flexDirection: "row",
  alignSelf: "stretch"
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
  borderRadius: 24,
  height: 236,
  overflow: "hidden",
  marginTop: 15,
  alignSelf: "stretch",
},
avatarIcon: {
  width: 40,
  height: 40,
  borderRadius: 100,
},
formElementsAvatar: {
  width: 41,
  height: 42,
},
title3: {
  width: "auto",
  fontFamily: FontFamily.poppinsMedium,

},
name: {
  marginLeft: 8,
  alignItems: "center",
  justifyContent: "flex-start",
},
bio: {
  
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
},
calificarReceta: {
  fontSize: 16,
  lineHeight: 24,
  fontFamily: FontFamily.poppinsMedium,
  color: Color.icons,
  textAlign: "left",
  fontWeight: "600",
  alignSelf: "stretch",
  marginTop: "4%",
  marginBottom: "2%"
},
rating1: {
  alignItems: "center",
  flexDirection: "row",
},
label: {
  lineHeight: 20,
  fontFamily: FontFamily.poppinsMedium,
  textAlign: "center",
  color: Color.neutralWhite,
},
button: {
  backgroundColor: Color.icons,
  paddingHorizontal: Padding.p_xs,
  marginLeft: 15,
  justifyContent: "center",
  borderRadius: Border.br_5xs,
},
ratingGroup: {
  alignItems: "center",
  flexDirection: "row",
  marginBottom: "5%",
},
frameGeneral: {
  height: "auto",
  width: "100%",
  paddingRight: "5%",
  paddingLeft: "5%",
  backgroundColor: "#FFFF",
  marginTop: "5%"
},
paddingVertical: {
  paddingVertical: 10,
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
frameWrapper2: {
  marginLeft: -1,
  
  
},

vegano: {
  lineHeight: 17,
  color: Color.white,
  textAlign: "left",
},
veganoTypo: {
  fontSize: FontSize.size_2xs,
  fontFamily: FontFamily.poppinsMedium,
  fontWeight: "500",
},
overlay: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajusta la opacidad según necesites
  justifyContent: 'center',
  alignItems: 'center',
},
modalView: {
  margin: 20,
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},


});

export default RecetaIndividual;
