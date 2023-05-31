import * as S from "./style";
import { GenericButton } from "./../../../../components/GenericButton";
import { Control } from "react-hook-form";
import { ReactNode } from "react";
import { LoginFormSubmitType } from "./interfaces/loginFormSubmitType";
import { CallToActionText } from "../../components/CallToActionText";
import { GenericTextInput } from "../../../../components/GenericTextInput";

interface LoginScreenProps {
  onIconPress?: () => void;
  onPressCallToAction: () => void;
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
  onPressCallToAction,
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
            onPressActionText={onPressCallToAction}
          />
        </S.FooterContent>
      )}
    </S.Container>
  );
};
