import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../../routes/interfaces/propsNavigationStack";
import { WelcomeView } from "./WelcomeView";

export const Welcome = () => {
  const navigation = useNavigation<propsStack>();

  const handlePressToLogin = () => {
    navigation.navigate("Login");
  };

  const handlePressToRegister = () => {
    navigation.navigate("Signup");
  };

  return (
    <WelcomeView
      handlePressToLogin={handlePressToLogin}
      handlePressToRegister={handlePressToRegister}
    />
  );
};
