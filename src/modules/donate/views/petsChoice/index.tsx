import { useNavigation } from "@react-navigation/native";
import { AppNavigationTypes } from "../../../../routes/interfaces/propsNavigationApp";
import { PetsChoiceView } from "./petsChoiceView";

export const PetsChoice = () => {
  const navigation = useNavigation<AppNavigationTypes>();

  const onSubmitButton = () => {
    navigation.navigate("AppTabs", {
      screen: "Donate",
      params: {
        screen: "petInfo",
      },
    });
  };

  return <PetsChoiceView onSubmitButton={onSubmitButton} />;
};
