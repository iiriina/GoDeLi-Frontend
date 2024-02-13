import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
    left: wp('53.7%'), // Utilizando wp para el ancho de la pantalla
    height: hp('57%'), // Utilizando hp para la altura de la pantalla
    position: "relative",
  },
  iconLayout: {
    width: wp('5%'), // Utilizando wp para el ancho de la pantalla
    height: hp('3.5%'), // Utilizando hp para la altura de la pantalla
  },
  androidLayout: {
    width: wp('57%'), // Utilizando wp para el ancho de la pantalla
  },
  loQueQuers: {
    top: hp('60%'), // Utilizando hp para la altura de la pantalla
    fontSize: FontSize.bodyNormalMedium_size,
    fontFamily: FontFamily.poppinsRegular,
    width: wp('73%'), // Utilizando wp para el ancho de la pantalla
    textAlign: "left",
    color: Color.primaryText,
    left: wp('8.5%'), // Utilizando wp para el ancho de la pantalla
  },
  bienvenido: {
    top: hp('51.5%'), // Utilizando hp para la altura de la pantalla
    fontSize: FontSize.bodyNormalMedium_size,
    width: wp('28%'), // Utilizando wp para el ancho de la pantalla
    color: Color.primaryText,
    left: wp('8.5%'), // Utilizando wp para el ancho de la pantalla
    fontWeight: "500",
  },
  iniciarSesinChild: {
    top: hp('72%'), // Utilizando hp para la altura de la pantalla
    left: wp('-17%'), // Utilizando wp para el ancho de la pantalla
    borderRadius: Border.br_981xl,
    backgroundColor: Color.splashColor3,
    height: hp('57%'), // Utilizando hp para la altura de la pantalla
    width: wp('53%'), // Utilizando wp para el ancho de la pantalla
  },
  iniciarSesinItem: {
    top: hp('67%'), // Utilizando hp para la altura de la pantalla
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
    width: "100%",
  },
  iconFillFacebook: {
    display: "none",
    height: hp('3.5%'), // Utilizando hp para la altura de la pantalla
  },
  iconFillGoogle: {
    marginLeft: wp('2.5%'), // Utilizando wp para el ancho de la pantalla
    height: hp('3.5%'), // Utilizando hp para la altura de la pantalla
  },
  logInWith: {
    fontSize: FontSize.bodyNormalMedium_size,
    lineHeight: hp('3%'), // Utilizando hp para la altura de la pantalla
    color: Color.neutralGray1,
    marginLeft: wp('2.5%'), // Utilizando wp para el ancho de la pantalla
  },
  iconFillFacebookParent: {
    marginTop: hp('-1.5%'), // Utilizando hp para la altura de la pantalla
    marginLeft: wp('-26%'), // Utilizando wp para el ancho de la pantalla
    top: "50%",
    flexDirection: "row",
    alignItems: "center",
    left: "50%",
  },
  buttonCtaNormalIcon: {
    top: hp('49%'), // Utilizando hp para la altura de la pantalla
    left: wp('8.5%'), // Utilizando wp para el ancho de la pantalla
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: hp('0.55%'), // Utilizando hp para la altura de la pantalla
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: wp('32%'), // Utilizando wp para el ancho de la pantalla
    height: hp('7.8%'), // Utilizando hp para la altura de la pantalla
  },
  iniciarSesinInner: {
    top: hp('14%'), // Utilizando hp para la altura de la pantalla
    left: wp('-2%'), // Utilizando wp para el ancho de la pantalla
    width: wp('17.4%'), // Utilizando wp para el ancho de la pantalla
    height: hp('14.1%'), // Utilizando hp para la altura de la pantalla
  },
  rectangleView: {
    top: hp('-28%'), // Utilizando hp para la altura de la pantalla
    backgroundColor: Color.splashColor2,
  },
  image391: {
    top: hp('20%'), // Utilizando hp para la altura de la pantalla
    left: wp('17.6%'), // Utilizando wp para el ancho de la pantalla
    borderRadius: wp('8.5%'), // Utilizando wp para el ancho de la pantalla
    width: wp('18.5%'), // Utilizando wp para el ancho de la pantalla
    height: hp('17.1%'), // Utilizando hp para la altura de la pantalla
    overflow: "hidden",
  },
  androidIcon: {
    top: 0,
    left: 0,
    height: hp('3.5%'), // Utilizando hp para la altura de la pantalla
  },
  androidNavigationBar: {
    marginLeft: wp('-50%'), // Utilizando wp para el ancho de la pantalla
    bottom: 0,
    height: hp('5.7%'), // Utilizando hp para la altura de la pantalla
    left: "50%",
  },
  iniciarSesin: {
    backgroundColor: "#ffeed9",
    flex: 1,
    height: hp('100%'), // Utilizando hp para la altura de la pantalla
    overflow: "hidden",
    width: "100%",
  },
});

export default IniciarSesin;
