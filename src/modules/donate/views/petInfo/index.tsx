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

  const petSizeOptions: RadioListOptionsType[] = [
    {
      optionName: "Pequeno",
      optionValue: "SMALL",
    },
    {
      optionName: "Médio",
      optionValue: "MID",
    },
    {
      optionName: "Grande",
      optionValue: "LARGE",
    },
  ];

  const {
    params: { petType },
  } = useRoute<PetInfoScreenRouteProp>();

  const { handleSubmit, control } = useForm<PetInfoFormSubmitType>({
    mode: "onSubmit",
  });

  const onSubmitButton = (formValue: PetInfoFormSubmitType) => {
    // Navegar para a próxima tela passando os parâmetros necessários
    console.warn(formValue);
  };

  return (
    <PetsInfoView
      onSubmitButton={handleSubmit(onSubmitButton)}
      control={control}
      isKeyBoardOpen={isKeyBoardOpen}
      radioListOptions={petSizeOptions}
    />
  );
};
