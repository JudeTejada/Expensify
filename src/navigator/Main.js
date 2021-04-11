import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as firebase from "firebase";

import { useAuth } from "../context/AuthProvider";

import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

const Navigator = () => {
  const { user } = useAuth();

  const MyTheme = {
    dark: false,
    colors: {
      text: "#fff",
      background: "#302D43",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      {user ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
