import React, { useState } from "react";
import {Text, View, StyleSheet} from "react-native";
import Modal from "react-native-modal";
import CustomButton from "./CustomButtonModal";
import { FontSize, Border, FontFamily, Color } from "../GlobalStyles";
import { Button } from "react-native-paper";

interface ButtonStates {
  [key: string]: boolean;
}

const ModalTester: React.FC<{
  isVisible: boolean;
  toggleModal: () => void;
  setSelectedFilters: (filters: any) => void;
  selectedFilters: any;
  onFilterSearch: () => void; // Esto es nuevo
}> = ({ isVisible, toggleModal, setSelectedFilters, selectedFilters, onFilterSearch }) => {
  const [buttonStates, setButtonStates] = useState<ButtonStates>({
    Vegano: false,
    Vegetariano: false,
    'Rápida preparación': false,
    'Apto Celíacos': false,
    'Estimula el Sist. Inmune': false,
    Antiinflamatorio: false,
    'Bajo en Sodio': false,
    'Bajo en Calorías': false,
    'Promueve Flora Intestinal': false,
  });

  const handleButtonPress = (buttonText: string) => {
    setButtonStates((prevButtonStates) => {
      const updatedButtonStates = {
        ...prevButtonStates,
        [buttonText]: !prevButtonStates[buttonText],
      };
      setSelectedFilters(updatedButtonStates);
      return updatedButtonStates;
    });
  };
  

  const onPress = () => {
    onFilterSearch();
};


  return (
    <View style={{ flex: 1 }}>

      <Modal
        isVisible={isVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        onBackdropPress={toggleModal}
        propagateSwipe={true}
        style={{ justifyContent: "flex-end", margin: 0 }}
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
                      <Text style={[styles.subtitle, styles.subtitleLayout]}>
                        {`Elegí tus preferencias          `}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.WrapBotones}>
                {Object.keys(buttonStates).map((buttonText, index) => (
                  <CustomButton
                    key={index}
                    text={buttonText}
                    onPress={() => handleButtonPress(buttonText)}
                    isPressed={buttonStates[buttonText]}
                  />
                ))}
              </View>
              <Button
                  mode="contained"
                  onPress={onPress}
                  >   
                  <Text>
                    Buscar
                  </Text>
                </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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

  WrapBotones: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    flexWrap: "wrap", // Agrega la propiedad flexWrap para permitir el envoltorio de elementos
  },
});

export default ModalTester;
