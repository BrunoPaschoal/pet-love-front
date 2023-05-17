import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RadioListOptionsType } from "../../../../components/GenericRadioButtonInput";
import useKeyboardChecker from "../../../../hooks/useKeyboardChecker";
import {
  AppNavigationTypes,
  PetInfoScreenRouteProp,
} from "../../../../routes/interfaces/propsNavigationApp";
import { PetInfoFormSubmitType } from "./interfaces/PetInfoFormSubmitType";
import { PetsInfoView } from "./petInfoView";

export const PetInfo = () => {
  const isKeyBoardOpen = useKeyboardChecker();
  const navigation = useNavigation<AppNavigationTypes>();

  const [radioSelected, setRadioSelected] = useState<string | undefined>(
    undefined
  );

  const petSizeOptions: RadioListOptionsType[] = [
    {
      optionName: "Pequeno",
    },
    {
      optionName: "Médio",
    },
    {
      optionName: "Grande",
    },
  ];

  const {
    params: { petType },
  } = useRoute<PetInfoScreenRouteProp>();

  const { handleSubmit, control } = useForm<PetInfoFormSubmitType>({
    mode: "onSubmit",
  });

  const handleSetRadioOption = (optionValue: string) => {
    setRadioSelected(optionValue);
  };

  const onSubmitButton = (formValue: PetInfoFormSubmitType) => {
    // Navegar para a próxima tela passando os parâmetros necessários
  };

  return (
    <PetsInfoView
      onSubmitButton={handleSubmit(onSubmitButton)}
      control={control}
      isKeyBoardOpen={isKeyBoardOpen}
      handleSetRadioOption={handleSetRadioOption}
      radioOptionSelected={radioSelected}
      radioListOptions={petSizeOptions}
    />
  );
};
