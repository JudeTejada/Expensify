import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Signin from "../screens/signin/";
import Signup from "../screens/signup/";
import Intro from "../screens/Intro/";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      detachInactiveScreens={false}
      screenOptions={{ animationEnabled: false }}
    >
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
