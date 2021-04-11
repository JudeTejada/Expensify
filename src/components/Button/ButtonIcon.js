import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

const ButtonIcon = ({ icon, buttonText, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonSecondary} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
      {icon && <Image style={styles.logo} source={icon} />}
    </TouchableOpacity>
  );
};

ButtonIcon.propTypes = {
  icon: PropTypes.string,
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  buttonSecondary: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
    backgroundColor: "#5E5884",
    color: "#fff",
    fontFamily: "Poppins-bold",
    fontSize: 18,
    marginTop: 15,
  },
  logo: {
    marginLeft: 10,
  },
  buttonText: {
    fontFamily: "Poppins-bold",
    fontSize: 18,
    color: "#fff",
  },
});

export default ButtonIcon;
