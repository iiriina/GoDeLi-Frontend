import * as React from "react";
import { StyleSheet, View, Text, Image, ScrollView,Alert,Button, Platform,TouchableOpacity  } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import  NotificationComponent  from '../components/NotificationComponent';
{/*import  Carrousel  from '../components/Carrousel';*/}
import { TextInput } from 'react-native-paper';
import YoutubePlayer from 'react-native-youtube-iframe';
import Carrousel from "../components/Carrousel";
import ImagePicker from 'react-native-image-crop-picker';
import Header from '../components/Header'


const Perfil = () => {

  const [image, setImage] = React.useState('https://api.adorable.io/avatars/80/abott@adorable.png');

  // ENTRAR A LA GALERÍA Y SUBIR FOTOS - CAMARA

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
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
      setImage(image.path);
      // @ts-ignore: Object is possibly 'undefined'.
      this.bs.current.snapTo(1); 
      
    });
  }
  






  // ------------------------------------------



  const [text, setText] = React.useState("");

  const [playing, setPlaying] = React.useState(false);

  const onStateChange = React.useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);
  
  const togglePlaying = React.useCallback(() => {
    setPlaying((prev: any) => !prev);
  }, []);


  

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
    <View style={styles.perfil}>
      
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={styles.eliminarCuenta}>Eliminar cuenta</Text>
      </View>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.cerrarSesin, styles.cerrarSesinTypo]}>
            Cerrar sesión
          </Text>
        </View>
        <View style={[styles.tusDatosParent, styles.parentLayout]}>
          <Text style={[styles.tusDatos, styles.carlitosTypo]}>Tus datos</Text>
          <Text style={[styles.cuenta, styles.carlitosTypo]}>Cuenta</Text>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <View style={[styles.rectangleView, styles.groupInnerLayout]} />
          <Text style={[styles.carlitosBal, styles.carlitosTypo]}>
            Carlitos Balá
          </Text>
          <Text style={[styles.cbalauadeeduio, styles.cbalauadeeduioTypo]}>
            cbala@uade.edu.io
          </Text>
        </View>
        <View style={[styles.carlitosBalParent, styles.lineIconLayout]}>
          <Text style={[styles.carlitosBal1, styles.carlitosTypo]}>
            Carlitos Balá
          </Text>
          <Text style={[styles.cbalauadeeduio1, styles.cbalauadeeduioTypo]}>
            cbala@uade.edu.io
          </Text>
          <View style={styles.lineView} />
          <Image
            style={[styles.lineIcon, styles.lineIconLayout]}
            resizeMode="cover"
            source={require("../assets/line-3.png")}
          />
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
        </View>
      </View>
      <Image
        style={styles.perfilChild}
        resizeMode="cover"
        source={require("../assets/group-2608551.png")}
      />
      <View style={[styles.perfilInner, styles.rectangleLayout]}>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.guardarCambios, styles.cerrarSesinTypo]}>
            Guardar cambios
          </Text>
        </View>
      </View>
      <Image
        style={styles.image392}
        resizeMode="cover"
        source={require("../assets/image-39-2.png")}
      />
    </View>
    <NotificationComponent/>
    
    <View>

      <Carrousel/>

    </View>

    <View>
          <YoutubePlayer
            height={300}
            play={playing}
            videoId={'dQw4w9WgXcQ'}
            onChangeState={onStateChange}
          />
          <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
        </View>


        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
    </View>

    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        // @ts-ignore: Object is possibly 'undefined'.
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>


    <View>
  <Image source={{ uri: image }} />
</View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 34,
    width: 181,
    position: "absolute",
  },
  groupLayout: {
    borderWidth: 1,
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    left: 0,
    top: 0,
    height: 34,
    width: 181,
    position: "absolute",
  },
  parentLayout: {
    width: 305,
    position: "absolute",
  },
  cerrarSesinTypo: {
    color: Color.button1Text,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_sm,
    top: 5,
    position: "absolute",
  },
  carlitosTypo: {
    color: Color.primaryText,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 37,
    width: 303,
    borderColor: Color.borders2,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    position: "absolute",
    backgroundColor: Color.background,
  },
  cbalauadeeduioTypo: {
    color: Color.tertiaryText,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  lineIconLayout: {
    width: 242,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.button1Text,
    borderColor: "#ff0000",
  },
  eliminarCuenta: {
    left: 35,
    color: Color.background,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    top: 5,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  rectangleParent: {
    top: 583,
    left: 117,
  },
  groupItem: {
    borderColor: Color.button1Text,
    backgroundColor: Color.background,
  },
  cerrarSesin: {
    left: 44,
  },
  rectangleGroup: {
    top: 433,
    left: 60,
  },
  tusDatos: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
  },
  cuenta: {
    top: 222,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
  },
  groupInner: {
    top: 44,
    left: 2,
  },
  rectangleView: {
    top: 101,
    left: 1,
  },
  carlitosBal: {
    top: 51,
    left: 17,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  cbalauadeeduio: {
    top: 108,
    left: 16,
  },
  tusDatosParent: {
    top: 176,
    height: 246,
    left: 0,
  },
  carlitosBal1: {
    top: 96,
    left: 68,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  cbalauadeeduio1: {
    top: 120,
    left: 51,
  },
  lineView: {
    top: 154,
    left: 5,
    borderColor: "#c9c9c9",
    borderTopWidth: 1,
    width: 232,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  lineIcon: {
    top: 386,
    height: 0,
    left: 0,
  },
  ellipseIcon: {
    left: 76,
    width: 88,
    height: 86,
    top: 0,
    position: "absolute",
  },
  carlitosBalParent: {
    left: 31,
    height: 386,
    top: 0,
  },
  groupParent: {
    left: 56,
    height: 467,
    top: 103,
  },
  perfilChild: {
    marginLeft: -207,
    bottom: 42,
    left: "50%",
    width: 412,
    height: 38,
    position: "absolute",
  },
  guardarCambios: {
    left: 29,
  },
  rectangleContainer: {
    left: 0,
    top: 0,
  },
  perfilInner: {
    top: 437,
    left: 118,
  },
  image392: {
    left: 229,
    borderRadius: 100,
    width: 33,
    height: 33,
    top: 103,
    position: "absolute",
    overflow: "hidden",
  },
  perfil: {
    flex: 1,
    width: "100%",
    height: 721,
    overflow: "hidden",
    backgroundColor: Color.background,
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







});

export default Perfil;
