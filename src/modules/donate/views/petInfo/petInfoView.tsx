import { Control } from "react-hook-form";
import * as S from "./style";
import { GenericButton } from "../../../../components/GenericButton";
import { GenericTextInput } from "../../../../components/GenericTextInput";
import { StackHeader } from "../../../../components/StackHeader";
import { PetInfoFormSubmitType } from "./interfaces/PetInfoFormSubmitType";
import {
  RadioButtonInput,
  RadioListOptionsType,
} from "../../../../components/GenericRadioButtonInput";

interface PetsInfoViewProps {
  onSubmitButton: () => void;
  handleSetRadioOption: (optionName: string) => void;
  radioOptionSelected: string | undefined;
  radioListOptions: RadioListOptionsType[];
  control: Control<PetInfoFormSubmitType, any>;
  isKeyBoardOpen: boolean;
}

export const PetsInfoView = ({
  onSubmitButton,
  handleSetRadioOption,
  radioListOptions,
  radioOptionSelected,
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
          <RadioButtonInput
            radioListOptions={radioListOptions}
            name={"petSize"}
            control={control}
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
