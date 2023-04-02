import * as S from "./style";
import { GenericButton } from "./../../../../components/GenericButton";
import { GenericTextInput } from "../../../../components/GenericTextInput";
import { Control, FieldValues } from "react-hook-form";
import { ReactNode } from "react";
import { LoginFormSubmitType } from "./interfaces/loginFormSubmitType";
import { CallToActionText } from "../../components/CallToActionText";

interface LoginScreenProps {
  onIconPress?: () => void;
  oNPressCallToAction: () => void;
  handleSubmitLogin: () => void;
  validateEmailField?: (value: string) => void;
  hideActionText: boolean;
  control: Control<LoginFormSubmitType, any> | undefined;
  passwordIcon?: ReactNode;
  hidePassword: boolean;
  isLoading: boolean;
}

export const LoginScreen = ({
  control,
  hidePassword,
  isLoading,
  passwordIcon,
  hideActionText,
  onIconPress,
  handleSubmitLogin,
  oNPressCallToAction,
  validateEmailField,
}: LoginScreenProps) => {
  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <S.Content>
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
          onIconPress={onIconPress}
          placeholder="Digite sua senha"
          icon={passwordIcon}
          isRequired
        />
        <GenericButton
          title="Login"
          onPressButton={handleSubmitLogin}
          isLoading={isLoading}
        />
      </S.Content>

      {!hideActionText && (
        <S.FooterContent>
          <CallToActionText
            description="Não possui conta?"
            actionText="Cadastre-se"
            onPressActionText={oNPressCallToAction}
          />
        </S.FooterContent>
      )}
    </S.Container>
  );
};
