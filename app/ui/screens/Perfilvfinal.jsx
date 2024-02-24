import {useState, useEffect} from "react";
import { Image, StyleSheet, View, Text, TextInput,TouchableOpacity, ScrollView } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { Button, Headline } from "react-native-paper";
import axios from 'axios'; // Asegúrate de importar axios si lo estás usando en la función
import {store} from '../../redux/store'
import userWS from '../../networking/api/endpoints/userWS';
import healthWS from '../../networking/api/endpoints/healthWS';
import recipeWS from '../../networking/api/endpoints/recipeWS';
import {setClientToken, clearClientToken} from '../../networking/api/Api'
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogout, logoutAction, updateUser  } from '../../redux/slices/AuthSlice';
import ImagePicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'rn-fetch-blob';
import Toast from 'react-native-toast-message';
import { AlertNotificationRoot, Dialog, ALERT_TYPE } from 'react-native-alert-notification';


const Perfil = () => {
    
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handlerHealth3 = async () => {
      try {
        const response = await userWS.get(store.getState().auth.user.id);
        setUser(response.data)
        console.log(response.data)
        setName(response.data.name);
        setEmail(response.data.email);
        setImage(response.data.image);
        
        
      } catch (error) {
        console.log(error.response);
      }
    };
  
    useEffect(() => {
      handlerHealth3();
    }, []);



    const handleGuardarCambios = async () => {
      try {
        if (!name === 0) {
            setError('El nombre no puede quedar en blanco');
            setSubmitted(true); 
            return;
          } else {
            setError('');
            setSubmitted(true); 
            const response = await userWS.modify(store.getState().auth.user.id, name, email, image, store.getState().auth.favs);
            


            if (response.status === 200 || response.status === 201) {
              aux = {
                id: store.getState().auth.user.id,
                name: name,
                email: email,
                photo: image,
              }
              store.dispatch(updateUser(aux));
            
            
              Toast.show({
                type: 'success',
                text1: 'Exito',
                text2: 'Se han guardado los cambios',
                visibilityTime: 2000,
                onPress: () =>{
                  Toast.hide()
                }

              })
          

            
            ;} else {

              Toast.show({
                type: 'error',
                text1: 'Lo sentimos',
                text2: 'Ocurrió un error al actualizar',
                visibilityTime: 2000,
                onPress: () =>{
                  Toast.hide()
                }

              })

            }

      }
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Lo sentimos',
          text2: 'Ocurrió un error al actualizar',
          visibilityTime: 2000,
          onPress: () =>{
            Toast.hide()
          }

        });
}
      
        
      
    };


    
  const dispatch = useDispatch();

  const handleLogout = (googleId) => {
    dispatch(fetchLogout({ googleId }));
  };



  const handlerLogout = async () => {
    try {
      setClientToken(store.getState().auth.session.refreshToken);
      handleLogout(store.getState().auth.user.id);
    } catch (error) {
      console.log(error.response);
    }
  }



  const handlerA = () => {
    console.log(image)
  }

  const handlerDeleteAccount = async () => {
    try {
        await userWS.delete(store.getState().auth.user.id);
        store.dispatch(logoutAction());        
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Exito',
          textBody: 'La cuenta fue eliminada con éxito. Esperamos volver a verte pronto!',
          button: 'Cerrar',
        });
        

    } catch (error) {
      console.log(error);
    }
    
  }

  const handlerQuiereBorrarSuCuenta = async () => {

    Dialog.show({
      type: ALERT_TYPE.DANGER,
      title: '¿Deseas eliminar tu cuenta?',
      textBody: 'Toca fuera para Cancelar',
      button: 'Eliminar',
      onPressButton: () => {
        handlerDeleteAccount();
      }
    });


    
  }




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
          setImage(base64Image);
        })
        .catch(error => console.log(error));
    }).catch(error => console.log(error));
  };







  return (
    <ScrollView style={{backgroundColor: "#fff"}} >
    <View style={[styles.perfil, { flex: 1, widht: "100%", justifyContent:"center", alignContent:"center" }]}>
      <View style={styles.groupParent}>
        <View style={styles.frameWrapper}>
          <View style={[styles.frameContainer, styles.frameContainerPosition]}>
            <View style={styles.ellipseParent}>
            {image ? (
                <Image
                  style={styles.frameChild}
                  resizeMode="cover"
                  source={{ uri: image }}
                />
              ) : null}
              <TouchableOpacity onPress={choosePhotoFromLibrary}>
              <Image
                style={styles.image392}
                resizeMode="cover"
                source={require("../assets/image-39-2.png")}
              /></TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={styles.carlitosBal}>{name}</Text>
        <Text style={styles.cbalauadeeduio}>{email}</Text>

        <Image
          style={[styles.frameItem, styles.lineIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-1000003479.png")}
        />
        <Text style={styles.tusDatos}>Tus datos</Text>
        {error ? <Text style={[styles.errorText, styles.paddiiings]}>{error}</Text> : null}
        <TextInput
          style={[styles.frameInner, styles.frameBorder]}

          placeholder={name}
          onChangeText={setName}

          placeholderTextColor="#000"
          value={name}

        />
        <TextInput
          style={[styles.frameTextinput, styles.frameBorder]}


          placeholderTextColor="#6a6767"
          ellipsizeMode='head' // Cambia 'tail' por 'head' aquí
          editable={false}
          value={email}
          placeholder={email}
          
        />
            
            <Button
              style={[styles.formDefault43, styles.formBorder2]}
              mode="contained"
              labelStyle={{ color: '#E84443' }} // Aquí estableces el color del texto en rojo
              contentStyle={styles.formDefault6Btn12}
              onPress={handleGuardarCambios}
            >
              Guardar Cambios
            </Button>

         
       
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          resizeMode="cover"
          source={require("../assets/line-3.png")}
        />
        <Text style={styles.tusDatos}>Cuenta</Text>
          
        <Button
              style={[styles.formDefault43, styles.formBorder2]}
              mode="contained"
              onPress={handlerLogout}
              labelStyle={{ color: '#E84443' }} // Aquí estableces el color del texto en rojo
              contentStyle={styles.formDefault6Btn12}

            >
              Cerrar Sesión
            </Button>

            <Button
              style={[styles.formDefault42, styles.formBorder2]}
              mode="contained"
              onPress={handlerQuiereBorrarSuCuenta}
              labelStyle={styles.formDefault6Btn2}
              contentStyle={styles.formDefault6Btn12}

            >
              Eliminar cuenta
            </Button>


      </View>
    </View>
    </ScrollView>
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
    borderRadius:100,
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
    width: "100%",
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
    paddingTop: "10%"
  },
  perfil: {
    paddingHorizontal: "10%",
    paddingVertical: 0,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.button2Text,
  },
  formDefault42: {
    borderColor: Color.button1Text,
    marginTop:"10%",
    overflow: "hidden",
    borderWidth: 2,
    borderStyle: "solid",
    margin: "1%",
    backgroundColor: "#E84443",
    borderRadius: 8,
    width: "55%"
  },
  formDefault43: {
    borderColor: Color.button1Text,
    marginTop:"10%",
    overflow: "hidden",
    borderWidth: 2,
    borderStyle: "solid",
    margin: "1%",
    backgroundColor: "#FFF",
    borderRadius: 8 ,
    width: "55%"

  },

  
});

export default Perfil;
