import * as S from "./style";
import theme from "../../themes/index";
import { ReactNode } from "react";

interface GenericTextInputProps {
  label: string;
  icon?: ReactNode;
  onIconPress?: () => void;
  hideInputValue?: boolean;
  errorMessage?: string;
  value: string;
  onChange: ((text: string) => void) | undefined;
}

export const InputTextComponent = ({
  label,
  icon,
  onIconPress,
  hideInputValue,
  value,
  onChange,
  errorMessage,
}: GenericTextInputProps) => {
  return (
    <S.Container>
      <S.InputLabel>{label}</S.InputLabel>
      <S.InputContainer>
        <S.TextInput
          selectionColor={theme["defaultAppTheme"].colors.gray_02}
          secureTextEntry={hideInputValue}
          onChangeText={onChange}
          value={value}
        />
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
