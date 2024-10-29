
// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CustomHeader from "./CustomHeader";

import Home from "../components/Home";
import BottomTabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#ffffff",
  },
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Inicio" component={Home} default options={{ headerShown: false }} />
      <Stack.Screen
        name="Home"
        component={BottomTabNavigation}
        options={({ navigation }) => ({
          header: () => (
            <CustomHeader
              onBack={() => navigation.goBack()} // Función de retroceso
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;

