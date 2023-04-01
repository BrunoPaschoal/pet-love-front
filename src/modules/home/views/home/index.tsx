import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../../routes/interfaces/propsNavigationStack";
import { HomeView } from "./HomeView";

export const Home = () => {
  const navigation = useNavigation<propsStack>();

  const handlePressToLogin = () => {
    navigation.navigate("Login");
  };

  const handlePressToRegister = () => {
    navigation.navigate("Signup");
  };

  return <HomeView />;
};
