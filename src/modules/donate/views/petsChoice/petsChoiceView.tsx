import { Dispatch, SetStateAction } from "react";
import { GenericButton } from "../../../../components/GenericButton";
import { PetTypeSelectCard } from "../../../../components/PetTypeSelectCard";
import { StackHeader } from "../../../../components/StackHeader";
import { PetType } from "../../../../types/UserGlobalTypes";
import * as S from "./style";

interface PetsChoiceViewProps {
  onSubmitButton: () => void;
  petTypeSelected: PetType | undefined;
  setPetType: Dispatch<SetStateAction<PetType | undefined>>;
}

export const PetsChoiceView = ({
  onSubmitButton,
  setPetType,
  petTypeSelected,
}: PetsChoiceViewProps) => {
  return (
    <S.Container>
      <StackHeader pageTitle={"Qual pet você gostaria de doar?"} />
      <S.PageContent>
        <S.SelectCardsContainer>
          <PetTypeSelectCard
            petTypeSelected={petTypeSelected}
            typeValue={PetType.CAT}
            setPetType={setPetType}
          />
          <PetTypeSelectCard
            petTypeSelected={petTypeSelected}
            typeValue={PetType.DOG}
            setPetType={setPetType}
          />
        </S.SelectCardsContainer>
      </S.PageContent>
      <GenericButton
        title={"Próximo"}
        onPressButton={() => onSubmitButton()}
        isOutline={true}
        isDisable={!petTypeSelected}
      />
    </S.Container>
  );
};
