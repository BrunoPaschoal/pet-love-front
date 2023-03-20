import * as S from "./style";
import theme from "../../themes/index";
import { ReactNode } from "react";
import { DefaultTheme, StyledComponent } from "styled-components";
import { TextInput } from "react-native";
import { TextInputMaskTypeProp } from "react-native-masked-text";

interface GenericTextInputProps {
  label: string;
  icon?: ReactNode;
  onIconPress?: () => void;
  hideInputValue?: boolean;
  errorMessage?: string;
  value: string;
  onChange: ((text: string) => void) | undefined;
  mask?: TextInputMaskTypeProp;
}

export const InputTextComponent = ({
  label,
  icon,
  onIconPress,
  hideInputValue,
  value,
  onChange,
  errorMessage,
  mask,
}: GenericTextInputProps) => {
  const baseInputProps = {
    selectionColor: theme["defaultAppTheme"].colors.gray_02,
    secureTextEntry: hideInputValue,
    onChangeText: onChange,
    value: value,
  };

  return (
    <S.Container>
      <S.InputLabel>{label}</S.InputLabel>
      <S.InputContainer>
        {!mask && <S.TextInput {...baseInputProps} />}
        {mask && <S.MaskedTextInput {...baseInputProps} type={mask} />}
        {icon && (
          <S.IconContainer onPress={() => (onIconPress ? onIconPress() : null)}>
            {icon}
          </S.IconContainer>
        )}
      </S.InputContainer>
      {errorMessage ? <S.TextError>{errorMessage}</S.TextError> : null}
    </S.Container>
  );
};
