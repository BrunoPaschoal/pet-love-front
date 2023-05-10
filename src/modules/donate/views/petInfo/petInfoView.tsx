import { Control, FieldValues } from "react-hook-form";
import { GenericButton } from "../../../../components/GenericButton";
import { GenericTextInput } from "../../../../components/GenericTextInput";
import { StackHeader } from "../../../../components/StackHeader";
import { PetInfoFormSubmitType } from "./interfaces/PetInfoFormSubmitType";
import * as S from "./style";

interface PetsInfoViewProps {
  onSubmitButton: () => void;
  control: Control<PetInfoFormSubmitType, any>;
  isKeyBoardOpen: boolean;
}

export const PetsInfoView = ({
  onSubmitButton,
  control,
  isKeyBoardOpen,
}: PetsInfoViewProps) => {
  return (
    <S.Container>
      <StackHeader pageTitle={"Informações do pet"} />
      <S.PageContent>
        <S.PageDescription>
          Agora é o momento de adicionar informações essenciais do bichinho que
          irá para adoção
        </S.PageDescription>
        <S.FormContainer>
          <GenericTextInput
            label={"Nome do Pet"}
            control={control}
            name={"name"}
            errorMessage={"Ops, está esquecendo desse campo! 😉"}
            placeholder="Nome do bichinho"
            isRequired
          />
        </S.FormContainer>
      </S.PageContent>
      {!isKeyBoardOpen && (
        <GenericButton
          title={"Próximo"}
          onPressButton={() => onSubmitButton()}
          isOutline
        />
      )}
    </S.Container>
  );
};
