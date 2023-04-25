import { useNavigation } from "@react-navigation/native";
import { AuthNavigationTypes } from "../../../../routes/interfaces/propsNavigationAuthStack";
import { WelcomeView } from "./WelcomeView";

export const Welcome = () => {
  const navigation = useNavigation<AuthNavigationTypes>();

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
