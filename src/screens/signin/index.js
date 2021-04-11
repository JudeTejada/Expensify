import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import * as firebase from "firebase";
import { ButtonIcon, ButtonInlineText } from "../../components/Button/";

import Form from "../../components/form/";

function Signin({ navigation }) {
  const [error, setError] = useState(null);

  const loginWithFirebase = (email, password) => {
    if (!email || !password) {
      return alert("Please Type all the required fields");
    }

    setError(null);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => console.log("SIGNED IN SUCCESFULLY"))
      .catch((err) => setError(err.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Expensify</Text>
      <Text style={styles.subTitle}>Login to your account</Text>
      {error && <Text style={{ color: "#D03131" }}>{error}</Text>}

      <Form buttonText={"Login"} handleSubmit={loginWithFirebase} />

      <ButtonIcon
        buttonText="Sign in with Google"
        icon={require("../../../assets/icon/google-icon.png")}
        onPress={() => {}}
      />

      <View style={styles.textLabelContainer}>
        <Text style={styles.textLabel}>Don't have an account yet?</Text>
        <ButtonInlineText
          buttonText="Sign up"
          onPress={() => navigation.navigate("Signup")}
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  textLabel: {
    color: "#8c8a95",
    fontFamily: "Poppins-light",
  },
});

export default Signin;
