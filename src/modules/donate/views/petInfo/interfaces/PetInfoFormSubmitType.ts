import {
  PetAgeType,
  PetSexType,
  PetSize,
} from "../../../../../types/UserGlobalTypes";

export type PetInfoFormSubmitType = {
  name: string;
  age: string;
  ageType: PetAgeType;
  size: PetSize;
  sex: PetSexType;
  breed: string;
};
