import { Control } from "react-hook-form";
import * as S from "./style";
import { GenericButton } from "../../../../components/GenericButton";
import { StackHeader } from "../../../../components/StackHeader";
import { PetInfoFormSubmitType } from "./interfaces/PetInfoFormSubmitType";
import { GenericTextInput } from "../../../../components/GenericTextInput";
import { SelectInput } from "../../../../components/SelectInput";
import { ScrollView } from "react-native";
import {
  RadioButtonInput,
  RadioListOptionsType,
} from "../../../../components/GenericRadioButtonInput";
import { AutocompleteInput } from "../../../../components/AutocompleteInput";
import { autocompleteMockList } from "../../../../components/AutocompleteInput/mock";

interface PetsInfoViewProps {
  onSubmitButton: () => void;
  petSizeOptions: RadioListOptionsType[];
  ageTypeOptions: RadioListOptionsType[];
  sexOptions: RadioListOptionsType[];
  control: Control<PetInfoFormSubmitType>;
  isKeyBoardOpen: boolean;
}

export const PetsInfoView = ({
  onSubmitButton,
  petSizeOptions,
  ageTypeOptions,
  sexOptions,
  control,
  isKeyBoardOpen,
}: PetsInfoViewProps) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <S.Container>
        <StackHeader pageTitle="Informações do pet" />
        <S.PageContent>
          <S.PageDescription>
            Agora é o momento de adicionar informações essenciais do bichinho
            que irá para adoção
          </S.PageDescription>
          <S.FormContainer>
            <GenericTextInput
              label="Nome do Pet"
              control={control}
              name="name"
              errorMessage="Ops, está esquecendo desse campo! 😉"
              placeholder="Nome do bichinho"
              isRequired
            />

            <S.AgeContainer>
              <GenericTextInput
                containerWidth={125}
                containerMarginRight={35}
                label="Idade"
                control={control}
                name="age"
                keyboardType="numeric"
                errorMessage="Ops, está esquecendo desse campo! 😉"
                placeholder="idade"
                isRequired
              />

              <RadioButtonInput
                radioListOptions={ageTypeOptions}
                label="Tipo"
                name="ageType"
                control={control}
                errorMessage="Não se esqueça do porte do bichinho! 😜"
                isRequired
              />
            </S.AgeContainer>

            <AutocompleteInput
              data={autocompleteMockList}
              label="Raça"
              control={control}
              name="breed"
              errorMessage="Ops, está esquecendo desse campo! 😉"
              placeholder="Digite e selecione..."
              zIndex={10}
              isRequired
            />

            <RadioButtonInput
              radioListOptions={sexOptions}
              label="Sexo"
              name="sex"
              control={control}
              errorMessage="Não se esqueça do porte do bichinho! 😜"
              isRequired
            />

            <RadioButtonInput
              radioListOptions={petSizeOptions}
              label="Porte"
              name="size"
              control={control}
              errorMessage="Não se esqueça do porte do bichinho! 😜"
              isRequired
            />
          </S.FormContainer>
        </S.PageContent>
        {!isKeyBoardOpen && (
          <GenericButton
            title="Próximo"
            onPressButton={() => onSubmitButton()}
            isOutline
          />
        )}
      </S.Container>
    </ScrollView>
  );
};
