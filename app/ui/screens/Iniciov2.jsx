import * as React from "react";
import { Image, StyleSheet, View, Text, ScrollView,Button} from "react-native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
  } from '@react-native-google-signin/google-signin';


const Frame = ({ navigation }) => {
  
  const handleSignInWithGoogle = () => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainApp' }],
      });
  };

  const [loggedIn, setloggedIn] = React.useState(false);
  const [userInfo, setuserInfo] = React.useState([]);

  _signIn = async () => {
    console.log('333333333333')
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      console.log(accessToken)
      console.log(idToken)
      console.log('asdasdasdasdasd')
      setloggedIn(true);
    } catch (error) {
      console.log(error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  React.useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email','profile'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '798826375665-qdn9hecbboatcou52t4p9sssurdahejf.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setloggedIn(false);
      setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
   

    <View style={styles.iniciarSesinParent}>
      <View style={styles.iniciarSesin}>
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/frame-4.png")}
            />
            <View style={styles.frameItem} />
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.image391Wrapper}>
              <View style={styles.image391}>
                <Image
                  style={[styles.vectorIcon, styles.vectorIconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/vector.png")}
                />
                <Image
                  style={[styles.vectorIcon1, styles.vectorIconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/vector1.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/vector2.png")}
                />
                <Image
                  style={[styles.vectorIcon3, styles.vectorIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon4, styles.vectorIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/vector4.png")}
                />
              </View>
            </View>
            <View style={styles.frameView}>
              <View>
                <Text style={[styles.bienvenido, styles.bienvenidoClr]}>
                  ¡Bienvenido!
                </Text>
                <Text
                  style={[styles.loQueQuers, styles.bienvenidoClr]}
                >{`Lo que querés cocinar, 
lo encontrás acá, en GoDeLi.`}</Text>
              </View>



                  <View style={styles.body}>
                <View style={styles.sectionContainer}>
                  <GoogleSigninButton
                    style={{width: 192, height: 48}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  {!loggedIn && <Text>You are currently logged out</Text>}
                  {loggedIn && (
                    <Button
                      onPress={this.signOut}
                      title="LogOut"
                      color="red"></Button>
                  )}
                </View>
              </View>





              <View>
                   <Button title="AVANZAR" onPress={handleSignInWithGoogle} />
              </View>







            </View>
          </View>
        </View>
        <View style={[styles.iniciarSesinChild, styles.iniciarLayout]} />
        <View style={[styles.iniciarSesinItem, styles.iniciarLayout]} />
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({

    scrollViewContent: {
    flexGrow: 1,
    
  },

  vectorIconLayout1: {
    width: 124,
    height: 124,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bienvenidoClr: {
    color: Color.primaryText,
    textAlign: "left",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  logInWithTypo: {
    fontFamily: FontFamily.bodyNormalMedium,
    fontWeight: "500",
  },
  iniciarLayout: {
    borderRadius: Border.br_981xl,
    right: -219,
    height: 412,
    width: 373,
    position: "absolute",
  },
  frameChild: {
    top: 310,
    left: 68,
    width: 72,
    height: 102,
    position: "absolute",
  },
  frameItem: {
    top: 834,
    borderRadius: 107,
    backgroundColor: Color.splashColor3,
    height: 412,
    width: 373,
    left: 0,
    position: "absolute",
  },
  frameGroup: {
    width: 208,
    height: 722,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorIcon: {
    zIndex: 0,
  },
  vectorIcon1: {
    zIndex: 1,
  },
  vectorIcon2: {
    height: "20.73%",
    width: "47.9%",
    top: "54.27%",
    right: "26.05%",
    bottom: "25%",
    left: "26.05%",
    zIndex: 2,
  },
  vectorIcon3: {
    height: "19.27%",
    width: "5%",
    top: "31.45%",
    right: "49.35%",
    bottom: "49.27%",
    left: "45.65%",
    zIndex: 3,
  },
  vectorIcon4: {
    height: "18.55%",
    width: "5.24%",
    top: "22.82%",
    right: "44.92%",
    bottom: "58.63%",
    left: "49.84%",
    zIndex: 4,
  },
  image391: {
    left: 103,
    borderRadius: 35,
    height: 124,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  image391Wrapper: {
    height: 160,
    width: 354,
    overflow: "hidden",
  },
  bienvenido: {
    fontSize: 30,
    width: 214,
    height: 61,
    textAlign: "left",
    fontFamily: FontFamily.bodyNormalMedium,
    fontWeight: "500",
  },
  loQueQuers: {
    fontSize: 20,
    fontFamily: FontFamily.poppinsRegular,
    height: 71,
    textAlign: "left",
    width: 354,
  },
  iconFillFacebook: {
    display: "none",
  },
  iconFillGoogle: {
    marginLeft: 9,
  },
  logInWith: {
    fontSize: FontSize.bodyNormalMedium_size,
    lineHeight: 24,
    color: Color.neutralGray1,
    marginLeft: 9,
    textAlign: "left",
  },
  iconFillFacebookParent: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonCtaNormalIcon: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.neutralGray6,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    paddingLeft: 7,
    paddingTop: Padding.p_base,
    paddingRight: 12,
    paddingBottom: Padding.p_base,
    marginTop: 16,
    overflow: "hidden",
  },
  frameView: {
    marginTop: 10,
    
  },
  frameContainer: {
    marginTop: 17,
    marginLeft: -116.5,
    top: "50%",
    left: "50%",
    position: "absolute",
    
  },
  frameParent: {
    top: -206,
    left: -77,
    width: 475,
    height: 782,
    position: "absolute",
  },
  iniciarSesinChild: {
    top: 585,
    backgroundColor: "#e84d43",
  },
  iniciarSesinItem: {
    top: -196,
    backgroundColor: Color.splashColor2,
  },
  iniciarSesin: {
    flex: 1,
    backgroundColor: "#ffeed9",
    height: 721,
    overflow: "hidden",
  },
  iniciarSesinParent: {
    flex: 1,
    flexDirection: "row",

  },
});

export default Frame;
