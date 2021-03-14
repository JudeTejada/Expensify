import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Signin from "../screens/signin/";
import Signup from "../screens/signup/";
import Intro from "../screens/Intro/";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} headerMode="none">
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{
          title: "Intro",
          animationTypeForReplace: "pop",
        }}
      />

      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          title: "Login",
          animationTypeForReplace: "pop",
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: "Sign Up Screen",
          animationTypeForReplace: "pop",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
