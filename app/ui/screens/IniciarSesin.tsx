import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const IniciarSesin = () => {
  return (
    <View style={styles.iniciarSesin}>
      <Text style={styles.loQueQuers}>{`Lo que querés cocinar, 
lo encontrás acá, en GoDeLi.`}</Text>
      <Text style={[styles.bienvenido, styles.logInWithTypo]}>
        ¡Bienvenido!
      </Text>
      <View style={styles.iniciarSesinChild} />
      <View style={[styles.iniciarSesinItem, styles.rectangleViewLayout]} />
      <View style={styles.buttonCtaNormalIcon}>
        <View style={styles.baseBackground} />
        <View style={styles.iconFillFacebookParent}>
          <Image
            style={[styles.iconFillFacebook, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon--fill--facebook.png")}
          />
          <Image
            style={[styles.iconFillGoogle, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon--fill--google.png")}
          />
          <Text style={[styles.logInWith, styles.logInWithTypo]}>
            Iniciar sesión con Google
          </Text>
        </View>
      </View>
      <Image
        style={styles.iniciarSesinInner}
        resizeMode="cover"
        source={require("../assets/group-4.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Image
        style={styles.image391}
        resizeMode="cover"
        source={require("../assets/image-39-1.png")}
      />
      <Image
        style={[styles.androidIcon, styles.androidLayout]}
        resizeMode="cover"
        source={require("../assets/android.png")}
      />
      <Image
        style={[styles.androidNavigationBar, styles.androidLayout]}
        resizeMode="cover"
        source={require("../assets/android-navigation-bar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logInWithTypo: {
    fontFamily: FontFamily.bodyNormalMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  rectangleViewLayout: {
    borderRadius: Border.br_981xl,
    left: 258,
    height: 412,
    width: 373,
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  androidLayout: {
    width: 412,
    position: "absolute",
  },
  loQueQuers: {
    top: 434,
    fontSize: 20,
    fontFamily: FontFamily.poppinsRegular,
    width: 354,
    height: 71,
    textAlign: "left",
    color: Color.primaryText,
    left: 44,
    position: "absolute",
  },
  bienvenido: {
    top: 373,
    fontSize: 30,
    width: 214,
    height: 61,
    color: Color.primaryText,
    left: 44,
    fontWeight: "500",
    position: "absolute",
  },
  iniciarSesinChild: {
    top: 628,
    left: -77,
    borderRadius: 107,
    backgroundColor: Color.splashColor3,
    height: 412,
    width: 373,
    position: "absolute",
  },
  iniciarSesinItem: {
    top: 577,
    backgroundColor: "#e84d43",
  },
  baseBackground: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.neutralGray6,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    position: "absolute",
    width: "100%",
  },
  iconFillFacebook: {
    display: "none",
    height: 24,
  },
  iconFillGoogle: {
    marginLeft: 16,
    height: 24,
  },
  logInWith: {
    fontSize: FontSize.bodyNormalMedium_size,
    lineHeight: 24,
    color: Color.neutralGray1,
    marginLeft: 16,
  },
  iconFillFacebookParent: {
    marginTop: -12,
    marginLeft: -122,
    top: "50%",
    flexDirection: "row",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  buttonCtaNormalIcon: {
    top: 521,
    left: 45,
    borderRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 258,
    height: 56,
    position: "absolute",
  },
  iniciarSesinInner: {
    top: 104,
    left: -9,
    width: 72,
    height: 102,
    position: "absolute",
  },
  rectangleView: {
    top: -206,
    backgroundColor: Color.splashColor2,
  },
  image391: {
    top: 201,
    left: 144,
    borderRadius: 35,
    width: 124,
    height: 124,
    position: "absolute",
    overflow: "hidden",
  },
  androidIcon: {
    top: 0,
    left: 0,
    height: 24,
  },
  androidNavigationBar: {
    marginLeft: -206,
    bottom: 0,
    height: 41,
    left: "50%",
  },
  iniciarSesin: {
    backgroundColor: "#ffeed9",
    flex: 1,
    height: 721,
    overflow: "hidden",
    width: "100%",
  },
});

export default IniciarSesin;
