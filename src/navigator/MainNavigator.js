import React from "react";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
          
          activeTintColor: "#6953F7",
          inactiveTintColor: "#fff",
          style: {
            backgroundColor: "#393650",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Charts"
          component={ChartsScreen}
          options={{
            tabBarLabel: "Charts",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="google-analytics"
                size={20}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Categories",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="format-list-bulleted"
                size={20}
                color={color}
              />
            ),
          }}
          name="Categories"
          component={CategoriesScreen}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle"
                size={20}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

{
  /*  */
}
export default MainNavigator;
