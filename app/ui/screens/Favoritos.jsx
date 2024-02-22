import { View, Modal, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontSize, FontFamily, Padding, Color, Border } from "../../ui/GlobalStyles";
import { Button } from "react-native-paper";
import ImagePicker from 'react-native-image-crop-picker';
import React, { useState, useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux'; // Importa useDispatch
import { updateParteUno } from '../../redux/slices/CrearRecetaSlice';
import {store} from '../../redux/store'
import CustomButton from '../components/CustomButtonModal';
import { updateParteTres } from '../../redux/slices/CrearRecetaSlice';
import { fetchCreateRecipe } from '../../redux/slices/CrearRecetaSlice';
import { AlertNotificationRoot, Dialog, Toast, ALERT_TYPE } from 'react-native-alert-notification';
import NutritionalInformationCard from '../components/NutritionalInformationCard';

import RNFetchBlob from 'rn-fetch-blob';

const ModalScreen = ({ navigation }) => {

  const dispatch = useDispatch(); // Obtiene la función dispatch

  const creacionFinalizada = useSelector(state => state.creacionFinalizada); // Asegúrate de usar el nombre correcto del slice


  const [error, setError] = useState('');


  const [images, setImages] = React.useState([]);
  // ENTRAR A LA GALERÍA Y SUBIR FOTOS - CAMARA
  
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      RNFetchBlob.fs.readFile(image.path, 'base64')
        .then(data => {
          const base64Image = `data:${image.mime};base64,${data}`;
          setImages([...images, base64Image]);
        })
        .catch(error => console.log(error));
    }).catch(error => console.log(error));
  };
  
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      RNFetchBlob.fs.readFile(image.path, 'base64')
        .then(data => {
          const base64Image = `data:${image.mime};base64,${data}`;
          setImages([...images, base64Image]);
        })
        .catch(error => console.log(error));
    }).catch(error => console.log(error));
  };
  
  const handleDeleteImage = (index) => {
    // Crea una copia del array de imágenes actual
    const updatedImages = [...images];
    // Elimina la imagen del array utilizando el índice proporcionado
    updatedImages.splice(index, 1);
    // Actualiza el estado con el nuevo array de imágenes sin la imagen eliminada
    setImages(updatedImages);
  };
  
  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const [video, setVideo] = useState('');








  // Restablecer los estados del componente a su valor inicial
  const resetComponentState = () => {
    setImages([]);
    setTitle('');
    setDescription('');
    setVideo('');
  };


  
  // Restablecer los estados cuando creacionFinalizada es true
  useEffect(() => {
    if (creacionFinalizada) {
      resetComponentState();
    }
  }, [creacionFinalizada]);




const [submitted, setSubmitted] = useState(false); // Estado para rastrear si se ha enviado el formulario


const [pasos, setPasos] = useState('');
const [ingredientes, setIngredientes] = useState([]);
const [nuevoIngrediente, setNuevoIngrediente] = useState('');

// Función para agregar un nuevo ingrediente a la lista
const agregarIngrediente = () => {
  if (nuevoIngrediente.trim() !== '') {
    setIngredientes([...ingredientes, nuevoIngrediente]);
    setNuevoIngrediente(''); // Limpiar el campo de texto después de agregar
  }
};

const handleDeleteIngrediente = (index) => {
  // Crea una copia del array de ingredientes actual
  const nuevosIngredientes = [...ingredientes];
  // Elimina el ingrediente del array utilizando el índice proporcionado
  nuevosIngredientes.splice(index, 1);
  // Actualiza el estado con el nuevo array de ingredientes sin el ingrediente eliminado
  setIngredientes(nuevosIngredientes);
};





// paso 3 




const [selectedTags, setSelectedTags] = useState([]);
const [time, setTime] = useState('');
const [dishes, setDishes] = useState('');

const [proteins, setProteins] = useState('');
const [calories, setCalories] = useState('');
const [fats, setFats] = useState('');

const handleProteins = (newValue) => {
  setProteins(newValue);
};

const handleCalories = (newValue) => {
  setCalories(newValue); 
};

const handleFats = (newValue) => {
  setFats(newValue); 
};
    


const handleClose = () => {
  navigation.popToTop();
  navigation.goBack(null);  
};


const [buttonStates, setButtonStates] = React.useState({
  Vegano: false,
  Vegetariano: false,
  'Rapida preparacion': false,
  'Apto Celiacos': false,
  'Estimula el Sist. Inmune': false,
  Antiinflamatorio: false,
  'Bajo en Sodio': false,
  'Bajo en Calorias': false,
  'Promueve Flora Intestinal': false,
});

const handleButtonPress = (buttonText) => {
// Verifica si el tag está seleccionado

const tagIndex = selectedTags.indexOf(buttonText);
if (tagIndex === -1) {
  // Si no está seleccionado, agrégalo al estado
  setSelectedTags([...selectedTags, buttonText]);
} else {
  // Si está seleccionado, quítalo del estado
  const newTags = [...selectedTags];
  newTags.splice(tagIndex, 1);
  setSelectedTags(newTags);
}
setButtonStates((prevButtonStates) => ({
  ...prevButtonStates,
  [buttonText]: !prevButtonStates[buttonText],
}));

};



const handleSiguientePress = async () => {

  try {
    // Actualiza la parte tres de la receta en el estado de Redux
    if (!time || !dishes || !proteins || !calories || !fats) {
      setError(' * Todos los campos son obligatorios');
      setSubmitted(true); // Marca el formulario como enviado

    } else {
      setSubmitted(true); // Marca el formulario como enviado



      
      const owner = {
        googleId: store.getState().auth.user.id,
        name: store.getState().auth.user.name,
        email: store.getState().auth.user.email,
        photo: store.getState().auth.user.photo,

      }

      setDishes(Number(dishes));
      dispatch(updateParteTres({ selectedTags, time, dishes, calories, proteins, fats,owner }));
  

      // Obtiene el estado actual del store
      const recipeData = store.getState().recipe.recipe;

      // Realiza la llamada para crear la receta en el backend
      const response = dispatch(fetchCreateRecipe(recipeData));
      //habria que mostrar que se creo o no se creo la receta
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Exito',
          textBody: 'Felicitaciones! Se ha creado correctamente una receta.',
          button: 'Cerrar',
        });

      navigation.navigate('GoDeLi');
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainApp' }],
      });  
  }
    } catch (error) {
      // Maneja errores

      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Algo salió mal',
        textBody: 'No hemos podido subir la receta :(.',
        button: 'Cerrar',
      });

      console.error('Error al crear la receta:', error);
    }

};

const handleAtrasPress = () => {
  navigation.navigate("ModalScreen2");
}


const isFatsEmpty = !fats;
const isCaloriesEmpty = !calories;
const isProteinsEmpty = !proteins;














  return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View>
            <Text style={styles.headingTypo}>Título</Text>
          </View>
          <View style={[styles.emailDisabled, styles.emailDisabledFlexBox]}>
            <TextInput
              style={[
                styles.formDefault,
                styles.formBorder,
                (!title && submitted) && styles.errorBorder // Aplica errorBorder solo si se ha enviado el formulario y el título está vacío
              ]}
                            placeholder="Titulo de la receta"
              multiline={false}
              placeholderTextColor="#4c4c4c"
              onChangeText={setTitle}
              scrollEnabled
              value={title}
            />
          </View>
        </View>

        <View style={styles.parentSpaceBlock}>
          <View style={styles.headingLayout}>
            <Text style={[styles.heading1, styles.headingLayout]}>Fotos </Text>
          </View>
          {images.map((image, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.image} />
              <TouchableOpacity
                style={styles.deleteIcon}
                onPress={() => handleDeleteImage(index)}>
                <Text style={styles.deleteIconText}>X</Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
            <Text style={styles.panelButtonTitle}>Tomar foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
            <Text style={styles.panelButtonTitle}>Elegir de la galería</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.heading2, styles.parentSpaceBlock]}>Video </Text>
        <View style={[styles.image28Parent, styles.parentSpaceBlock]}>
          <TextInput
            style={[
              styles.formDefault,
              styles.formBorder,
              (!video && submitted) && styles.errorBorder // Aplica errorBorder solo si se ha enviado el formulario y el título está vacío
            ]}            
            placeholder="Link de Youtube"
            multiline={false}
            placeholderTextColor="#4c4c4c"
            scrollEnabled
            onChangeText={setVideo}
            value={video}
          />
        </View>

        <Text style={[styles.heading2, styles.parentSpaceBlock]}>
          Descripción
        </Text>
        <View style={[styles.image28Parent, styles.parentSpaceBlock]}>
          <TextInput
              style={[
                styles.formDefault,
                styles.formBorder,
                (!description && submitted) && styles.errorBorder // Aplica errorBorder solo si se ha enviado el formulario y el título está vacío
              ]}            placeholder="Descripción de la receta"
            multiline={true}
            placeholderTextColor="#4c4c4c"
            scrollEnabled
            textAlignVertical="top"
            onChangeText={setDescription}
            value={description}
          />
        </View>

       








       

  <View>
    <Text style={styles.headingTypo}>Ingredientes</Text>
  </View>
  <View style={styles.frameContainer2}>
    <View style={[styles.formDefaultWrapper2, styles.formFlexBox2]}>
      <View style={[styles.formDefault2, styles.formBorder2, (ingredientes.length === 0 && submitted) && styles.errorBorder  ]}>
        <View style={styles.placeholderParent2}>
          <TextInput
            style={styles.placeholderTypo12}
            placeholder="Nuevo Ingrediente..."
            placeholderTextColor="#737373"
            onChangeText={setNuevoIngrediente}
            value={nuevoIngrediente} // Valor del campo de entrada

          />
          <Pressable style={styles.emailDisabled2} onPress={agregarIngrediente}>
            <View style={styles.formDefaultContainer2}>
              <View style={[styles.formDefault12, styles.formPosition2]}>
                <Image
                  style={styles.plusMathIcon2}
                  resizeMode="cover"
                  source={require("../../ui/assets/plus-math.png")}
                />
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </View>


      {/* Mostrar la lista de ingredientes */}
      {ingredientes.map((ingrediente, index) => (
        <View key={index} style={[styles.formDefaultFrame2, styles.heading1SpaceBlock2]}>
          <View style={[styles.formDefault2, styles.formBorder2]}>
            <View style={styles.placeholderParent2}>
              <Text style={[styles.placeholder12, styles.placeholderTypo2]}>
                {ingrediente}
              </Text>
              <Pressable style={styles.emailDisabled2} onPress={() => handleDeleteIngrediente(index)}>
                <View style={styles.formDefaultContainer2}>
                  <View style={[styles.formDefault32, styles.formPosition2]}>
                    <Image
                      style={styles.minusIcon2}
                      resizeMode="cover"
                      source={require("../../ui/assets/minus.png")}
                    />
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      ))}


<Text style={[styles.heading12, styles.heading1SpaceBlock2]}>Pasos</Text>
<View style={[styles.formDefaultFrame2, styles.heading1SpaceBlock2]}>
  <TextInput
    style={[
      styles.formDefault62,
      styles.placeholderTypo12,
      (!pasos && submitted) && styles.errorBorder // Aplica errorBorder solo si se ha enviado el formulario y el título está vacío
    ]}            
    placeholder="1- Paso 1, 2- Paso 2, 3- Paso 3 ..."
    multiline={true}
    placeholderTextColor="#4c4c4c"
    scrollEnabled
    textAlignVertical="top" // Establecer textAlignVertical en top
    onChangeText={setPasos}

  />
</View>

  </View>


















  <View style={styles.frameWrapper3}>
        <View>
          <Text style={styles.heading3}>Tags</Text>
        </View>
      </View>
      <View style={styles.emailDisabled3}>

      <View style={styles.WrapBotones3}>
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

      <View style={styles.frameContainer3}>
        <View>
          <Text style={[styles.heading13, styles.headingTypo3]}>Tiempo</Text>
          <View style={[styles.emailDisabled13, styles.emailDisabledFlexBox3]}>
          <TextInput
            style={[
            styles.formDefault,
            styles.formBorder,
            (!time && submitted) && styles.errorBorder // Aplica errorBorder solo si se ha enviado el formulario y el título está vacío
          ]} 
            placeholder="Min."
            multiline={false}
            placeholderTextColor="#4c4c4c"
            scrollEnabled
            keyboardType="numeric" // Establecer el teclado numérico
            onChangeText={setTime}

          />
        </View>
        </View>
        <View style={styles.headingGroup3}>
          <Text style={[styles.heading13, styles.headingTypo3]}>Platos</Text>
        <View style={[styles.emailDisabled13, styles.emailDisabledFlexBox3]}>
          <TextInput
            style={[
            styles.formDefault,
            styles.formBorder,
            (!dishes && submitted) && styles.errorBorder // Aplica errorBorder solo si se ha enviado el formulario y el título está vacío
          ]} 
            placeholder="Cant."
            multiline={false}
            placeholderTextColor="#4c4c4c"
            scrollEnabled
            keyboardType="numeric" // Establecer el teclado numérico
            onChangeText={setDishes}

          />
        </View>

        </View>
      </View>
      <Text style={[styles.heading33, styles.headingTypo3]}>
        Información Nutricional
      </Text>
      
      <View style={styles.amenties3}>

        <NutritionalInformationCard
          iconImageUrl={require("../../ui/assets/wifi.png")}
          nutritionInfo="Calorías"
          caloriesAndProteins="Kcal"
          onTextChange={handleCalories} // Pasa el manejador como una prop
          isFieldEmpty={isCaloriesEmpty} // Pasa la información sobre si el campo está vacío
          submitted={submitted} // Pasa el estado del formulario enviado

        />
        <NutritionalInformationCard
          iconImageUrl={require("../../ui/assets/wifi1.png")}
          nutritionInfo="Proteínas"
          labelText="default"
          caloriesAndProteins="gr."
          propMarginLeft={14}
          propWidth={57}
          onTextChange={handleProteins} // Pasa el manejador como una prop
          isFieldEmpty={isProteinsEmpty} // Pasa la información sobre si el campo está vacío
          submitted={submitted} // Pasa el estado del formulario enviado

        />
        <NutritionalInformationCard
          iconImageUrl={require("../../ui/assets/wifi2.png")}
          nutritionInfo="Grasas"
          caloriesAndProteins="gr."
          propMarginLeft={14}
          propWidth={57}
          onTextChange={handleFats} // Pasa el manejador como una prop
          isFieldEmpty={isFatsEmpty} // Pasa la información sobre si el campo está vacío
          submitted={submitted} // Pasa el estado del formulario enviado

        />
        



        
      </View>

      {error ? <Text style={[styles.errorText3, styles.paddiiings3]}>{error}</Text> : null}


      <View style={[styles.emailDisabledParent23, styles.emailSpaceBlock23]}>
        <View style={styles.emailDisabled223}>
          <Pressable style={[styles.formDefault323, styles.formFlexBox23]}>
            <Text style={styles.placeholder123}>Paso 3/3</Text>
          </Pressable>
        </View>

        <View style={[styles.emailDisabledGroup3, styles.emailFlexBox3]}>

          <Button
            style={[styles.formDefault423, styles.formBorder23]}
            mode="contained"
            labelStyle={styles.formDefault6Btn23}
            contentStyle={styles.formDefault6Btn123}
            onPress = {handleAtrasPress}
          >
            Anterior
          </Button>
          <Button
            style={[styles.formDefault423, styles.formBorder23]}
            mode="contained"
            labelStyle={styles.formDefault6Btn23}
            contentStyle={styles.formDefault6Btn123}
            onPress = {handleSiguientePress}
          >
            Siguiente
          </Button>
        </View>
        </View>








        <Button
      style={styles.buttonCtaNormal4}
      mode="contained"
      labelStyle={styles.buttonCTANormalBtn4}
      contentStyle={styles.buttonCTANormalBtn14}
    >Guardar cambios</Button>












      </View>
    </ScrollView>

    );
  };

  const styles = StyleSheet.create({
    
    buttonCTANormalBtn4: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "700",
      fontFamily: "Poppins-Bold",
    },
    buttonCTANormalBtn14: {
      borderRadius: 40,
      height: 65,
      width: 350,
    },
    buttonCtaNormal4: {
      shadowColor: "rgba(236, 95, 95, 0.25)",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowRadius4: 14,
      elevation: 14,
      shadowOpacity: 1,
    },
  
    emailDisabled: {
      marginLeft: 10,
      height: 33,
      width: 33,
    },
    emailDisabled4: {
      width: 86,
      height: 44,
    },

    emailDisabledGroup: {
      width: "auto",
    },
    emailDisabledParent: {
      marginTop: 12,
      alignSelf: "stretch",
      flexWrap: "wrap",
    },
    emailDisabled12: {
      flexWrap: "wrap",
      flexDirection: "row",
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
      backgroundColor: "#E84443"
    },
    emailDisabledParent2: {
      alignItems: "flex-end",
      justifyContent: "space-between",
      flexDirection: "row",
      flex: 1,
      paddingTop: "15%",

    },
    frameParent: {
      width: "100%",
      height: "100%",
      paddingVertical: 0,
      paddingHorizontal: Padding.p_mini,
      flex: 1,
    },  


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






    

  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#E84443',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },


  imageContainer: {
    position: 'relative',
    marginBottom: 10, // Espacio entre imágenes
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  deleteIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteIconText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  errorBorder: {
    borderColor: 'red',
  },
  paddiiings:{
    paddingTop: "4%",
  },
  














  



































































  scrollViewContent2: {
    flexGrow: 1,
    paddingVertical: Padding.p_mini,
  },

  formFlexBox2: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  formBorder2: {
    overflow: "hidden",
    borderColor: Color.colorDarkgray,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
  },










  formPosition2: {
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
  heading1SpaceBlock2: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  placeholderTypo2: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  placeholderTypo12: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    flex: 1,
    padding: "1%",
  },
  emailFlexBox2: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  formSpaceBlock2: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xs,
    overflow: "hidden",
    borderRadius: Border.br_7xs,
    flexDirection: "row",
  },
  headingTypo2: {
    paddingTop: "2%",
    textAlign: "left",
    color: Color.gray1,
    lineHeight: 25,
    fontSize: FontSize.headingH2_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
  },
  plusMathIcon2: {
    width: 20,
    height: 20,
  },
  formDefault12: {
    backgroundColor: Color.button1Text,
  },
  formDefaultContainer2: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 33,
    width: 33,
  },
  emailDisabled2: {
    marginLeft: 10,
    height: 33,
    width: 33,
  },
  placeholderParent2: {
    alignItems: "center",
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  formDefault2: {
    paddingVertical: Padding.p_2xs,
    flex: 1,
    overflow: "hidden",
    borderColor: Color.colorDarkgray,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xs,
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_mini,
  },
  formDefaultWrapper2: {
    flexWrap: "wrap",
    alignSelf: "stretch",
  },
  placeholder12: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 24,
    flex: 1,
  },
  minusIcon2: {
    width: 14,
    height: 14,
  },
  formDefault32: {
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
  formDefaultFrame2: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  frameContainer2: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  frameGroup2: {
    alignSelf: "stretch",
  },
  heading12: {
    textAlign: "left",
    color: Color.gray1,
    lineHeight: 25,
    fontSize: FontSize.headingH2_size,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
  },
  formDefault62: {
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


  errorBorder2: {
    borderColor: "red",

  },

  placeholder32: {
    color: Color.colorGray,
    lineHeight: 24,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
  },
  formDefault72: {
    left: 0,
    justifyContent: "center",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xs,
    top: 0,
    position: "absolute",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  emailDisabled42: {
    width: 86,
    height: 44,
  },
  placeholder52: {
    color: Color.colorWhite,
    lineHeight: 24,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
  },
  formDefault92: {
    borderColor: Color.button1Text,
    backgroundColor: Color.button1Text,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  emailDisabledGroup2: {
    width: "auto",
  },
  emailDisabledParent2: {
    marginTop: 12,
    alignSelf: "stretch",
    flexWrap: "wrap",
  },






  formDefault22: {
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
  emailDisabled122: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  placeholder122: {
    lineHeight: 24,
    color: "#8f8f8f",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
  },
  formDefault322: {
    left: 0,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 10,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
  },
  emailDisabled222: {
    width: 86,
    height: 44,
  },
  formDefault422: {
    borderColor: Color.button1Text,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    margin: "1%",
    backgroundColor: "#E84443"

  },
  emailDisabledParent22: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
  },
  frameParent2: {
    width: "100%",
    height: "100%",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    flex: 1,
  },  
  paddiiings2:{
    paddingTop: "4%",
  },


































  scrollViewContent3: {
    flexGrow: 1,
    paddingVertical: Padding.p_mini,
  },
  frameGroupFlexBox3: {
    flexWrap: "wrap",
    marginTop: 12,
    alignSelf: "stretch",
  },
  sampleTypo3: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
  },
  sampleSpaceBlock3: {
    marginLeft: 12,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
  },
  headingTypo3: {
    height: 34,
    textAlign: "left",
    color: Color.gray1,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
    lineHeight: 25,
    fontSize: FontSize.headingH2_size,
  },
  frameParent1FlexBox3: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameParentFlexBox3: {
    marginLeft: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  wifiSpaceBlock3: {
    backgroundColor: "transparent",
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
  },
  emailFlexBox3: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  emailLayout3: {
    height: 44,
    width: 86,
    justifyContent: "center",
  },
  formSpaceBlock3: {
    paddingHorizontal: Padding.p_5xs,
    overflow: "hidden",
    borderRadius: Border.br_7xs,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  placeholderTypo3: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
  },
  heading3: {
    textAlign: "left",
    color: Color.gray1,
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
    lineHeight: 25,
    fontSize: FontSize.headingH2_size,
  },
  frameWrapper3: {
    alignSelf: "stretch",
  },
  sampleButton3: {
    color: Color.colorBlack,
  },
  sampleButtonWrapper3: {
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
  sampleButtonContainer3: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray,
    marginLeft: 12,
    backgroundColor: Color.colorWhite,
  },
  sampleButton43: {
    color: Color.colorWhite,
  },
  sampleButtonWrapper13: {
    backgroundColor: Color.button1Text,
  },
  frameGroup3: {
    marginTop: 12,
    flexDirection: "row",
  },
  heading13: {
    width: 90,
  },
  formDefault3: {
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

  emailDisabled3: {
    marginTop: 6,
  },
  emailDisabled13: {
    marginTop: 5,
  },
  headingGroup3: {
    marginLeft: 15,
  },
  frameContainer3: {
    marginTop: 12,
    flexDirection: "row",
    widht: "100%"
  },
  heading33: {
    width: 236,
    marginTop: 12,
  },
  wifiIcon3: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  caloras3: {
    fontSize: FontSize.size_3xs,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: Color.lines,
    marginTop: 6,
    textAlign: "left",
  },
  emailDisabled23: {
    marginTop: 10,
  },
  frameParent13: {
    width: 92,
  },
  wifiContainer3: {
    width: 88,
  },
  frameParent33: {
    width: 92,
  },
  amenties3: {
    alignItems: "flex-end",
    marginTop: 12,
    flexDirection: "row",
  },
  placeholder3: {
    color: Color.colorGray,
  },
  formDefault53: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xs,
    backgroundColor: Color.colorWhite,
    alignSelf: "stretch",
  },
  emailDisabled53: {
    alignItems: "center",
    height: 44,
    width: 86,
  },
  placeholder23: {
    color: Color.colorWhite,
  },
  formDefault73: {
    borderColor: Color.button1Text,
    backgroundColor: Color.button1Text,
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_5xs,
  },
  emailDisabledGroup3: {
    width: 152,
  },
  emailDisabledParent3: {
    marginTop: 12,
    flexWrap: "wrap",
    alignSelf: "stretch",
  },





  formDefault23: {
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
  emailDisabled123: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  placeholder123: {
    lineHeight: 24,
    color: "#8f8f8f",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.headingH2,
    fontWeight: "600",
  },
  formDefault323: {
    left: 0,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 10,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
  },
  emailDisabled223: {
    width: 86,
    height: 44,
  },
  formDefault423: {
    borderColor: Color.button1Text,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    margin: "1%",
    backgroundColor: "#E84443",
  },
  emailDisabledParent23: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
    paddingTop: "15%",
    width: "83%",
  },

  frameParent3: {
    width: "100%",
    height: "100%",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_mini,
    flex: 1,
  },  
  WrapBotones3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    flexWrap: "wrap", // Agrega la propiedad flexWrap para permitir el envoltorio de elementos
  },


  formBorder3: {
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

  emailDisabledFlexBox3: {
    flexWrap: "wrap",
    flexDirection: "row",
  },

  errorBorder3: {
    borderColor: 'red',
  },


  paddiiings3:{
    paddingTop: "4%",
  }





    
  });
  


  export default ModalScreen;