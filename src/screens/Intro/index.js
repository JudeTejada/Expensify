import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import WithFont from "../../HOC/withFont";

function IntroScreen({ navigation }) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => navigation.navigate("Signin")}
    >
      <Image
        style={styles.logo}
        source={require("../../../assets/icon/logo.png")}
      />
      <Text style={styles.mainTitle}>Expensify</Text>
      <Text style={styles.description}>
        A minimalistic approach for managing your expenses
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#302D43",
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    padding: 10,
  },
  mainTitle: {
    fontFamily: "Poppins-bold",
    color: "#fff",
    textAlign: "center",
    fontSize: 54,
    fontWeight: "bold",
    marginBottom: 15,
  },
  description: {
    fontFamily: "Poppins-light",
    color: "#8c8a95",
    textAlign: "center",
    fontSize: 18,
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default IntroScreen;
