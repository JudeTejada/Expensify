import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate("Add Expense")}>
          Add an Expense
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
