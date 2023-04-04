import * as S from "./style";
import { GenericButton } from "../../../../components/GenericButton";
import { GenericTextInput } from "../../../../components/GenericTextInput";
import { Control } from "react-hook-form";
import { ReactNode } from "react";
import { SignupFormSubmitType } from "./interfaces/signupFormSubmitType";
import { CallToActionText } from "../../components/CallToActionText";

interface SignupScreenProps {
  oIconPress?: () => void;
  handleSubmitSignup: () => void;
  onPressCallToAction: () => void;
  passwordIcon?: ReactNode;
  control: Control<SignupFormSubmitType, any> | undefined;
  hidePassword: boolean;
  validateEmailField?: (value: string) => void;
  validatePasswordField: (value: string) => void;
  validateCellphoneField: (value: string) => void;
  isLoading: boolean;
  hideActionText: boolean;
}

export const SignupView = ({
  control,
  hidePassword,
  isLoading,
  passwordIcon,
  hideActionText,
  oIconPress,
  handleSubmitSignup,
  validatePasswordField,
  onPressCallToAction,
  validateCellphoneField,
  validateEmailField,
}: SignupScreenProps) => {
  return (
    <S.ScrollViewContainer contentContainerStyle={{ flexGrow: 1 }}>
      <S.Container>
        <S.Title>Cadastre sua conta</S.Title>
        <S.Content>
          <GenericTextInput
            label={"Nome completo"}
            control={control}
            name={"name"}
            placeholder="Seu nome completo"
            isRequired
          />
          <GenericTextInput
            label={"Celular"}
            control={control}
            name={"phone"}
            placeholder="(00) 0 0000-0000"
            validateFailMessage="Formato inválido."
            validateField={validateCellphoneField}
            mask="cel-phone"
            isRequired
          />
          <GenericTextInput
            label={"E-mail"}
            control={control}
            name={"email"}
            validateFailMessage="Formato de e-mail inválido"
            validateField={validateEmailField}
            placeholder="exemplo@email.com"
            isRequired
          />
          <GenericTextInput
            label={"Senha"}
            control={control}
            name={"password"}
            hideInputValue={hidePassword}
            onIconPress={oIconPress}
            validateFailMessage="A senha de conter pelo menos 8 caracteres, letras maiúsculas, minúsculas e caracteres especiais."
            validateField={validatePasswordField}
            placeholder="Digite sua senha"
            icon={passwordIcon}
            isRequired
          />
          <GenericButton
            title="Criar conta"
            onPressButton={handleSubmitSignup}
            isLoading={isLoading}
          />
        </S.Content>
        {!hideActionText && (
          <S.FooterContent>
            <CallToActionText
              description="Já possui conta?"
              actionText="Faça login"
              onPressActionText={onPressCallToAction}
            />
          </S.FooterContent>
        )}
      </S.Container>
    </S.ScrollViewContainer>
  );
};
