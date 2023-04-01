import * as S from "./style";
import { GenericButton } from "./../../../../components/GenericButton";
import { GenericTextInput } from "../../../../components/GenericTextInput";
import { Control, FieldValues } from "react-hook-form";
import { ReactNode } from "react";
import { LoginFormSubmitType } from "./interfaces/loginFormSubmitType";

interface LoginScreenProps {
  oIconPress?: () => void;
  handleSubmitLogin: () => void;
  validateEmailField?: (value: string) => void;
  control: Control<LoginFormSubmitType, any> | undefined;
  passwordIcon?: ReactNode;
  icon?: ReactNode;
  hidePassword: boolean;
  isLoading: boolean;
}

export const LoginScreen = ({
  control,
  hidePassword,
  isLoading,
  passwordIcon,
  oIconPress,
  handleSubmitLogin,
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
          onIconPress={oIconPress}
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
    </S.Container>
  );
};
