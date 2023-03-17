import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Main } from "./src";
import { ThemeProvider } from "./src/themes/provider/ThemeProvider";

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </NavigationContainer>
  );
}
