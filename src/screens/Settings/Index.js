import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import { ButtonPrimary } from "../../components/Button/index";

import { useAuth } from "../../context/AuthProvider";

const Settings = () => {
  const { logout, user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Account Signied in</Text>
      <Text style={styles.subTitle}>{user.email}</Text>
      <ButtonPrimary buttonText="Logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#302D43",
    height: "100%",
    padding: 25,
    paddingTop: 90,
  },
  mainTitle: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "Poppins-bold",
    marginBottom: 6,
  },
  subTitle: {
    color: "#fff",
    fontFamily: "Poppins-light",
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Settings;
