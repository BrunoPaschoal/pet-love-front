import * as S from "./style";
import theme from "../../themes/index";
import { ReactNode } from "react";
import { TextInputMaskTypeProp } from "react-native-masked-text";
import { KeyboardTypeOptions } from "react-native";

interface GenericTextInputProps {
  label: string;
  icon?: ReactNode;
  onIconPress?: () => void;
  isRequired?: boolean;
  hideInputValue?: boolean;
  containerWidth?: number;
  errorMessage?: string;
  value: string;
  onChange: ((text: string) => void) | undefined;
  mask?: TextInputMaskTypeProp;
  keyboardType?: KeyboardTypeOptions | undefined;
  containerMarginRight?: number;
  isDisable?: boolean;
  placeholder?: string;
}

export const InputTextComponent = ({
  label,
  icon,
  onIconPress,
  hideInputValue,
  containerWidth,
  containerMarginRight,
  value,
  onChange,
  errorMessage,
  keyboardType,
  mask,
  isDisable,
  placeholder,
  isRequired,
}: GenericTextInputProps) => {
  const baseInputProps = {
    selectionColor: theme["defaultAppTheme"].colors.gray_02,
    placeholderTextColor: theme["defaultAppTheme"].colors.placeholder,
    secureTextEntry: hideInputValue,
    onChangeText: onChange,
    value: value,
    editable: !isDisable,
    placeholder: placeholder,
    keyboardType: keyboardType,
  };

  return (
    <S.Container
      containerWidth={containerWidth}
      containerMarginRight={containerMarginRight}
    >
      <S.InputLabel isDisable={isDisable}>{`${label}${
        isRequired ? "*" : ""
      }`}</S.InputLabel>
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
