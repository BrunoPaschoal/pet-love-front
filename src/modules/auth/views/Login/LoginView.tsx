import * as S from "./style";
import { GenericButton } from "./../../../../components/GenericButton";
import { GenericTextInput } from "../../../../components/GenericTextInput";
import { Control, FieldValues } from "react-hook-form";
import { ReactNode } from "react";

interface LoginScreenProps {
  oIconPress?: () => void;
  handleSubmitLogin: () => void;
  icon?: ReactNode;
  control: Control<FieldValues, any> | undefined;
  hidePassword: boolean;
}

export const LoginScreen = ({
  control,
  hidePassword,
  oIconPress,
  handleSubmitLogin,
}: LoginScreenProps) => {
  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <S.Content>
        <GenericTextInput
          label={"E-mail"}
          control={control}
          name={"e-mail"}
          isRequired
        />
        <GenericTextInput
          label={"Senha"}
          control={control}
          name={"password"}
          hideInputValue={hidePassword}
          onIconPress={oIconPress}
        />
        <GenericButton title="Login" onPressButton={handleSubmitLogin} />
      </S.Content>
    </S.Container>
  );
};
