import { useFonts } from "expo-font";
import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { PublicRoutes } from "./routes/public.routes";
import * as SplashScreen from "expo-splash-screen";

export const Main = () => {
  const { signed, loading } = useContext(AuthContext);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (loading && !fontsLoaded) {
    return null;
  }

  if (fontsLoaded && !loading) {
    SplashScreen.hideAsync();
  }

  return signed ? <PublicRoutes /> : <PublicRoutes />;
};
