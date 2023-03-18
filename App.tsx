import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Main } from "./src";
import { ThemeProvider } from "./src/themes/provider/ThemeProvider";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <ThemeProvider>
          <StatusBar style="dark" />
          <Main />
        </ThemeProvider>
      </NavigationContainer>
    </AuthProvider>
  );
}
