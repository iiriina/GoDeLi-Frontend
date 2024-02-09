import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Frame1000003626() {
  return (
    <View style={styles.Frame1000003626}>
      <Image
        style={styles.Ellipse2}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/y11y2j41y1-11%3A24715?alt=media&token=33cf175c-6e8c-48d8-a661-6eaabc80ab04",
        }}
      />
      <Text style={styles.BienvenidoAGodeli}>Bienvenido a GoDeLi!</Text>
      <Image
        style={styles.Image391}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/y11y2j41y1-11%3A24717?alt=media&token=76fad22a-3bc7-42b0-9106-69c9e818443a",
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Frame1000003626: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: 28,
    paddingRight: 28,
    paddingTop: 15,
    paddingBottom: 15,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Ellipse2: {
    width: 35,
    height: "100%",
    marginRight: 29,
  },
  BienvenidoAGodeli: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 29,
    color: "rgba(28,28,28,1)",
    fontSize: 20,
    lineHeight: 33,
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    textAlign: "center",
  },
  Image391: {
    width: 33,
    height: "100%",
  },
})