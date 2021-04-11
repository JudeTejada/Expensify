import React from "react";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Homepage/";
import CategoriesScreen from "../screens/Categories/";
import ChartsScreen from "../screens/Charts/";
import SettingsScreen from "../screens/Settings/Index";
import AddExpense from "../screens/AddExpense/";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={HomeScreen} />
      <Stack.Screen name="Add Expense" component={AddExpense} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <>
      <StatusBar barStyle="light-content" style="light" />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#fff",
          inactiveTintColor: "lightgray",
          style: {
            backgroundColor: "#393650",
            paddingBottom: 3,
          },
        }}
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;

        //     if (route.name === "Home") {
        //       iconName = focused
        //         ? "ios-information-circle"
        //         : "ios-information-circle-outline";
        //     } else if (route.name === "Settings") {
        //       iconName = focused ? "ios-list-box" : "ios-list";
        //     }

        //     // You can return any component that you like here!
        //     return <Ionicons name={iconName} size={size} color={color} />;
        //   },
        // })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Charts" component={ChartsScreen} />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
};

export default MainNavigator;
