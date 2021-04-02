import React, { useState } from "react";
import PropTypes from "prop-types";

import InputGroup from "../inputGroup";

import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const Form = ({ buttonText, handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <InputGroup
        placeholder="Enter your email"
        text={"Email Address"}
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <InputGroup
        secureTextEntry
        placeholder="Enter your password"
        text={"Password"}
        onChangeText={(password) => setPassword(password)}
        value={password}
      />
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => handleSubmit(email, password)}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPrimary: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#6953F7",
    color: "#fff",
    fontFamily: "Poppins-bold",
    fontSize: 18,
    marginTop: 40,
  },
  buttonText: {
    fontFamily: "Poppins-bold",
    fontSize: 18,
    color: "#fff",
  },
});

export default Form;
