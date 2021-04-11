import React from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet } from "react-native";

const ButtonInlineText = ({ buttonText, onPress }) => {
  return (
    <Text style={styles.textLabelButton} onPress={onPress}>
      {buttonText}
    </Text>
  );
};

ButtonInlineText.propTypes = {
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  textLabelButton: {
    marginLeft: 10,
    color: "#8979F4",
    fontFamily: "Poppins-light",
  },
});

export default ButtonInlineText;
