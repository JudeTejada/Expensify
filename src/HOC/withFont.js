import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const WithFont = (Component) => {
  return (props) => {
    let [fontsLoaded] = useFonts({
      "Poppins-bold": require("../../assets/font/Poppins-Bold.ttf"),
      "Poppins-light": require("../../assets/font/Poppins-Light.ttf"),
      "Poppins-regular": require("../../assets/font/Poppins-Regular.ttf"),
    });

    if (!fontsLoaded) return <AppLoading />;

    return <Component {...props} />;
  };
};

export default WithFont;
