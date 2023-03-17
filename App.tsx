import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Main } from "./src";
import { ThemeProvider } from "./src/themes/provider/ThemeProvider";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <StatusBar style="dark" />
        <Main />
      </ThemeProvider>
    </NavigationContainer>
  );
}
