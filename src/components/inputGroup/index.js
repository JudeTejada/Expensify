import React from "react";
import PropTypes from "prop-types";

import { TextInput, Text, View, StyleSheet } from "react-native";

const InputGroup = ({ text, ...props }) => {
  return (
    <View>
      <Text style={styles.labelText}>{text}</Text>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.InputField}
          placeholderTextColor="#c4c4c4"
          {...props}
        />
      </View>
    </View>
  );
};

InputGroup.propTypes = {};

const styles = StyleSheet.create({
  formGroup: {},
  labelText: {
    fontFamily: "Poppins-regular",
    fontSize: 14,
    color: "#c4c4c4",
    marginTop: 15,
    marginBottom: 10,
  },
  InputContainer: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
  },
  InputField: {
    fontSize: 11,
    fontFamily: "Poppins-light",
    color: "#C4C4C4",
  },
});

export default InputGroup;
