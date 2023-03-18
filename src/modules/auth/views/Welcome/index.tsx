import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../../routes/interfaces/propsNavigationStack";
import { WelcomeView } from "./WelcomeView";

export const Welcome = () => {
  const navigation = useNavigation<propsStack>();

  const handlePressToLogin = () => {
    // navigation.navigate("Signup");
    console.warn("Clicou");
  };

  return <WelcomeView handlePressToLogin={handlePressToLogin} />;
};
