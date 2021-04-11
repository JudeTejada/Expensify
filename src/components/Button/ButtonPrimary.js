import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const ButtonPrimary = ({ buttonText, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonPrimary} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

ButtonPrimary.propTypes = {
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
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
export default ButtonPrimary;
