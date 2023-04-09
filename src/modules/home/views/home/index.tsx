import { useNavigation } from "@react-navigation/native";
import { propsAuthStack } from "../../../../routes/interfaces/propsNavigationAuthStack";
import { HomeView } from "./HomeView";

export const Home = () => {
  const navigation = useNavigation<propsAuthStack>();

  const handlePressToLogin = () => {
    navigation.navigate("Login");
  };

  const handlePressToRegister = () => {
    navigation.navigate("Signup");
  };

  return <HomeView />;
};
