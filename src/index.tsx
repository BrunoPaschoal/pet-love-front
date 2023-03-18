import React, { useContext } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { AuthContext } from "./context/AuthContext";
import { PublicRoutes } from "./routes/public.routes";

export const Main = () => {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingScreen />;
  }

  return signed ? <PublicRoutes /> : null;
};
