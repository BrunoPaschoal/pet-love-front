import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { AppNavigationTypes } from "../../../../routes/interfaces/propsNavigationApp";
import { PetType } from "../../../../types/UserGlobalTypes";
import { PetsChoiceView } from "./petsChoiceView";

export const PetsChoice = () => {
  const navigation = useNavigation<AppNavigationTypes>();
  const [petType, setPetType] = useState<PetType | undefined>();

  const onSubmitButton = () => {
    if (petType) {
      navigation.navigate("AppTabs", {
        screen: "Donate",
        params: {
          screen: "petInfo",
          params: { petType },
        },
      });
    }
  };

  return (
    <PetsChoiceView
      onSubmitButton={onSubmitButton}
      petTypeSelected={petType}
      setPetType={setPetType}
    />
  );
};
