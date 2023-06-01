import { TextInputMask } from "react-native-masked-text";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme: { margins } }) => css`
    width: 100%;
    margin-bottom: ${margins.marginBetweenInputs};
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

export const InputContainer = styled.TouchableOpacity`
  ${({ theme: { colors } }) => css`
    width: 100%;
    flex-direction: row;
    background-color: ${colors.gray_01};
    border-radius: 8px;
    overflow: hidden;
  `}
`;

export const Placeholder = styled.Text`
  ${({ theme: { fonts, fontSizes, colors } }) => css`
    font-size: ${fontSizes.p2}
    font-family: ${fonts.PoppinsRegular};
    color: ${colors.placeholder};
    margin-left: 20px;
  `}
`;

// List Items Style---------------
export const ListItemsContainer = styled.View`
  ${({ theme: { colors } }) => css`
    position: absolute;
    top: 80px;
    width: 100%;
    max-height: 170px;
    border-radius: 8px;
    padding-top: 5px;
    overflow: hidden;
    background-color: ${colors.gray_01};
    border: solid 1px #e7e7e7;
    z-index: 2;
  `}
`;

export const RenderItemContainer = styled.View`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.gray_01};
    width: 100%;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 10px;
    padding-right: 10px;
    border-bottom-color: #e7e7e7;
    border-bottom-width: 1px;
  `}
`;

export const RenderItemLabel = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-family: ${fonts.PoppinsMedium};
    color: ${colors.gray_04};
    margin-bottom: 3px;
    font-size: 14px;
  `}
`;
export const ValueSelectedContainer = styled.View`
  ${({ theme: { fonts } }) => css`
    flex: 1;
    flex-direction: row;
    height: 50px;
    align-items: center;
    font-family: ${fonts.PoppinsRegular};
  `}
`;

export const Badge = styled.View`
  ${({ theme: { colors } }) => css`
    justify-content: center;
    align-items: center;
    background-color: #e4e4e4;
    border-radius: 5px;
    margin-left: 10px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 2px;
    padding-bottom: 2px;
  `}
`;

export const SeletedItemLabel = styled.Text`
  ${({ theme: { fonts, fontSizes, colors } }) => css`
    font-size: ${fontSizes.p2}
    font-family: ${fonts.PoppinsMedium};
    color: ${colors.gray_05};
  `}
`;

//--------------------------------
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
