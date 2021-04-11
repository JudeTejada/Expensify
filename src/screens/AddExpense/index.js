import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const AddExpense = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Add Expense</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddExpense;
