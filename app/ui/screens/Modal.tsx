import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import ButtonCTASmall from "../components/ButtonCTASmall";
import { FontSize, Border, FontFamily, Color } from "../GlobalStyles";

function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
    <Button title="Show modal" onPress={toggleModal} />

    <Modal 
      isVisible={isModalVisible}
      swipeDirection="down" // Permite cerrar el modal deslizando hacia abajo
      onSwipeComplete={toggleModal} // Maneja el evento de deslizamiento completo para cerrar el modal
      onBackdropPress={toggleModal} // Maneja el evento de tocar fuera del modal para cerrarlo
      propagateSwipe={true} // Permite que el desplazamiento se propague a través del modal
      style={{ justifyContent: "flex-end", margin: 0 }} // Alinea el modal en la parte inferior
    >
    <View style={styles.frameParent}>
      <View style={styles.frameWrapper}>
        <View style={[styles.downBarParent, styles.downBarParentFlexBox]}>
          <View style={styles.downBar} />
          <View style={styles.header}>
            <View style={styles.text}>
              <View style={styles.textInner}>
                <View style={styles.textInner}>
                  <Text style={[styles.heading, styles.headingFlexBox]}>
                    Tipo de Comida
                  </Text>
                  <Text
                    style={[styles.subtitle, styles.subtitleLayout]}
                  >{`Elegí tus preferencias          `}</Text>
                </View>
              </View>
            </View>
          </View>
    <View style={styles.Frame1000003647}>
      <View style={styles.Frame34}>
        <Text style={styles.SampleButton}>Vegano</Text>
      </View>
      <View style={styles.Frame41}>
        <Text style={styles.SampleButton1}>Vegetariano</Text>
      </View>
      <View style={styles.Frame42}>
        <Text style={styles.SampleButton2}>Rápida preparación</Text>
      </View>
      <View style={styles.Frame43}>
        <Text style={styles.SampleButton3}>Apto Celíacos</Text>
      </View>
      <View style={styles.Frame44}>
        <Text style={styles.SampleButton4}>Estimula el Sist. Inmune</Text>
      </View>
      <View style={styles.Frame45}>
        <Text style={styles.SampleButton5}>Antiinflamatorio</Text>
      </View>
      <View style={styles.Frame46}>
        <Text style={styles.SampleButton6}>Bajo en Sodio</Text>
      </View>
      <View style={styles.Frame47}>
        <Text style={styles.SampleButton7}>Bajo en Calorías</Text>
      </View>
      <View style={styles.Frame48}>
        <Text style={styles.SampleButton8}>Promueve Flora Intestinal</Text>
      </View>
    </View>


          <View style={[styles.form, styles.formFlexBox]}>
            <View style={[styles.buttonCtaNormal, styles.downBarParentFlexBox]}>
              <View style={styles.baseBackground} />
              <Text style={[styles.sampleButton, styles.subtitleLayout]}>
                Buscar
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    </Modal>
  </View>
);
}

const styles = StyleSheet.create({
    downBarParentFlexBox: {
      flex: 1,
      alignSelf: "stretch",
    },
    headingFlexBox: {
      textAlign: "left",
      alignSelf: "stretch",
    },
    subtitleLayout: {
      lineHeight: 24,
      fontSize: FontSize.bodyNormalRegular_size,
    },
    formFlexBox: {
      flexWrap: "wrap",
      marginTop: 25,
      flexDirection: "row",
      alignSelf: "stretch",
      backgroundColor: "c4c4c4",

    },
    downBar: {
      backgroundColor: "#c4c4c4",
      width: 88,
      height: 11,
      borderRadius: Border.br_21xl,
    },
    heading: {
      fontSize: FontSize.headingH2_size,
      lineHeight: 25,
      fontWeight: "600",
      fontFamily: FontFamily.headingH2,
      color: Color.gray1,
      height: 34,
    },
    subtitle: {
      fontFamily: FontFamily.bodyNormalRegular,
      color: Color.neutralGray2,
      height: 32,
      marginTop: 6,
      textAlign: "left",
      alignSelf: "stretch",
    },
    textInner: {
      alignSelf: "stretch",
    },
    text: {
      alignItems: "flex-end",
      alignSelf: "stretch",
    },
    header: {
      marginTop: 25,
      alignItems: "flex-end",
      alignSelf: "stretch",
    },
    baseBackground: {
      height: "100%",
      width: "100%",
      top: "0%",
      right: "0%",
      bottom: "0%",
      left: "0%",
      borderRadius: Border.br_5xs,
      backgroundColor: Color.button1Text,
      position: "absolute",
    },
    sampleButton: {
      top: "28.64%",
      left: "41.66%",
      fontWeight: "700",
      fontFamily: FontFamily.poppinsBold,
      color: Color.neutralWhite,
      textAlign: "center",
      position: "absolute",
    },
    buttonCtaNormal: {
      shadowColor: "rgba(236, 95, 95, 0.25)",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowRadius: 14,
      elevation: 14,
      shadowOpacity: 1,
      borderRadius: Border.br_21xl,
    },
    form: {
      height: 65,
      justifyContent: "center",
    },
    downBarParent: {
      alignItems: "center",
      paddingHorizontal: 8,
      paddingVertical: 0,
    },
    frameWrapper: {
      flexDirection: "row",
      alignSelf: "stretch",
    },
    frameParent: {
      borderTopLeftRadius: Border.br_21xl,
      borderTopRightRadius: Border.br_21xl,
      backgroundColor: Color.neutralWhite,
      width: 412,
      height: 582,
      paddingHorizontal: 29,
      paddingVertical: 22,
      maxWidth: "100%",
      maxHeight: "100%",
    },
    
  Frame1000003647: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: 40,
    flexWrap: 'wrap', // Agrega la propiedad flexWrap para permitir el envoltorio de elementos

  },
  Frame34: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: "3%",
  
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(175,175,175,1)",
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,1)",
  },
  SampleButton: {
    color: "rgba(0,0,0,1)",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
  },
  Frame41: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: 12,
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: "rgba(175,175,175,1)",
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,1)",
  },
  SampleButton1: {
    color: "rgba(0,0,0,1)",
    fontWeight: "600",
    fontSize: 14,
  },
  Frame42: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: 12,
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: "rgba(175,175,175,1)",
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,1)",
  },
  SampleButton2: {
    color: "rgba(0,0,0,1)",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
  },
  Frame43: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: 12,
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: "rgba(175,175,175,1)",
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,1)",
  },
  SampleButton3: {
    color: "rgba(0,0,0,1)",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
  },
  Frame44: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: 12,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    backgroundColor: "rgba(232,68,67,1)",
  },
  SampleButton4: {
    color: "rgba(255,255,255,1)",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
  },
  Frame45: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: 12,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    backgroundColor: "rgba(232,68,67,1)",
  },
  SampleButton5: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
  },
  Frame46: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: 12,
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: "rgba(175,175,175,1)",
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,1)",
  },
  SampleButton6: {
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    height: "100%",

  },
  Frame47: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    marginRight: 12,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    backgroundColor: "rgba(232,68,67,1)",
  },
  SampleButton7: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
  },
  Frame48: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: "rgba(175,175,175,1)",
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,1)",
  },
  SampleButton8: {
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    fontFamily: "Poppins",
    fontWeight: "600",
  },



  });

  
export default ModalTester;