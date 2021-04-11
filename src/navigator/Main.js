import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as firebase from "firebase";

import {useAuth} from '../context/AuthProvider'


import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

const Navigator = () => {
  const {user} = useAuth();

  console.log('USER',user)

  return (
    <NavigationContainer>
      {user ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
