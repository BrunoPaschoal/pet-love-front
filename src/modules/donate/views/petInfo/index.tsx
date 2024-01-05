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
import {
  PetAgeType,
  PetSexType,
  PetSize,
} from "../../../../types/UserGlobalTypes";

export const PetInfo = () => {
  const isKeyBoardOpen = useKeyboardChecker();
  const navigation = useNavigation<AppNavigationTypes>();

  const {
    params: { petType },
  } = useRoute<PetInfoScreenRouteProp>();

  const { handleSubmit, control } = useForm<PetInfoFormSubmitType>({
    mode: "onSubmit",
  });

  const petSizeOptions: RadioListOptionsType[] = [
    {
      optionName: "Pequeno",
      optionValue: PetSize.SMALL,
    },
    {
      optionName: "Médio",
      optionValue: PetSize.MID,
    },
    {
      optionName: "Grande",
      optionValue: PetSize.LARGE,
    },
  ];

  const sexOptions: RadioListOptionsType[] = [
    {
      optionName: "Macho",
      optionValue: PetSexType.MALE,
    },
    {
      optionName: "Fêmea",
      optionValue: PetSexType.FEMALE,
    },
  ];

  const ageTypeOptions: RadioListOptionsType[] = [
    {
      optionName: "Meses",
      optionValue: PetAgeType.MONTHS,
    },
    {
      optionName: "Anos",
      optionValue: PetAgeType.YEARS,
    },
  ];

  const onSubmitButton = (formValue: PetInfoFormSubmitType) => {
    // Navegar para a próxima tela passando os parâmetros necessários
    console.warn(formValue);
  };

  return (
    <PetsInfoView
      onSubmitButton={handleSubmit(onSubmitButton)}
      control={control}
      isKeyBoardOpen={isKeyBoardOpen}
      petSizeOptions={petSizeOptions}
      sexOptions={sexOptions}
      ageTypeOptions={ageTypeOptions}
    />
  );
};
