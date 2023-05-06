import { GenericButton } from "../../../../components/GenericButton";
import { StackHeader } from "../../../../components/StackHeader";
import * as S from "./style";

interface PetsInfoViewProps {
  onSubmitButton: () => void;
}

export const PetsInfoView = ({ onSubmitButton }: PetsInfoViewProps) => {
  return (
    <S.Container>
      <StackHeader pageTitle={"Informações do pet"} />
      <S.PageContent></S.PageContent>
      <GenericButton title={"Próximo"} onPressButton={() => onSubmitButton()} />
    </S.Container>
  );
};
