import * as React from "react";
import { Image, StyleSheet, View, Text, TextInput } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { Button } from "react-native-paper";
import axios from 'axios'; // Asegúrate de importar axios si lo estás usando en la función
import {store} from '../../redux/store'
import userWS from '../../networking/api/endpoints/userWS';


const Perfil = () => {

  const [recetas, setRecetas] = React.useState([]);

    const handlerHealth3 = async () => {
      try {
        console.log("hola1")
        setClientToken(store.getState().auth.session.accessToken)
        const response = await userWS.getMyRec(store.getState().auth.user.id);
        console.log("hola2")
        
        console.log(response.data);
        setRecetas(response.data);
        console.log(recetas[0].images[0].secure_url)
      } catch (error) {
        console.log(error.response);
      }
    };
  
    useEffect(() => {
      handlerHealth3();
    }, []);

  const handlerA = () => {
    
  }






  return (
    <View style={styles.perfil}>
      <View style={styles.groupParent}>
        <View style={styles.frameWrapper}>
          <View style={[styles.frameContainer, styles.frameContainerPosition]}>
            <View style={styles.ellipseParent}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/ellipse-1.png")}
              />
              <Image
                style={styles.image392}
                resizeMode="cover"
                source={require("../assets/image-39-2.png")}
              />
            </View>
          </View>
        </View>
        <Text style={styles.carlitosBal}>Carlitos Balá</Text>
        <Text style={styles.cbalauadeeduio}>cbala@uade.edu.io</Text>
        <Image
          style={[styles.frameItem, styles.lineIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-1000003479.png")}
        />
        <Text style={styles.tusDatos}>Tus datos</Text>
        <TextInput
          style={[styles.frameInner, styles.frameBorder]}
          placeholder="Carlitos Balá"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.frameTextinput, styles.frameBorder]}
          placeholder="cbala@uade.edu.io"
          placeholderTextColor="#6a6767"
        />
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.rectangleParent, styles.groupLayout]}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            
            <Button
                  mode="contained"
                  onPress={handlerA}
                  >   
                  <Text>
                    Guardar Cambios
                  </Text>
                </Button>
          </View>
        </View>
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          resizeMode="cover"
          source={require("../assets/line-3.png")}
        />
        <Text style={styles.tusDatos}>Cuenta</Text>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.rectangleParent, styles.groupLayout]}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <Button
                  mode="contained"
                  onPress={handlerA}
                  >   
                  <Text>
                    Cerrar sesión
                  </Text>
                </Button>
          </View>
        </View>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Button
                  mode="contained"
                  onPress={handlerA}
                  >   
                  <Text style={styles.eliminarCuenta}>
                    Eliminar cuenta
                  </Text>
                </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameContainerPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  lineIconLayout: {
    height: 0,
    marginTop: 14,
  },
  frameBorder: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_7xl,
    borderColor: Color.borders2,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    fontSize: FontSize.size_sm,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.button2Text,
  },
  groupLayout: {
    height: 34,
    width: 181,
  },
  cerrarSesinTypo: {
    color: Color.button1Text,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 5,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
  },
  frameChild: {
    width: 88,
    height: 86,
  },
  image392: {
    borderRadius: 100,
    width: 33,
    height: 33,
    marginLeft: -19,
    overflow: "hidden",
  },
  ellipseParent: {
    justifyContent: "center",
    flexDirection: "row",
  },
  frameContainer: {
    width: 298,
    paddingLeft: 154,
    paddingRight: 139,
    justifyContent: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    height: 86,
    alignSelf: "stretch",
  },
  carlitosBal: {
    marginTop: 14,
    textAlign: "center",
    color: Color.primaryText,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  cbalauadeeduio: {
    color: "#6a6868",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    marginTop: 14,
    textAlign: "center",
    lineHeight: 24,
  },
  frameItem: {
    width: 231,
  },
  tusDatos: {
    textAlign: "left",
    marginTop: 14,
    color: Color.primaryText,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  frameInner: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_7xl,
    borderColor: Color.borders2,
  },
  frameTextinput: {
    fontFamily: FontFamily.poppinsRegular,
  },
  groupChild: {
    borderColor: Color.button1Text,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    width: 181,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.button2Text,
  },
  guardarCambios: {
    left: 29,
  },
  rectangleParent: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupWrapper: {
    marginTop: 14,
  },
  lineIcon: {
    width: 242,
  },
  cerrarSesin: {
    left: 44,
  },
  groupInner: {
    backgroundColor: Color.button1Text,
    borderColor: "#ff0000",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    width: 181,
    left: 0,
    top: 0,
    position: "absolute",
  },
  eliminarCuenta: {
    left: 35,
    color: Color.button2Text,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 5,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
  },
  groupParent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  perfil: {
    width: 410,
    height: 684,
    paddingHorizontal: 56,
    paddingVertical: 0,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.button2Text,
  },
});

export default Perfil;
