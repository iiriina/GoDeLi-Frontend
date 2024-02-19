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
import React, { useState } from "react";

const ModalScreen = ({ navigation }) => {


  const [images, setImages] = React.useState([]);
  // ENTRAR A LA GALERÍA Y SUBIR FOTOS - CAMARA
  console.log(images);
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      //setImage(image.path);
      setImages([...images, image.path]); // Agregar la nueva imagen al array

      // @ts-ignore: Object is possibly 'undefined'.
      this.bs.current.snapTo(1);
    });
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      //setImage(image.path);
      setImages([...images, image.path]); // Agregar la nueva imagen al array

      // @ts-ignore: Object is possibly 'undefined'.
      this.bs.current.snapTo(1); 
      
    });
  }

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

  // Función para manejar el botón de "Siguiente"
  const handleSiguientePress = () => {
    // Llama a la acción updateParteUno con los datos de la primera pantalla
    dispatch(updateParteUno({ title, description, video, images }));
    // Navega a la siguiente pantalla
    navigation.navigate("ModalScreen2");
  };

    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

    <View style={styles.frameParent}>

 
    <View style={styles.frameGroup}>
        <View>
          <Text style={styles.headingTypo}>Título</Text>
        </View>
        <View style={[styles.emailDisabled, styles.emailDisabledFlexBox]}>
          <TextInput
            style={[styles.formDefault, styles.formBorder]}
            placeholder="Titulo de la receta"
            multiline={false}
            placeholderTextColor="#4c4c4c"
            onChangeText={setTitle}
            scrollEnabled
            
          />
        </View>
    </View> 


      <View style={styles.parentSpaceBlock}>
        <View style={styles.headingLayout}>
          <Text style={[styles.heading1, styles.headingLayout]}>Fotos</Text>
        </View>


        <View>
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
      </View>


      <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Tomar foto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Elegir de la galería</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        // @ts-ignore: Object is possibly 'undefined'.
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>

    </View>


      <Text style={[styles.heading2, styles.parentSpaceBlock]}>Video</Text>
      <View style={[styles.image28Parent, styles.parentSpaceBlock]}>
        <TextInput
          style={[styles.formDefault, styles.formBorder]}
          placeholder="Link de Youtube"
          multiline={false}
          placeholderTextColor="#4c4c4c"
          scrollEnabled
          onChangeText={setVideo}

        />
      </View>
      <Text style={[styles.heading2, styles.parentSpaceBlock]}>
        Descripción
      </Text>
      <View style={[styles.image28Parent, styles.parentSpaceBlock]}>
        <TextInput
          style={[styles.formDefault3, styles.formBorder]}
          placeholder="Descripción de la receta"
          multiline={true}
          placeholderTextColor="#4c4c4c"
          scrollEnabled
          textAlignVertical="top" // Establecer textAlignVertical en top
          onChangeText={setDescription}

        />
      </View>
    
    <View style={[styles.emailDisabledParent2, styles.emailSpaceBlock2]}>
      <View style={styles.emailDisabled22}>
        <Pressable style={[styles.formDefault32, styles.formFlexBox2]}>
          <Text style={styles.placeholder12}>Paso 1/3</Text>
        </Pressable>
      </View>

      <View style={[styles.emailDisabledGroup, styles.emailFlexBox]}>
        <Button
          style={[styles.formDefault42, styles.formBorder2]}
          mode="contained"
          labelStyle={styles.formDefault6Btn2}
          contentStyle={styles.formDefault6Btn12}
          onPress={handleSiguientePress}

        >
          Siguiente
        </Button>
      </View>

      
    </View>
    <Button onPress={() => navigation.navigate('ModalScreen2')} />

  </View>

  </ScrollView>

    );
  };

  const styles = StyleSheet.create({
    

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
    backgroundColor: '#FF6347',
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


    
  });
  


  export default ModalScreen;