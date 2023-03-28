import * as S from "./style";
import { GenericButton } from "../../../../components/GenericButton";
import { GenericTextInput } from "../../../../components/GenericTextInput";
import { Control, FieldValues } from "react-hook-form";
import { ReactNode } from "react";
import ClosedEye from "../../../../../assets/icons/closed-eye.svg";

interface LoginScreenProps {
  oIconPress?: () => void;
  handleSubmitLogin: () => void;
  icon?: ReactNode;
  control: Control<FieldValues, any> | undefined;
  hidePassword: boolean;
  validateEmailField?: (value: string) => any;
  validatePasswordField: (value: string) => any;
}

export const SignupView = ({
  control,
  hidePassword,
  oIconPress,
  handleSubmitLogin,
  validatePasswordField,
  validateEmailField,
}: LoginScreenProps) => {
  return (
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
          label={"E-mail"}
          control={control}
          name={"e-mail"}
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
          validateFailMessage="A senha de conter pelo menos 8 caracteres, letras maiúsculas e minúsculas e caracteres especiais."
          validateField={validatePasswordField}
          placeholder="Digite sua senha"
          icon={<ClosedEye width={25} height={35} fill={"#11264E"} />}
          isRequired
        />
        <GenericButton title="Criar conta" onPressButton={handleSubmitLogin} />
      </S.Content>
    </S.Container>
  );
};
