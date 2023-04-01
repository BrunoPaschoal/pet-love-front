import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Home } from "../modules/home/views/home";

const Tab = createBottomTabNavigator();

export const PrivateRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};
