import * as S from "./style";
import { GenericButton } from "./../../../../components/GenericButton";
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
}

export const LoginScreen = ({
  control,
  hidePassword,
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
          placeholder="Digite sua senha"
          icon={<ClosedEye width={25} height={35} fill={"#11264E"} />}
          isRequired
        />
        <GenericButton title="Login" onPressButton={handleSubmitLogin} />
      </S.Content>
    </S.Container>
  );
};
