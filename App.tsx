import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./src/routes/public.routes";

export default function App() {
  return (
    <NavigationContainer>
      <PublicRoutes />
    </NavigationContainer>
  );
}
