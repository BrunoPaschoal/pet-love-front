import * as S from "./style";
import theme from "../../themes/index";
import { PetType } from "../../types/UserGlobalTypes";
import { Dispatch, SetStateAction } from "react";
import CatIcon from "../../../assets/icons/cat.svg";
import DogIcon from "../../../assets/icons/dog.svg";

interface PetTypeSelectCardProps {
  petTypeSelected: PetType | undefined;
  setPetType: Dispatch<SetStateAction<PetType | undefined>>;
  typeValue: PetType;
}

export const PetTypeSelectCard = ({
  petTypeSelected,
  typeValue,
  setPetType,
}: PetTypeSelectCardProps) => {
  const isSelected = petTypeSelected === typeValue;
  const iconSize = 45;
  const iconColor = isSelected
    ? theme["defaultAppTheme"].colors.secondary
    : theme["defaultAppTheme"].colors.gray_02;

  return (
    <S.Container onPress={() => setPetType(typeValue)}>
      <S.CardBox isSelected={isSelected}>
        {typeValue === PetType.CAT && (
          <CatIcon width={iconSize} height={iconSize} fill={iconColor} />
        )}
        {typeValue === PetType.DOG && (
          <DogIcon width={iconSize} height={iconSize} fill={iconColor} />
        )}
      </S.CardBox>
      <S.CardTitle>
        {typeValue === PetType.CAT && "Gatinho"}
        {typeValue === PetType.DOG && "Cachorrinho"}
      </S.CardTitle>
    </S.Container>
  );
};
