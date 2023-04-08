import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeIcon from "../../assets/icons/home.svg";
import HomeFilledIcon from "../../assets/icons/home-filled.svg";
import AdoptIcon from "../../assets/icons/adopt.svg";
import AdoptFilledIcon from "../../assets/icons/adopt-filled.svg";
import OngsIcon from "../../assets/icons/ongs.svg";
import OngsFilledIcon from "../../assets/icons/ongs-filled.svg";
import FavoriteIcon from "../../assets/icons/favorite.svg";
import FavoriteFilledIcon from "../../assets/icons/favorite-filled.svg";
import MenuIcon from "../../assets/icons/menu.svg";
import React from "react";
import { Home } from "../modules/home/views/home";

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  const iconSize = 20;
  return (
    <Tab.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontFamily: "Poppins-SemiBold", fontSize: 11 },
        tabBarInactiveTintColor: "#a8a8a8",
        tabBarActiveTintColor: "#FFAD60",
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Início",
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <HomeFilledIcon width={iconSize} height={iconSize} fill={color} />
            ) : (
              <HomeIcon width={iconSize} height={iconSize} />
            ),
        }}
      />

      <Tab.Screen
        name="Adopt"
        component={Home}
        options={{
          title: "Adote",
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <AdoptFilledIcon
                width={iconSize}
                height={iconSize}
                fill={color}
              />
            ) : (
              <AdoptIcon width={iconSize} height={iconSize} />
            ),
        }}
      />

      <Tab.Screen
        name="Ongs"
        component={Home}
        options={{
          title: "ONGs",
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <OngsFilledIcon width={iconSize} height={iconSize} fill={color} />
            ) : (
              <OngsIcon width={iconSize} height={iconSize} />
            ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Home}
        options={{
          title: "Favoritos",
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <FavoriteFilledIcon
                width={iconSize}
                height={iconSize}
                fill={color}
              />
            ) : (
              <FavoriteIcon width={iconSize} height={iconSize} />
            ),
        }}
      />

      <Tab.Screen
        name="Menu"
        component={Home}
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <MenuIcon width={iconSize} height={iconSize} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const PrivateRoutes = () => {
  return (
    <AppStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <AppStack.Screen name="HomeTabs" component={HomeTabs} />
    </AppStack.Navigator>
  );
};
