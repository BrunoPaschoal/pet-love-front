import { useNavigation } from "@react-navigation/native";
import { propsAuthStack } from "../../../../routes/interfaces/propsNavigationAuthStack";
import { WelcomeView } from "./WelcomeView";

export const Welcome = () => {
  const navigation = useNavigation<propsAuthStack>();

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
