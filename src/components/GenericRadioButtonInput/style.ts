import { TextInputMask } from "react-native-masked-text";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

export const RadioCircle = styled.View`
  ${({ theme: { colors, fonts } }) => css`
    margin-right: 10px;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border: solid 1px ${colors.gray_02};
    border-radius: 25px;
  `}
`;

export const RadioInnerCircle = styled.View`
  ${({ theme: { colors, fonts } }) => css`
    width: 15px;
    height: 15px;
    background-color: ${colors.secondary};
    border-radius: 25px;
  `}
`;

export const OptionTitle = styled.Text`
  ${({ theme: { colors, fonts, fontSizes } }) => css`
    font-family: ${fonts.PoppinsMedium};
    font-size: ${fontSizes.p2};
    color: ${colors.tertiary};
  `}
`;

// RADIO BUTTON LIST
export const RadioListContainer = styled.View`
  flex-direction: row;
`;
