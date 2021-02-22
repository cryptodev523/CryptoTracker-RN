import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./StackParamList";
import { StatusBar } from "react-native";
import { CryptoList, AddCurrency } from "../screens";

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator mode="modal">
        <Stack.Screen
          name="CryptoList"
          component={CryptoList}
          options={{
            headerTitle: "CryptoTracker Pro",
            headerStyle: {
              backgroundColor: "#3C5776",
            },
            headerTitleStyle: {
              color: "white",
            },
          }}
        />
        <Stack.Screen name="AddCurrency" component={AddCurrency} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
