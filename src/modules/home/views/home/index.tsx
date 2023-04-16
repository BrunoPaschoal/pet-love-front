import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { HomeView } from "./HomeView";

export const Home = () => {
  const { user } = useContext(AuthContext);
  return <HomeView userAvatar={user?.avatar} userName={user?.name} />;
};
