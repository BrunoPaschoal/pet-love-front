import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Main } from "./src";
import { ThemeProvider } from "./src/themes/provider/ThemeProvider";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { AuthProvider } from "./src/context/AuthContext";
import { ToastProvider } from "react-native-toast-notifications";
import { CustomToast } from "./src/components/CustomToast";

export default function App() {
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer>
        <ThemeProvider>
          <ToastProvider renderToast={CustomToast} offsetBottom={30}>
            <StatusBar style="dark" />
            <Main />
          </ToastProvider>
        </ThemeProvider>
      </NavigationContainer>
    </AuthProvider>
  );
}
