import { PetAgeType } from "../types/UserGlobalTypes";

export const getPetAgeTitle = (
  petAge: number,
  ageType: keyof typeof PetAgeType
) => {
  const isSingular = petAge === 1;
  const options = {
    [PetAgeType.MONTHS]: isSingular ? "Mês" : "Meses",
    [PetAgeType.YEARS]: isSingular ? "Ano" : "Anos",
  };

  return `${petAge} ${options[ageType]}`;
};
