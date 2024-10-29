
// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FindYourActivity from "../components/FindYourActivity";
import UserInfo from "../components/UserInfo";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FindYourActivity"
        component={FindYourActivity}
        options={{
          tabBarStyle: { display: 'none' },
          headerShown: false
        }}
      />
      <Tab.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          tabBarStyle: { display: 'none' },
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;