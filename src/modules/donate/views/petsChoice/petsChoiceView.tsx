import { GenericButton } from "../../../../components/GenericButton";
import { StackHeader } from "../../../../components/StackHeader";
import * as S from "./style";

interface PetsChoiceViewProps {
  onSubmitButton: () => void;
}

export const PetsChoiceView = ({ onSubmitButton }: PetsChoiceViewProps) => {
  return (
    <S.Container>
      <StackHeader pageTitle={"Qual pet você gostaria de doar?"} />
      <S.PageContent></S.PageContent>
      <GenericButton
        title={"Próximo"}
        onPressButton={() => onSubmitButton()}
        isOutline={true}
      />
    </S.Container>
  );
};
