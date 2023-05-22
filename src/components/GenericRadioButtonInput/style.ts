import styled, { css } from "styled-components/native";

export const OptionItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;

export const RadioCircle = styled.View`
  ${({ theme: { colors } }) => css`
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
  ${({ theme: { colors } }) => css`
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
export const Container = styled.View`
  ${({ theme: { margins } }) => css`
    margin-bottom: ${margins.marginBetweenInputs};
  `}
`;
export const RadioListContainer = styled.View`
  flex-direction: row;
`;

interface InputLabelProps {
  isDisable?: boolean;
}

export const LabelContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const InputLabel = styled.Text<InputLabelProps>`
  ${({ theme: { colors, fonts }, isDisable }) => css`
    font-family: ${fonts.PoppinsMedium};
    color: ${isDisable ? colors.gray_02 : colors.gray_04};
    margin-bottom: 3px;
    font-size: 14px;
  `}
`;

export const TextError = styled.Text`
  ${({ theme: { fonts, fontSizes, colors } }) => css`
    margin-top: 5px;
    font-size: ${fontSizes.p4}
    font-family: ${fonts.PoppinsMedium};
    color: ${colors.failure};
  `}
`;
