import { TextInputMask } from "react-native-masked-text";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;

export const InputLabel = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.PoppinsMedium};
    color: ${colors.gray_04};
    margin-bottom: 3px;
    font-size: 14px;
  `}
`;

export const InputContainer = styled.View`
  ${({ theme: { colors } }) => css`
    width: 100%;
    flex-direction: row;
    background-color: ${colors.gray_01};
    border-radius: 8px;
    overflow: hidden;
  `}
`;

export const TextInput = styled.TextInput`
  ${({ theme: { fonts } }) => css`
    flex: 1;
    height: 50px;
    padding-left: 20px;
    font-family: ${fonts.PoppinsRegular};
  `}
`;

export const MaskedTextInput = styled(TextInputMask)`
  ${({ theme: { fonts } }) => css`
    flex: 1;
    height: 50px;
    padding-left: 20px;
    font-family: ${fonts.PoppinsRegular};
  `}
`;

export const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border: solid red 1px;
`;

export const TextError = styled.Text`
  color: red;
`;
