import React, { useState } from "react";
import PropTypes from "prop-types";

import InputGroup from "../inputGroup";
import { ButtonPrimary } from "../Button/index";

import { View } from "react-native";

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
      <ButtonPrimary
        onPress={() => handleSubmit(email, password)}
        buttonText={buttonText}
      />
    </View>
  );
};

export default Form;
