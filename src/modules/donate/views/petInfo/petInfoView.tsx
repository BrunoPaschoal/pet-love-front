import { Control } from "react-hook-form";
import * as S from "./style";
import { GenericButton } from "../../../../components/GenericButton";
import { StackHeader } from "../../../../components/StackHeader";
import { PetInfoFormSubmitType } from "./interfaces/PetInfoFormSubmitType";
import { GenericTextInput } from "../../../../components/GenericTextInput";
import { GenericSelectInput } from "../../../../components/GenericSelectInput";
import { ScrollView } from "react-native";
import {
  RadioButtonInput,
  RadioListOptionsType,
} from "../../../../components/GenericRadioButtonInput";

interface PetsInfoViewProps {
  onSubmitButton: () => void;
  radioListOptions: RadioListOptionsType[];
  control: Control<PetInfoFormSubmitType, any>;
  isKeyBoardOpen: boolean;
}

export const PetsInfoView = ({
  onSubmitButton,
  radioListOptions,
  control,
  isKeyBoardOpen,
}: PetsInfoViewProps) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <S.Container>
        <StackHeader pageTitle={"Informações do pet"} />
        <S.PageContent>
          <S.PageDescription>
            Agora é o momento de adicionar informações essenciais do bichinho
            que irá para adoção
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
            <GenericSelectInput
              label={"Raça"}
              control={control}
              name={"breed"}
              errorMessage={"Ops, está esquecendo desse campo! 😉"}
              placeholder="Selecione..."
              isRequired
            />
            <RadioButtonInput
              radioListOptions={radioListOptions}
              label={"Porte"}
              name={"petSize"}
              control={control}
              errorMessage={"Não se esqueça do porte do bichinho! 😜"}
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
    </ScrollView>
  );
};
