import { useNavigation } from "@react-navigation/native";
import { AppNavigationTypes } from "../../../../routes/interfaces/propsNavigationApp";
import { PetsInfoView } from "./petInfoView";

export const PetInfo = () => {
  const navigation = useNavigation<AppNavigationTypes>();

  const onSubmitButton = () => {
    navigation.navigate("AppTabs", {
      screen: "Donate",
      params: {
        screen: "petInfo",
      },
    });
  };

  return <PetsInfoView onSubmitButton={onSubmitButton} />;
};
