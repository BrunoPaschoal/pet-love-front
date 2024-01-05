import { TextInputMask } from "react-native-masked-text";
import styled, { css } from "styled-components/native";

interface ContainerProps {
  containerWidth?: number;
  containerMarginRight?: number;
}

export const Container = styled.View<ContainerProps>`
  ${({ theme: { margins }, containerWidth, containerMarginRight }) => css`
    width: ${containerWidth ? `${containerWidth}px` : "100%"};
    margin-bottom: ${margins.marginBetweenInputs};
    margin-right: ${containerMarginRight ? `${containerMarginRight}px` : 0};
  `}
`;

interface InputLabelProps {
  isDisable?: boolean;
}

export const InputLabel = styled.Text<InputLabelProps>`
  ${({ theme: { colors, fonts }, isDisable }) => css`
    font-family: ${fonts.PoppinsMedium};
    color: ${isDisable ? colors.gray_02 : colors.gray_04};
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
`;

export const TextError = styled.Text`
  ${({ theme: { fonts, fontSizes, colors } }) => css`
    font-size: ${fontSizes.p4}
    font-family: ${fonts.PoppinsMedium};
    color: ${colors.failure};
  `}
`;
