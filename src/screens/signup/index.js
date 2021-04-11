import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import { ButtonInlineText } from "../../components/Button/";
import Form from "../../components/form/index";

function Signin({ navigation }) {
  const [error, setError] = useState(null);

  const signupWithFirebase = (email, password) => {
    setError(null);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigation.navigate("Signin"))
      .catch((err) => setError(err.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Expensify</Text>
      <Text style={styles.subTitle}>Create an account</Text>
      {error && <Text style={{ color: "#D03131" }}>{error}</Text>}
      <Form buttonText={"Sign up"} handleSubmit={signupWithFirebase} />

      <View style={styles.textLabelContainer}>
        <Text style={styles.textLabel}>Already have an account?</Text>
        <ButtonInlineText
          buttonText="Sign in"
          onPress={() => navigation.navigate("Signin")}
        />
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

  textLabelContainer: {
    marginTop: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  textLabel: {
    color: "#8c8a95",
    fontFamily: "Poppins-light",
  },
});

export default Signin;
