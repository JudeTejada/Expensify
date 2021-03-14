import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import InputGroup from "../../components/inputGroup/";

import WithFont from "../../HOC/withFont";

function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Expensify</Text>
      <Text style={styles.subTitle}>Create an account</Text>

      <InputGroup placeholder="Enter your email" text={"Email Address"} />
      <InputGroup placeholder="Enter your password" text={"Password"} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textLabelContainer}>
        <Text style={styles.textLabel}>Already have an account?</Text>
        <Text
          style={styles.textLabelButton}
          onPress={() => navigation.navigate("Signin")}
        >
          {" "}
          Sign up
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#302D43",
    height: "100%",
    padding: 25,
    paddingTop: 90,
  },
  mainTitle: {
    color: "#fff",
    fontSize: 54,
    fontFamily: "Poppins-bold",
    marginBottom: 6,
  },
  subTitle: {
    color: "#fff",
    fontFamily: "Poppins-light",
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 25,
  },
  buttonPrimary: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#6953F7",
    color: "#fff",
    fontFamily: "Poppins-bold",
    fontSize: 18,
    marginBottom: 12,
  },

  textLabelContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Poppins-bold",
    fontSize: 18,
    color: "#fff",
  },
  logo: {
    marginLeft: 10,
  },
  textLabel: {
    color: "#8c8a95",
    fontFamily: "Poppins-light",
  },
  textLabelButton: {
    color: "#8979F4",
    fontFamily: "Poppins-light",
  },
});

export default Signin;
