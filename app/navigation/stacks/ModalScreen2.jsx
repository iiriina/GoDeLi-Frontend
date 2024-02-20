import { View, Modal, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import { FontSize, FontFamily, Padding, Color, Border } from "../../ui/GlobalStyles";
import React, { useState } from "react";
import { useDispatch } from 'react-redux'; // Importa useDispatch
import { updateParteDos } from '../../redux/slices/CrearRecetaSlice';

const ModalScreen = ({ navigation }) => {

  const dispatch = useDispatch(); // Obtiene la función dispatch

  const [pasos, setPasos] = useState('');
  const [ingredientes, setIngredientes] = useState([]);
  const [nuevoIngrediente, setNuevoIngrediente] = useState('');

  console.log(pasos);
  console.log(ingredientes);
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
  
/*
    // Función para manejar el botón de "Siguiente"
    const handleSiguientePress = () => {
      // Llama a la acción updateParteUno con los datos de la segunda pantalla
      dispatch(updateParteDos({ ingredientes, pasos }));
      // Navega a la siguiente pantalla
      navigation.navigate("ModalScreen3");
    };
*/


    const [error, setError] = useState('');

    const [submitted, setSubmitted] = useState(false); // Estado para rastrear si se ha enviado el formulario

    const handleSiguientePress = () => {
      if (!pasos || ingredientes.length === 0) {
        setError(' *   Todos los campos son obligatorios');
        setSubmitted(true); // Marca el formulario como enviado
      } else {
        setError('');
        setSubmitted(true); // Marca el formulario como enviado
        dispatch(updateParteDos({ ingredientes, pasos }));
        navigation.navigate("ModalScreen3");
      }
    };
    
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

      <View style={styles.frameParent}>

      <View style={styles.frameGroup}>

        <View>
          <Text style={styles.headingTypo}>Ingredientes</Text>
        </View>
        <View style={styles.frameContainer}>
          <View style={[styles.formDefaultWrapper, styles.formFlexBox]}>
            <View style={[styles.formDefault, styles.formBorder, (ingredientes.length === 0 && submitted) && styles.errorBorder  ]}>
              <View style={styles.placeholderParent}>
                <TextInput
                  style={styles.placeholderTypo1}
                  placeholder="Nuevo Ingrediente..."
                  placeholderTextColor="#737373"
                  onChangeText={setNuevoIngrediente}
                  value={nuevoIngrediente} // Valor del campo de entrada

                />
                <Pressable style={styles.emailDisabled} onPress={agregarIngrediente}>
                  <View style={styles.formDefaultContainer}>
                    <View style={[styles.formDefault1, styles.formPosition]}>
                      <Image
                        style={styles.plusMathIcon}
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
              <View key={index} style={[styles.formDefaultFrame, styles.heading1SpaceBlock]}>
                <View style={[styles.formDefault, styles.formBorder]}>
                  <View style={styles.placeholderParent}>
                    <Text style={[styles.placeholder1, styles.placeholderTypo]}>
                      {ingrediente}
                    </Text>
                    <Pressable style={styles.emailDisabled} onPress={() => handleDeleteIngrediente(index)}>
                      <View style={styles.formDefaultContainer}>
                        <View style={[styles.formDefault3, styles.formPosition]}>
                          <Image
                            style={styles.minusIcon}
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




        </View>
      </View>
      <Text style={[styles.heading1, styles.heading1SpaceBlock]}>Pasos</Text>
      <View style={[styles.formDefaultFrame, styles.heading1SpaceBlock]}>
        <TextInput
          style={[
            styles.formDefault6,
            styles.placeholderTypo1,
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




      {error ? <Text style={[styles.errorText, styles.paddiiings]}>{error}</Text> : null}


      <View style={[styles.emailDisabledParent2, styles.emailSpaceBlock2]}>
        
        <View style={styles.emailDisabled22}>
          <Pressable style={[styles.formDefault32, styles.formFlexBox2]}>
            <Text style={styles.placeholder12}>Paso 2/3</Text>
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
            onPress = {handleSiguientePress}
          >
            Siguiente
          </Button>
        </View>

        
      </View>

    </View>

    </ScrollView>

    );
  };


  const styles = StyleSheet.create({
    scrollViewContent: {
      flexGrow: 1,
      paddingVertical: Padding.p_mini,
    },

    formFlexBox: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    formBorder: {
      overflow: "hidden",
      borderColor: Color.colorDarkgray,
      backgroundColor: Color.colorWhite,
      borderRadius: Border.br_7xs,
      borderWidth: 1,
      borderStyle: "solid",
      flexDirection: "row",
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
      padding: "1%",
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
      paddingTop: "2%",
      textAlign: "left",
      color: Color.gray1,
      lineHeight: 25,
      fontSize: FontSize.headingH2_size,
      fontFamily: FontFamily.headingH2,
      fontWeight: "600",
    },
    plusMathIcon: {
      width: 20,
      height: 20,
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


    errorBorder: {
      borderColor: "red",

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
      width: "auto",
    },
    emailDisabledParent: {
      marginTop: 12,
      alignSelf: "stretch",
      flexWrap: "wrap",
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
    },
    frameParent: {
      width: "100%",
      height: "100%",
      paddingVertical: 0,
      paddingHorizontal: Padding.p_mini,
      flex: 1,
    },  
    paddiiings:{
      paddingTop: "4%",
    }
  

    
  });

  export default ModalScreen;